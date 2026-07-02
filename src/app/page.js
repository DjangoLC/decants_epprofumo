import Image from 'next/image';
import { Check, Star } from 'lucide-react';
import WaLink from '@/components/WaLink';
import { CATALOG_URL } from '@/lib/constants';

// ─── Datos de los bloques (copy textual del spec, no modificar) ───────────────

const STAR_FRAGRANCES = [
  {
    name: 'Asad — Lattafa',
    desc: 'Ámbar, tabaco y vainilla especiada. El favorito de noche: proyección bestial y cumplidos garantizados.',
    image: '/fragrances/asad-lattafa.png',
  },
  {
    name: 'Mandarin Sky',
    desc: 'Cítrico dulce con fondo cálido. El versátil que funciona en oficina y en cita.',
    image: '/fragrances/mandarin-sky.png',
  },
  {
    name: 'Stallion 53 — Emper',
    desc: 'DNA de nicho de $8,000 pesos por una fracción. Elegante, limpio, para el que quiere oler caro.',
    image: '/fragrances/stallion-53.png',
  },
  {
    name: 'CDN Intense Man',
    desc: 'Fresco intenso de larga duración. El diario perfecto para el calor de México.',
    image: '/fragrances/cdn-intense-man.png',
  },
];

const PACKAGES = [
  {
    name: 'Decant individual',
    price: 'desde $104 MXN',
    desc: 'Ideal para probar ESE perfume que traes en la mira.',
    cta: 'Pedir mi decant por WhatsApp →',
    message:
      'Hola, quiero pedir un decant individual. ¿Me pasas el catálogo?',
    featured: false,
  },
  {
    name: 'Paquete descubrimiento (3 decants)',
    price: '$599 MXN',
    note: 'Envío incluido',
    desc: 'Arma tu rotación: uno de día, uno de noche, uno para impresionar.',
    cta: 'Armar mi paquete por WhatsApp →',
    message:
      'Hola, me interesa el Paquete descubrimiento de 3 decants ($599 con envío incluido). ¿Me pasas info y catálogo?',
    featured: true,
  },
  {
    name: 'Paquete pro (5 decants)',
    price: '$999 MXN',
    note: '+ envío',
    desc: 'Para el fan que quiere probar la colección completa antes de invertir en frascos.',
    cta: 'Quiero el paquete pro por WhatsApp →',
    message:
      'Hola, me interesa el Paquete pro de 5 decants ($999 + envío). ¿Me pasas info y catálogo?',
    featured: false,
  },
];

// Reseñas reales de Google Maps (5★).
const TESTIMONIALS = [
  {
    author: 'Fernando Palomeque',
    source: 'Reseña en Google',
    quote:
      'Excelente atención, gran variedad de aromas, para gustos exigentes. Perfumes originales árabes.',
  },
  {
    author: 'Elvia Ortiz',
    source: 'Reseña en Google',
    quote: 'Excelente servicio y perfumes de buena calidad.',
  },
  {
    author: 'Gabriela Palomeque',
    source: 'Local Guide · Google',
    quote:
      'Excelente atención! Tienen diferentes aromas y presentaciones variadas.',
  },
  {
    author: 'Jafet Jafet',
    source: 'Reseña en Google',
    quote: 'Perfumes de calidad y muy amable su atención.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#d0a933] text-[#d0a933]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 sm:px-6">
      {/* ═══ Bloque 1 — Hero ═══ */}
      <section className="flex flex-col items-center gap-8 pb-16 pt-14 text-center sm:pt-20">
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d0a933]">
            EP PROFUMO
          </span>
          <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-6xl">
            Deja de comprar perfumes a ciegas.
          </h1>
          <p className="max-w-2xl text-base text-[#d6d1c7] sm:text-lg">
            Prueba las fragancias árabes más buscadas en decants desde $104 MXN.
            Si te enamora, compras el frasco. Si no, no quemaste $2,000.
          </p>
        </div>

        <WaLink ctaLabel="hero_cta" className="w-full max-w-sm text-lg sm:w-auto">
          Quiero probar antes de comprar →
        </WaLink>

        <p className="text-xs text-[#a8a29a] sm:text-sm">
          169 fragancias disponibles · Envíos a todo México · 100% originales
        </p>

        <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0d0d0d] sm:aspect-video">
          <Image
            src="/hero-decants.jpeg"
            alt="Decants de perfumes árabes alineados sobre fondo oscuro con acento dorado"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ═══ Bloque 2 — El problema ═══ */}
      <section className="border-t border-white/5 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">¿Te ha pasado?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[#d6d1c7] sm:text-lg">
          Compraste un perfume porque olía increíble en la tira de papel... y en
          tu piel duró 2 horas y olía a otra cosa. $1,800 pesos al cajón.
        </p>
        <p className="mx-auto mt-8 max-w-3xl font-display text-2xl uppercase leading-tight text-[#d0a933] sm:text-3xl">
          Un perfume no se conoce en 10 segundos de mostrador. Se conoce usándolo
          un día completo, en tu piel, en tu clima.
        </p>
      </section>

      {/* ═══ Bloque 3 — La solución ═══ */}
      <section className="grid items-center gap-10 border-t border-white/5 py-16 sm:py-20 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Así funciona un decant
          </h2>
          <p className="text-base text-[#d6d1c7] sm:text-lg">
            Extraemos el perfume directamente del frasco original a un envase de
            viaje sellado. Mismo perfume, misma concentración, fracción del precio.
          </p>
          <ul className="flex flex-col gap-4">
            {[
              'Pruébalo una semana completa antes de decidir',
              'Rota 3-4 fragancias por el precio de medio frasco',
              'Perfecto para viajar, el gym o la cartera',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d0a933]/15">
                  <Check className="h-4 w-4 text-[#d0a933]" aria-hidden="true" />
                </span>
                <span className="text-base text-[#e7e3da]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-[#0d0d0d]"
          style={{ aspectRatio: '3/4' }}
        >
          <Image
            src="/proceso-decant.png"
            alt="Proceso de llenado de un decant desde el frasco original con jeringa"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ═══ Bloque 4 — Fragancias estrella ═══ */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <h2 className="text-center font-display text-3xl uppercase sm:text-4xl">
          Los 4 que todos están pidiendo
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          {STAR_FRAGRANCES.map((f) => (
            <article
              key={f.name}
              className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#181818] p-4 sm:p-5"
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-[#0d0d0d]" style={{ aspectRatio: '4/5' }}>
                <Image
                  src={f.image}
                  alt={`Decant de ${f.name}`}
                  fill
                  sizes="(max-width: 640px) 45vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg uppercase leading-tight text-[#d0a933] sm:text-xl">
                  {f.name}
                </h3>
                <p className="text-sm text-[#c9c4ba]">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ Bloque 5 — Precios y paquetes ═══ */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <h2 className="text-center font-display text-3xl uppercase sm:text-4xl">
          Elige tu jugada
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col gap-5 rounded-2xl p-6 ${
                p.featured
                  ? 'border-2 border-[#d0a933] bg-[#1d1a10] shadow-xl shadow-[#d0a933]/10 md:-translate-y-2'
                  : 'border border-white/10 bg-[#181818]'
              }`}
            >
              {p.featured && (
                <span className="self-start rounded-full bg-[#d0a933] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#121212]">
                  Más elegido
                </span>
              )}
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl uppercase leading-tight">
                  {p.name}
                </h3>
                <p className="font-display text-2xl text-[#d0a933]">{p.price}</p>
                {p.note && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#a8a29a]">
                    {p.note}
                  </p>
                )}
              </div>
              <p className="flex-1 text-sm text-[#c9c4ba]">{p.desc}</p>
              <WaLink
                ctaLabel={`pricing_${p.featured ? 'descubrimiento' : p.name}`}
                message={p.message}
                variant={p.featured ? 'primary' : 'ghost'}
                className="w-full text-sm"
              >
                {p.cta}
              </WaLink>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ Bloque 6 — Confianza / originalidad ═══ */}
      <section className="grid items-center gap-10 border-t border-white/5 py-16 sm:py-20 md:grid-cols-2">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-[#0d0d0d] md:order-2"
          style={{ aspectRatio: '3/4' }}
        >
          <Image
            src="/tienda-ep-profumo.jpeg"
            alt="Isla comercial de EP PROFUMO en Soriana Híper Minatitlán"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:order-1">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Directo del frasco original
          </h2>
          <p className="text-base text-[#d6d1c7] sm:text-lg">
            Cada decant sale de frascos 100% originales, sellados y verificables.
            Somos EP PROFUMO: tienda física en Soriana Híper Minatitlán y +2 años
            en el mundo de la perfumería árabe.
          </p>
        </div>
      </section>

      {/* ═══ Bloque 7 — Testimonios ═══ */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <h2 className="text-center font-display text-3xl uppercase sm:text-4xl">
          Lo que dicen los que ya probaron
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#181818] p-6"
            >
              <Stars />
              <blockquote className="flex-1 text-sm italic text-[#d6d1c7]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col">
                <span className="text-sm font-semibold text-[#d0a933]">
                  {t.author}
                </span>
                <span className="text-xs text-[#a8a29a]">{t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ═══ Bloque 8 — CTA final ═══ */}
      <section className="border-t border-white/5 py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-3xl font-display text-3xl uppercase leading-tight sm:text-5xl">
          Tu próxima fragancia favorita está a un decant de distancia
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#d6d1c7] sm:text-lg">
          169 opciones. Desde $104. Sin arrepentimientos de $2,000 pesos.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WaLink
            ctaLabel="final_cta"
            className="w-full max-w-md text-lg sm:w-auto"
          >
            Ver catálogo y pedir por WhatsApp →
          </WaLink>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#d0a933] underline-offset-4 hover:underline"
          >
            O explora el catálogo completo (169 fragancias) →
          </a>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-white/5 py-10 text-center text-xs text-[#7c766c]">
        <p>EP PROFUMO · Perfumería árabe · Soriana Híper Minatitlán, Veracruz.</p>
        <p className="mt-1">169 fragancias · Envíos a todo México · 100% originales</p>
      </footer>
    </main>
  );
}
