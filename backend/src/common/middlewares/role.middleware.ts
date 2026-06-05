import type { UserRole } from "@prisma/client";
import type { RequestHandler } from "express";

import { AppError } from "../errors/AppError";
import { HTTP_STATUS } from "../errors/errorCodes";

export const requireRole =
  (...roles: UserRole[]): RequestHandler =>
  (req, _res, next) => {
    if (!req.user) {
      next(new AppError("Authentication required", HTTP_STATUS.UNAUTHORIZED));
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new AppError("Forbidden", HTTP_STATUS.FORBIDDEN));
      return;
    }

    next();
  };
