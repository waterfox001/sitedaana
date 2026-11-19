import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../data/storeConfig';

export function PromoBannerStrip() {
  const [dismissed, setDismissed] = useState(false);

  if (!STORE_CONFIG.promoStrip.enabled || dismissed) {
    return null;
  }

  return (
    <div className="border-b border-[#232129]/10 bg-[#232129] text-white">
      <div className="mx-auto flex min-h-[38px] max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-semibold text-[#FDF0C4]">Black Friday</span>
          <span className="text-white/90">{STORE_CONFIG.promoStrip.text}</span>
          <a
            href={getWhatsAppUrl(STORE_CONFIG.promoStrip.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#8AE3B8] underline underline-offset-4 hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{STORE_CONFIG.promoStrip.ctaLabel}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fechar aviso promocional"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
