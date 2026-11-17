import React from 'react';
import type { IllustrationMotif } from '../data/catalog';

/**
 * Ilustrações infantis desenhadas à mão (estilo lápis de cor / giz de cera).
 * Elementos delicados: arco-íris, sol, nuvens, estrelas, flores, corações e peças infantis.
 */

export function HandDrawnRainbow({ className = 'w-24 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 76"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 58C16 32.5 35.5 14 60 14C84.5 14 104 32.5 104 58"
        stroke="#E07A5F"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />
      <path
        d="M25 58C25 37.8 40.8 22.5 60 22.5C79.2 22.5 95 37.8 95 58"
        stroke="#E9C46A"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M34 58C34 42.8 45.8 31 60 31C74.2 31 86 42.8 86 58"
        stroke="#7FC8A9"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M43 58C43 48 50.5 40 60 40C69.5 40 77 48 77 58"
        stroke="#8BBEE8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Nuvens na base */}
      <path
        d="M9 62C6.5 62 4.5 59.8 4.5 57.2C4.5 54.8 6.3 52.8 8.6 52.5C9.6 49.4 12.5 47.2 16 47.2C19.8 47.2 23 49.8 23.6 53.4C25.5 53.9 27 55.6 27 57.7C27 60.1 25.1 62 22.7 62H9Z"
        fill="#FFFFFF"
        stroke="#D4CFC7"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M94 62C91.6 62 89.7 60 89.7 57.6C89.7 55.3 91.5 53.4 93.8 53.1C94.7 50.2 97.4 48.2 100.6 48.2C104.2 48.2 107.2 50.8 107.7 54.2C109.6 54.6 111 56.3 111 58.2C111 60.3 109.3 62 107.2 62H94Z"
        fill="#FFFFFF"
        stroke="#D4CFC7"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnSun({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="32" cy="32" r="13" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="2.5" />
      <path
        d="M32 8V14M32 50V56M8 32H14M50 32H56M15.2 15.2L19.5 19.5M44.5 44.5L48.8 48.8M48.8 15.2L44.5 19.5M19.5 44.5L15.2 48.8"
        stroke="#E5B74B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnStar({
  className = 'w-7 h-7',
  color = '#E5B74B',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 4L24.2 13.8L34.8 15.1L26.9 22.3L29.1 32.8L20 27.6L10.9 32.8L13.1 22.3L5.2 15.1L15.8 13.8L20 4Z"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnCloud({ className = 'w-20 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 56" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 44C13.4 44 8 38.8 8 32.4C8 26.6 12.4 21.8 18.1 21C20.5 13.4 27.6 8 36 8C44.9 8 52.3 14 54.3 22.1C56.2 21.2 58.3 20.8 60.5 20.8C68.5 20.8 75 27.1 75 34.8C75 40 71 44 65.5 44H20Z"
        fill="#FFFFFF"
        stroke="#B9D7EE"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnHeart({
  className = 'w-6 h-6',
  color = '#DF7B96',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
      <path
        d="M18 30.5C18 30.5 6 22.7 6 13.8C6 9.9 9 7 12.7 7C15.1 7 17.1 8.3 18 10.2C18.9 8.3 20.9 7 23.3 7C27 7 30 9.9 30 13.8C30 22.7 18 30.5 18 30.5Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnFlower({
  className = 'w-9 h-9',
  petalColor = '#F3B4C5',
}: {
  className?: string;
  petalColor?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="12" r="6" fill={petalColor} fillOpacity="0.45" stroke="#D97B93" strokeWidth="1.8" />
      <circle cx="35.4" cy="20.3" r="6" fill={petalColor} fillOpacity="0.45" stroke="#D97B93" strokeWidth="1.8" />
      <circle cx="31" cy="33.7" r="6" fill={petalColor} fillOpacity="0.45" stroke="#D97B93" strokeWidth="1.8" />
      <circle cx="17" cy="33.7" r="6" fill={petalColor} fillOpacity="0.45" stroke="#D97B93" strokeWidth="1.8" />
      <circle cx="12.6" cy="20.3" r="6" fill={petalColor} fillOpacity="0.45" stroke="#D97B93" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="5.2" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="1.8" />
    </svg>
  );
}

export function BrandLogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className={className}>
      <circle cx="22" cy="22" r="20" fill="#FAF9F6" stroke="#E07A5F" strokeWidth="2.2" />
      <path
        d="M11 26C11 19.9 15.9 15 22 15C28.1 15 33 19.9 33 26"
        stroke="#E07A5F"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M15.2 26C15.2 22.2 18.2 19.2 22 19.2C25.8 19.2 28.8 22.2 28.8 26"
        stroke="#E9C46A"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19.2 26C19.2 24.4 20.5 23.2 22 23.2C23.5 23.2 24.8 24.4 24.8 26"
        stroke="#52A686"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="30.5" r="1.7" fill="#D96B8A" />
    </svg>
  );
}

/**
 * Ilustrações editoriais específicas para os espaços reservados de produtos,
 * categorias e galeria enquanto aguardam fotografias reais da loja.
 */
export function MotifIllustration({
  motif,
  className = 'w-full h-full',
}: {
  motif: IllustrationMotif;
  className?: string;
}) {
  switch (motif) {
    case 'enxoval-kit':
    case 'novidade-maternidade':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Varal delicado com body e sapatinho */}
          <path d="M24 34C82 48 158 48 216 34" stroke="#B6AEA4" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
          {/* Body de bebê */}
          <path
            d="M78 44L62 56L70 70L80 63V108C80 118 89 124 98 124C107 124 116 118 116 108V63L126 70L134 56L118 44C113 48 106 50 98 50C90 50 83 48 78 44Z"
            fill="#FFFFFF"
            stroke="#D97B93"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <circle cx="98" cy="79" r="9" fill="#F7D6DF" fillOpacity="0.6" />
          <path d="M98 74.5C96.5 72.5 93 73 93 76C93 79.5 98 83 98 83C98 83 103 79.5 103 76C103 73 99.5 72.5 98 74.5Z" fill="#D97B93" />
          {/* Prendedores */}
          <rect x="81" y="37" width="5" height="12" rx="2" fill="#E9C46A" />
          <rect x="110" y="37" width="5" height="12" rx="2" fill="#E9C46A" />
          {/* Touquinha */}
          <path d="M150 68C150 53 161 43 173 43C185 43 196 53 196 68H150Z" fill="#FDF0C4" stroke="#DFAC3E" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="173" cy="40" r="4" fill="#FFFFFF" stroke="#DFAC3E" strokeWidth="2" />
          <rect x="148" y="68" width="50" height="8" rx="4" fill="#FFFFFF" stroke="#DFAC3E" strokeWidth="2" />
          {/* Estrelinhas */}
          <path d="M44 96L47 103L54 104L49 109L50 116L44 113L38 116L39 109L34 104L41 103L44 96Z" fill="#E9C46A" fillOpacity="0.55" />
          <circle cx="185" cy="116" r="6" fill="#D7F0E5" stroke="#52A686" strokeWidth="1.8" />
        </svg>
      );

    case 'enxoval-body':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          <path
            d="M96 38L74 52L84 68L96 60V122C96 134 107 142 120 142C133 142 144 134 144 122V60L156 68L166 52L144 38C138 44 130 47 120 47C110 47 102 44 96 38Z"
            fill="#FFFFFF"
            stroke="#52A686"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="114" cy="134" r="2.2" fill="#52A686" />
          <circle cx="120" cy="136" r="2.2" fill="#52A686" />
          <circle cx="126" cy="134" r="2.2" fill="#52A686" />
          <path d="M107 82C112 76 128 76 133 82" stroke="#E9C46A" strokeWidth="3" strokeLinecap="round" />
          <path d="M111 88C115 84 125 84 129 88" stroke="#8BBEE8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="56" cy="54" r="5" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="1.8" />
          <circle cx="186" cy="114" r="7" fill="#F7D6DF" stroke="#D97B93" strokeWidth="1.8" />
        </svg>
      );

    case 'enxoval-manta':
    case 'galeria-enxoval':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Mantinha dobrada + laço */}
          <rect x="58" y="64" width="124" height="66" rx="14" fill="#FFFFFF" stroke="#E5B74B" strokeWidth="2.4" />
          <rect x="68" y="54" width="104" height="58" rx="12" fill="#FDF0C4" fillOpacity="0.65" stroke="#E5B74B" strokeWidth="2.2" />
          <path d="M120 54V130" stroke="#E07A5F" strokeWidth="3" strokeLinecap="round" />
          <path d="M120 54C112 44 98 44 100 54C102 60 114 58 120 54Z" fill="#FADCD4" stroke="#E07A5F" strokeWidth="2" />
          <path d="M120 54C128 44 142 44 140 54C138 60 126 58 120 54Z" fill="#FADCD4" stroke="#E07A5F" strokeWidth="2" />
          <circle cx="176" cy="44" r="5" fill="#D9ECFA" stroke="#6BA4D9" strokeWidth="1.8" />
          <circle cx="64" cy="40" r="4" fill="#F7D6DF" stroke="#D97B93" strokeWidth="1.6" />
        </svg>
      );

    case 'feminino-vestido':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Cabide */}
          <path d="M120 26C120 21 125 19 125 24C125 28 120 30 120 34L86 50H154L120 34" stroke="#B6AEA4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Vestido infantil */}
          <path
            d="M96 48H144L140 76L164 134C144 141 96 141 76 134L100 76L96 48Z"
            fill="#FFFFFF"
            stroke="#D97B93"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M98 76H142" stroke="#F7D6DF" strokeWidth="5" strokeLinecap="round" />
          <circle cx="106" cy="108" r="4.5" fill="#F7D6DF" />
          <circle cx="132" cy="100" r="4.5" fill="#FDF0C4" />
          <circle cx="122" cy="120" r="4.5" fill="#EAE2F8" />
          <circle cx="60" cy="70" r="6" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="1.8" />
          <circle cx="184" cy="96" r="5" fill="#F7D6DF" stroke="#D97B93" strokeWidth="1.8" />
        </svg>
      );

    case 'feminino-conjunto':
    case 'novidade-passeio':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Blusinha com babado */}
          <path
            d="M94 40L72 56L84 70L94 62V96H146V62L156 70L168 56L146 40C138 46 130 48 120 48C110 48 102 46 94 40Z"
            fill="#FFFFFF"
            stroke="#9B7EDE"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          {/* Sainha / shortinho */}
          <path
            d="M92 104H148L158 138C136 142 104 142 82 138L92 104Z"
            fill="#EAE2F8"
            fillOpacity="0.65"
            stroke="#9B7EDE"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          <circle cx="120" cy="70" r="8" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="1.8" />
          <path d="M58 106L62 114L70 116L63 121L64 129L58 125L52 129L53 121L46 116L54 114L58 106Z" fill="#F7D6DF" stroke="#D97B93" strokeWidth="1.6" />
        </svg>
      );

    case 'masculino-conjunto':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Camiseta */}
          <path
            d="M92 38L68 54L78 72L92 64V98H148V64L162 72L172 54L148 38C140 44 131 46 120 46C109 46 100 44 92 38Z"
            fill="#FFFFFF"
            stroke="#6BA4D9"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M104 68H136" stroke="#8BBEE8" strokeWidth="4" strokeLinecap="round" />
          {/* Bermuda */}
          <path
            d="M92 104H148L154 140H126L120 120L114 140H86L92 104Z"
            fill="#D9ECFA"
            fillOpacity="0.8"
            stroke="#6BA4D9"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <circle cx="182" cy="52" r="6" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="1.8" />
          <circle cx="54" cy="112" r="5" fill="#D7F0E5" stroke="#52A686" strokeWidth="1.8" />
        </svg>
      );

    case 'masculino-polo':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          <path
            d="M94 40L68 56L79 74L94 65V128H146V65L161 74L172 56L146 40L120 52L94 40Z"
            fill="#FFFFFF"
            stroke="#52A686"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M104 44L120 58L136 44" stroke="#52A686" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120 58V78" stroke="#52A686" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="120" cy="65" r="2" fill="#52A686" />
          <circle cx="120" cy="73" r="2" fill="#52A686" />
          <rect x="100" y="76" width="14" height="14" rx="3" fill="#D7F0E5" stroke="#52A686" strokeWidth="1.8" />
        </svg>
      );

    case 'galeria-fachada':
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Toldo listrado de boutique */}
          <rect x="44" y="42" width="152" height="104" rx="10" fill="#FFFFFF" stroke="#B6AEA4" strokeWidth="2.2" />
          <path d="M40 48H200L192 70H48L40 48Z" fill="#FADCD4" stroke="#E07A5F" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M72 48L68 70M104 48L102 70M136 48L138 70M168 48L172 70" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          {/* Vitrine e porta */}
          <rect x="60" y="84" width="66" height="44" rx="6" fill="#D9ECFA" fillOpacity="0.45" stroke="#8BBEE8" strokeWidth="2" />
          <rect x="140" y="84" width="40" height="62" rx="4" fill="#FDF0C4" fillOpacity="0.55" stroke="#E5B74B" strokeWidth="2" />
          <circle cx="148" cy="116" r="2.5" fill="#E07A5F" />
          {/* Arco-íris na vitrine */}
          <path d="M76 116C76 106 84 98 93 98C102 98 110 106 110 116" stroke="#E07A5F" strokeWidth="3" strokeLinecap="round" />
          <path d="M82 116C82 109 87 104 93 104C99 104 104 109 104 116" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'galeria-arara':
    case 'galeria-atendimento':
    default:
      return (
        <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className={className}>
          {/* Arara de roupas */}
          <path d="M52 138H188" stroke="#B6AEA4" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M68 138V48H172V138" stroke="#B6AEA4" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Cabide 1 */}
          <path d="M96 48V58M84 66H108L96 58L84 66Z" stroke="#B6AEA4" strokeWidth="2" strokeLinejoin="round" />
          <rect x="82" y="66" width="28" height="40" rx="5" fill="#F7D6DF" stroke="#D97B93" strokeWidth="2" />
          {/* Cabide 2 */}
          <path d="M124 48V58M112 66H136L124 58L112 66Z" stroke="#B6AEA4" strokeWidth="2" strokeLinejoin="round" />
          <rect x="110" y="66" width="28" height="44" rx="5" fill="#FDF0C4" stroke="#E5B74B" strokeWidth="2" />
          {/* Cabide 3 */}
          <path d="M152 48V58M140 66H164L152 58L140 66Z" stroke="#B6AEA4" strokeWidth="2" strokeLinejoin="round" />
          <rect x="138" y="66" width="28" height="38" rx="5" fill="#D9ECFA" stroke="#6BA4D9" strokeWidth="2" />
        </svg>
      );
  }
}
