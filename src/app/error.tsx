'use client';

import { useEffect } from 'react';

import Section from '@/components/common/Section';
import Title from '@/components/common/Title';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="justify-center items-center gap-6">
      <Title>Something went wrong!</Title>
      <div className='text-m'>{error.message}</div>
    </Section>
  );
}
