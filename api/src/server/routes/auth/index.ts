import { Router } from "express";
import prisma from "../../../database";
import { jwtSign } from "../../common/jwt";

const authRouter = Router();

authRouter.post("/signup", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user.password !== password) {
      return res
        .status(400)
        .json({ message: "the email or password is invalid" });
    }
    const token = jwtSign({ id: user.id, role: user.role });
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
