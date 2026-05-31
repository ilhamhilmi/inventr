import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE() {
    try {
        const cookieStore = await cookies()
        const userId = cookieStore.get("user_id")

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

        const [result]: any = await db.query(
            "DELETE FROM users WHERE id = ?",
            [userId.value]
        )

        const response = NextResponse.json({
            success: true,
            message: "Akun dihapus",
        })

        response.cookies.delete("user_id");
        response.cookies.delete("user_role");

        return response
    } catch(error){
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        )
    }
}
