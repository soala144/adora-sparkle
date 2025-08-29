// app/api/orders/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db/prisma"; // adjust path as needed

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      items,
      fullName,
      email,
      phone,
      street,
      city,
      deliveryZone,
      totalAmount,
    } = body;

    const order = await prisma.order.create({
      data: {
        fullName,
        email,
        phone,
        street,
        city,
        deliveryZone,
        totalAmount,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
