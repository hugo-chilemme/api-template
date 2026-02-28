import { NextResponse } from 'next/server';
import { API_VERSION, API_VERSION_HEADER } from './lib/api-version';

/**
 * Global middleware for all API routes.
 *
 * Responsibilities:
 * - Adds version header to each API response.
 * - Blocks unsupported version requests.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const requestedVersion = request.headers.get(API_VERSION_HEADER);

  if (requestedVersion && requestedVersion !== API_VERSION) {
    return NextResponse.json(
      {
        success: false,
        error: 'Unsupported API version.',
        supportedVersion: API_VERSION
      },
      {
        status: 400,
        headers: {
          [API_VERSION_HEADER]: API_VERSION
        }
      }
    );
  }

  const response = NextResponse.next();
  response.headers.set(API_VERSION_HEADER, API_VERSION);
  return response;
}

export const config = {
  matcher: ['/api/:path*']
};
