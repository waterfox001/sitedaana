/**
 * CATÁLOGO CENTRALIZADO — ATRIVIDINHOS
 *
 * Estrutura organizada para adicionar, remover ou atualizar categorias,
 * faixas etárias, produtos, fotografias reais, preços e descrições com facilidade.
 *
 * REGRAS IMPORTANTES:
 * - Preencha `imageUrl` com a foto principal e, se desejar, `secondaryImageUrl` para visualização secundária.
 * - O campo `price` é opcional: só será exibido no card quando preenchido (ex: 'R$ 59,90').
 * - Todas as consultas e compras são direcionadas para o WhatsApp oficial da loja.
 */

export type CategorySlug =
  | 'enxoval'
  | 'feminino'
  | 'masculino'
  | 'novidades';

export type AgeGroupSlug = 'todas' | 'rn' | '0-12m' | '1-3a' | '4-6a';

export type IllustrationMotif =
  | 'enxoval-kit'
  | 'enxoval-manta'
  | 'enxoval-body'
  | 'feminino-vestido'
  | 'feminino-conjunto'
  | 'masculino-conjunto'
  | 'masculino-polo'
  | 'novidade-maternidade'
  | 'novidade-passeio'
  | 'galeria-fachada'
  | 'galeria-enxoval'
  | 'galeria-arara'
  | 'galeria-atendimento';

export interface StoreCategory {
  id: CategorySlug;
  title: string;
  ageRange: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string;
  motif: IllustrationMotif;
  accentBg: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: Exclude<CategorySlug, 'novidades'>;
  categoryLabel: string;
  ageGroups: Exclude<AgeGroupSlug, 'todas'>[];
  ageLabel: string;
  description: string;
  /**
   * Preencha apenas quando desejar exibir o preço no site (ex: 'R$ 59,90').
   * Se undefined ou vazio, o card exibe apenas a consulta pelo WhatsApp.
   */
  price?: string;
  isNew?: boolean;
  /**
   * Foto principal do produto (ex: criança vestindo ou foto de estúdio).
   */
  imageUrl: string | null;
  /**
   * Foto secundária opcional exibida ao passar o mouse ou no modal de detalhes.
   */
  secondaryImageUrl?: string | null;
  imageAlt: string;
  motif: IllustrationMotif;
  accentBg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  categoryLabel: string;
  imageUrl: string | null;
  imageAlt: string;
  motif: IllustrationMotif;
  accentBg: string;
}

export const AGE_GROUPS: { id: AgeGroupSlug; label: string; shortDesc: string }[] = [
  { id: 'todas', label: 'Todas as idades', shortDesc: '0 a 6 anos' },
  { id: 'rn', label: 'Recém-Nascido', shortDesc: 'Maternidade' },
  { id: '0-12m', label: 'Bebê', shortDesc: '0 a 12 meses' },
  { id: '1-3a', label: 'Primeiros Passos', shortDesc: '1 a 3 anos' },
  { id: '4-6a', label: 'Infantil', shortDesc: '4 a 6 anos' },
];

export const CATEGORIES: StoreCategory[] = [
  {
    id: 'enxoval',
    title: 'Enxoval para Bebês',
    ageRange: 'Recém-nascidos',
    description:
      'Saídas de maternidade, bodies, mantas e peças macias para os primeiros dias do bebê.',
    imageUrl: '/src/assets/images/cat_bebe_recem_nascido_1795093117695.jpg',
    imageAlt: 'Bebê recém-nascido vestindo conjunto de enxoval da Atrividinhos',
    motif: 'enxoval-kit',
    accentBg: 'bg-[#F7D6DF]/45',
  },
  {
    id: 'feminino',
    title: 'Moda Infantil Feminina',
    ageRange: '0 a 6 anos',
    description:
      'Vestidos, conjuntos leves e looks encantadores para brincar e passear com conforto.',
    imageUrl: '/src/assets/images/cat_crianca_feminina_1795093118509.jpg',
    imageAlt: 'Menina vestindo conjunto infantil feminino da Atrividinhos',
    motif: 'feminino-vestido',
    accentBg: 'bg-[#EAE2F8]/55',
  },
  {
    id: 'masculino',
    title: 'Moda Infantil Masculina',
    ageRange: '0 a 6 anos',
    description:
      'Conjuntos, camisas polo e bermudas com ótimo caimento para o dia a dia e ocasiões especiais.',
    imageUrl: '/src/assets/images/cat_crianca_masculina_1795093118855.jpg',
    imageAlt: 'Menino vestindo camisa polo e bermuda da Atrividinhos',
    motif: 'masculino-conjunto',
    accentBg: 'bg-[#D9ECFA]/55',
  },
  {
    id: 'novidades',
    title: 'Novidades',
    ageRange: 'Coleção atual',
    description:
      'Lançamentos e peças recém-chegadas na loja física para consultar modelos e tamanhos no WhatsApp.',
    imageUrl: '/src/assets/images/hero_atrividinhos_boutique_1794948049688.jpg',
    imageAlt: 'Novidades e araras de moda infantil na Atrividinhos',
    motif: 'novidade-passeio',
    accentBg: 'bg-[#FDF0C4]/65',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'enxoval-maternidade',
    name: 'Kit Saída de Maternidade',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
    ageGroups: ['rn', '0-12m'],
    ageLabel: 'Recém-nascido',
    description:
      'Conjunto coordenado em toque macio para o primeiro encontro com a família e os registros da maternidade.',
    imageUrl: '/src/assets/images/cat_bebe_recem_nascido_1795093117695.jpg',
    secondaryImageUrl: '/src/assets/images/enxoval_saida_maternidade_1794948049750.jpg',
    imageAlt: 'Bebê vestindo kit saída de maternidade macio da Atrividinhos',
    motif: 'enxoval-kit',
    accentBg: 'bg-[#F7D6DF]/40',
    isNew: true,
  },
  {
    id: 'feminino-vestidos-passeio',
    name: 'Vestidos Infantis de Passeio',
    category: 'feminino',
    categoryLabel: 'Moda Infantil Feminina',
    ageGroups: ['0-12m', '1-3a', '4-6a'],
    ageLabel: '0 a 6 anos',
    description:
      'Modelos leves em algodão com caimento confortável para aniversários, passeios em família e dias ensolarados.',
    imageUrl: '/src/assets/images/banner_moda_feminina_1795093117970.jpg',
    secondaryImageUrl: '/src/assets/images/moda_feminina_vestido_1794948050932.jpg',
    imageAlt: 'Menina com vestido infantil floral leve da Atrividinhos',
    motif: 'feminino-vestido',
    accentBg: 'bg-[#F7D6DF]/40',
    isNew: true,
  },
  {
    id: 'masculino-polo-bermuda',
    name: 'Camisas Polo e Bermudas Infantis',
    category: 'masculino',
    categoryLabel: 'Moda Infantil Masculina',
    ageGroups: ['1-3a', '4-6a'],
    ageLabel: '1 a 6 anos',
    description:
      'Peças clássicas e macias para eventos em família, com ótimo ajuste e conforto para as crianças.',
    imageUrl: '/src/assets/images/cat_crianca_masculina_1795093118855.jpg',
    secondaryImageUrl: '/src/assets/images/moda_masculina_polo_1794948052443.jpg',
    imageAlt: 'Menino vestindo camisa polo verde menta e bermuda da Atrividinhos',
    motif: 'masculino-polo',
    accentBg: 'bg-[#D7F0E5]/45',
    isNew: true,
  },
  {
    id: 'feminino-conjuntos-dia',
    name: 'Conjuntos Femininos Leves',
    category: 'feminino',
    categoryLabel: 'Moda Infantil Feminina',
    ageGroups: ['0-12m', '1-3a', '4-6a'],
    ageLabel: '0 a 6 anos',
    description:
      'Blusas e shorts ou saias coordenados que unem praticidade para brincar e visual encantador.',
    imageUrl: '/src/assets/images/cat_crianca_feminina_1795093118509.jpg',
    secondaryImageUrl: '/src/assets/images/moda_feminina_conjunto_limpo_1794948067643.jpg',
    imageAlt: 'Menina sorrindo com conjunto infantil feminino leve da Atrividinhos',
    motif: 'feminino-conjunto',
    accentBg: 'bg-[#EAE2F8]/50',
  },
  {
    id: 'masculino-conjuntos-passeio',
    name: 'Conjuntos Masculinos de Passeio',
    category: 'masculino',
    categoryLabel: 'Moda Infantil Masculina',
    ageGroups: ['0-12m', '1-3a', '4-6a'],
    ageLabel: '0 a 6 anos',
    description:
      'Combinações versáteis de camiseta em algodão e bermuda confortável para acompanhar todas as brincadeiras.',
    imageUrl: '/src/assets/images/banner_moda_masculina_1795093118559.jpg',
    secondaryImageUrl: '/src/assets/images/moda_masculina_conjunto_1794948052371.jpg',
    imageAlt: 'Menino usando conjunto masculino camiseta azul e bermuda da Atrividinhos',
    motif: 'masculino-conjunto',
    accentBg: 'bg-[#D9ECFA]/50',
    isNew: true,
  },
  {
    id: 'enxoval-bodies-algodao',
    name: 'Bodies e Conjuntos em Algodão',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
    ageGroups: ['rn', '0-12m'],
    ageLabel: 'RN a 12 meses',
    description:
      'Peças essenciais do dia a dia pensadas para vestir com praticidade e respirabilidade no clima de Fortaleza.',
    imageUrl: '/src/assets/images/enxoval_bodies_algodao_1794948051178.jpg',
    imageAlt: 'Bodies e conjuntos em algodão para bebês na Atrividinhos',
    motif: 'enxoval-body',
    accentBg: 'bg-[#D7F0E5]/45',
  },
  {
    id: 'enxoval-mantas-cueiros',
    name: 'Mantas, Cueiros e Fraldinhas',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
    ageGroups: ['rn', '0-12m'],
    ageLabel: 'Recém-nascido',
    description:
      'Itens indispensáveis para a bolsa da maternidade, passeios e hora do descanso do bebê.',
    imageUrl: '/src/assets/images/enxoval_mantas_cueiros_1794948068339.jpg',
    imageAlt: 'Mantas, cueiros e itens de enxoval para bebês na Atrividinhos',
    motif: 'enxoval-manta',
    accentBg: 'bg-[#FDF0C4]/55',
  },
  {
    id: 'enxoval-primeiros-dias',
    name: 'Linha Primeiros Cuidados do Bebê',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
    ageGroups: ['rn'],
    ageLabel: 'Recém-nascido',
    description:
      'Sapatinhos de tecido, luvinhas, toucas e babadores para completar o enxoval do recém-nascido.',
    imageUrl: '/src/assets/images/enxoval_primeiros_cuidados_1794948068478.jpg',
    imageAlt: 'Linha primeiros cuidados para recém-nascido na Atrividinhos',
    motif: 'novidade-maternidade',
    accentBg: 'bg-[#FADCD4]/45',
    isNew: true,
  },
  {
    id: 'novidade-colecao-estacao',
    name: 'Conjuntos Infantis da Nova Estação',
    category: 'feminino',
    categoryLabel: 'Moda Infantil Feminina',
    ageGroups: ['1-3a', '4-6a'],
    ageLabel: '1 a 6 anos',
    description:
      'Novas combinações frescas e coloridas recém-chegadas às araras da loja para meninas.',
    imageUrl: '/src/assets/images/moda_feminina_conjunto_limpo_1794948067643.jpg',
    secondaryImageUrl: '/src/assets/images/cat_crianca_feminina_1795093118509.jpg',
    imageAlt: 'Conjuntos infantis da nova estação na Atrividinhos Fortaleza',
    motif: 'novidade-passeio',
    accentBg: 'bg-[#FDF0C4]/55',
    isNew: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-fachada',
    title: 'Nossa loja na Galeria Professor Brandão',
    caption:
      'Espaço acolhedor no Centro de Fortaleza preparado para receber mamães, papais e toda a família.',
    categoryLabel: 'Loja Física',
    imageUrl: '/src/assets/images/loja_interior_sem_texto_1794948067653.jpg',
    imageAlt: 'Espaço interno da loja Atrividinhos no Centro de Fortaleza',
    motif: 'galeria-fachada',
    accentBg: 'bg-[#FDF0C4]/45',
  },
  {
    id: 'gal-enxoval',
    title: 'Cantinho do Enxoval para Recém-Nascidos',
    caption:
      'Seleção organizada de peças suaves para montar a mala da maternidade com tranquilidade.',
    categoryLabel: 'Enxoval',
    imageUrl: '/src/assets/images/enxoval_mantas_cueiros_1794948068339.jpg',
    imageAlt: 'Seção de enxoval para recém-nascidos da Atrividinhos',
    motif: 'galeria-enxoval',
    accentBg: 'bg-[#F7D6DF]/40',
  },
  {
    id: 'gal-araras',
    title: 'Araras Femininas e Masculinas (0 a 6 anos)',
    caption:
      'Variedade de looks infantis do tamanho bebê até os 6 anos para o dia a dia e datas especiais.',
    categoryLabel: 'Moda 0 a 6 anos',
    imageUrl: '/src/assets/images/hero_atrividinhos_boutique_1794948049688.jpg',
    imageAlt: 'Araras de moda infantil feminina e masculina na Atrividinhos',
    motif: 'galeria-arara',
    accentBg: 'bg-[#D9ECFA]/45',
  },
  {
    id: 'gal-atendimento',
    title: 'Atendimento próximo e personalizado',
    caption:
      'Desde 2009 ajudando cada família a escolher tamanhos, tecidos e combinações ideais.',
    categoryLabel: 'Atendimento',
    imageUrl: '/src/assets/images/enxoval_bodies_algodao_1794948051178.jpg',
    imageAlt: 'Seleção de peças de algodão na loja Atrividinhos desde 2009',
    motif: 'galeria-atendimento',
    accentBg: 'bg-[#D7F0E5]/45',
  },
];
