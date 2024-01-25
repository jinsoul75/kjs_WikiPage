import Link from 'next/link';

export default function PostItem({ post }) {
  return (
    <li>
      <Link href={`post/${post.id}`}>{post.title}</Link>
    </li>
  );
}
