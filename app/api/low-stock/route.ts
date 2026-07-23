import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;

    const count = await prisma.products.count({
      where: {
        user_id: Number(userId),
        stock: {
          lte: 5,
        },
      },
    });

    return NextResponse.json({
      lowStock: count,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}