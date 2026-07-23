import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  try {
    const product = await prisma.products.findUnique({
      where: { id: Number(params.id) },
      select: {
        product_name: true,
        stock: true,
        price: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      product_name: product.product_name,
      stock: product.stock,
      price: product.price,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}