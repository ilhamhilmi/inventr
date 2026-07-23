import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  try {
    const { productName, stock, price } = await req.json();

    await prisma.products.update({
      where: { id: Number(params.id) },
      data: {
        product_name: productName,
        stock: Number(stock),
        price: Number(price),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product Updated",
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}