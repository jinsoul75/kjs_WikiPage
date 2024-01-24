import { faker } from "@faker-js/faker";

export default function Home() {
  // 50개의 더미데이터 생성
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.words(5),
    body: faker.lorem.paragraphs(3),
  }));

  return <></>;
}
