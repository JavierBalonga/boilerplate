import { Role } from "@prisma/client";
import { Handler } from "express";
import jwt from "jsonwebtoken";
import env from "../../../env";

const { JWT_SECRET } = env;

interface Token {
  id: number;
  iat: number;
  role: Role;
}

function authMiddleware(...allowedRoles: Role[]) {
  const middleware: Handler = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
      return res
        .status(401)
        .json({ message: "'authorization' header not found" });
    }
    const [tokenType, token] = header.split(" ");
    try {
      const tokenPayload = jwt.verify(token, JWT_SECRET) as Token;
      const hasAllowedRole = allowedRoles.includes(tokenPayload.role);
      if (!hasAllowedRole) {
        return res
          .status(401)
          .json({ message: "the user does not have an allowed role" });
      }
      Object.assign(req, { user: tokenPayload });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }

    next();
  };
  return middleware;
}

export default authMiddleware;
