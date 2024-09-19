import { anyFIXME } from './../../types/any-fixme';

type HttpService = {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: anyFIXME): Promise<T>;
};

export const createHttpService = (httpClient: anyFIXME): HttpService => ({
  get: (url) => httpClient.get(url).then((res: anyFIXME) => res.data),
  post: (url, data) =>
    httpClient.post(url, data).then((res: anyFIXME) => res.data),
});
