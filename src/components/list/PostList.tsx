import { Post, Posts } from '@/types/types';

import PostItem from './PostItem';

import { NO_WIKI_CONTENT } from '@/constants/messages';

export default function PostList({ posts, ...props }: { posts: Posts }) {
  return (
    <>
      {posts ? (
        <ul className="grid grid-rows-5 my-4 gap-4" {...props}>
          {posts?.map((post: Post) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </ul>
      ) : (
        <div className="flex grow justify-center items-center">
          <div>{NO_WIKI_CONTENT}</div>
        </div>
      )}
    </>
  );
}
