import { toast } from 'react-toastify';
import {
  getAllUrls,
  shortenUrl,
} from '@/src/services/url-shortener-service/url-shortener-service';
import {
  useMutation,
  useQuery,
  useQueryClient,
  type InvalidateQueryFilters,
} from '@tanstack/react-query';

export function useUrlShortener() {
  const queryClient = useQueryClient();

  const {
    data: urls = [],
    error: urlsError,
    isLoading: urlsLoading,
  } = useQuery<Array<{ shortUrl: string; originalUrl: string }>, Error>({
    queryKey: ['urls'],
    queryFn: getAllUrls,
  });

  const mutation = useMutation<
    { shortUrl: string; originalUrl: string },
    Error,
    string
  >({
    mutationFn: async (originalUrl: string) => {
      const shortUrl = await shortenUrl(originalUrl);
      return { shortUrl, originalUrl };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['urls'] as InvalidateQueryFilters);
      toast('Url has been succesfully shortened');
    },
    onError: (error) => {
      console.error('Failed to shorten URL:', error.message);
      toast(`Failed to shorten URL: ${error.message}`, { type: 'error' });
    },
  });

  const handleUrlSubmit = (originalUrl: string) => {
    mutation.mutate(originalUrl);
  };

  return {
    shortUrl: mutation.data
      ? `${window.location.origin}/${mutation.data.shortUrl}`
      : '',
    originalUrl: mutation.data ? mutation.data.originalUrl : '',
    urls,
    urlsLoading,
    urlsError,
    handleUrlSubmit,
  };
}
