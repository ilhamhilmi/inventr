import { NextResponse } from "next/server";

export async function POST(){
    const response = NextResponse.json({
        success: true,
        message: "Logout Successfully",
    })

    response.cookies.delete("user_id");
    response.cookies.delete("user_role");
    
    return response
}