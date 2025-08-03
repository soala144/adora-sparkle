// PATCH /api/products/edit
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db/prisma";

export async function PATCH(request: Request) {
  const { id, ...updates } = await request.json();
  try {
    const updated = await prisma.product.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json({
      success: true,
      message: `Product ${id} updated.`,
      product: updated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: `Failed to update product: ${error.message}` },
      { status: 500 }
    );
  }
}
