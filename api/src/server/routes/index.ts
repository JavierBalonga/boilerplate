import { Router } from "express";
import examplesRouter from "./example";
import rootRouter from "./root";

const routes = Router();

routes.use("/example", examplesRouter);
routes.use("/", rootRouter);

export default routes;
