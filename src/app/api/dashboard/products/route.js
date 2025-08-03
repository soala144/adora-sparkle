// GET: List all products, POST: Create new product
import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Fetch all products from DB
  // Example: const products = await db.products.findMany();
  return NextResponse.json([]); // Replace with real products
}

export async function POST(request) {
  const body = await request.json();
  // TODO: Create new product in DB
  // Example: const newProduct = await db.products.create(body);
  return NextResponse.json({ success: true, message: "Product created." });
}
