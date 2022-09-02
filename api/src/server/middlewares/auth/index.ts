import { Role } from "@prisma/client";
import { Handler } from "express";
import { jwtVerify, TokenPaylad } from "../../common/jwt";

export const authMiddleware: Handler = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res
      .status(401)
      .json({ message: "'authorization' header not found" });
  }
  const [tokenType, token] = header.split(" ");
  if (tokenType !== "Bearer") {
    return res
      .status(401)
      .json({ message: "'Bearer' is the only allowed tokenType" });
  }
  const tokenPayload = jwtVerify(token);
  try {
    Object.assign(req, { user: tokenPayload });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  next();
};

export function autzMiddleware(...allowedRoles: Role[]) {
  const middleware: Handler = (req, res, next) => {
    const tokenPayload = req.user as TokenPaylad;
    if (!tokenPayload) {
      return res
        .status(500)
        .json({ message: `'autzMiddleware' should be after 'authMiddleware'` });
    }
    const hasAllowedRole = allowedRoles.includes(tokenPayload.role);
    if (!hasAllowedRole) {
      return res
        .status(401)
        .json({ message: "the user does not have an allowed role" });
    }
    next();
  };
  return middleware;
}
