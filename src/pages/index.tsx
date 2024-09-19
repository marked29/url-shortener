import Image from 'next/image';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header>
        <h1 className="text-3xl">Url Shortener</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to url shortener</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marked29/url-shortener"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Mark
        </a>
      </footer>
    </div>
  );
}
