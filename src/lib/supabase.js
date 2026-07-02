import { createClient } from '@supabase/supabase-js';

/**
 * Cliente Supabase para el servidor (API routes).
 *
 * Devuelve `null` si faltan las credenciales, de modo que el build y los
 * endpoints no truenen mientras el proyecto Supabase todavía no existe.
 * Usa la service role key: SOLO servidor, nunca cliente.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

/*
 * SQL sugerido para la tabla de atribución en Supabase:
 *
 * create table public.attributions (
 *   id           bigint generated always as identity primary key,
 *   gclid        text        not null,
 *   landing_page text,
 *   referrer     text,
 *   created_at   timestamptz not null default now()
 * );
 * create index attributions_gclid_idx on public.attributions (gclid);
 */
