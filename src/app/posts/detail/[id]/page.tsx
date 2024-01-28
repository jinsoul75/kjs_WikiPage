import makeRequest from '@/utils/makeRequest';

import { BASE_API_URL } from '@/constants/api';
import { ParamsProps } from '@/types/types';
import { BUTTON_NAME } from '@/constants/constants';

import RouteButton from '@/components/common/RouteButton';
import ContentViewer from '@/components/contentViewer/ContentViewer';
import Title from '@/components/common/Title';
import Section from '@/components/common/Section';

export default async function Page({ params }: ParamsProps) {
  const postId = params?.id;

  const res = await makeRequest('GET', `${BASE_API_URL}/posts/${postId}`);

  const post = res.post;

  return (
    <Section>
      <div className="flex justify-between border-b border-b-gray-light">
        <Title>{post?.title}</Title>
      </div>
      <div className="grow mt-4 border-b border-b-gray-light">
        <ContentViewer post={post} />
      </div>
      <div className="mt-4 flex justify-end">
        <RouteButton route={`/posts/edit/${postId}`}>{BUTTON_NAME.EDIT}</RouteButton>
        <RouteButton className='ml-2' back={true}>{BUTTON_NAME.GO_TO_LIST}</RouteButton>
      </div>
    </Section>
  );
}
