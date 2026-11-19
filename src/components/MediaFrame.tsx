import React, { useState } from 'react';
import type { IllustrationMotif } from '../data/catalog';
import { MotifIllustration } from './HandDrawnDoodles';

interface MediaFrameProps {
  imageUrl: string | null;
  secondaryImageUrl?: string | null;
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
 * - Se `secondaryImageUrl` também estiver presente, faz transição suave no hover do card.
 * - Em caso de erro ou ausência de foto, exibe a moldura ilustrada à mão.
 */
export function MediaFrame({
  imageUrl,
  secondaryImageUrl,
  alt,
  motif,
  accentBg = 'bg-[#FAF9F6]',
  aspectClassName = 'aspect-[4/3]',
  captionHint,
  className = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [hasSecondaryError, setHasSecondaryError] = useState(false);

  const showRealImage = Boolean(imageUrl && !hasError);
  const showSecondaryImage = Boolean(
    showRealImage && secondaryImageUrl && !hasSecondaryError
  );

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#232129]/8 ${accentBg} ${aspectClassName} ${className}`}
    >
      {showRealImage ? (
        <>
          <img
            src={imageUrl!}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {showSecondaryImage && (
            <img
              src={secondaryImageUrl!}
              alt={`${alt} — detalhe da peça`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setHasSecondaryError(true)}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-4 sm:p-5">
          <div className="flex h-full w-full max-w-[230px] items-center justify-center">
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
