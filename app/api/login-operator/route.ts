import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// POST itu buat send data ke database, dan harus request
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

    // user tidak ditemukan, ini length bukan index array ya bg
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Username not found" },
        { status: 404 }
      );
    }

    // ini pake index array, bukan length
    const user = rows[0];

    // cek password
    if (password !== user.password) {
      return NextResponse.json(
        { message: "Incorrect Password!" },
        { status: 401 }
      );
    }

    // login berhasil
    const response = NextResponse.json({
      success: true,
      message: "Login successfully",
    });

    response.cookies.set("user_id", String(user.id), {
      // path / artinya berlaku untuk seluruh page atau web user_id variable yg dibuat untuk memasukkan id dari database. max age itu lama cookie hidup dalam satuan DETIK.
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