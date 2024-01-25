import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: '코딩 허브 위키',
  description: '코딩허브에서 제공하는 강의와 관련된 정보에 대한 게시판입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className='mx-auto max-w-3xl px-6 min-h-screen flex flex-col'>{children}</main>
      </body>
    </html>
  );
}
