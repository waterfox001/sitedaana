import React, { useState } from 'react';
import type { CategorySlug } from './data/catalog';
import { AboutAndDifferentials } from './components/AboutAndDifferentials';
import { Categories } from './components/Categories';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationAndContact } from './components/LocationAndContact';
import { NewArrivals } from './components/NewArrivals';
import {
  ProductShowcase,
  type FilterOption,
} from './components/ProductShowcase';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('todos');

  const handleExploreCategory = (category: CategorySlug) => {
    setActiveFilter(category);
    const targetId = category === 'novidades' ? 'novidades' : 'colecoes';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#232129]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#232129] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal">
        <Hero />
        <Categories onSelectCategory={handleExploreCategory} />
        <ProductShowcase
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <NewArrivals />
        <AboutAndDifferentials />
        <Gallery />
        <LocationAndContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
