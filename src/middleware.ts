import { NextRequest, NextResponse } from "next/server"
import { isLocale, localeForCountry } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split("/")[1]

  if (isLocale(segment)) {
    const headers = new Headers(request.headers)
    headers.set("x-novem-locale", segment)
    return NextResponse.next({ request: { headers } })
  }

  if (pathname !== "/" && pathname !== "/odoo" && pathname !== "/odoo/") {
    return NextResponse.next()
  }

  const preferred = request.cookies.get("novem_locale")?.value
  const locale = preferred && isLocale(preferred)
    ? preferred
    : localeForCountry(request.headers.get("x-vercel-ip-country"))
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : "/odoo"}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/", "/odoo", "/(sk|en|de)/:path*"],
}
