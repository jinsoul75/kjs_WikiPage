import Link from 'next/link';
import { ReactNode } from 'react';

export default function PageLinkItem({
  href,
  disabled,
  children,
  className,
}: {
  href: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <li key="href">
      <button type="button" disabled={disabled} className="disabled:cursor-default">
        <Link
          href={href}
          className={`border w-8 h-8 border-gray-light rounded-md p-2 hover:bg-btn-hover-gray mx-2 flex justify-center items-center ${disabled ? 'pointer-events-none text-gray-light' : ''} ${className}`}
        >
          {children}
        </Link>
      </button>
    </li>
  );
}
