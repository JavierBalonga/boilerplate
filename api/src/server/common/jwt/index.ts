import { Role } from "@prisma/client";
import jwt from "jsonwebtoken";
import env from "../../../env";

const { JWT_SECRET } = env;

export interface PayladInput {
  id: number;
  role: Role;
}

export interface TokenPaylad extends PayladInput {
  iat: number;
}

export function jwtVerify(token: string) {
  return jwt.verify(token, JWT_SECRET) as TokenPaylad;
}

export function jwtSign(payload: PayladInput) {
  return jwt.sign(payload, JWT_SECRET);
}
