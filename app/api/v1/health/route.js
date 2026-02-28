import { NextResponse } from 'next/server';
import { API_VERSION } from '@/lib/api-version';
import { withApiLayout } from '@/lib/route-layout';

const getHealth = withApiLayout('GET /api/v1/health', async () => {
  return NextResponse.json({
    success: true,
    message: 'API is healthy.',
    version: API_VERSION,
    timestamp: new Date().toISOString()
  });
});

export const GET = getHealth;
