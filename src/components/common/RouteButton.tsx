'use client';

import { useRouter } from 'next/navigation';

export default function RouteButton({
  route,
  className,
  children,
  ...props
}: {
  route: string;
  className?: string;
  children: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`${route}`)}
      className={`p-2 border ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
