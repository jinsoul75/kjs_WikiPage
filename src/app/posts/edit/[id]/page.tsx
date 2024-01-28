import makeRequest from '@/utils/makeRequest';

import { BASE_API_URL} from '@/constants/api';
import { METHOD } from '@/constants/constants';

import { ParamsProps, Post } from '@/types/types';

import PostEdit from '@/components/postEdit/PostEdit';
import Section from '@/components/common/Section';

export default async function Page({ params }: ParamsProps) {
  const postId = params?.id;
  const res = await makeRequest(METHOD.GET, `${BASE_API_URL}/posts/${postId}`);
  const post: Post | undefined = res.post;

  return (
    <Section>
      <PostEdit post={post} />
    </Section>
  );
}
