import type { User } from "@prisma/client";
import { UserRole, UserStatus } from "@prisma/client";

import { AppError } from "../../common/errors/AppError";
import { HTTP_STATUS } from "../../common/errors/errorCodes";
import { comparePassword, hashPassword } from "../../common/utils/hash";
import { signAccessToken } from "../../common/utils/jwt";
import { prisma } from "../../config/prisma";
import type { AuthResponse, AuthUserDto } from "./auth.types";
import type { LoginInput, RegisterInput } from "./auth.validation";

const toAuthUserDto = (user: User): AuthUserDto => ({
  id: user.id,
  fullName: user.fullName,
  email: user.email,
  phone: user.phone,
  role: user.role,
  status: user.status,
  emailVerified: user.emailVerified,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const createAuthResponse = (user: User): AuthResponse => ({
  user: toAuthUserDto(user),
  accessToken: signAccessToken({
    sub: user.id,
    email: user.email,
    role: user.role,
  }),
});

export const register = async (input: RegisterInput): Promise<AuthResponse> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (existingUser) {
    throw new AppError("Email already exists", HTTP_STATUS.CONFLICT);
  }

  const passwordHash = await hashPassword(input.password);

  const user = await prisma.user.create({
    data: {
      fullName: input.fullName,
      email: input.email,
      phone: input.phone,
      passwordHash,
      role: UserRole.CUSTOMER,
      status: UserStatus.ACTIVE,
    },
  });

  return createAuthResponse(user);
};

export const login = async (input: LoginInput): Promise<AuthResponse> => {
  const user = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
  }

  if (user.status !== UserStatus.ACTIVE) {
    throw new AppError("Account is not active", HTTP_STATUS.FORBIDDEN);
  }

  const passwordMatches = await comparePassword(input.password, user.passwordHash);

  if (!passwordMatches) {
    throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
  }

  return createAuthResponse(user);
};

export const getMe = async (userId: string): Promise<AuthUserDto> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", HTTP_STATUS.NOT_FOUND);
  }

  if (user.status !== UserStatus.ACTIVE) {
    throw new AppError("Account is not active", HTTP_STATUS.FORBIDDEN);
  }

  return toAuthUserDto(user);
};
