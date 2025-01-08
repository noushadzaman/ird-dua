import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/category/1/1", req.url));
  }

  return NextResponse.next();
}
