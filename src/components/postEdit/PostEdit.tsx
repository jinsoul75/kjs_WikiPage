'use client';

import { useEffect, useState } from 'react';

import Input from '../common/Input';
import Editor from '../common/Editor';
import { Post } from '@/constants/types';

export default function PostEdit({ post }: { post: Post | undefined }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePostSubmit = ({ title, body }: Post) => {};

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, []);

  return (
    <section>
      <Input value={title} label="title" onChange={handleTitleChange} />
      <Editor value={content} onChange={handleContentChange} />
      <button onClick={handlePostSubmit} />
    </section>
  );
}
