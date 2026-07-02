import { NextResponse } from 'next/server';

// Revalidar cada hora cuando haya feed real.
export const revalidate = 3600;

/**
 * Feed de Instagram (SCAFFOLDING).
 *
 * Cuando existan credenciales, hace fetch al Graph API y devuelve los últimos
 * posts. Sin token, devuelve un feed vacío para no romper el build/render.
 *
 * Feed real (referencia):
 *   const url = `https://graph.instagram.com/${process.env.IG_USER_ID}/media` +
 *     `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp` +
 *     `&access_token=${process.env.IG_ACCESS_TOKEN}&limit=8`;
 *   const res = await fetch(url, { next: { revalidate: 3600 } });
 *   const { data } = await res.json();
 */
export async function GET() {
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;

  if (!token || !userId) {
    return NextResponse.json({ data: [], configured: false });
  }

  try {
    const url =
      `https://graph.instagram.com/${userId}/media` +
      `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp` +
      `&access_token=${token}&limit=8`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json({ data: [], configured: true, error: 'ig_fetch_failed' });
    }
    const json = await res.json();
    return NextResponse.json({ data: json?.data ?? [], configured: true });
  } catch {
    return NextResponse.json({ data: [], configured: true, error: 'ig_exception' });
  }
}
