import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const userId = request.cookies.get("user_id")?.value

    const pathname = request.nextUrl.pathname

    // protect page
    const protectedRoutes = [
        "/inventory", 
        "/user-profile", 
        "/edit-profile", 
        "/input-product",
        "/edit-product"
    ]

    // route auth
    const authRoutes = ["/login-operator", "/register-operator"]

    if(!userId && protectedRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/login-operator", request.url))
    }

    // ini kalo udah login
    if(userId && authRoutes.includes(pathname)){
        return NextResponse.redirect(new URL("/inventory", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/inventory",
        "/user-profile",
        "/edit-profile",
        "/input-product",
        "/login-operator",
        "/register-operator"
    ]
}