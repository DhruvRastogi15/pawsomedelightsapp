import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

/**
 * GET → Fetch 7 products
 */
export async function GET(req: NextRequest) {
  try {
    verifyAuth(req);
    await connectDB();

    const products = await Product.find().limit(7);

    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 401 }
    );
  }
}

/**
 * POST → Create new product
 */
export async function POST(req: NextRequest) {
  try {
    verifyAuth(req);
    await connectDB();

    const body = await req.json();

    const product = await Product.create(body);

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
