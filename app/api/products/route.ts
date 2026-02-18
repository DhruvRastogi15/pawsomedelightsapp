import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, guestUser, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

/**
 * GET → Fetch 7 products
 */
export async function GET(req: NextRequest) {
  try {
    verifyAuth(req);
    await connectDB();

    const products = await Product.find().limit(7);

    return NextResponse.json(products, {
      headers: corsHeaders,
    });
  } catch (error: any) {
    console.log("GET ERROR:", error);
    return NextResponse.json(
      { message: error.message },
      { status: 401 }
    );
  }
}

/**
 * POST → Create product
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
