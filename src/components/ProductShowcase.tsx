import React, { useMemo, useState } from 'react';
import { Eye, MessageCircle, Search, X } from 'lucide-react';
import {
  AGE_GROUPS,
  PRODUCTS,
  type AgeGroupSlug,
  type CategorySlug,
  type ProductItem,
} from '../data/catalog';
import { STORE_CONFIG, getWhatsAppProductUrl } from '../data/storeConfig';
import { MediaFrame } from './MediaFrame';

export type FilterOption = 'todos' | CategorySlug;

interface ProductShowcaseProps {
  activeFilter: FilterOption;
  activeAgeGroup: AgeGroupSlug;
  onFilterChange: (filter: FilterOption) => void;
  onAgeGroupChange: (ageGroup: AgeGroupSlug) => void;
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
  activeAgeGroup,
  onFilterChange,
  onAgeGroupChange,
}: ProductShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(
    null
  );
  const [activeModalImage, setActiveModalImage] = useState<'primary' | 'secondary'>(
    'primary'
  );

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

      const matchesAge =
        activeAgeGroup === 'todas'
          ? true
          : product.ageGroups.includes(activeAgeGroup);

      if (!matchesAge) return false;

      if (!normalizedQuery) return true;

      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.categoryLabel.toLowerCase().includes(normalizedQuery) ||
        product.ageLabel.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeFilter, activeAgeGroup, searchTerm]);

  const openQuickView = (product: ProductItem) => {
    setActiveModalImage('primary');
    setQuickViewProduct(product);
  };

  return (
    <section id="colecoes" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
              Vitrine completa · 0 a 6 anos
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Coleções para vestir com carinho
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5A5666] sm:text-base">
              Escolha as peças desejadas e fale direto pelo WhatsApp para consultar disponibilidade de tamanhos, estampas do dia e valores.
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

        {/* Barra de filtros por Categoria e Idade */}
        <div className="mt-8 flex flex-col gap-4 border-b border-[#232129]/8 pb-5 md:flex-row md:items-center md:justify-between">
          <div
            role="tablist"
            aria-label="Filtrar vitrine por categoria"
            className="flex flex-wrap gap-2"
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

          <div className="flex items-center gap-2">
            <label
              htmlFor="filtro-idade"
              className="shrink-0 text-xs font-medium text-[#5A5666]"
            >
              Idade:
            </label>
            <select
              id="filtro-idade"
              value={activeAgeGroup}
              onChange={(e) => onAgeGroupChange(e.target.value as AgeGroupSlug)}
              className="min-h-[40px] rounded-xl border border-[#232129]/15 bg-[#FAF9F6] px-3 py-1.5 text-xs font-semibold text-[#232129] focus:border-[#C95B42] focus:bg-white focus:outline-none sm:text-sm"
            >
              {AGE_GROUPS.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.label} ({group.shortDesc})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grade de produtos */}
        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-[#232129]/10 bg-[#FAF9F6] p-10 text-center">
            <p className="font-display text-xl font-semibold text-[#232129]">
              Nenhuma linha encontrada com esses filtros.
            </p>
            <p className="mt-2 text-sm text-[#5A5666]">
              Limpe os filtros abaixo ou pergunte diretamente à nossa equipe pelo WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                onFilterChange('todos');
                onAgeGroupChange('todas');
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
                <div className="relative">
                  <MediaFrame
                    imageUrl={product.imageUrl}
                    secondaryImageUrl={product.secondaryImageUrl}
                    alt={product.imageAlt}
                    motif={product.motif}
                    accentBg={product.accentBg}
                    aspectClassName="aspect-[4/3]"
                  />
                  <button
                    type="button"
                    onClick={() => openQuickView(product)}
                    aria-label={`Ver detalhes de ${product.name}`}
                    className="absolute bottom-3 right-3 inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border border-[#232129]/12 bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#232129] shadow-xs transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42]"
                  >
                    <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Detalhes</span>
                  </button>
                </div>

                <div className="mt-4 flex flex-1 flex-col px-1">
                  {/* Metadado limpo sem pílulas */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#5A5666]">
                    <span>{product.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.ageLabel}</span>
                    {product.isNew && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#C95B42]">Novidade</span>
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

      {/* Modal de visualização rápida do produto */}
      {quickViewProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="produto-modal-titulo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#232129]/60 p-4 backdrop-blur-xs"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[#232129]/10 bg-white p-5 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#5A5666]">
                  {quickViewProduct.categoryLabel} · {quickViewProduct.ageLabel}
                </p>
                <h3
                  id="produto-modal-titulo"
                  className="mt-1 font-display text-2xl font-semibold text-[#232129]"
                >
                  {quickViewProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                aria-label="Fechar detalhes"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border border-[#232129]/12 text-[#232129] hover:bg-[#FAF9F6]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 grid gap-6 sm:grid-cols-12">
              <div className="sm:col-span-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#232129]/8 bg-[#FAF9F6]">
                  <img
                    src={
                      activeModalImage === 'secondary' &&
                      quickViewProduct.secondaryImageUrl
                        ? quickViewProduct.secondaryImageUrl
                        : quickViewProduct.imageUrl || ''
                    }
                    alt={quickViewProduct.imageAlt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {quickViewProduct.secondaryImageUrl && (
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalImage('primary')}
                      className={`min-h-[36px] flex-1 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeModalImage === 'primary'
                          ? 'border-[#232129] bg-[#232129] text-white'
                          : 'border-[#232129]/12 bg-[#FAF9F6] text-[#232129]'
                      }`}
                    >
                      No corpo
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveModalImage('secondary')}
                      className={`min-h-[36px] flex-1 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeModalImage === 'secondary'
                          ? 'border-[#232129] bg-[#232129] text-white'
                          : 'border-[#232129]/12 bg-[#FAF9F6] text-[#232129]'
                      }`}
                    >
                      Detalhe da peça
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between sm:col-span-6">
                <div>
                  <p className="text-sm leading-relaxed text-[#5A5666]">
                    {quickViewProduct.description}
                  </p>

                  {quickViewProduct.price && quickViewProduct.price.trim() !== '' && (
                    <p className="mt-4 text-xl font-semibold tabular-nums text-[#232129]">
                      {quickViewProduct.price}
                    </p>
                  )}

                  <div className="mt-5 space-y-2 border-t border-[#232129]/8 pt-4 text-xs text-[#5A5666]">
                    <p>
                      <strong className="text-[#232129]">Pagamentos na loja:</strong>{' '}
                      {STORE_CONFIG.paymentMethods.join(' · ')}
                    </p>
                    <p>
                      <strong className="text-[#232129]">Retirada / Consulta:</strong>{' '}
                      {STORE_CONFIG.address.street}, {STORE_CONFIG.address.building}
                    </p>
                  </div>
                </div>

                <a
                  href={getWhatsAppProductUrl(quickViewProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#18794E] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#13623F]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Consultar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
