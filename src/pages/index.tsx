import Link from 'next/link';
import { api } from '@/utils/api';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const { data: posts } = api.list.useQuery();

  return (
    <main>
      <h1>Latest Posts</h1>
      {posts?.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Link>
      ))}
      <p>{JSON.stringify(posts, null, 2)}</p>
    </main>
  );
};

export default HomePage;
