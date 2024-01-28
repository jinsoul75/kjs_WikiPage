import { NextRequest, NextResponse } from 'next/server';

import convertToAnchorTag from '@/utils/convertToAnchorTag';
import { JSON_SERVER_URL } from '@/constants/api';
import { METHOD } from '@/constants/constants';

export async function GET(request: NextRequest) {
  try {
    const page = request.nextUrl.searchParams.get('page');
    const size = request.nextUrl.searchParams.get('size');

    const res = await fetch(`${JSON_SERVER_URL}/posts?_page=${page}&_per_page=${size}`, {
      cache: 'no-store',
    });

    const data = await res.json();

    data.data = data.data.reverse()

    return NextResponse.json(data);
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

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const withTag = await convertToAnchorTag(data.content);
    data.content = withTag;

    const response = await fetch(`${JSON_SERVER_URL}/posts`, {
      method: METHOD.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const post = await response.json();
    console.log(post)

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
