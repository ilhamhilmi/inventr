import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { product_name, stock, price } = await req.json();
        const cookieStore = await cookies();
        const userId = cookieStore.get("user_id");

        if (!product_name || !stock || !price) {
            return NextResponse.json(
                { message: "Data tidak lengkap" },
                { status: 400 }
            )
        }

        if (stock < 1) {
            return NextResponse.json(
                { message: "Stok tidak boleh kosong" },
                { status: 400 }
            )
        }

        if (!userId) {
            return NextResponse.json(
                { message: "Belum Login" },
                { status: 401 }
            )
        }

        const [rows]: any = await db.query(
            "SELECT * FROM products WHERE product_name = ?",
            [product_name]
        )

        if (rows.length > 0) {
            return NextResponse.json(
                { message: "Product Name sudah ada" },
                { status: 409 }
            )
        }

        await db.query(
            "INSERT INTO products(user_id, product_name, stock, price) VALUES (?, ?, ?, ?)",
            [userId.value, product_name, stock, price]
        )

        return NextResponse.json(
            { message: "Berhasil tambah Product" },
            { status: 201 }
        )


    } catch (error) {
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        )
    }
}