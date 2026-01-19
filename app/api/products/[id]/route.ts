import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

type Params = {
  params: {
    id: string;
  };
};

export async function PUT(
  req: NextRequest,
  context: Params
) {
  try {
    verifyAuth(req);
    await connectDB();

    const { id } = context.params;
    const body = await req.json();

    const product = await Product.findByIdAndUpdate(
      id,
      body,
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

export async function DELETE(
  req: NextRequest,
  context: Params
) {
  try {
    verifyAuth(req);
    await connectDB();

    const { id } = context.params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ message: "Product deleted" });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
