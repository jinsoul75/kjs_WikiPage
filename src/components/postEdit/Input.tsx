'use client';

import { Post } from '@/types/types';

interface InputProps {
  post?: Post;
  label?: string;
  className?: string;
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  className,
  value,
  placeholder,
  onChange,
  ...props
}: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type="text"
        className={`${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </>
  );
}
