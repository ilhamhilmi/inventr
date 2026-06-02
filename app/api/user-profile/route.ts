import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const cookieStore = await cookies();
        const userId = cookieStore.get("user_id")

        // ! = falsy
        if (!userId) {
            return NextResponse.json(
                { message: "Belum Login" },
                { status: 401 }
            )
        }

        const [rows]: any = await db.query(
            "SELECT username, password FROM users WHERE id = ?",
            [userId.value]
        )

        if (rows.length === 0) {
            return NextResponse.json(
                { message: "Akun tidak ditemukan" },
                { status: 404 }
            )
        }

        const user = rows[0]

        return NextResponse.json({
            id: user.id,
            username: user.username,
            password: user.password
        })

    } catch (error) {
        return NextResponse.json(
            { message: "Server Error" },
            { status: 500 }
        )
    }
}