import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { id }: { id: number } = await req.json();

    await prisma.products.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Product Deleted" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}