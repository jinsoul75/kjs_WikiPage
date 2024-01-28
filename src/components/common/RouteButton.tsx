'use client';

import { useRouter } from 'next/navigation';

export default function RouteButton({
  route,
  className,
  children,
  back,
  ...props
}: {
  route?: string;
  className?: string;
  children: string;
  back?: boolean;
}) {
  const router = useRouter();

  const action = back ? () => router.back() : () => router.push(`${route}`);

  return (
    <button
      type="button"
      onClick={action}
      className={`px-4 py-2 rounded-md border-solid border-gray-light hover:bg-btn-hover-gray flex justify-center items-center ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
