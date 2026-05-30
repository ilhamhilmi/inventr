import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const {username, password} = await req.json();

        if(!username || !password){
            return NextResponse.json(
                {message: "Data tidak lengkap"},
                {status: 400}
            );
        }

        const [rows]: any = await db.query(
            "SELECT * FROM users WHERE username = ?", [username]
        );

        if(rows.length > 0){
            return NextResponse.json(
                {message: "Username sudah ada"},
                {status: 409}
            )
        }

        await db.query(
            "INSERT INTO users(username, password) VALUES (?, ?)", [username, password]
        )

        return NextResponse.json(
            {message: "Daftar Berhasil!"},
            {status: 201}
        )
    } catch(error){
        return NextResponse.json(
            {message: "Server Error"},
            {status: 500}
        )
    }
}