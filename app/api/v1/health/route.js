import { NextResponse } from 'next/server';
import { API_VERSION } from '../../../../lib/api-version';

/**
 * GET /api/v1/health
 * Health check endpoint.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is healthy.',
    version: API_VERSION,
    timestamp: new Date().toISOString()
  });
}
