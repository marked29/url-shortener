import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

import { UrlShortenerForm } from '../components/form/url-shortener-form';

export default function Home() {
  return (
    <div
      className={`grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20`}
    >
      <header>
        <h1 className="text-3xl">Url Shortener</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Card className="w-[560px]">
          <CardHeader className="text-center">
            <CardTitle>Set your URL</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <UrlShortenerForm />
            <CardHeader className="text-center">
              <h2>Shortened URLs list</h2>
            </CardHeader>
            <Card>
              <CardContent className="flex gap-4">
                <ul>
                  <li>rflnrlfrnjl</li>
                  <li>rflnrlfrnjl</li>
                  <li>rflnrlfrnjl</li>
                  <li>rflnrlfrnjl</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
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
