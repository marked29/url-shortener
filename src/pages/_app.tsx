import type { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';

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
      <Component {...pageProps} />
    </>
  );
}
