import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
    try {
        // ini bikin variabel query SQL dulu
        const [rows]: any = await db.query(
            "SELECT product_name, stock, price FROM products WHERE id = ?",
            [params.id]
        )

        // hasil query baris 1 akan dioper ke product
        const product = rows[0]

        // conditional kalo productnya gaada
        if(product === undefined){
            return NextResponse.json(
                {message: "Produk tidak ada"},
                {status: 404}
            )
        }

        // dibalikin ke fe, product = hasil query .nama-field
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