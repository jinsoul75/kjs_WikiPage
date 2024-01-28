import Link from 'next/link'
import Section from '@/components/common/Section'
import Title from '@/components/common/Title'

export default function NotFound() {
  return (
    <Section>
      <Title>Not Found</Title>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-link hover:underline'>Return Home</Link>
    </Section>
  )
}