import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {

    try {

        const cookieStore = await cookies();

        const userId = cookieStore.get("user_id")?.value;

        const { searchParams } = new URL(req.url);

        const search = searchParams.get("search") || "";

        let query = `
            SELECT id, product_name, stock, price
            FROM products
            WHERE user_id = ?
        `;

        let values: any[] = [userId];

        // kalau ada search
        if (search) {

            query += `
                AND product_name LIKE ?
            `;

            values.push(`%${search}%`);

        }

        // execute query
        const [rows]: any = await db.query(query, values);

        // kalau data kosong
        if (rows.length === 0) {

            return NextResponse.json(
                { message: "You don't have any product" },
                { status: 404 }
            );

        }

        // return data
        return NextResponse.json(rows);

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );

    }

}