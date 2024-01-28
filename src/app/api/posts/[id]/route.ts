import { NextRequest, NextResponse } from 'next/server';

import convertToAnchorTag from '@/utils/convertToAnchorTag';
import { JSON_SERVER_URL } from '@/constants/api';
import { METHOD } from '@/constants/constants';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = params.id;

    const response = await fetch(`${JSON_SERVER_URL}/posts/${postId}`, {
      cache: 'no-store',
    });

    if (response.status === 404) {
      return NextResponse.json(
        {
          error: {
            message: 'Post not found',
            status: 404,
          },
        },
        { status: 404 },
      );
    }

    const post = await response.json();

    return NextResponse.json({
      post: { ...post },
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      {
        error: {
          message: 'Internal Server Error',
          status: 500,
        },
      },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = params.id;
    const data = await request.json();

    const withTag = await convertToAnchorTag(data.content, postId);
    data.content = withTag;

    const response = await fetch(`${JSON_SERVER_URL}/posts/${postId}`, {
      method: METHOD.PATCH,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      cache: 'no-store',
    });

    const post = await response.json();

    if (!post) {
      return NextResponse.json(
        {
          error: {
            message: 'Post not found',
            status: 404,
          },
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      post: { ...post },
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      {
        error: {
          message: 'Internal Server Error',
          status: 500,
        },
      },
      { status: 500 },
    );
  }
}
