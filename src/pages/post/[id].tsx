import { api } from '@/utils/api';
import type { NextPage } from 'next';

const PostDetailPage: NextPage = () => {
  const { data: post } = api.load.useQuery(1);
  return (
    <main>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </main>
  );
};

export default PostDetailPage;
