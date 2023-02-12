import { Header, Footer } from '@/components';
import type { AppProps } from 'next/app';
import '@/styles/common.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
