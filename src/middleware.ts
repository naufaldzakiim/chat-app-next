import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/chats") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/chats", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/chats", request.url));
  }

  return NextResponse.next();
}