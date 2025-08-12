import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        inStock: body.inStock, // <- Make sure this is sent in the request
        category: body.category,
        images: body.images,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    console.error("❌ Error creating product:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("🔍 Attempting to fetch products from database...");
    const products = await prisma.product.findMany();
    console.log(`✅ Successfully fetched ${products.length} products`);
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("❌ Error fetching products:", error);
    console.error("❌ Error details:", {
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
    return NextResponse.json(
      {
        error: "Failed to fetch products",
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
