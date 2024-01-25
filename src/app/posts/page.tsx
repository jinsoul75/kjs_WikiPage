import { BASE_URL, METHOD } from '@/constants/api';
import makeRequest from '@/utils/makeRequest';

import H1 from '@/components/common/H1';
import PostList from '@/components/list/PostList';
import Paignation from '@/components/paignation/Paignation';
import Button from '@/components/common/Button';

export default async function Home({ searchParams }) {
  const posts = [];

  const page = searchParams.page || 1;
  const size = searchParams.size || 5;

  const res = await makeRequest(METHOD.GET, `${BASE_URL}/posts?page=${page}&size=${size}`);

  posts.push(...res.posts);

  const totalPages = res.pageInfo.totalPages;

  return (
    <section>
      <H1>게시글 목록</H1>
      <Button>추가</Button>
      <PostList posts={posts} />
      <Paignation totalPages={totalPages} pathname={'posts'} size={5} />
    </section>
  );
}
