import React, { ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { AppProps } from 'next/app';

export type BootstrapProps = {
  children: ReactNode;
  pageProps: AppProps['pageProps'];
};

export const Bootstrap = ({ children, pageProps }: BootstrapProps) => {
  const [queryClient] = useState(() => new QueryClient({}));

  (async () => {
    if(process.env.APPLICATION_PHASE === 'LOCAL' || 'DEVELOPMENT') {
     await import ('@/mocks');
    }
  })();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};
