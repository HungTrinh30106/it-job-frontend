import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/company-manage/:path*", "/user-manage/:path*"],
};
