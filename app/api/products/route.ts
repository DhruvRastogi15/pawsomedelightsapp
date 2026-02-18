import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

/**
 * GET → Fetch 7 products
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, guest-user",
};


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}


export async function GET(req: NextRequest) {
  try {
    verifyAuth(req);
    await connectDB();

    // const products = await Product.find().limit(7);
    // console.log(products)

    // return NextResponse.json(products);
    const res = await fetch(
    `https://pawsomedelightsapp.vercel.app/api/products`,
    {
      headers: {
        "guestUser": "true",   // ✅ MUST MATCH
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
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
