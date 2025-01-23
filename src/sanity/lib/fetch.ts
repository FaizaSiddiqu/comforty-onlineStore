

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "tcwiltjd",
  dataset: "production",
  useCdn: true,
  apiVersion: '2023-01-01',
});

export async function sanityFetch<T = unknown>({ 
  query, 
  params = {} 
}: { 
  query: string; 
  params?: Record<string, unknown>; 
}): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}
