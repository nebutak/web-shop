import { Router } from "express";

import { validate } from "../../common/middlewares/validate.middleware";
import * as productController from "./product.controller";
import {
  adminProductListQuerySchema,
  createProductSchema,
  productIdParamsSchema,
  updateProductSchema,
} from "./product.validation";

const router = Router();

router.get("/", validate({ query: adminProductListQuerySchema }), productController.listAdminProducts);
router.post("/", validate({ body: createProductSchema }), productController.createProduct);
router.get("/:id", validate({ params: productIdParamsSchema }), productController.getAdminProductById);
router.patch("/:id", validate({ params: productIdParamsSchema, body: updateProductSchema }), productController.updateProduct);
router.delete("/:id", validate({ params: productIdParamsSchema }), productController.archiveProduct);

export default router;
