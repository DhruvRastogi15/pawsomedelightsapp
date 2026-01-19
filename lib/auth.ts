import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function verifyAuth(req: NextRequest) {
  // 1. Check guest user
  const guestUser =
    req.headers.get("guestuser") === "true";

  if (guestUser) {
    return { isGuest: true };
  }

  // 2. Check Authorization header
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authorization token missing");
  }

  const token = authHeader.split(" ")[1];

  // 3. Verify JWT
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);

  return { isGuest: false, user: decoded };
}
