'use client';

import {
  WHATSAPP_NUMBER,
  WHATSAPP_DEFAULT_MESSAGE,
  GCLID_STORAGE_KEY,
} from '@/lib/constants';

/**
 * CTA de conversión a WhatsApp — la micro-conversión principal del landing.
 *
 * Al hacer click:
 *  1. Empuja el evento `whatsapp_click` al dataLayer (medido en GA4 / Google Ads).
 *  2. Construye el link wa.me con el mensaje precargado + el gclid capturado
 *     (para atribuir la venta en el funnel de WhatsApp).
 *
 * Props:
 *  - children: contenido del botón (texto del CTA).
 *  - message:  mensaje precargado (default: el sugerido por el spec).
 *  - ctaLabel: etiqueta para el dataLayer (default: deriva de children si es texto).
 *  - variant:  'primary' (dorado sólido) | 'ghost' (borde dorado).
 *  - className: clases extra.
 */
export default function WaLink({
  children,
  message = WHATSAPP_DEFAULT_MESSAGE,
  ctaLabel,
  variant = 'primary',
  className = '',
}) {
  const handleClick = (event) => {
    event.preventDefault();

    // Adjuntar la atribución de Google Ads al mensaje, si existe.
    let text = message;
    let gclid = null;
    try {
      gclid = window.sessionStorage.getItem(GCLID_STORAGE_KEY);
    } catch {
      /* sin sessionStorage: seguimos sin gclid */
    }
    if (gclid) {
      text = `${message} (ref: ${gclid})`;
    }

    // Micro-conversión → dataLayer para GTM/GA4/Google Ads.
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        cta_text:
          ctaLabel || (typeof children === 'string' ? children : 'whatsapp_cta'),
        gclid: gclid || undefined,
      });
    } catch {
      /* dataLayer no disponible: no bloquear la navegación */
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-center text-base font-semibold tracking-wide transition-transform duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] focus-visible:ring-[#d0a933]';

  const variants = {
    primary:
      'bg-[#d0a933] text-[#121212] shadow-lg shadow-[#d0a933]/20 hover:bg-[#e0c168]',
    ghost:
      'border border-[#d0a933] text-[#d0a933] hover:bg-[#d0a933] hover:text-[#121212]',
  };

  // Href real como fallback semántico/SEO; el click lo intercepta handleClick.
  const fallbackHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      data-cta="whatsapp"
    >
      {children}
    </a>
  );
}
