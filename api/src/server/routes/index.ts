import { Router } from "express";
import authRouter from "./auth";
import examplesRouter from "./example";
import rootRouter from "./root";

const routes = Router();

routes.use("/example", examplesRouter);
routes.use("/auth", authRouter);
routes.use("/", rootRouter);

export default routes;
