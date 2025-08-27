import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db/prisma";

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();

    // Test a simple query
    const productCount = await prisma.product.count();

    await prisma.$disconnect();

    return NextResponse.json({
      status: "healthy",
      database: "connected",
      productCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("❌ Health check failed:", error);

    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error("❌ Failed to disconnect from database:", disconnectError);
    }

    return NextResponse.json(
      {
        status: "unhealthy",
        database: "disconnected",
        error: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}





