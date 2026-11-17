import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { STORE_CONFIG, getWhatsAppProductUrl } from '../data/storeConfig';
import { HandDrawnSun } from './HandDrawnDoodles';
import { MediaFrame } from './MediaFrame';

export function NewArrivals() {
  const newProducts = PRODUCTS.filter((item) => item.isNew).slice(0, 4);

  return (
    <section
      id="novidades"
      className="border-y border-[#232129]/6 bg-[#FAF9F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#5A5666]">
              <span>Recém-chegados</span>
              <HandDrawnSun className="h-5 w-5" />
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Novidades da loja
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5A5666] sm:text-base">
              Destaques recentes em enxovais e confecções infantis. Fale com nossa equipe para receber fotos reais das peças disponíveis hoje na loja.
            </p>
          </div>

          <a
            href={STORE_CONFIG.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#232129]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#232129] transition-colors hover:border-[#C95B42]/40 hover:bg-[#FADCD4]/25 sm:self-auto"
          >
            <span>Ver no Instagram {STORE_CONFIG.contacts.instagramHandle}</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-3xl border border-[#232129]/8 bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MediaFrame
                imageUrl={item.imageUrl}
                alt={item.imageAlt}
                motif={item.motif}
                accentBg={item.accentBg}
                aspectClassName="aspect-[4/3]"
              />

              <div className="mt-4 flex flex-1 flex-col px-1">
                <span className="text-xs font-medium text-[#5A5666]">
                  {item.categoryLabel}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-[#232129]">
                  {item.name}
                </h3>
                {item.price && item.price.trim() !== '' && (
                  <p className="mt-2 text-sm font-semibold tabular-nums text-[#232129]">
                    {item.price}
                  </p>
                )}

                <a
                  href={getWhatsAppProductUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#18794E]/25 bg-[#D7F0E5]/45 px-3 py-2 text-xs font-semibold text-[#135A3B] transition-colors duration-150 hover:bg-[#18794E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E] sm:text-sm"
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
