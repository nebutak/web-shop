import { prisma } from "../../config/prisma";

export const listActiveCategories = async () =>
  prisma.category.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      imageUrl: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });
