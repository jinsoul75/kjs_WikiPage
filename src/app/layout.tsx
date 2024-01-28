import type { Metadata } from 'next';
import { Suspense } from 'react';

import './globals.css';
import Header from '@/components/header/Header';
import loading from './loading';

export const metadata: Metadata = {
  title: '코딩 허브 위키',
  description: '코딩허브에서 제공하는 강의와 관련된 정보에 대한 게시판입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainStyle = 'px-6 h-full w-full flex flex-col items-center bg-background flex-1';

  return (
    <html lang="ko">
      <body className="h-screen flex flex-col">
        <Suspense fallback={loading()}>
          <Header />
          <main className={mainStyle}>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
