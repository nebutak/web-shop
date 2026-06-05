import { Router } from "express";
import rateLimit from "express-rate-limit";

import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { validate } from "../../common/middlewares/validate.middleware";
import * as authController from "./auth.controller";
import { loginSchema, registerSchema } from "./auth.validation";

const router = Router();

const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts, please try again later",
  },
});

router.post("/register", authRateLimit, validate({ body: registerSchema }), authController.register);
router.post("/login", authRateLimit, validate({ body: loginSchema }), authController.login);
router.get("/me", authMiddleware, authController.me);
router.post("/logout", authMiddleware, authController.logout);

export default router;
