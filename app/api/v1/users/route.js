import { NextResponse } from 'next/server';
import { withApiLayout } from '@/lib/route-layout';

const users = [
  { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: '2', name: 'Alan Turing', email: 'alan@example.com' }
];

export const GET = withApiLayout('GET /api/v1/users', async () => {
  return NextResponse.json({
    success: true,
    data: users
  });
});

export const POST = withApiLayout('POST /api/v1/users', async (request) => {
  const body = await request.json();

  if (!body?.name || !body?.email) {
    return NextResponse.json(
      {
        success: false,
        error: 'name and email are required.'
      },
      { status: 422 }
    );
  }

  const newUser = {
    id: String(users.length + 1),
    name: body.name,
    email: body.email
  };

  users.push(newUser);

  return NextResponse.json(
    {
      success: true,
      data: newUser
    },
    { status: 201 }
  );
});
