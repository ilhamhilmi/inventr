import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id");

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const existingUser = await prisma.users.findUnique({
      where: { id: Number(userId.value) },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "Account not found" },
        { status: 404 }
      );
    }

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Incomplete data" },
        { status: 400 }
      );
    }

    await prisma.users.update({
      where: { id: Number(userId.value) },
      data: {
        username,
        password,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Account updated",
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}