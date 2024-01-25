import PostItem from './PostItem';

export default function PostList({ posts, ...props }) {
  return (
    <ul className="" key="post-list" {...props}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
}
