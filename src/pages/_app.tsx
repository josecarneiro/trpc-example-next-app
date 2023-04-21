import { api } from '@/utils/api';
import Link from 'next/link';
import type { AppType } from 'next/app';

import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <nav>
      <Link href="/">Latest Posts</Link>
      <Link href="/post/create">Publish</Link>
    </nav>
    <Component {...pageProps} />
  </>
);

export default api.withTRPC(MyApp);
