import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/storeConfig';

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl(
        'Olá! Vim pelo site da Atrividinhos e gostaria de tirar uma dúvida.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Atrividinhos pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-11 items-center gap-2 rounded-full bg-[#18794E] px-4 text-sm font-semibold text-white shadow-md transition-transform duration-150 hover:scale-[1.03] hover:bg-[#13623F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18794E] sm:bottom-6 sm:right-6 sm:h-12 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
