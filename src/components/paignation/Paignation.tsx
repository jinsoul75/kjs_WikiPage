'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Paignation({
  pathname,
  size,
  totalPages,
}: {
  pathname: string;
  size: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    return `${pathname}?page=${pageNumber}&size=${size}`;
  };

  const renderPageLinks = () => {
    const pageLinks = [];

    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <li key={i} className={i === currentPage ? 'bg-color-red' : ''}>
          <Link href={createPageURL(i)}>{i}</Link>
        </li>,
      );
    }

    return pageLinks;
  };

  return (
    <nav>
      <ul>{renderPageLinks()}</ul>
    </nav>
  );
}
