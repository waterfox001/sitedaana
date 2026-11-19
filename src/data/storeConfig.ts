/**
 * CONFIGURAÇÃO CENTRALIZADA DA LOJA — ATRIVIDINHOS
 *
 * Edite este arquivo para atualizar informações oficiais, banners de campanha,
 * promoções sazonais (como Black Friday), horários, formas de pagamento e contatos.
 */

import type { CategorySlug } from './catalog';

export interface HeroBannerSlide {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  targetCategory: CategorySlug;
  secondaryWhatsAppMsg: string;
  imageUrl: string;
  imageAlt: string;
}

export const STORE_CONFIG = {
  brandName: 'Atrividinhos',
  brandSlogan: 'Jeitinho esperto de se vestir',
  logoUrl: '/assets/aistudio/logo_atrividinhos_b0c755e5.jpg',
  tagline: 'Enxoval para Bebês e Moda Infantil em Fortaleza (0 a 6 anos)',
  foundedDate: '10 de novembro de 2009',
  foundedYear: 2009,

  promoStrip: {
    enabled: true,
    text: 'Black Friday Atrividinhos em Fortaleza · Condições especiais em enxoval para recém-nascidos e moda infantil (0 a 6 anos)',
    ctaLabel: 'Aproveitar no WhatsApp',
    whatsappMessage:
      'Olá! Vi a promoção de Black Friday no site da Atrividinhos e quero saber as ofertas disponíveis!',
  },

  address: {
    street: 'Rua General Sampaio, 909, Loja 05',
    building: 'Galeria Professor Brandão',
    neighborhood: 'Centro',
    city: 'Fortaleza',
    state: 'CE',
    full: 'Rua General Sampaio, 909, Loja 05, Galeria Professor Brandão, Centro, Fortaleza – CE',
    parkingNote: 'A loja não possui estacionamento próprio.',
  },

  contacts: {
    whatsappNumberE164: '5585984047248',
    whatsappDisplay: '+55 85 98404-7248',
    phoneHref: 'tel:+558532122055',
    phoneDisplay: '(85) 3212-2055',
    instagramUrl: 'https://www.instagram.com/atrividinhos/',
    instagramHandle: '@atrividinhos',
  },

  openingHours: [
    { day: 'Segunda a sexta', hours: '08h30 às 17h45' },
    { day: 'Sábado', hours: '08h às 16h' },
    { day: 'Domingo', hours: 'Fechado' },
  ],

  paymentMethods: [
    'Pix',
    'Dinheiro',
    'Cartão de crédito',
    'Cartão de débito',
  ],

  maps: {
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Rua+General+Sampaio,+909,+Centro,+Fortaleza+-+CE',
    searchUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+General+Sampaio,+909,+Galeria+Professor+Brand%C3%A3o,+Centro,+Fortaleza+-+CE',
    embedUrl:
      'https://maps.google.com/maps?q=Rua%20General%20Sampaio%2C%20909%2C%20Centro%2C%20Fortaleza%20-%20CE&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  heroBanners: [
    {
      id: 'banner-black-friday-enxoval',
      kicker: 'Black Friday Fortaleza · Loja no Centro · Desde 2009',
      title: 'Pequenos momentos, grandes descobertas!',
      subtitle:
        'Enxoval para recém-nascidos e moda infantil de 0 a 6 anos em Fortaleza com ofertas especiais de Black Friday. Jeitinho esperto de se vestir!',
      primaryCta: 'Ver ofertas e coleção',
      secondaryCta: 'Falar no WhatsApp',
      targetCategory: 'enxoval',
      secondaryWhatsAppMsg:
        'Olá! Vi as ofertas de Black Friday no site da Atrividinhos e gostaria de consultar peças de enxoval e moda infantil.',
      imageUrl: '/src/assets/images/banner_enxoval_bebe_1795093118308.jpg',
      imageAlt:
        'Bebê sorrindo confortavelmente com conjunto de enxoval macio da loja Atrividinhos em Fortaleza',
    },
    {
      id: 'banner-feminino-fortaleza',
      kicker: 'Moda Infantil Feminina em Fortaleza · 0 a 6 anos',
      title: 'Leveza e charme com preços de Black Friday.',
      subtitle:
        'Vestidos e conjuntos infantis no Centro de Fortaleza com atendimento ágil pelo WhatsApp para escolher tamanhos e estampas.',
      primaryCta: 'Explorar moda feminina',
      secondaryCta: 'Consultar tamanhos',
      targetCategory: 'feminino',
      secondaryWhatsAppMsg:
        'Olá! Vi a coleção de Moda Infantil Feminina (Black Friday) no site da Atrividinhos e gostaria de ver os modelos disponíveis.',
      imageUrl: '/src/assets/images/banner_moda_feminina_1795093117970.jpg',
      imageAlt:
        'Menina sorrindo com vestido floral infantil da coleção Atrividinhos Fortaleza',
    },
    {
      id: 'banner-masculino-fortaleza',
      kicker: 'Roupas de Bebê e Moda Masculina no Centro de Fortaleza',
      title: 'Conforto para brincar e economia para a família.',
      subtitle:
        'Conjuntos masculinos, camisas polo e bermudas de 0 a 6 anos com condições especiais de Black Friday em Pix, dinheiro ou cartões.',
      primaryCta: 'Explorar moda masculina',
      secondaryCta: 'Garantir ofertas',
      targetCategory: 'masculino',
      secondaryWhatsAppMsg:
        'Olá! Vi a coleção de Moda Infantil Masculina (Black Friday) no site da Atrividinhos e gostaria de consultar modelos e valores.',
      imageUrl: '/src/assets/images/banner_moda_masculina_1795093118559.jpg',
      imageAlt:
        'Menino sorrindo usando camiseta e bermuda infantil da loja Atrividinhos em Fortaleza',
    },
  ] as HeroBannerSlide[],

  hero: {
    title: 'Pequenos momentos, grandes descobertas!',
    subtitle:
      'Tudo o que seu pequeno precisa para crescer com conforto, carinho e muito estilo.',
    primaryCta: 'Conheça nossas coleções',
    secondaryCta: 'Fale com a gente',
    imageUrl: '/src/assets/images/hero_atrividinhos_boutique_1794948049688.jpg' as string | null,
    imageAlt:
      'Vitrine editorial Atrividinhos com enxoval para recém-nascidos e moda infantil no Centro de Fortaleza',
  },

  about: {
    title: 'Uma história de carinho que acompanha a infância.',
    text: 'Desde 2009, a Atrividinhos faz parte de momentos especiais de muitas famílias. Trabalhamos com enxovais para recém-nascidos e moda infantil feminina e masculina, oferecendo variedade, qualidade, praticidade e atendimento próximo para quem procura o melhor para seus pequenos.',
    imageUrl: '/src/assets/images/loja_interior_sem_texto_1794948067653.jpg' as string | null,
    imageAlt:
      'Ambiente acolhedor da loja Atrividinhos na Galeria Professor Brandão, Centro de Fortaleza',
  },

  differentials: [
    {
      index: '01',
      title: 'Experiência desde 2009',
      description:
        'Mais de 15 anos atendendo famílias em Fortaleza com confiança e cuidado em cada fase da infância.',
      accent: 'coral' as const,
    },
    {
      index: '02',
      title: 'Variedade de produtos',
      description:
        'Opções completas em enxoval para recém-nascidos e vestuário infantil feminino e masculino de 0 a 6 anos.',
      accent: 'yellow' as const,
    },
    {
      index: '03',
      title: 'Qualidade',
      description:
        'Peças escolhidas com atenção ao toque macio, acabamento cuidadoso e conforto para a pele sensível.',
      accent: 'blue' as const,
    },
    {
      index: '04',
      title: 'Preços competitivos',
      description:
        'Condições acessíveis no Centro de Fortaleza com pagamento facilitado em Pix, dinheiro e cartões.',
      accent: 'mint' as const,
    },
    {
      index: '05',
      title: 'Agilidade no atendimento',
      description:
        'Atendimento rápido e direto pelo WhatsApp para consultar peças disponíveis e tirar dúvidas antes de visitar.',
      accent: 'pink' as const,
    },
    {
      index: '06',
      title: 'Praticidade para nossos clientes',
      description:
        'Localização central na Rua General Sampaio com curadoria pronta para montar o enxoval ou renovar o guarda-roupa.',
      accent: 'lilac' as const,
    },
  ],
};

/**
 * Gera link oficial do WhatsApp com mensagem pré-preenchida.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá! Vim pelo site da Atrividinhos e gostaria de atendimento.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${STORE_CONFIG.contacts.whatsappNumberE164}?text=${text}`;
}

/**
 * Gera link oficial do WhatsApp identificando exatamente o produto selecionado.
 */
export function getWhatsAppProductUrl(productName: string): string {
  const message = `Olá! Vi o produto ${productName} no site da Atrividinhos e gostaria de saber mais informações.`;
  return getWhatsAppUrl(message);
}
