import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function verifyAuth(req: NextRequest) {
  const guestUser =
    req.headers.get("guestuser") === "true"; // 👈 lowercase

  if (guestUser) {
    return { guestUser: true };
  }

  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authorization token missing");
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET!);

  return { guestUser: false, user: decoded };
}
