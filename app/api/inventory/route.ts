import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req:Request){
    try{
        const cookieStore = await cookies();
        const userId = cookieStore.get("user_id")?.value
        
        const [rows]: any = await db.query(
            "SELECT id, product_name, stock, price FROM products WHERE user_id = ?",
            [userId]
        )

        if(rows.length === 0){
            return NextResponse.json(
                {message: "Tidak ada data Product"},
                {status: 404}
            )
        }

        return NextResponse.json(rows)
    } catch(error){
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        )
    }
}