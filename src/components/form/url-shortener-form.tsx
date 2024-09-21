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

export function UrlShortenerForm() {
  // 1. Define your form.
  const form = useForm<UrlFormFields>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      originalUrl: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: UrlFormFields) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(`You entered data: ${values}`);
  }

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
              <FormLabel>Long url</FormLabel>
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
          Submit
        </Button>
      </form>
    </Form>
  );
}
