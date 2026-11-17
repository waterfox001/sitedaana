import React from 'react';
import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';
import { BrandLogoMark } from './HandDrawnDoodles';

const FOOTER_NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Novidades', href: '#novidades' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#232129]/10 bg-white pt-14 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Marca e apresentação */}
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-[#232129]"
            >
              <BrandLogoMark className="h-8 w-8 shrink-0" />
              <span>{STORE_CONFIG.brandName}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5A5666]">
              Desde 10 de novembro de 2009 levando carinho, variedade e praticidade em enxovais para recém-nascidos e moda infantil de 0 a 6 anos no Centro de Fortaleza.
            </p>
            <p className="mt-4 text-xs font-medium text-[#5A5666]">
              Pagamentos: {STORE_CONFIG.paymentMethods.join(' · ')}
            </p>
          </div>

          {/* Links de navegação */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#232129]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
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
            Enxovais para recém-nascidos e moda infantil (0 a 6 anos) · Fortaleza – CE
          </p>
        </div>
      </div>
    </footer>
  );
}
