'use client';

import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import { Post } from '@/types/types';
import { EDITOR_PLACEHOLDER } from '@/constants/messages';

interface EditorProps {
  post?: Post;
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean'],
        ],
      },
    }),
    [],
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
  ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder={EDITOR_PLACEHOLDER}
      onChange={(value) => onChange(value)}
      value={value}
    />
  );
}
