import { BASE_URL, METHOD, POST_PER_PAGE } from '@/constants/api';
import makeRequest from '@/utils/makeRequest';

import H1 from '@/components/common/H1';
import PostList from '@/components/list/PostList';
import Paignation from '@/components/pagination/Pagination';
import Button from '@/components/common/RouteButton';

import fincWord from '@/utils/findWord';
import { ParamsProps } from '@/constants/types';

export default async function Home({ searchParams }: ParamsProps) {
  const posts = [];

  const page = searchParams?.page || 1;
  const size = searchParams?.size || POST_PER_PAGE;

  const res = await makeRequest(METHOD.GET, `${BASE_URL}/posts?page=${page}&size=${size}`);

  posts.push(...res.posts);

  const totalPages = res.pageInfo.totalPages;

  return (
    <section>
      <H1>게시글 목록</H1>
      <Button route='/write'>추가</Button>
      <PostList posts={posts} />
      <Paignation totalPages={totalPages} pathname={'posts'} size={size} />
    </section>
  );
}
