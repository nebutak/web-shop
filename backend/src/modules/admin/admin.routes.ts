import { UserRole } from "@prisma/client";
import { Router } from "express";

import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { requireRole } from "../../common/middlewares/role.middleware";
import { sendSuccess } from "../../common/utils/response";
import productAdminRoutes from "../products/product.admin.routes";

const router = Router();

router.use(authMiddleware, requireRole(UserRole.ADMIN));

router.get("/access-check", (_req, res) => {
  sendSuccess(res, {
    message: "OK",
    data: {
      access: "admin",
    },
  });
});

router.use("/products", productAdminRoutes);

export default router;
