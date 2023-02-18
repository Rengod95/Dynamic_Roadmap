import { FetchOptions } from '@tanstack/query-core/build/lib/query';
import { BaseError } from '@/utils/error';

export const request = (args: Parameters<typeof fetch>) =>
  fetch(...args)
    .then((res) => res.json())
    .catch((error: Error) => {
      const { message } = error;
      throw new BaseError(message);
    });
