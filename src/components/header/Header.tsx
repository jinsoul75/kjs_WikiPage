import Link from 'next/link';

export default async function Header() {
  return (
    <header className="bg-green p-4">
      <Link href={'/'} className='text-white font-bold text-m p-2'>코딩 허브 위키</Link>
    </header>
  );
}
