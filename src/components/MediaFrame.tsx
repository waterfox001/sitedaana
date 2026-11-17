import React, { useState } from 'react';
import type { IllustrationMotif } from '../data/catalog';
import { MotifIllustration } from './HandDrawnDoodles';

interface MediaFrameProps {
  imageUrl: string | null;
  alt: string;
  motif: IllustrationMotif;
  accentBg?: string;
  aspectClassName?: string;
  captionHint?: string;
  className?: string;
}

/**
 * Componente resiliente para imagens da loja:
 * - Quando `imageUrl` está preenchido com uma foto real, renderiza <img> otimizado.
 * - Enquanto não há foto real configurada (ou se houver erro de carregamento),
 *   exibe uma moldura ilustrada à mão elegante e acolhedora.
 */
export function MediaFrame({
  imageUrl,
  alt,
  motif,
  accentBg = 'bg-[#FAF9F6]',
  aspectClassName = 'aspect-[4/3]',
  captionHint,
  className = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  const showRealImage = Boolean(imageUrl && !hasError);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#232129]/8 ${accentBg} ${aspectClassName} ${className}`}
    >
      {showRealImage ? (
        <img
          src={imageUrl!}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-4 sm:p-5">
          <div className="h-full w-full max-w-[230px] flex items-center justify-center">
            <MotifIllustration motif={motif} className="h-full w-full object-contain" />
          </div>
          {captionHint && (
            <span className="mt-1 text-center text-[11px] font-medium tracking-wide text-[#5A5666]">
              {captionHint}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
