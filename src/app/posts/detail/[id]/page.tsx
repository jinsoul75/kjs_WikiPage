import makeRequest from '@/utils/makeRequest';
import { BASE_URL } from '@/constants/api';
import { ParamsProps } from '@/constants/types';

import RouteButton from '@/components/common/RouteButton';

export default async function Page({ params }: ParamsProps) {
  const postId = params?.id;
  const res = await makeRequest('GET', `${BASE_URL}/posts/${postId}`);
  const post = res.post[0];

  return (
    <section>
      <div>{post.title} </div>
      <RouteButton route={`/posts/edit/${postId}`}>수정</RouteButton>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
  );
}
