import { Post, Posts } from '@/types/types';

import PostItem from './PostItem';

export default function PostList({ posts, ...props }: { posts: Posts }) {
  return (
    <ul key="post-list" className="grid grid-rows-5 my-4 gap-4" {...props}>
      {posts?.map((post: Post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
}
