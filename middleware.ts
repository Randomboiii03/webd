import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 100 // Maximum requests per window

// In-memory store for rate limiting (in production, use Redis or similar)
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>()

// Clean up the in-memory store periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of ipRequestCounts.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      ipRequestCounts.delete(ip)
    }
  }
}, RATE_LIMIT_WINDOW)

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get client IP address
  const ip = request.headers.get("x-forwarded-for") || "unknown"

  // Basic DDoS protection with rate limiting
  if (ip !== "unknown") {
    const now = Date.now()
    const requestData = ipRequestCounts.get(ip) || { count: 0, timestamp: now }

    // Reset count if window has passed
    if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
      requestData.count = 0
      requestData.timestamp = now
    }

    // Increment request count
    requestData.count++
    ipRequestCounts.set(ip, requestData)

    // If rate limit exceeded, return 429 Too Many Requests
    if (requestData.count > MAX_REQUESTS_PER_WINDOW) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "Retry-After": "60",
          "Content-Type": "text/plain",
        },
      })
    }
  }

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")

  // Add cache control for static assets
  const url = request.nextUrl.pathname
  if (url.startsWith("/static/") || url.includes(".")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}

