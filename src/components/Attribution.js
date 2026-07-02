'use client';

import { useEffect } from 'react';
import { GCLID_STORAGE_KEY } from '@/lib/constants';

/**
 * Captura la atribución de Google Ads (gclid / wbraid / gbraid) que llega en la
 * URL del anuncio, la persiste en sessionStorage para adjuntarla al link de
 * WhatsApp, y la reporta a /api/attribution (fire-and-forget).
 *
 * Componente client mínimo: se ejecuta una vez en montaje, no bloquea el render
 * ni el INP.
 */
export default function Attribution() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const gclid =
        params.get('gclid') || params.get('wbraid') || params.get('gbraid');

      if (!gclid) return;

      // Persistir para que WaLink lo adjunte al mensaje de WhatsApp.
      window.sessionStorage.setItem(GCLID_STORAGE_KEY, gclid);

      // Reporte a Supabase (no-op si faltan credenciales). No bloquea nada.
      fetch('/api/attribution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          gclid,
          landing_page: window.location.pathname + window.location.search,
          referrer: document.referrer || null,
        }),
      }).catch(() => {
        /* silencioso: la atribución nunca debe romper la experiencia */
      });
    } catch {
      /* entorno sin sessionStorage / URL malformada: ignorar */
    }
  }, []);

  return null;
}
