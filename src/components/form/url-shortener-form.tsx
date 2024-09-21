'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const urlSchema = z.object({
  originalUrl: z.string().url({ message: 'Please enter a valid URL' }),
});

type UrlFormFields = z.infer<typeof urlSchema>;

interface UrlFormProps {
  onSubmit: (originalUrl: string | unknown) => void;
}

const UrlShortenerForm = ({ onSubmit }: UrlFormProps) => {
  const form = useForm<UrlFormFields>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      originalUrl: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="originalUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Original Url</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a long url"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
        >
          Generate Short Url
        </Button>
      </form>
    </Form>
  );
};

export default UrlShortenerForm;
