import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { loginSchema } from "@/lib/validators/loginSchema";

export async function POST(req: Request) {
  try {
    console.log("👉 Login API hit");

    await connectDB();
    console.log("✅ DB connected");

    const body = await req.json();
    console.log("📦 Body:", body);

    const { identifier, password } = loginSchema.parse(body);
    console.log("✅ Validation passed");

    const isEmail = identifier.includes("@");

    const user = await User.findOne(
      isEmail
        ? { email: identifier.toLowerCase() }
        : { mobile: identifier }
    );

    console.log("👤 User:", user);

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.password) {
      throw new Error("Password missing in DB");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔐 Password match:", isMatch);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET missing");
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("🎫 Token generated");

    return NextResponse.json({
      message: "Login successful",
      token,
    });
  } catch (error: any) {
    console.error("❌ LOGIN ERROR:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
