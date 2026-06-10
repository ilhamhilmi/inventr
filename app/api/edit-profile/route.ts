import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {
        const cookieStore = await cookies()
        const userId = cookieStore.get("user_id")

        if (!userId) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            )
        }

        const [rows]: any = await db.query(
            "SELECT username, password FROM users WHERE id = ?",
            [userId.value]
        )

        if (rows.length === 0) {
            return NextResponse.json(
                { message: "Account not found" },
                { status: 404 }
            )
        }

        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json(
                { message: "Incomplete data" },
                { status: 400 }
            );
        }

        await db.query(
            "UPDATE users SET username = ?, password = ? WHERE id = ?",
            [username, password, userId.value]
        )

        return NextResponse.json({
            success: true,
            message: "Account updated"
        })


    } catch (error) {
        return NextResponse.json(
            { message: "Server Error" },
            { status: 500 }
        )
    }
}
