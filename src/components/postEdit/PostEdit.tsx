'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Post } from '@/types/types';
import { BASE_API_URL } from '@/constants/api';
import { METHOD, BUTTON_NAME } from '@/constants/constants';
import { TITLE_PLACEHOLDER, MISSING_INPUT, POST_CONFIRM } from '@/constants/messages';
import makeRequest from '@/utils/makeRequest';

import Input from '@/components/postEdit/Input';
import Editor from '@/components/postEdit/Editor';
import RouteButton from '../common/RouteButton';

export default function PostEdit({ post }: { post: Post | undefined }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const pathName = usePathname();
  const router = useRouter();

  const isEditMode = pathName?.split('/')[2] === 'edit';

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePostSubmit = async () => {
    if (isEditMode) {
      await makeRequest(METHOD.PATCH, `${BASE_API_URL}/posts/${post?.id}`, {
        title,
        content,
      });

      router.replace(`/posts/detail/${post?.id}`);
      router.refresh();
      return;
    }

    const res = await makeRequest(METHOD.POST, `${BASE_API_URL}/posts`, {
      title,
      content,
    });

    router.replace(`/posts/detail/${res.post.id}`);
  };

  const checkValidation = () => {
    if (title && content) {
      const confirmUpload = window.confirm(POST_CONFIRM);
      if (confirmUpload) handlePostSubmit();
      return;
    }

    alert(MISSING_INPUT);
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, []);

  return (
    <>
      <Input
        value={title}
        placeholder={TITLE_PLACEHOLDER}
        onChange={handleTitleChange}
        className="border-b border-b-gray-light focus:outline-none pb-2"
      />
      <div className="grow my-4">
        <Editor value={content} onChange={handleContentChange} />
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 rounded-md border-solid border-gray-light hover:bg-btn-hover-gray flex justify-center items-center"
          onClick={checkValidation}
        >
          {isEditMode ? BUTTON_NAME.DONE_TO_EDIT : BUTTON_NAME.SAVE}
        </button>
        <RouteButton className="ml-2" back={true}>
          {BUTTON_NAME.CANCEL}
        </RouteButton>
      </div>
    </>
  );
}
