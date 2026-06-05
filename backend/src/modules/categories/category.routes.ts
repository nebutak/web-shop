import { Router } from "express";

import * as categoryController from "./category.controller";

const router = Router();

router.get("/", categoryController.listCategories);

export default router;
