const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapiData(endpoint: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Strapi fetch error:', error);
    return null;
  }
}

export async function getGlobalSettings() {
  try {
    const data = await fetchStrapiData('/global?populate=*');
    return data?.data || null;
  } catch {
    console.log('Global settings not found, using fallback image');
    return null;
  }
}

export function getStrapiImageUrl(image: { url?: string } | null) {
  if (!image?.url) return null;
  
  const baseUrl = STRAPI_URL.replace('/api', '');
  return `${baseUrl}${image.url}`;
}
