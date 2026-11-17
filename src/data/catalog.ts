/**
 * CATÁLOGO CENTRALIZADO — ATRIVIDINHOS
 *
 * Estrutura organizada para adicionar, remover ou atualizar categorias,
 * produtos, fotografias reais, preços e descrições com facilidade.
 *
 * REGRAS IMPORTANTES:
 * - Preencha `imageUrl` com o caminho da foto real (ex: '/images/produtos/body-rn.jpg').
 * - Enquanto `imageUrl` for `null`, o componente exibe um espaço ilustrado elegante.
 * - O campo `price` é opcional: só será exibido no card quando preenchido (ex: 'R$ 69,90').
 * - Todas as consultas e compras são direcionadas para o WhatsApp oficial da loja.
 */

export type CategorySlug =
  | 'enxoval'
  | 'feminino'
  | 'masculino'
  | 'novidades';

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
  description: string;
  /**
   * Preencha apenas quando desejar exibir o preço no site (ex: 'R$ 59,90').
   * Se undefined ou vazio, o card exibe apenas a consulta pelo WhatsApp.
   */
  price?: string;
  isNew?: boolean;
  /**
   * Caminho da foto real do produto (ex: '/images/produtos/saida-maternidade.jpg').
   */
  imageUrl: string | null;
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

export const CATEGORIES: StoreCategory[] = [
  {
    id: 'enxoval',
    title: 'Enxoval para Bebês',
    ageRange: 'Recém-nascidos',
    description:
      'Peças delicadas e confortáveis para a chegada do bebê e os primeiros meses de cuidado.',
    imageUrl: '/src/assets/images/enxoval_saida_maternidade_1794948049750.jpg',
    imageAlt: 'Enxoval para bebês recém-nascidos na Atrividinhos em Fortaleza',
    motif: 'enxoval-kit',
    accentBg: 'bg-[#F7D6DF]/45',
  },
  {
    id: 'feminino',
    title: 'Moda Infantil Feminina',
    ageRange: '0 a 6 anos',
    description:
      'Vestidos, conjuntos e looks leves com charme, liberdade de movimento e acabamentos suaves.',
    imageUrl: '/src/assets/images/moda_feminina_vestido_1794948050932.jpg',
    imageAlt: 'Moda infantil feminina de 0 a 6 anos na loja Atrividinhos',
    motif: 'feminino-vestido',
    accentBg: 'bg-[#EAE2F8]/55',
  },
  {
    id: 'masculino',
    title: 'Moda Infantil Masculina',
    ageRange: '0 a 6 anos',
    description:
      'Conjuntos, camisas e bermudas pensados para acompanhar brincadeiras, passeios e ocasiões especiais.',
    imageUrl: '/src/assets/images/moda_masculina_conjunto_1794948052371.jpg',
    imageAlt: 'Moda infantil masculina de 0 a 6 anos na loja Atrividinhos',
    motif: 'masculino-conjunto',
    accentBg: 'bg-[#D9ECFA]/55',
  },
  {
    id: 'novidades',
    title: 'Novidades',
    ageRange: 'Coleção atual',
    description:
      'Seleção de peças recém-chegadas na loja física para conferir detalhes e modelos pelo WhatsApp.',
    imageUrl: '/src/assets/images/enxoval_primeiros_cuidados_1794948068478.jpg',
    imageAlt: 'Novidades em enxoval e moda infantil na Atrividinhos',
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
    description:
      'Conjunto coordenado para o primeiro encontro com a família, com toque macio e delicado.',
    imageUrl: '/src/assets/images/enxoval_saida_maternidade_1794948049750.jpg',
    imageAlt: 'Kit saída de maternidade para recém-nascido na Atrividinhos',
    motif: 'enxoval-kit',
    accentBg: 'bg-[#F7D6DF]/40',
    isNew: true,
  },
  {
    id: 'enxoval-bodies-algodao',
    name: 'Bodies e Conjuntos em Algodão',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
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
    description:
      'Itens indispensáveis para a bolsa da maternidade, passeios e hora do descanso.',
    imageUrl: '/src/assets/images/enxoval_mantas_cueiros_1794948068339.jpg',
    imageAlt: 'Mantas, cueiros e itens de enxoval para bebês na Atrividinhos',
    motif: 'enxoval-manta',
    accentBg: 'bg-[#FDF0C4]/55',
  },
  {
    id: 'feminino-vestidos-passeio',
    name: 'Vestidos Infantis de Passeio',
    category: 'feminino',
    categoryLabel: 'Moda Infantil Feminina',
    description:
      'Modelos leves com caimento confortável para aniversários, passeios em família e dias ensolarados.',
    imageUrl: '/src/assets/images/moda_feminina_vestido_1794948050932.jpg',
    imageAlt: 'Vestidos infantis femininos de 0 a 6 anos na Atrividinhos',
    motif: 'feminino-vestido',
    accentBg: 'bg-[#F7D6DF]/40',
    isNew: true,
  },
  {
    id: 'feminino-conjuntos-dia',
    name: 'Conjuntos Femininos Leves',
    category: 'feminino',
    categoryLabel: 'Moda Infantil Feminina',
    description:
      'Blusas e shorts ou saias coordenados que unem praticidade para brincar e visual encantador.',
    imageUrl: '/src/assets/images/moda_feminina_conjunto_limpo_1794948067643.jpg',
    imageAlt: 'Conjuntos infantis femininos leves na Atrividinhos',
    motif: 'feminino-conjunto',
    accentBg: 'bg-[#EAE2F8]/50',
  },
  {
    id: 'masculino-conjuntos-passeio',
    name: 'Conjuntos Masculinos de Passeio',
    category: 'masculino',
    categoryLabel: 'Moda Infantil Masculina',
    description:
      'Combinações versáteis de camiseta ou camisa com bermuda confortável para meninos de 0 a 6 anos.',
    imageUrl: '/src/assets/images/moda_masculina_conjunto_1794948052371.jpg',
    imageAlt: 'Conjuntos infantis masculinos na loja Atrividinhos',
    motif: 'masculino-conjunto',
    accentBg: 'bg-[#D9ECFA]/50',
    isNew: true,
  },
  {
    id: 'masculino-polo-bermuda',
    name: 'Camisas Polo e Bermudas Infantis',
    category: 'masculino',
    categoryLabel: 'Moda Infantil Masculina',
    description:
      'Peças clássicas e macias para eventos em família, com ótimo ajuste e conforto.',
    imageUrl: '/src/assets/images/moda_masculina_polo_1794948052443.jpg',
    imageAlt: 'Camisas polo e bermudas infantis masculinas na Atrividinhos',
    motif: 'masculino-polo',
    accentBg: 'bg-[#D7F0E5]/45',
  },
  {
    id: 'enxoval-primeiros-dias',
    name: 'Linha Primeiros Cuidados do Bebê',
    category: 'enxoval',
    categoryLabel: 'Enxoval para Bebês',
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
    description:
      'Novas combinações frescas e coloridas recém-chegadas às araras da loja.',
    imageUrl: '/src/assets/images/moda_feminina_conjunto_limpo_1794948067643.jpg',
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
