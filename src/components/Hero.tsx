import React from 'react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import {
  HandDrawnCloud,
  HandDrawnFlower,
  HandDrawnHeart,
  HandDrawnRainbow,
  HandDrawnStar,
  HandDrawnSun,
  MotifIllustration,
} from './HandDrawnDoodles';

export function Hero() {
  const hasRealHeroImage = Boolean(STORE_CONFIG.hero.imageUrl);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      {/* Sutis elementos desenhados à mão no plano de fundo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto max-w-6xl">
        <HandDrawnStar
          className="animate-gentle-float absolute left-6 top-6 h-6 w-6 opacity-75 sm:left-10"
          color="#E5B74B"
        />
        <HandDrawnCloud className="absolute right-8 top-4 hidden h-10 w-16 opacity-70 lg:block" />
      </div>

      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Coluna textual */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="text-xs font-medium tracking-wide text-[#5A5666] sm:text-sm">
            Desde {STORE_CONFIG.foundedYear}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            Enxovais &amp; Moda Infantil (0 a 6 anos)
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            Centro de Fortaleza
          </p>

          <h1
            className="mt-4 max-w-xl font-display font-semibold tracking-tight text-[#232129] text-balance"
            style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.55rem)', lineHeight: 1.08 }}
          >
            {STORE_CONFIG.hero.title}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5A5666] sm:text-lg">
            {STORE_CONFIG.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#colecoes"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#C95B42] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24D36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42]"
            >
              <span>{STORE_CONFIG.hero.primaryCta}</span>
              <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={getWhatsAppUrl(
                'Olá! Vim pelo site da Atrividinhos e gostaria de conhecer as peças disponíveis.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#232129]/15 bg-[#FAF9F6] px-6 py-3 text-sm font-semibold text-[#232129] transition-colors duration-150 hover:border-[#18794E]/40 hover:bg-[#D7F0E5]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E]"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-[#18794E]" aria-hidden="true" />
              <span>{STORE_CONFIG.hero.secondaryCta}</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#232129]/8 pt-6 text-xs text-[#5A5666] sm:text-sm">
            <span>Rua General Sampaio, 909 · Loja 05</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento presencial e pelo WhatsApp</span>
          </div>
        </div>

        {/* Coluna editorial visual */}
        <div className="relative flex items-stretch lg:col-span-6">
          <div className="paper-canvas relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-[#232129]/10 p-6 sm:p-8">
            {/* Ilustrações delicadas nos cantos */}
            <div className="flex items-start justify-between">
              <HandDrawnRainbow className="h-14 w-24 sm:h-16 sm:w-28" />
              <HandDrawnSun className="h-12 w-12 sm:h-14 sm:w-14" />
            </div>

            {/* Quadro principal para fotografia real ou composição ilustrada */}
            <div className="my-4 flex flex-1 items-center justify-center">
              {hasRealHeroImage ? (
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#232129]/10 bg-white">
                  <img
                    src={STORE_CONFIG.hero.imageUrl!}
                    alt={STORE_CONFIG.hero.imageAlt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-[#232129]/8 bg-white p-4">
                    <MotifIllustration
                      motif="enxoval-kit"
                      className="h-32 w-full sm:h-36"
                    />
                    <span className="mt-2 text-center font-display text-sm font-medium text-[#232129]">
                      Enxoval Recém-Nascido
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center rounded-2xl border border-[#232129]/8 bg-white p-4">
                    <MotifIllustration
                      motif="feminino-vestido"
                      className="h-32 w-full sm:h-36"
                    />
                    <span className="mt-2 text-center font-display text-sm font-medium text-[#232129]">
                      Moda Infantil Feminina
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-between gap-4 rounded-2xl border border-[#232129]/8 bg-white px-5 py-3">
                    <div className="h-24 w-32 shrink-0">
                      <MotifIllustration
                        motif="masculino-conjunto"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-base font-medium text-[#232129]">
                        Moda Masculina &amp; Novidades
                      </span>
                      <span className="mt-1 text-xs leading-relaxed text-[#5A5666]">
                        Do tamanho bebê até os 6 anos, com peças pensadas para cada fase.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé ilustrado do quadro */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <HandDrawnFlower className="h-7 w-7" />
                <HandDrawnHeart className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-[#5A5666]">
                Galeria Professor Brandão · Fortaleza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
