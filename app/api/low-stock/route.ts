import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies()
        const userId = cookieStore.get("user_id")?.value

        const [rows]: any = await db.query(
            "SELECT COUNT(*) AS low_stock FROM products WHERE user_id = ? AND stock <= 5",
            [userId]
        )

        const lowStock = rows[0].low_stock

        return NextResponse.json({
            lowStock
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        )
    }
}