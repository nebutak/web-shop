import dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "test" | "production";

const parsePort = (value: string | undefined): number => {
  const port = Number(value ?? 4000);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer");
  }

  return port;
};

const parseNodeEnv = (value: string | undefined): NodeEnv => {
  const nodeEnv = value ?? "development";

  if (nodeEnv === "development" || nodeEnv === "test" || nodeEnv === "production") {
    return nodeEnv;
  }

  throw new Error("NODE_ENV must be development, test, or production");
};

export const env = Object.freeze({
  NODE_ENV: parseNodeEnv(process.env.NODE_ENV),
  PORT: parsePort(process.env.PORT),
  FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:3000",
  BACKEND_URL: process.env.BACKEND_URL ?? "http://localhost:4000",
  JWT_SECRET: process.env.JWT_SECRET ?? "change_this_secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? "1d",
  PAYMENT_RETURN_URL: process.env.PAYMENT_RETURN_URL ?? "http://localhost:3000/payment-result",
  PAYMENT_WEBHOOK_SECRET: process.env.PAYMENT_WEBHOOK_SECRET ?? "change_this_secret",
});
