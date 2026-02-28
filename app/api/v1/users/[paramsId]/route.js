import { NextResponse } from 'next/server';

const users = [
  { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: '2', name: 'Alan Turing', email: 'alan@example.com' }
];

/**
 * GET /api/v1/users/[paramsId]
 * Dynamic route using folder parameter.
 */
export async function GET(_request, { params }) {
  const user = users.find((item) => item.id === params.paramsId);

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        error: `User with id=${params.paramsId} not found.`
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: user
  });
}

/**
 * PATCH /api/v1/users/[paramsId]
 * Update user by dynamic route id.
 */
export async function PATCH(request, { params }) {
  const body = await request.json();
  const userIndex = users.findIndex((item) => item.id === params.paramsId);

  if (userIndex < 0) {
    return NextResponse.json(
      {
        success: false,
        error: `User with id=${params.paramsId} not found.`
      },
      { status: 404 }
    );
  }

  users[userIndex] = {
    ...users[userIndex],
    ...(body?.name ? { name: body.name } : {}),
    ...(body?.email ? { email: body.email } : {})
  };

  return NextResponse.json({
    success: true,
    data: users[userIndex]
  });
}

/**
 * DELETE /api/v1/users/[paramsId]
 * Delete user by dynamic route id.
 */
export async function DELETE(_request, { params }) {
  const userIndex = users.findIndex((item) => item.id === params.paramsId);

  if (userIndex < 0) {
    return NextResponse.json(
      {
        success: false,
        error: `User with id=${params.paramsId} not found.`
      },
      { status: 404 }
    );
  }

  const [removed] = users.splice(userIndex, 1);

  return NextResponse.json({
    success: true,
    data: removed
  });
}
