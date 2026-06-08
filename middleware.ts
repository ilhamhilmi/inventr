import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const userId = request.cookies.get("user_id")?.value

    const pathname = request.nextUrl.pathname

    // protect page
    const protectedRoutes = ["/inventory", "/user-profile", "/edit-profile", "/input-product"]
}