'use client';

export default function Button({ onClick, className, children, ...props }) {
  return (
    <button onClick={onClick} className={`p-2 border ${className}`} {...props}>
      {children}
    </button>
  );
}
