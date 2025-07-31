// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { listProducts, createProduct } from "@/../lib/db/queries";

export async function GET() {
  const products = await listProducts();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const created = await createProduct(body);
  return NextResponse.json(created);
}
