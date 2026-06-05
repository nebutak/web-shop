import { Router } from "express";

import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { requireRole } from "../../common/middlewares/role.middleware";
import { sendSuccess } from "../../common/utils/response";

const router = Router();

router.get("/access-check", authMiddleware, requireRole("ADMIN"), (_req, res) => {
  sendSuccess(res, {
    message: "OK",
    data: {
      access: "admin",
    },
  });
});

export default router;
