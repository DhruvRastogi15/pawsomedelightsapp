import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

/**
 * CREATE USER
 */
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const user = await User.create(body);
  return NextResponse.json(user, { status: 201 });
}

/**
 * READ USERS
 */
export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}

/**
 * UPDATE USER
 */
export async function PUT(req: Request) {
  await connectDB();
  const { id, ...data } = await req.json();

  await User.findByIdAndUpdate(id, data);
  return NextResponse.json({ message: "User updated" });
}

/**
 * DELETE USER
 */
export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();

  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" });
}
