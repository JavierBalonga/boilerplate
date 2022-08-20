import { Router } from "express";

const rootRouter = Router();

rootRouter.get("/", (req, res, next) => {
  res.status(200).json({ status: "OK" });
});

export default rootRouter;
