import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
    try {
        const { productName, stock, price } = await req.json()
        await db.query(
            "UPDATE products SET product_name = ?, stock = ?, price = ? WHERE id = ?",
            [productName, stock, price, params.id]
        )

        return NextResponse.json({
            success: true,
            message: "Produk berhasil di update"
        })
        
    } catch (error) {
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        )
    }
}