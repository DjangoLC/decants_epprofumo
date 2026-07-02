import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Refresh del long-lived token de Instagram (SCAFFOLDING).
 *
 * Los long-lived tokens de Instagram Graph API caducan a los ~60 días y deben
 * refrescarse periódicamente (antes de caducar). Este endpoint es el target del
 * cron de Vercel definido en vercel.json (diario, 03:00 UTC).
 *
 * Nota: el token refrescado debe persistirse (Vercel env / KV / Supabase). Aquí
 * solo se deja el flujo del refresh; la persistencia se conecta cuando existan
 * credenciales reales.
 */
export async function GET(request) {
  // Proteger el endpoint de cron si se define un secreto.
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
    }
  }

  const token = process.env.IG_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: true, refreshed: false, reason: 'no_token_env' });
  }

  try {
    const url =
      'https://graph.instagram.com/refresh_access_token' +
      `?grant_type=ig_refresh_token&access_token=${token}`;

    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: 'refresh_failed' },
        { status: 502 },
      );
    }

    const json = await res.json();
    // TODO: persistir json.access_token (nuevo token) y json.expires_in.
    return NextResponse.json({ ok: true, refreshed: true, expires_in: json?.expires_in });
  } catch {
    return NextResponse.json({ ok: false, error: 'refresh_exception' }, { status: 500 });
  }
}
