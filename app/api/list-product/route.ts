import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const [rows]: any = await db.query(
            "SELECT product_name, stock, price FROM products"
        )

        if(rows.length === 0){
            return NextResponse.json(
                {message: "Tidak ada data produk"},
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