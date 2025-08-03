// GET /api/products/[id]
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db/prisma";

export async function GET(request: Request) {
  // Next.js passes params via request.url
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
