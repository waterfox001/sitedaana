import React from 'react';
import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import { HandDrawnHeart } from './HandDrawnDoodles';
import type { PageRoute } from './Header';

interface FooterProps {
  onNavigate: (path: PageRoute) => void;
}

const FOOTER_NAV: { label: string; path: PageRoute }[] = [
  { label: 'Início', path: '/' },
  { label: 'Coleções e Produtos', path: '/colecoes' },
  { label: 'Sobre nós e Galeria', path: '/sobre' },
  { label: 'Localização e Horários', path: '/localizacao' },
  { label: 'Contato e WhatsApp', path: '/contato' },
];

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: PageRoute
  ) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#232129]/10 bg-white">
      {/* Faixa rosa pastel institucional */}
      <div className="border-b border-[#232129]/8 bg-[#F7D6DF]/65 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <HandDrawnHeart className="h-6 w-6 shrink-0" color="#C95B42" />
            <div>
              <p className="font-display text-lg font-semibold text-[#232129]">
                Atendimento direto da nossa loja no Centro de Fortaleza
              </p>
              <p className="text-xs text-[#5A5666] sm:text-sm">
                Tire dúvidas, confira ofertas de Black Friday e combine sua visita pelo WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(
                'Olá! Vim pelo site da Atrividinhos e gostaria de falar com uma vendedora.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#13623F]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={STORE_CONFIG.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-xl border border-[#232129]/15 bg-white px-4 py-2 text-sm font-semibold text-[#232129] transition-colors hover:bg-[#FAF9F6]"
            >
              <Instagram className="h-4 w-4 shrink-0 text-[#C95B42]" aria-hidden="true" />
              <span>{STORE_CONFIG.contacts.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Marca oficial e apresentação */}
          <div className="lg:col-span-4">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="inline-flex items-center gap-3 font-display text-xl font-semibold text-[#232129]"
            >
              <img
                src={STORE_CONFIG.logoUrl}
                alt="Logo oficial Atrividinhos — Jeitinho esperto de se vestir"
                className="h-12 w-12 shrink-0 rounded-2xl border border-[#232129]/10 object-cover"
              />
              <div>
                <span className="block leading-tight">{STORE_CONFIG.brandName}</span>
                <span className="block font-sans text-xs font-medium text-[#5A5666]">
                  {STORE_CONFIG.brandSlogan}
                </span>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5A5666]">
              Loja de roupa infantil em Fortaleza e enxoval para recém-nascidos desde 10 de novembro de 2009. Moda infantil feminina e masculina de 0 a 6 anos no Centro de Fortaleza.
            </p>
            <p className="mt-4 text-xs font-medium text-[#5A5666]">
              Pagamentos: {STORE_CONFIG.paymentMethods.join(' · ')}
            </p>
          </div>

          {/* Links de páginas */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#232129]">
              Páginas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-[#5A5666] transition-colors hover:text-[#232129] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatos e Instagram */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#232129]">
              Contatos
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#5A5666]">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#232129] hover:text-[#18794E]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#18794E]" aria-hidden="true" />
                  <span className="tabular-nums">{STORE_CONFIG.contacts.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.contacts.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#232129]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#C95B42]" aria-hidden="true" />
                  <span className="tabular-nums">{STORE_CONFIG.contacts.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#232129]"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[#C95B42]" aria-hidden="true" />
                  <span>{STORE_CONFIG.contacts.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço e Horários */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#232129]">
              Endereço e horários
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[#5A5666]">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C95B42]" aria-hidden="true" />
                <span>{STORE_CONFIG.address.full}</span>
              </p>
              <ul className="space-y-1 text-xs">
                {STORE_CONFIG.openingHours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-2">
                    <span>{item.day}:</span>
                    <span className="font-semibold tabular-nums text-[#232129]">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#5A5666]">
                {STORE_CONFIG.address.parkingNote}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#232129]/8 pt-6 text-xs text-[#5A5666] sm:flex-row sm:items-center">
          <p>
            © {STORE_CONFIG.foundedYear}–{currentYear} {STORE_CONFIG.brandName}. Todos os direitos reservados.
          </p>
          <p>
            Loja infantil no Centro de Fortaleza · Enxovais e Moda de 0 a 6 anos
          </p>
        </div>
      </div>
    </footer>
  );
}
