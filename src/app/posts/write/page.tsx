import PostEdit from '@/components/postEdit/PostEdit';
import Section from '@/components/common/Section';

export default function Page() {
  return (
    <Section>
      <PostEdit post={undefined} />
    </Section>
  );
}
