import React, { useState } from 'react';
import { ExternalLink, MessageCircle, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/catalog';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import { HandDrawnCloud, MotifIllustration } from './HandDrawnDoodles';
import { MediaFrame } from './MediaFrame';

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="galeria"
      className="border-y border-[#232129]/6 bg-[#FAF9F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#5A5666]">
              <span>Espaço e curadoria</span>
              <HandDrawnCloud className="h-5 w-9" />
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Galeria da loja
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5A5666] sm:text-base">
              Conheça os ambientes e seções da Atrividinhos. Acompanhe também nosso perfil oficial para ver registros recentes do estoque.
            </p>
          </div>

          <a
            href={STORE_CONFIG.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#232129]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#232129] transition-colors hover:border-[#C95B42]/40 hover:bg-[#FADCD4]/25 sm:self-auto"
          >
            <span>Instagram {STORE_CONFIG.contacts.instagramHandle}</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group flex flex-col rounded-3xl border border-[#232129]/8 bg-white p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42]"
            >
              <MediaFrame
                imageUrl={item.imageUrl}
                alt={item.imageAlt}
                motif={item.motif}
                accentBg={item.accentBg}
                aspectClassName="aspect-[4/3]"
                className="w-full"
              />
              <span className="mt-4 px-1 text-xs font-medium text-[#5A5666]">
                {item.categoryLabel}
              </span>
              <h3 className="mt-1 px-1 font-display text-lg font-semibold text-[#232129]">
                {item.title}
              </h3>
              <p className="mt-1.5 px-1 text-sm leading-relaxed text-[#5A5666]">
                {item.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de visualização da galeria */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="galeria-modal-titulo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#232129]/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-[#232129]/10 bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#5A5666]">
                  {selectedItem.categoryLabel}
                </p>
                <h3
                  id="galeria-modal-titulo"
                  className="mt-1 font-display text-2xl font-semibold text-[#232129]"
                >
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar visualização"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border border-[#232129]/12 text-[#232129] hover:bg-[#FAF9F6]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div
              className={`mt-5 overflow-hidden rounded-2xl border border-[#232129]/8 ${selectedItem.accentBg}`}
            >
              {selectedItem.imageUrl ? (
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.imageAlt}
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center p-6">
                  <MotifIllustration
                    motif={selectedItem.motif}
                    className="h-full w-full max-w-[260px]"
                  />
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#5A5666]">
              {selectedItem.caption}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(
                  `Olá! Vi "${selectedItem.title}" na galeria do site da Atrividinhos e gostaria de mais detalhes.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13623F]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Perguntar no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#232129]/15 px-5 py-2.5 text-sm font-semibold text-[#232129] hover:bg-[#FAF9F6]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
