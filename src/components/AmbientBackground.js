/**
 * Fondo ambiental decorativo — glows dorados que derivan lento, grano de
 * película y vignette. Server Component sin JS: toda la animación vive en CSS
 * (transform/opacity → GPU), así no afecta el INP.
 *
 * Se coloca fijo detrás del contenido; el <main> va con z-index superior.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__blob ambient__blob--1" />
      <div className="ambient__blob ambient__blob--2" />
      <div className="ambient__blob ambient__blob--3" />
      <div className="ambient__grain" />
      <div className="ambient__vignette" />
    </div>
  );
}
