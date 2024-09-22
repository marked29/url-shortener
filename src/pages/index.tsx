import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

import UrlShortenerForm from '../components/form/url-shortener-form';
import UrlList from '../components/url-list/url-list';
import { useUrlShortener } from '../hooks/useUrlShortener';

const MemoizedUrlsList = React.memo(UrlList);

export default function Home() {
  const {
    // shortUrl,
    // originalUrl,
    urls,
    // urlsLoading,
    urlsError,
    handleUrlSubmit,
  } = useUrlShortener();

  return (
    <div
      className={`grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20`}
    >
      <header>
        <h1 className="text-3xl text-[#FF6D2B]">
          <span className="text-[#5D76CB]">Url</span> Shortener
        </h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Card className="w-[90vw] sm:w-[560px]">
          <CardHeader className="text-center">
            <CardTitle>Set your URL</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <UrlShortenerForm onSubmit={handleUrlSubmit} />
            {urlsError ? (
              <p className="mt-4 text-center text-red-500">
                Error loading URLs
              </p>
            ) : urls.length === 0 ? (
              <p className="text-center">empty list</p>
            ) : (
              <MemoizedUrlsList urls={urls} />
            )}
          </CardContent>
        </Card>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marked29/url-shortener"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Mark
        </Link>
      </footer>
    </div>
  );
}
