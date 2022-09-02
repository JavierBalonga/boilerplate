import { Router } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../../../database";
import getExamplesQuerySchema from "./schemas/getExamplesQuerySchema";
import createExampleSchema from "./schemas/createExampleSchema";
import updateExampleSchema from "./schemas/updateExampleSchema";
import examplesIdSchema from "./schemas/examplesIdSchema";
import { authMiddleware, autzMiddleware } from "../../middlewares/auth";

const examplesRouter = Router();

examplesRouter.get(
  "/",
  authMiddleware,
  autzMiddleware("ADMIN", "CLIENT"),
  async (req, res, next) => {
    // @ts-ignore
    console.log("req.user", req.user);
    try {
      const query = await getExamplesQuerySchema.validate(req.query);
      const where: Prisma.ExampleWhereInput = {
        name: {
          contains: query.search,
          mode: "insensitive",
        },
      };
      const [totalCount, data] = await Promise.all([
        prisma.example.count({ where: where }),
        prisma.example.findMany({
          where: where,
          orderBy: {
            [query.orderBy]: query.orderDirection,
          },
          skip: query.page * query.pageSize,
          take: query.pageSize,
        }),
      ]);
      return res.status(200).json({
        page: query.page,
        pageSize: query.pageSize,
        totalCount: totalCount,
        data: data,
      });
    } catch (error) {
      return next(error);
    }
  }
);

examplesRouter.post(
  "/",
  authMiddleware,
  autzMiddleware("ADMIN"),
  async (req, res, next) => {
    try {
      const attr = await createExampleSchema.validate(req.body);
      const example = await prisma.example.create({ data: attr });
      return res.status(201).json(example);
    } catch (error) {
      return next(error);
    }
  }
);

examplesRouter.put(
  "/",
  authMiddleware,
  autzMiddleware("ADMIN"),
  async (req, res, next) => {
    try {
      const { id, ...attr } = await updateExampleSchema.validate(req.body);
      const example = await prisma.example.update({
        where: { id: id },
        data: attr,
      });
      return res.status(200).json(example);
    } catch (error) {
      return next(error);
    }
  }
);

examplesRouter.delete(
  "/:id",
  authMiddleware,
  autzMiddleware("ADMIN"),
  async (req, res, next) => {
    try {
      const id = await examplesIdSchema.validate(req.params.id);
      const example = await prisma.example.delete({ where: { id: id } });
      return res.status(200).json(example);
    } catch (error) {
      return next(error);
    }
  }
);

export default examplesRouter;
