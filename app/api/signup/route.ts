import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { signupSchema } from "@/lib/validators/signupSchema";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const validatedData = signupSchema.parse(body);

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await User.create({
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      dob: validatedData.dob,
      email: validatedData.email.toLowerCase(),
      mobile: validatedData.mobile,
      acceptTerms: validatedData.acceptTerms,
      password: hashedPassword, // ✅ GUARANTEED
    });

    return NextResponse.json(
      { message: "Signup successful", userId: user._id },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
