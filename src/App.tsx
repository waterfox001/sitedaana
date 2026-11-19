import React, { useEffect, useState } from 'react';
import type { AgeGroupSlug, CategorySlug } from './data/catalog';
import { AboutAndDifferentials } from './components/AboutAndDifferentials';
import { AgeQuickStrip } from './components/AgeQuickStrip';
import { Categories } from './components/Categories';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header, type PageRoute } from './components/Header';
import { Hero } from './components/Hero';
import { HomeFeaturedProducts } from './components/HomeFeaturedProducts';
import { LocationSection, ContactSection } from './components/LocationAndContact';
import { NewArrivals } from './components/NewArrivals';
import {
  ProductShowcase,
  type FilterOption,
} from './components/ProductShowcase';
import { PromoBannerStrip } from './components/PromoBannerStrip';
import { PromoSpotlights } from './components/PromoSpotlights';

const PAGE_TITLES: Record<PageRoute, string> = {
  '/': 'Atrividinhos | Enxoval para Bebês e Moda Infantil em Fortaleza',
  '/colecoes': 'Coleções e Produtos | Atrividinhos Fortaleza',
  '/sobre': 'Sobre Nós e Galeria | Atrividinhos Fortaleza',
  '/localizacao': 'Localização no Centro de Fortaleza | Atrividinhos',
  '/contato': 'Contato e WhatsApp | Atrividinhos Fortaleza',
};

function normalizePath(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (
    clean === '/' ||
    clean === '/colecoes' ||
    clean === '/sobre' ||
    clean === '/localizacao' ||
    clean === '/contato'
  ) {
    return clean;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<PageRoute>(() =>
    typeof window !== 'undefined'
      ? normalizePath(window.location.pathname)
      : '/'
  );
  const [activeFilter, setActiveFilter] = useState<FilterOption>('todos');
  const [activeAgeGroup, setActiveAgeGroup] = useState<AgeGroupSlug>('todas');

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath];
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: PageRoute) => {
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCategory = (category: CategorySlug) => {
    setActiveFilter(category);
    setActiveAgeGroup('todas');
    navigateTo('/colecoes');
  };

  const handleSelectAgeGroup = (ageGroup: AgeGroupSlug) => {
    setActiveAgeGroup(ageGroup);
    setActiveFilter('todos');
    navigateTo('/colecoes');
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#232129]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#232129] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <PromoBannerStrip />
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      <main id="conteudo-principal" className="flex-1">
        {currentPath === '/' && (
          <>
            <Hero onSelectCategory={handleExploreCategory} />
            <AgeQuickStrip
              activeAgeGroup={null}
              onSelectAgeGroup={handleSelectAgeGroup}
              onSelectCategory={handleExploreCategory}
            />
            <Categories onSelectCategory={handleExploreCategory} />
            <HomeFeaturedProducts onViewAll={() => navigateTo('/colecoes')} />
            <PromoSpotlights onSelectCategory={handleExploreCategory} />
          </>
        )}

        {currentPath === '/colecoes' && (
          <>
            <ProductShowcase
              activeFilter={activeFilter}
              activeAgeGroup={activeAgeGroup}
              onFilterChange={setActiveFilter}
              onAgeGroupChange={setActiveAgeGroup}
            />
            <NewArrivals />
          </>
        )}

        {currentPath === '/sobre' && (
          <>
            <AboutAndDifferentials />
            <Gallery />
          </>
        )}

        {currentPath === '/localizacao' && <LocationSection />}

        {currentPath === '/contato' && <ContactSection />}
      </main>

      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
}
