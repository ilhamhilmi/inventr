import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Incomplete data" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.users.findFirst({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username already exist" },
        { status: 409 }
      );
    }

    await prisma.users.create({
      data: {
        username,
        password,
      },
    });

    return NextResponse.json(
      { message: "Account Successfully Registered" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}