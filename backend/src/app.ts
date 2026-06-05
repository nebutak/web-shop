import cors from "cors";
import express from "express";
import helmet from "helmet";

import { corsOptions } from "./config/cors";
import { errorMiddleware, notFoundMiddleware } from "./common/middlewares/error.middleware";
import { requestLogger } from "./common/middlewares/request-logger.middleware";
import adminRoutes from "./modules/admin/admin.routes";
import authRoutes from "./modules/auth/auth.routes";
import healthRoutes from "./modules/health/health.routes";

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/health", healthRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
