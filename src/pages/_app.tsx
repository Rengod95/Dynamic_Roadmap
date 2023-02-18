import type { AppProps } from 'next/app';
import { Bootstrap } from '@/components/Bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Bootstrap pageProps={pageProps}>
      <Component {...pageProps} />
    </Bootstrap>
  );
}
