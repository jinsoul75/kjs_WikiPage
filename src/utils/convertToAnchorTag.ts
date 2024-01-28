import makeRequest from './makeRequest';

import { JSON_SERVER_URL } from '@/constants/api';
import { METHOD } from '@/constants/constants';

export default async function convertToAnchorTag(content: string, postId?: string) {
  const posts = await makeRequest(METHOD.GET, `${JSON_SERVER_URL}/posts`);

  const targetWords = posts.map((post: { title: string }) => post.title);
  const originalString = content;

  let modifiedString = originalString;

  targetWords.forEach((word: string) => {
    const targetId = posts.find((post: { title: string }) => post.title === word).id;

    if (targetId !== postId) {
      const replacement = `<a style='color:#0275d8;' href='/posts/detail/${targetId}'>${word}</a>`;

      modifiedString = modifiedString.split(word).join(replacement);
    }
  });

  return modifiedString;
}
