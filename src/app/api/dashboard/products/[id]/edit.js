// PATCH /api/dashboard/products/[id]/edit
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const id = params.id;
  const body = await request.json();
  // TODO: Update product in DB using id and body
  // Example: await db.products.update(id, body);
  return NextResponse.json({
    success: true,
    message: `Product ${id} updated.`,
  });
}
