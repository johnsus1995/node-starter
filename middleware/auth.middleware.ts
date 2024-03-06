import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"] as string;
  if (token) {
    try {
      const authToken = token.split("Bearer ").at(1) as string;
      const res = jwt.verify(
        authToken,
        process.env.JWT_SECRET as string
      ) as any;

      const user = await User.findOne({ where: { id: res.id } });

      if (!user) {
        return res.status(404).json({ message: "invalid user" });
      }

      if (!user.isVerified) {
        return res.status(401).json({ message: "user not verified" });
      }

      req.user = res;
      next();
    } catch (error) {
      res.status(401).json({ message: "wrong auth token", error });
    }
  } else {
    return res.status(401).json({ message: "auth token missing" });
  }
}
