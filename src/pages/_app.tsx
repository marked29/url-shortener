import type { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';

import Providers from '../providers/providers';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >
        {`
          * {
            font-family: ${GeistSans.style.fontFamily};
            overflow-y: hidden;
          }
        `}
      </style>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
