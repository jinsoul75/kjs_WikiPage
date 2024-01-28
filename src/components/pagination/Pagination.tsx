'use client';

import { useSearchParams } from 'next/navigation';
import { MdNavigateNext, MdNavigateBefore, MdLastPage, MdFirstPage } from 'react-icons/md';

import PageLinkItem from './PageLinkItem';

export default function Pagination({
  pathname,
  size,
  totalPages,
  previousPage,
  nextPage,
  firstPage,
}: {
  pathname: string;
  size: number;
  totalPages: number;
  previousPage: number;
  nextPage: number;
  firstPage: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get('page')) || firstPage;

  const createPageURL = (pageNumber: number | string) => {
    return `/${pathname}?page=${pageNumber}&size=${size}`;
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
        const isCurrentPage = currentPage === i;
        pageLinks.push(
          <PageLinkItem href={createPageURL(i)} className={isCurrentPage ? 'bg-gray-light' : ''}>
            {i}
          </PageLinkItem>,
        );
      }
    }

    return pageLinks;
  };

  return (
    <ul className="flex justify-center items-center mt-2">
      <PageLinkItem href={createPageURL(firstPage)} disabled={currentPage === firstPage}>
        <MdFirstPage className='flex' />
      </PageLinkItem>

      <PageLinkItem href={createPageURL(previousPage)} disabled={currentPage === firstPage}>
        <MdNavigateBefore className='flex'/>
      </PageLinkItem>

      {renderPageLinks()}

      <PageLinkItem href={createPageURL(nextPage)} disabled={currentPage === totalPages}>
        <MdNavigateNext className='flex'/>
      </PageLinkItem>

      <PageLinkItem href={createPageURL(totalPages)} disabled={currentPage === totalPages}>
        <MdLastPage className='flex'/>
      </PageLinkItem>
    </ul>
  );
}
