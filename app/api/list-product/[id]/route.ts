import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
    try {
        const [rows]: any = await db.query(
            "SELECT product_name, stock, price FROM products WHERE id = ?",
            [params.id]
        )

        const product = rows[0]

        if(product === undefined){
            return NextResponse.json(
                {message: "Produk tidak ada"},
                {status: 404}
            )
        }

        return NextResponse.json({
            product_name: product.product_name,
            stock: product.stock,
            price: product.price
        })
    } catch(error){
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        )
    }
}