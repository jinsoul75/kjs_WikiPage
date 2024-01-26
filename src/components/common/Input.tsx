'use client';

import { Post } from '@/constants/types';

interface InputProps {
  post?: Post;
  label: string;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function Input({ label, className, value, onChange, ...props }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className={`${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </>
  );
}
