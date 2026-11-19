import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';

export type PageRoute = '/' | '/colecoes' | '/sobre' | '/localizacao' | '/contato';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

const NAV_LINKS: { label: string; path: PageRoute }[] = [
  { label: 'Início', path: '/' },
  { label: 'Coleções', path: '/colecoes' },
  { label: 'Sobre nós', path: '/sobre' },
  { label: 'Localização', path: '/localizacao' },
  { label: 'Contato', path: '/contato' },
];

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: PageRoute
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#232129]/8 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Zona 1: Logotipo oficial + marca em linha única */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-[#232129] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C95B42]"
        >
          <img
            src={STORE_CONFIG.logoUrl}
            alt="Logo Atrividinhos"
            className="h-9 w-9 shrink-0 rounded-full border border-[#232129]/12 object-cover sm:h-10 sm:w-10"
          />
          <span>{STORE_CONFIG.brandName}</span>
        </a>

        {/* Zona 2: Links de navegação concisos em linha única */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`shrink-0 whitespace-nowrap text-sm underline-offset-8 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C95B42] ${
                  isActive
                    ? 'font-semibold text-[#C95B42] underline decoration-2'
                    : 'font-medium text-[#5A5666] hover:text-[#232129] hover:underline'
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center rounded-xl px-3 text-base transition-colors ${
                      isActive
                        ? 'bg-[#FADCD4]/40 font-semibold text-[#C95B42]'
                        : 'font-medium text-[#232129] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
