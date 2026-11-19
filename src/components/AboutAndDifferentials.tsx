import React from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import {
  HandDrawnFlower,
  HandDrawnHeart,
  HandDrawnRainbow,
  HandDrawnStar,
  MotifIllustration,
} from './HandDrawnDoodles';

const ACCENT_SURFACE: Record<
  (typeof STORE_CONFIG.differentials)[number]['accent'],
  string
> = {
  coral: 'bg-[#FADCD4]/55 text-[#8A3624]',
  yellow: 'bg-[#FDF0C4]/75 text-[#7A5910]',
  blue: 'bg-[#D9ECFA]/70 text-[#26567D]',
  mint: 'bg-[#D7F0E5]/70 text-[#195C42]',
  pink: 'bg-[#F7D6DF]/65 text-[#87324C]',
  lilac: 'bg-[#EAE2F8]/75 text-[#4E3580]',
};

export function AboutAndDifferentials() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Sobre a Atrividinhos */}
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
              <span>Sobre a Atrividinhos</span>
              <HandDrawnHeart className="h-4 w-4" />
            </div>

            <h1 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-[#232129] text-balance sm:text-4xl">
              {STORE_CONFIG.about.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5A5666] sm:text-lg">
              {STORE_CONFIG.about.text}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#232129]/8 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#5A5666]">
                  Início das atividades
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-[#232129]">
                  {STORE_CONFIG.foundedDate}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#5A5666]">
                  Formas de pagamento na loja
                </p>
                <p className="mt-1 text-sm font-medium text-[#232129]">
                  {STORE_CONFIG.paymentMethods.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Quadro acolhedor ilustrado */}
          <div className="flex items-stretch lg:col-span-5">
            <div className="paper-canvas flex w-full flex-col justify-between rounded-3xl border border-[#232129]/10 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <HandDrawnFlower className="h-9 w-9" />
                <HandDrawnStar className="h-6 w-6" color="#52A686" />
              </div>

              {STORE_CONFIG.about.imageUrl ? (
                <div className="my-5 aspect-[4/3] overflow-hidden rounded-2xl border border-[#232129]/10 bg-white">
                  <img
                    src={STORE_CONFIG.about.imageUrl}
                    alt={STORE_CONFIG.about.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="my-5 flex flex-1 flex-col items-center justify-center rounded-2xl border border-[#232129]/8 bg-white p-6">
                  <MotifIllustration
                    motif="galeria-fachada"
                    className="h-44 w-full"
                  />
                  <p className="mt-2 text-center font-display text-base font-medium text-[#232129]">
                    Tradição e carinho no Centro de Fortaleza
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#5A5666]">
                  De 0 a 6 anos · Masculino &amp; Feminino
                </span>
                <HandDrawnRainbow className="h-10 w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-20 border-t border-[#232129]/8 pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#5A5666]">
                Por que escolher a Atrividinhos
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
                Nossos diferenciais
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5A5666]">
              Uma curadoria construída com proximidade e praticidade para facilitar o dia a dia das famílias.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORE_CONFIG.differentials.map((item) => (
              <div
                key={item.index}
                className="flex flex-col rounded-3xl border border-[#232129]/10 bg-[#FAF9F6] p-6"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-xl px-3 py-1 font-display text-sm font-semibold tabular-nums ${ACCENT_SURFACE[item.accent]}`}
                >
                  {item.index}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#232129]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5666]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
