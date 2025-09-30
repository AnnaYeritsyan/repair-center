// lib/strapiApi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path: string, locale: string = 'en') {
  const res = await fetch(`${STRAPI_URL}/api${path}${path.includes('?') ? '&' : '?'}locale=${locale}`);
  if (!res.ok) throw new Error('Failed to fetch from Strapi');
  const data = await res.json();
  return data;
}
