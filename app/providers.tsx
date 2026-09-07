'use client';

// Client-only context wrapper. QueryClient is created once at module load.

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGlobalClickSound } from '@/hooks/use-ui-sounds';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  useGlobalClickSound();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
