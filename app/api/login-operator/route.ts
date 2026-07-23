import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username dan password wajib diisi!" },
        { status: 400 }
      );
    }

    const user = await prisma.users.findFirst({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Username not found" },
        { status: 404 }
      );
    }

    if (password !== user.password) {
      return NextResponse.json(
        { message: "Incorrect Password!" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successfully",
    });

    response.cookies.set("user_id", String(user.id), {
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}