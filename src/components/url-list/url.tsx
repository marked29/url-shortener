import React from 'react';
import Link from 'next/link';

import { Card, CardContent } from '../ui/card';

type UrlProps = {
  shortenedUrl: string;
  originalUrl: string;
};

export const Url = React.memo(({ shortenedUrl, originalUrl }: UrlProps) => {
  return (
    <li className="not-first-child">
      <Card className="flex flex-col">
        <CardContent className="p-2">
          <p className="text-[#5D76CB]">Short Url:</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${window.location.origin}/${shortenedUrl}`}
          >
            {`${window.location.origin}/${shortenedUrl}`}
          </Link>
          <p className="text-[#FF6D2B]">Original Url:</p>
          <Link
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {originalUrl}
          </Link>
        </CardContent>
      </Card>
    </li>
  );
});
