import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const where: any = {
      user_id: Number(userId),
    };

    if (search) {
      where.product_name = {
        contains: search,
      };
    }

    const products = await prisma.products.findMany({
      where,
      select: {
        id: true,
        product_name: true,
        stock: true,
        price: true,
      },
    });

    if (products.length === 0) {
      return NextResponse.json(
        { message: "You don't have any product" },
        { status: 404 }
      );
    }

    return NextResponse.json(products);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}