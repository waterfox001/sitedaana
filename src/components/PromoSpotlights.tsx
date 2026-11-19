import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { CategorySlug } from '../data/catalog';
import { getWhatsAppUrl } from '../data/storeConfig';

interface PromoSpotlightsProps {
  onSelectCategory: (category: CategorySlug) => void;
}

export function PromoSpotlights({ onSelectCategory }: PromoSpotlightsProps) {
  return (
    <section
      aria-label="Destaques comerciais"
      className="bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Card 1: Lista de Enxoval pelo WhatsApp */}
        <article className="group relative overflow-hidden rounded-3xl border border-[#232129]/10 bg-[#FAF9F6]">
          <div className="grid h-full sm:grid-cols-12">
            <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
                  Atendimento Personalizado
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#232129]">
                  Monte o enxoval do bebê sem complicação
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5A5666]">
                  Nossa equipe ajuda a escolher saída de maternidade, bodies, mantas e primeiros cuidados de acordo com sua necessidade.
                </p>
              </div>

              <a
                href={getWhatsAppUrl(
                  'Olá! Estou montando o enxoval do bebê e gostaria de ajuda para escolher as peças na Atrividinhos.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13623F]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Montar enxoval no WhatsApp</span>
              </a>
            </div>

            <div className="min-h-[210px] overflow-hidden sm:col-span-5">
              <img
                src="/src/assets/images/cat_bebe_recem_nascido_1795093117695.jpg"
                alt="Recém-nascido usando conjunto macio de enxoval da Atrividinhos"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </article>

        {/* Card 2: Coleção Infantil 0 a 6 anos */}
        <article className="group relative overflow-hidden rounded-3xl border border-[#232129]/10 bg-[#FAF9F6]">
          <div className="grid h-full sm:grid-cols-12">
            <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
                  Black Friday · Moda Infantil 0 a 6 anos
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#232129]">
                  Looks fresquinhos com ofertas no Centro de Fortaleza
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5A5666]">
                  Vestidos, conjuntos leves, camisas polo e bermudas com condições especiais na Galeria Professor Brandão e pelo WhatsApp.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectCategory('novidades')}
                className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 whitespace-nowrap rounded-xl bg-[#232129] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3A3744]"
              >
                <span>Ver novidades da loja</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-[210px] overflow-hidden sm:col-span-5">
              <img
                src="/src/assets/images/cat_crianca_feminina_1795093118509.jpg"
                alt="Criança sorrindo com conjunto infantil da coleção Atrividinhos"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
