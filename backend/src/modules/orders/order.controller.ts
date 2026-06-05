import type { RequestHandler } from "express";

import { AppError } from "../../common/errors/AppError";
import { HTTP_STATUS } from "../../common/errors/errorCodes";
import { sendSuccess } from "../../common/utils/response";
import * as orderService from "./order.service";
import type { CustomerOrderListQuery } from "./order.validation";

const getUserIdOrThrow = (reqUserId?: string): string => {
  if (!reqUserId) {
    throw new AppError("Authentication required", HTTP_STATUS.UNAUTHORIZED);
  }

  return reqUserId;
};

export const listMyOrders: RequestHandler = async (req, res, next) => {
  try {
    const userId = getUserIdOrThrow(req.user?.sub);
    const result = await orderService.listMyOrders(userId, req.query as unknown as CustomerOrderListQuery);

    sendSuccess(res, {
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyOrder: RequestHandler = async (req, res, next) => {
  try {
    const userId = getUserIdOrThrow(req.user?.sub);
    const order = await orderService.getMyOrder(userId, req.params.id);

    sendSuccess(res, {
      message: "OK",
      data: {
        order,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const cancelMyOrder: RequestHandler = async (req, res, next) => {
  try {
    const userId = getUserIdOrThrow(req.user?.sub);
    const order = await orderService.cancelMyOrder(userId, req.params.id);

    sendSuccess(res, {
      message: "Order cancelled",
      data: {
        order,
      },
    });
  } catch (error) {
    next(error);
  }
};
