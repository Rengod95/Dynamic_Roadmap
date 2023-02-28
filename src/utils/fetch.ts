import { FetchOptions } from '@tanstack/query-core/build/lib/query';
import { BaseError } from '@/utils/error';

export const request = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> =>
  fetch(url, config)
    .then((res) => res.json())
    .catch((error: Error) => {
      const { message } = error;
      throw new BaseError(message);
    });
