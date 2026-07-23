import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE() {
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

    // Delete all products belonging to the user first, then delete the user
    await prisma.products.deleteMany({
      where: { user_id: Number(userId.value) },
    });

    await prisma.users.delete({
      where: { id: Number(userId.value) },
    });

    const response = NextResponse.json({
      success: true,
      message: "Account Successfully Deleted",
    });

    response.cookies.delete("user_id");
    response.cookies.delete("user_role");

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}