// src/types/pageProps.ts
export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}