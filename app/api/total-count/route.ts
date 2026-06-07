import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const cookieStore = await cookies();
        const userId = cookieStore.get("user_id")?.value

        const [rows]: any = await db.query(
            "SELECT COUNT(*) AS total FROM products WHERE user_id = ?",
            [userId]
        )

        const total = rows[0].total

        return NextResponse.json({
            total
        })
    } catch(error){
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        )
    }
}