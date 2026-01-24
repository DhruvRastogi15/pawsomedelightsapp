import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

/**
 * UPDATE product
 */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    verifyAuth(req as any);
    await connectDB();

    const body = await req.json();

    const product = await Product.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}

/**
 * DELETE product
 */
export async function DELETE(
  req: Request,
  { params }: any
) {
  try {
    verifyAuth(req as any);
    await connectDB();

    const { id } = params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ message: "Product deleted" });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
