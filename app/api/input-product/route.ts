import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { product_name, stock, price } = await req.json();
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id");

    if (!product_name || !stock || !price) {
      return NextResponse.json(
        { message: "Incomplete data" },
        { status: 400 }
      );
    }

    if (stock < 1) {
      return NextResponse.json(
        { message: "Must fill the stock" },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const existingProduct = await prisma.products.findFirst({
      where: { product_name },
    });

    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already exist" },
        { status: 409 }
      );
    }

    await prisma.products.create({
      data: {
        user_id: Number(userId.value),
        product_name,
        stock: Number(stock),
        price: Number(price),
      },
    });

    return NextResponse.json(
      { message: "Input Product Successfully" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}