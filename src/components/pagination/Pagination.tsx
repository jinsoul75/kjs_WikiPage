'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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
    return { pathname, query: { page: pageNumber, size } };
  };

  const renderPageLinks = () => {
    const pageLinks = [];

    const standard = Math.floor(size / 2);
    const start =
      currentPage < size
        ? 1
        : currentPage + standard >= totalPages
          ? totalPages - size + 1
          : currentPage - standard;
    const last = currentPage < size ? size : currentPage + standard;

    for (let i = start; i <= last; i++) {
      if (i <= totalPages) {
        pageLinks.push(
          <li key={i} className={i === currentPage ? 'bg-color-red' : ''}>
            <Link href={createPageURL(i)}>{i}</Link>
          </li>,
        );
      }
    }

    return pageLinks;
  };

  return (
    <nav>
      <Link href={createPageURL(1)}>
        <button disabled={currentPage === 1}>처음</button>
      </Link>
      <Link href={createPageURL(currentPage - 1)}>
        <button disabled={currentPage === 1}>이전</button>
      </Link>

      <ul>{renderPageLinks()}</ul>

      <Link href={createPageURL(currentPage + 1)}>
        <button disabled={currentPage === totalPages}>다음</button>
      </Link>
      <Link href={createPageURL(totalPages)}>
        <button disabled={currentPage === totalPages}>마지막</button>
      </Link>
    </nav>
  );
}
