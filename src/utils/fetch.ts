import { FetchOptions } from '@tanstack/query-core/build/lib/query';

export const request = (args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());
