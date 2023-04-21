/* eslint-disable @typescript-eslint/no-floating-promises */
import { api } from '@/utils/api';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { type FormEventHandler, useState } from 'react';

const PostCreatePage: NextPage = () => {
  const { replace } = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { mutate } = api.create.useMutation();

  const handleSubmission: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    replace('/');
  };

  return (
    <main>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setBody(event.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button>Publish</button>
      </form>
    </main>
  );
};

export default PostCreatePage;
