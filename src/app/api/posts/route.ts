import { NextRequest, NextResponse } from 'next/server';
import data from '@/utils/dummy.json';

export async function GET(request: NextRequest) {
  const response = { posts: null, pageInfo: null };

  const page = Number(request.nextUrl.searchParams.get('page'));
  const size = Number(request.nextUrl.searchParams.get('size'));

  const pageInfo = {
    page: null,
    size: null,
    totalPages: null,
  };

  pageInfo.page = page;
  pageInfo.size = size;
  pageInfo.totalPages = Math.ceil(data.posts.length / size);

  response.posts = [...data.posts].slice((page - 1) * size, (page - 1) * size + size);
  response.pageInfo = pageInfo;

  return NextResponse.json(response);
}
