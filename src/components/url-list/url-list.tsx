/* eslint-disable no-console */

import { anyFIXME } from '@/src/types/any-fixme';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Url } from './url';

interface UrlListProps {
  urls: anyFIXME[];
}

const UrlList = ({ urls }: UrlListProps) => {
  console.log(urls);
  return (
    <>
      <CardHeader className="text-center">
        <CardTitle>Shortened URLs list</CardTitle>
      </CardHeader>
      <Card>
        <CardContent className="flex h-[250px] gap-4 overflow-y-auto">
          <ul className="mt-4 w-full flex-col overflow-y-auto">
            {urls.reverse().map(({ originalUrl, shortUrl }) => {
              return (
                <Url
                  shortenedUrl={shortUrl}
                  originalUrl={originalUrl}
                />
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default UrlList;
