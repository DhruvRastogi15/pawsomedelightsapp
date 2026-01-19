import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    const auth = verifyAuth(req); // 🔥 ONE LINE PROTECTION

    await connectDB();

    const users = await User.find();

    return NextResponse.json({
      users,
      accessType: auth.isGuest ? "guest" : "authenticated",
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 401 }
    );
  }
}
