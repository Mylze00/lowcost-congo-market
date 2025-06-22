
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import LocalProductsSection from '@/components/LocalProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <LocalProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
