import { Anton, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { GTM_ID } from '@/lib/constants';
import Attribution from '@/components/Attribution';
import AmbientBackground from '@/components/AmbientBackground';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://decants.epprofumo.com'),
  title: 'Decants de Perfumes Árabes desde $104 | EP PROFUMO',
  description:
    'Prueba las fragancias árabes más buscadas en decants desde $104 MXN antes de invertir en el frasco completo. 169 fragancias 100% originales, envíos a todo México. Descubre antes de comprar.',
  openGraph: {
    title: 'Decants de Perfumes Árabes desde $104 | EP PROFUMO',
    description:
      'Prueba antes de invertir en el frasco completo. 169 fragancias árabes originales en decants desde $104 MXN.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'EP PROFUMO',
  },
  robots: { index: true, follow: true },
  verification: {
    google: '3wnmPpfe1Zua65YojhDJH_uqXpKBQIPuxQ-3AakoDSI',
  },
};

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="es" className={`${anton.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Tag Manager — GA4 y Google Ads (AW-18215261322) se configuran DENTRO de GTM. */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Microsoft Clarity — heatmaps + session recordings (INP histórico). */}
        {clarityId ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${clarityId}");`}
          </Script>
        ) : null}
      </head>
      <body className="min-h-screen antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>

        {/* Captura de gclid → sessionStorage → atribución (fire-and-forget). */}
        <Attribution />

        {/* Fondo ambiental decorativo (detrás del contenido). */}
        <AmbientBackground />

        {children}
      </body>
    </html>
  );
}
