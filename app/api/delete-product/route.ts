import { db } from "@/lib/db";
import { serializeUseCacheCacheStore } from "next/dist/server/resume-data-cache/cache-store";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const { id }: {id: number} = await req.json();

        const [rows] = await db.query(
            "DELETE FROM products WHERE id = ?",
            [id]
        )

        return NextResponse.json(
            {message: "Product Deleted"},
            {status: 200}
        )

    } catch(error){
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        )
    }
}