// DELETE /api/products/delete
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { id } = await request.json();
  // TODO: Delete product from DB using id
  // Example: await db.products.delete(id);
  return NextResponse.json({
    success: true,
    message: `Product ${id} deleted.`,
  });
}
