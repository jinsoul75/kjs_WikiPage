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
      <div>JSON-SERVER가 켜져있는지 확인해주세요.</div>
    </Section>
  );
}
