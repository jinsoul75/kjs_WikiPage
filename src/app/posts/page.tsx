import makeRequest from '@/utils/makeRequest';

import { BASE_API_URL } from '@/constants/api';
import { BUTTON_NAME, METHOD, POST_PER_PAGE } from '@/constants/constants';

import { ParamsProps } from '@/types/types';

import Title from '@/components/common/Title';
import PostList from '@/components/list/PostList';
import Pagination from '@/components/pagination/Pagination';
import RouteButton from '@/components/common/RouteButton';
import Section from '@/components/common/Section';

export default async function Home({ searchParams }: ParamsProps) {
  const page = searchParams?.page || 1;
  const size = searchParams?.size || POST_PER_PAGE;

  const { first, prev, next, pages, data } = await makeRequest(
    METHOD.GET,
    `${BASE_API_URL}/posts?page=${page}&size=${size}`,
  );

  return (
    <Section>
      <div className="flex justify-between">
        <Title>게시글 목록</Title>
        <RouteButton route="/posts/write">{BUTTON_NAME.ADD}</RouteButton>
      </div>
      <PostList posts={data} />
      <Pagination
        totalPages={pages}
        firstPage={first}
        previousPage={prev}
        nextPage={next}
        pathname={'posts'}
        size={POST_PER_PAGE}
      />
    </Section>
  );
}
