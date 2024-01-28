import { Post } from '@/types/types';
import Link from 'next/link';

export default function PostItem({ post }: { post: Post }) {
  return (
    <li className="list-none w-full border-b border-gray-light flex items-center">
      <Link href={`posts/detail/${post.id}`} className='text-link hover:cursor-pointer hover:underline'>{post.title}</Link>
    </li>
  );
}
