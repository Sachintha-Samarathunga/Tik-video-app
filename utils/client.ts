import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ubtoaxy1',
  dataset: 'production',
  apiVersion: '2023-09-29',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
