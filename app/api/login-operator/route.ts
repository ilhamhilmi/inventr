import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // validasi input
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username dan password wajib diisi!" },
        { status: 400 }
      );
    }

    // cek user
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    // user tidak ditemukan
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Username tidak ditemukan" },
        { status: 404 }
      );
    }

    const user = rows[0];

    // cek password
    if (password !== user.password) {
      return NextResponse.json(
        { message: "Password salah!" },
        { status: 401 }
      );
    }

    // login berhasil
    return NextResponse.json({
      success: true,
      message: "Login berhasil bang",
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}