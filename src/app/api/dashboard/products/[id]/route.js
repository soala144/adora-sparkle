// GET: Get product, PATCH: Edit product, DELETE: Delete product
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  // TODO: Fetch product from DB using id
  // Example: const product = await db.products.findUnique({ where: { id } });
  return NextResponse.json({}); // Replace with real product
}

export async function PATCH(request, { params }) {
  const id = params.id;
  const body = await request.json();
  // TODO: Update product in DB using id and body
  // Example: await db.products.update({ where: { id }, data: body });
  return NextResponse.json({
    success: true,
    message: `Product ${id} updated.`,
  });
}

export async function DELETE(request, { params }) {
  const id = params.id;
  // TODO: Delete product from DB using id
  // Example: await db.products.delete({ where: { id } });
  return NextResponse.json({
    success: true,
    message: `Product ${id} deleted.`,
  });
}
