// DELETE /api/products/delete
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db/prisma";

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true, message: `Product ${id} deleted.` });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: `Failed to delete product: ${error.message}` }, { status: 500 });
  }
}
