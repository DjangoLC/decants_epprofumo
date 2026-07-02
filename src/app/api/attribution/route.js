import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

// Endpoint de escritura: no cachear.
export const dynamic = 'force-dynamic';

/**
 * Recibe la atribución de Google Ads (gclid) capturada en el cliente y la guarda
 * en Supabase. Responde 200 aunque falten credenciales (no-op) para no romper la
 * experiencia mientras el proyecto Supabase todavía no existe.
 */
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const gclid = typeof payload?.gclid === 'string' ? payload.gclid.slice(0, 512) : null;
  if (!gclid) {
    return NextResponse.json({ ok: false, error: 'missing_gclid' }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    // Scaffolding: sin credenciales todavía. Aceptamos y no persistimos.
    return NextResponse.json({ ok: true, stored: false, reason: 'no_supabase_env' });
  }

  const { error } = await supabase.from('attributions').insert({
    gclid,
    landing_page: payload?.landing_page ?? null,
    referrer: payload?.referrer ?? null,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: 'db_error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
