import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import type { CategorySlug } from '../data/catalog';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import {
  HandDrawnRainbow,
  HandDrawnStar,
} from './HandDrawnDoodles';

interface HeroProps {
  onSelectCategory: (category: CategorySlug) => void;
}

export function Hero({ onSelectCategory }: HeroProps) {
  const banners = STORE_CONFIG.heroBanners;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [banners.length, isPaused]);

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      id="inicio"
      aria-label="Campanhas e coleções em destaque da Atrividinhos"
      className="bg-white pb-4 pt-3 sm:pb-6 sm:pt-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#232129] text-white">
          <div className="relative min-h-[480px] sm:min-h-[510px] lg:min-h-[540px]">
            {banners.map((slide, index) => {
              const isCurrent = index === activeSlide;
              const HeadingTag = index === 0 ? 'h1' : 'h2';

              return (
                <div
                  key={slide.id}
                  aria-hidden={!isCurrent}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isCurrent
                      ? 'z-10 opacity-100'
                      : 'pointer-events-none z-0 opacity-0'
                  }`}
                >
                  {/* Fotografia em camada absoluta ao fundo para nunca empurrar o texto */}
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover object-center sm:object-right"
                  />

                  {/* Scrim escuro elegante para leitura confortável */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#232129] via-[#232129]/82 to-[#232129]/30 lg:bg-gradient-to-r lg:from-[#232129] lg:via-[#232129]/90 lg:to-transparent"
                  />

                  {/* Conteúdo textual e CTAs visíveis acima da imagem */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-20 sm:p-10 sm:pb-20 lg:max-w-[56%] lg:justify-center lg:p-14 lg:pb-20">
                    <div className="mb-3 flex items-center gap-3">
                      <HandDrawnRainbow className="h-9 w-14 shrink-0" />
                      <HandDrawnStar className="h-5 w-5 shrink-0" color="#FDF0C4" />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FDF0C4] sm:text-sm">
                      {slide.kicker}
                    </p>

                    <HeadingTag
                      className="mt-2.5 font-display font-semibold tracking-tight text-white text-balance"
                      style={{
                        fontSize: 'clamp(2rem, 3.8vw, 3.35rem)',
                        lineHeight: 1.08,
                      }}
                    >
                      {slide.title}
                    </HeadingTag>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                      <button
                        type="button"
                        onClick={() => onSelectCategory(slide.targetCategory)}
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#C95B42] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#D86B52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </button>

                      <a
                        href={getWhatsAppUrl(slide.secondaryWhatsAppMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors duration-150 hover:border-white/50 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <MessageCircle
                          className="h-4 w-4 shrink-0 text-[#8AE3B8]"
                          aria-hidden="true"
                        />
                        <span>{slide.secondaryCta}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controles agrupados à esquerda para não colidir com o botão flutuante do WhatsApp */}
          <div className="absolute bottom-5 left-6 z-20 flex items-center gap-5 sm:bottom-6 sm:left-10 lg:left-14">
            <div
              role="tablist"
              aria-label="Escolher campanha do banner"
              className="flex items-center gap-2"
            >
              {banners.map((slide, index) => {
                const isSelected = index === activeSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Mostrar campanha ${index + 1}: ${slide.title}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isSelected
                        ? 'w-8 bg-[#FDF0C4]'
                        : 'w-2.5 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Campanha anterior"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-[#232129]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#232129] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próxima campanha"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-[#232129]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#232129] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
