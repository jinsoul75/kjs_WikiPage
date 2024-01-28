import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-3/4 max-w-3xl min-h-96 m-8 rounded-md border border-gray-light bg-white p-4">
      {children}
    </section>
  );
}
