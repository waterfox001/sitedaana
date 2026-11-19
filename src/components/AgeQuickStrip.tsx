import React from 'react';
import { AGE_GROUPS, type AgeGroupSlug, type CategorySlug } from '../data/catalog';

interface AgeQuickStripProps {
  activeAgeGroup: AgeGroupSlug | null;
  onSelectAgeGroup: (ageGroup: AgeGroupSlug) => void;
  onSelectCategory: (category: CategorySlug) => void;
}

const QUICK_CATEGORIES: { id: CategorySlug; label: string }[] = [
  { id: 'enxoval', label: 'Enxoval para Bebês' },
  { id: 'feminino', label: 'Moda Feminina' },
  { id: 'masculino', label: 'Moda Masculina' },
  { id: 'novidades', label: 'Novidades' },
];

export function AgeQuickStrip({
  activeAgeGroup,
  onSelectAgeGroup,
  onSelectCategory,
}: AgeQuickStripProps) {
  return (
    <section
      aria-label="Atalhos por categoria e faixa etária"
      className="border-b border-[#232129]/8 bg-white py-5"
    >
      <div className="mx-auto max-w-6xl space-y-3 px-4 sm:px-6 lg:px-8">
        {/* Linha horizontal de categorias da loja */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#232129]/6 pb-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-5">
            {QUICK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className="min-h-[36px] shrink-0 whitespace-nowrap text-xs font-semibold text-[#232129] underline-offset-4 transition-colors hover:text-[#C95B42] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42] sm:text-sm"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="text-xs font-medium text-[#5A5666]">
            Desde 2009 · Centro de Fortaleza · Pix e Cartões
          </p>
        </div>

        {/* Linha de seleção por idade */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
            Por idade:
          </span>
          {AGE_GROUPS.map((group) => {
            const isSelected = activeAgeGroup === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => onSelectAgeGroup(group.id)}
                className={`inline-flex min-h-[38px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42] sm:text-sm ${
                  isSelected
                    ? 'bg-[#232129] text-white'
                    : 'border border-[#232129]/12 bg-[#FAF9F6] text-[#232129] hover:border-[#C95B42]/40 hover:bg-[#FADCD4]/35'
                }`}
              >
                <span>{group.label}</span>
                <span
                  className={`text-[11px] font-normal ${
                    isSelected ? 'text-white/80' : 'text-[#5A5666]'
                  }`}
                >
                  ({group.shortDesc})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
