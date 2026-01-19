import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { signupSchema } from "@/lib/validators/signupSchema";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate input
    const validatedData = signupSchema.parse(body);

    // Check existing user
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Save user
    const user = await User.create({
      ...validatedData,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Signup successful", userId: user._id },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
