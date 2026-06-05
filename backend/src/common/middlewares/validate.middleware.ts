import type { RequestHandler } from "express";
import { ZodError, type ZodSchema } from "zod";

import { AppError } from "../errors/AppError";
import { HTTP_STATUS } from "../errors/errorCodes";

type ValidationSchemas = {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
};

const formatZodErrors = (error: ZodError) =>
  error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));

export const validate = (schemas: ValidationSchemas): RequestHandler => (req, _res, next) => {
  try {
    if (schemas.body) {
      req.body = schemas.body.parse(req.body);
    }

    if (schemas.query) {
      req.query = schemas.query.parse(req.query) as typeof req.query;
    }

    if (schemas.params) {
      req.params = schemas.params.parse(req.params) as typeof req.params;
    }

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      next(new AppError("Validation error", HTTP_STATUS.UNPROCESSABLE_ENTITY, formatZodErrors(error)));
      return;
    }

    next(error);
  }
};
