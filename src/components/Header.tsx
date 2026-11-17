import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import { BrandLogoMark } from './HandDrawnDoodles';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#232129]/8 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Zona 1: Marca (elemento único em uma linha) */}
        <a
          href="#inicio"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-[#232129] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C95B42]"
        >
          <BrandLogoMark className="h-8 w-8 shrink-0" />
          <span>{STORE_CONFIG.brandName}</span>
        </a>

        {/* Zona 2: Links de navegação concisos em linha única */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#5A5666] underline-offset-4 transition-colors duration-150 hover:text-[#232129] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C95B42]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal (WhatsApp) + gatilho mobile */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={getWhatsAppUrl('Olá! Vim pelo site da Atrividinhos e gostaria de atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E] sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="menu-mobile"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[#232129]/12 text-[#232129] transition-colors hover:bg-[#FAF9F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B42] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-[#232129]/8 bg-white px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-[#232129] transition-colors hover:bg-[#FAF9F6]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
