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

  const slide = banners[activeSlide];
  const HeadingTag = activeSlide === 0 ? 'h1' : 'h2';

  return (
    <section
      id="inicio"
      aria-label="Campanhas e coleções em destaque da Atrividinhos"
      className="bg-white pb-4 pt-3 sm:pb-6 sm:pt-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#232129] text-white sm:rounded-3xl">
          <div className="relative flex flex-col lg:min-h-[540px] lg:justify-between">
            {/* Fotografia: bloco superior nítido no mobile; fundo completo no desktop */}
            <div className="relative h-60 w-full shrink-0 overflow-hidden sm:h-72 lg:absolute lg:inset-0 lg:h-full">
              <img
                key={slide.id}
                src={slide.imageUrl}
                alt={slide.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-[74%_20%] sm:object-[78%_18%] lg:object-right"
              />

              {/* Degradê suave conectando foto e bloco de texto sem cobrir o rosto da criança no mobile */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#232129] via-[#232129]/15 to-transparent lg:bg-gradient-to-r lg:from-[#232129] lg:via-[#232129]/90 lg:to-transparent"
              />
            </div>

            {/* Conteúdo textual e CTAs responsivos */}
            <div className="relative z-10 flex flex-1 flex-col justify-between p-5 pt-2 sm:p-8 sm:pt-4 lg:max-w-[56%] lg:justify-center lg:p-14">
              <div>
                <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                  <HandDrawnRainbow className="h-7 w-11 shrink-0 sm:h-9 sm:w-14" />
                  <HandDrawnStar className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" color="#FDF0C4" />
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#FDF0C4] sm:text-sm">
                  {slide.kicker}
                </p>

                <HeadingTag
                  className="mt-2 font-display font-semibold tracking-tight text-white text-balance"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.8vw, 3.35rem)',
                    lineHeight: 1.1,
                  }}
                >
                  {slide.title}
                </HeadingTag>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base lg:text-lg">
                  {slide.subtitle}
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(slide.targetCategory)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#C95B42] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#D86B52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-6"
                  >
                    <span>{slide.primaryCta}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>

                  <a
                    href={getWhatsAppUrl(slide.secondaryWhatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors duration-150 hover:border-white/50 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                  >
                    <MessageCircle
                      className="h-4 w-4 shrink-0 text-[#8AE3B8]"
                      aria-hidden="true"
                    />
                    <span>{slide.secondaryCta}</span>
                  </a>
                </div>
              </div>

              {/* Controles do carrossel alinhados no fluxo sem sobrepor botões ou o WhatsApp flutuante */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4 sm:mt-8 lg:justify-start lg:gap-6 lg:border-t-0 lg:pt-0">
                <div
                  role="tablist"
                  aria-label="Escolher campanha do banner"
                  className="flex items-center gap-2"
                >
                  {banners.map((item, index) => {
                    const isSelected = index === activeSlide;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        aria-label={`Mostrar campanha ${index + 1}: ${item.title}`}
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
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Próxima campanha"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
