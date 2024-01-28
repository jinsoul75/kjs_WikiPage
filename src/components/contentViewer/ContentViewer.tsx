'use client';

import { useMemo } from 'react';
import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';

import { Post } from '@/types/types';

export default function ContentViewer({ post }: { post: Post | undefined }) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  return <ReactQuill value={post?.content} readOnly={true} theme={'bubble'} />;
}
