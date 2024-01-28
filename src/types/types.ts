export interface ParamsProps {
  params?: { id?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export type Posts = Post[];
