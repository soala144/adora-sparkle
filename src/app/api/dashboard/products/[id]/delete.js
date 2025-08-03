// DELETE /api/dashboard/products/[id]/delete
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id;
  // TODO: Delete product from DB using id
  // Example: await db.products.delete(id);
  return NextResponse.json({
    success: true,
    message: `Product ${id} deleted.`,
  });
}
