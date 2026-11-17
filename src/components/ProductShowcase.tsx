import React, { useMemo, useState } from 'react';
import { MessageCircle, Search, X } from 'lucide-react';
import { PRODUCTS, type CategorySlug } from '../data/catalog';
import { getWhatsAppProductUrl } from '../data/storeConfig';
import { MediaFrame } from './MediaFrame';

export type FilterOption = 'todos' | CategorySlug;

interface ProductShowcaseProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const FILTER_TABS: { id: FilterOption; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'enxoval', label: 'Enxoval para Bebês' },
  { id: 'feminino', label: 'Moda Feminina' },
  { id: 'masculino', label: 'Moda Masculina' },
  { id: 'novidades', label: 'Novidades' },
];

export function ProductShowcase({
  activeFilter,
  onFilterChange,
}: ProductShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeFilter === 'todos'
          ? true
          : activeFilter === 'novidades'
          ? Boolean(product.isNew)
          : product.category === activeFilter;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.categoryLabel.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeFilter, searchTerm]);

  return (
    <section id="colecoes" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#5A5666]">
              Vitrine de produtos
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Coleções para vestir com carinho
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5A5666] sm:text-base">
              Confira nossas linhas disponíveis na loja. Clique em consultar pelo WhatsApp para verificar modelos, tamanhos e valores diretamente com nossa equipe.
            </p>
          </div>

          {/* Busca rápida */}
          <div className="relative w-full lg:w-72">
            <label htmlFor="vitrine-busca" className="sr-only">
              Buscar peça na vitrine
            </label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A5666]"
              aria-hidden="true"
            />
            <input
              id="vitrine-busca"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar peça ou linha..."
              className="min-h-[44px] w-full rounded-xl border border-[#232129]/15 bg-[#FAF9F6] pl-10 pr-9 text-sm text-[#232129] placeholder:text-[#5A5666]/70 focus:border-[#C95B42] focus:bg-white focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Limpar busca"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5A5666] hover:bg-[#232129]/6 hover:text-[#232129]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Filtros segmentados */}
        <div
          role="tablist"
          aria-label="Filtrar vitrine por categoria"
          className="mt-8 flex flex-wrap gap-2 border-b border-[#232129]/8 pb-5"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onFilterChange(tab.id)}
                className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42] sm:text-sm ${
                  isActive
                    ? 'bg-[#232129] text-white'
                    : 'bg-[#FAF9F6] text-[#5A5666] hover:bg-[#232129]/6 hover:text-[#232129]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grade de produtos */}
        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-[#232129]/10 bg-[#FAF9F6] p-10 text-center">
            <p className="font-display text-xl font-semibold text-[#232129]">
              Nenhuma linha encontrada com esse filtro.
            </p>
            <p className="mt-2 text-sm text-[#5A5666]">
              Você pode limpar os filtros ou perguntar diretamente à nossa equipe pelo WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                onFilterChange('todos');
                setSearchTerm('');
              }}
              className="mt-5 inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#232129] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3A3744]"
            >
              Ver todas as coleções
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col rounded-3xl border border-[#232129]/10 bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MediaFrame
                  imageUrl={product.imageUrl}
                  alt={product.imageAlt}
                  motif={product.motif}
                  accentBg={product.accentBg}
                  aspectClassName="aspect-[4/3]"
                />

                <div className="mt-4 flex flex-1 flex-col px-1">
                  {/* Metadado limpo sem pílulas */}
                  <div className="flex items-center gap-2 text-xs font-medium text-[#5A5666]">
                    <span>{product.categoryLabel}</span>
                    {product.isNew && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#C95B42]">Novidade</span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-1.5 font-display text-xl font-semibold text-[#232129]">
                    {product.name}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A5666]">
                    {product.description}
                  </p>

                  {/* Preço exibido SOMENTE quando fornecido */}
                  {product.price && product.price.trim() !== '' && (
                    <p className="mt-3 text-base font-semibold tabular-nums text-[#232129]">
                      {product.price}
                    </p>
                  )}

                  <a
                    href={getWhatsAppProductUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Consultar pelo WhatsApp</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
