import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { getWhatsAppProductUrl } from '../data/storeConfig';
import { MediaFrame } from './MediaFrame';

interface HomeFeaturedProductsProps {
  onViewAll: () => void;
}

export function HomeFeaturedProducts({ onViewAll }: HomeFeaturedProductsProps) {
  const featured = PRODUCTS.filter((p) => p.isNew).slice(0, 3);

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
              Destaques para comprar pelo WhatsApp
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Escolhas mais procuradas da loja
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex min-h-[42px] shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#232129]/15 bg-[#FAF9F6] px-4 py-2 text-sm font-semibold text-[#232129] transition-colors hover:border-[#C95B42] hover:bg-[#C95B42] hover:text-white sm:self-auto"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col rounded-3xl border border-[#232129]/10 bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MediaFrame
                imageUrl={product.imageUrl}
                secondaryImageUrl={product.secondaryImageUrl}
                alt={product.imageAlt}
                motif={product.motif}
                accentBg={product.accentBg}
                aspectClassName="aspect-[4/3]"
              />

              <div className="mt-4 flex flex-1 flex-col px-1">
                <div className="flex items-center gap-2 text-xs font-medium text-[#5A5666]">
                  <span>{product.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.ageLabel}</span>
                </div>

                <h3 className="mt-1.5 font-display text-xl font-semibold text-[#232129]">
                  {product.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A5666]">
                  {product.description}
                </p>

                {product.price && product.price.trim() !== '' && (
                  <p className="mt-3 text-base font-semibold tabular-nums text-[#232129]">
                    {product.price}
                  </p>
                )}

                <a
                  href={getWhatsAppProductUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13623F]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Consultar pelo WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
