import { NextRequest, NextResponse } from 'next/server';
import data from '@/utils/dummy.json';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = Number(params.id);

    const foundPost = data.posts.filter((post) => post.id === Number(postId));

    if (!foundPost) {
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
      post: {...foundPost},
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
