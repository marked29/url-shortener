import Link from 'next/link';

import { Card, CardContent } from '../ui/card';

type UrlProps = {
  shortenedUrl: string;
  originalUrl: string;
};

export const Url = ({ shortenedUrl, originalUrl }: UrlProps) => {
  return (
    <li className="not-first-child">
      <Card className="flex flex-col">
        <CardContent className="p-2">
          <p>Short Url:</p>
          <Link href="#">{shortenedUrl}</Link>
          <p>Original Url:</p>
          <Link href="#">{originalUrl}</Link>
        </CardContent>
      </Card>
    </li>
  );
};
