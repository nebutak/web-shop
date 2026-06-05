import type { RequestHandler } from "express";

import { sendSuccess } from "../../common/utils/response";
import * as categoryService from "./category.service";

export const listCategories: RequestHandler = async (_req, res, next) => {
  try {
    const categories = await categoryService.listActiveCategories();

    sendSuccess(res, {
      message: "OK",
      data: {
        items: categories,
      },
    });
  } catch (error) {
    next(error);
  }
};
