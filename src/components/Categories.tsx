import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, type CategorySlug } from '../data/catalog';
import { HandDrawnFlower, HandDrawnStar } from './HandDrawnDoodles';
import { MediaFrame } from './MediaFrame';

interface CategoriesProps {
  onSelectCategory: (category: CategorySlug) => void;
}

export function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section
      id="categorias"
      className="border-b border-[#232129]/6 bg-[#FAF9F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Introdução editorial em fundo claro com título descontraído em coral/vermelho */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
            <HandDrawnFlower className="h-6 w-6" />
            <span>Coleções Atrividinhos · 0 a 6 anos</span>
            <HandDrawnStar className="h-4 w-4" color="#E07A5F" />
          </div>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#C95B42] text-balance sm:text-4xl lg:text-[2.6rem]">
            Roupinhas e enxovais em Fortaleza para cada fase com leveza
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#5A5666] sm:text-base">
            Loja infantil no Centro de Fortaleza especializada em enxoval para recém-nascidos e moda infantil feminina e masculina de 0 a 6 anos.
          </p>
        </div>

        {/* Cards com crianças e bebês usando as peças */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="group flex flex-col rounded-3xl border border-[#232129]/8 bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MediaFrame
                imageUrl={category.imageUrl}
                alt={category.imageAlt}
                motif={category.motif}
                accentBg={category.accentBg}
                aspectClassName="aspect-[4/3]"
              />

              <div className="mt-4 flex flex-1 flex-col px-1">
                <span className="text-xs font-medium text-[#5A5666]">
                  {category.ageRange}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-[#232129]">
                  {category.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A5666]">
                  {category.description}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  className="mt-5 inline-flex min-h-[42px] w-full items-center justify-between rounded-xl border border-[#232129]/12 bg-[#FAF9F6] px-4 py-2.5 text-sm font-semibold text-[#232129] transition-colors duration-150 hover:border-[#C95B42] hover:bg-[#C95B42] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42]"
                >
                  <span>Ver coleção</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
