import { ImageIcon } from 'lucide-react';

/**
 * Marcador visible de imagen pendiente. El cliente sustituye por foto real luego.
 *
 * Props:
 *  - label: descripción de lo que irá ahí (se muestra como "FOTO: ...").
 *  - ratio: '16/9' | '4/5' | '1/1' (aspect-ratio del contenedor).
 *  - className: clases extra (p. ej. para hero responsive).
 */
export default function Placeholder({ label, ratio = '16/9', className = '' }) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#d0a933]/40 bg-[#1b1b1b] p-6 text-center ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-[#d0a933]/70" aria-hidden="true" />
      <span className="max-w-md text-xs font-semibold uppercase tracking-widest text-[#d0a933]">
        FOTO
      </span>
      <span className="max-w-md text-sm text-[#a8a29a]">{label}</span>
    </div>
  );
}
