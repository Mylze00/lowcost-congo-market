
import React from 'react';
import Header from '@/components/Header';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import EnhancedFeaturedProducts from '@/components/EnhancedFeaturedProducts';
import LocalProductsSection from '@/components/LocalProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DynamicHeroSection />
      <CategoriesSection />
      <EnhancedFeaturedProducts />
      <LocalProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
