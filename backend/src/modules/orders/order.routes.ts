import { Router } from "express";

import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { validate } from "../../common/middlewares/validate.middleware";
import * as orderController from "./order.controller";
import { customerOrderListQuerySchema, orderIdParamsSchema } from "./order.validation";

const router = Router();

router.use(authMiddleware);

router.get("/me", validate({ query: customerOrderListQuerySchema }), orderController.listMyOrders);
router.get("/me/:id", validate({ params: orderIdParamsSchema }), orderController.getMyOrder);
router.post("/:id/cancel", validate({ params: orderIdParamsSchema }), orderController.cancelMyOrder);

export default router;
