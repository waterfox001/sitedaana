import React, { useState } from 'react';
import {
  Clock,
  CreditCard,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';

const INTEREST_OPTIONS = [
  'Enxoval para recém-nascido',
  'Moda infantil feminina (0 a 6 anos)',
  'Moda infantil masculina (0 a 6 anos)',
  'Novidades e valores',
  'Dúvida sobre localização / horário',
];

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
            Centro de Fortaleza
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
            Venha conhecer nossa loja!
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#5A5666] sm:text-base">
            Estamos na Galeria Professor Brandão, no coração do Centro de Fortaleza, com fácil acesso para você montar o enxoval e escolher cada peça de perto.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Informações da loja */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#232129]/10 bg-[#FAF9F6] p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  <MapPin className="h-4 w-4 text-[#C95B42]" aria-hidden="true" />
                  <span>Endereço oficial</span>
                </div>
                <p className="mt-2 text-base font-semibold leading-relaxed text-[#232129]">
                  {STORE_CONFIG.address.full}
                </p>
                <p className="mt-2 text-xs text-[#5A5666]">
                  Observação: {STORE_CONFIG.address.parkingNote}
                </p>
              </div>

              <div className="border-t border-[#232129]/8 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  <Clock className="h-4 w-4 text-[#C95B42]" aria-hidden="true" />
                  <span>Horário de funcionamento</span>
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  {STORE_CONFIG.openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-4"
                    >
                      <dt className="text-[#5A5666]">{item.day}</dt>
                      <dd className="font-semibold tabular-nums text-[#232129]">
                        {item.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-t border-[#232129]/8 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  <CreditCard className="h-4 w-4 text-[#C95B42]" aria-hidden="true" />
                  <span>Formas de pagamento</span>
                </div>
                <p className="mt-2 text-sm font-medium text-[#232129]">
                  {STORE_CONFIG.paymentMethods.join(' · ')}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={STORE_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#232129] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3A3744] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232129]"
              >
                <Navigation className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Como chegar</span>
              </a>
              <a
                href={getWhatsAppUrl(
                  'Olá! Gostaria de confirmar o endereço e atendimento na loja Atrividinhos.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#18794E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mapa incorporado do Google Maps */}
          <div className="flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-[#232129]/10 bg-[#FAF9F6] lg:col-span-7">
            <div className="flex items-center justify-between border-b border-[#232129]/8 bg-white px-5 py-3">
              <span className="text-xs font-medium text-[#5A5666]">
                Mapa · {STORE_CONFIG.address.street}, {STORE_CONFIG.address.building}
              </span>
              <a
                href={STORE_CONFIG.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C95B42] hover:underline"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="relative min-h-[340px] flex-1">
              <iframe
                title="Mapa da loja Atrividinhos na Rua General Sampaio, 909, Centro, Fortaleza"
                src={STORE_CONFIG.maps.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [selectedInterest, setSelectedInterest] = useState(INTEREST_OPTIONS[0]);
  const [childAgeOrNote, setChildAgeOrNote] = useState('');

  const customWhatsAppMessage = childAgeOrNote.trim()
    ? `Olá! Vim pelo site da Atrividinhos. Tenho interesse em: ${selectedInterest}. Detalhes: ${childAgeOrNote.trim()}`
    : `Olá! Vim pelo site da Atrividinhos. Gostaria de informações sobre: ${selectedInterest}.`;

  return (
    <section id="contato" className="bg-[#FAF9F6] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Canais diretos */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C95B42]">
              Atendimento próximo
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#232129] sm:text-4xl">
              Fale com a Atrividinhos
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5A5666] sm:text-base">
              Precisa montar a lista de enxoval, consultar um tamanho de 0 a 6 anos ou tirar dúvidas antes de vir até a galeria? Escolha seu canal preferido.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#232129]/10 bg-white p-4 transition-colors hover:border-[#18794E]/45"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D7F0E5] text-[#18794E]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#5A5666]">
                      WhatsApp comercial
                    </p>
                    <p className="font-display text-base font-semibold tabular-nums text-[#232129]">
                      {STORE_CONFIG.contacts.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#18794E]">
                  Conversar
                </span>
              </a>

              <a
                href={STORE_CONFIG.contacts.phoneHref}
                className="flex items-center justify-between rounded-2xl border border-[#232129]/10 bg-white p-4 transition-colors hover:border-[#C95B42]/45"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDF0C4] text-[#8C6612]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#5A5666]">
                      Telefone da loja
                    </p>
                    <p className="font-display text-base font-semibold tabular-nums text-[#232129]">
                      {STORE_CONFIG.contacts.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#232129]">
                  Ligar
                </span>
              </a>

              <a
                href={STORE_CONFIG.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#232129]/10 bg-white p-4 transition-colors hover:border-[#C95B42]/45"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7D6DF] text-[#9A3C58]">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#5A5666]">
                      Instagram oficial
                    </p>
                    <p className="font-display text-base font-semibold text-[#232129]">
                      {STORE_CONFIG.contacts.instagramHandle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#C95B42]">
                  Seguir
                </span>
              </a>

              <div className="rounded-2xl border border-[#232129]/10 bg-white p-4 text-sm text-[#5A5666]">
                <p className="font-semibold text-[#232129]">
                  {STORE_CONFIG.address.full}
                </p>
                <p className="mt-1 text-xs">
                  Seg a Sex: 08h30 às 17h45 · Sáb: 08h às 16h · Domingo: fechado
                </p>
              </div>
            </div>
          </div>

          {/* Atendimento rápido direcionado para WhatsApp */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-[#232129]/10 bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[#232129]">
                Iniciar atendimento pelo WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5666]">
                Selecione o assunto abaixo e envie uma mensagem pronta diretamente para nossa equipe.
              </p>

              <div className="mt-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A5666]">
                  O que você procura?
                </label>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((option) => {
                    const active = selectedInterest === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedInterest(option)}
                        className={`min-h-[38px] rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                          active
                            ? 'bg-[#232129] text-white'
                            : 'border border-[#232129]/12 bg-[#FAF9F6] text-[#5A5666] hover:text-[#232129]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="detalhes-atendimento"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#5A5666]"
                >
                  Idade da criança ou observação (opcional)
                </label>
                <textarea
                  id="detalhes-atendimento"
                  rows={3}
                  value={childAgeOrNote}
                  onChange={(e) => setChildAgeOrNote(e.target.value)}
                  placeholder="Ex: Enxoval para bebê recém-nascido ou conjunto tamanho 4 anos..."
                  className="mt-2 w-full rounded-xl border border-[#232129]/15 bg-[#FAF9F6] p-3 text-sm text-[#232129] placeholder:text-[#5A5666]/70 focus:border-[#C95B42] focus:bg-white focus:outline-none"
                />
              </div>

              <a
                href={getWhatsAppUrl(customWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#18794E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Enviar mensagem no WhatsApp</span>
              </a>

              <p className="mt-4 text-center text-xs text-[#5A5666]">
                Atendimento: Seg a Sex das 08h30 às 17h45 · Sáb das 08h às 16h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
