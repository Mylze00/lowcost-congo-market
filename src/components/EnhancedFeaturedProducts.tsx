
import React from 'react';
import EnhancedProductCard from './EnhancedProductCard';

const featuredProducts = [
  {
    title: "iPhone 14 Pro Max 256GB - État neuf avec garantie",
    price: "1,250,000",
    originalPrice: "1,500,000",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=400&q=80",
    seller: "TechStore Kinshasa",
    rating: 4.8,
    location: "Gombe, Kinshasa",
    isPromoted: true,
  },
  {
    title: "Tissu Wax premium - Motifs authentiques congolais",
    price: "35,000",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=400&q=80",
    seller: "Mama Josephine",
    rating: 4.9,
    location: "Marché Central, Kinshasa",
    isLocal: true,
  },
  {
    title: "MacBook Air M2 2023 - Reconditionné comme neuf",
    price: "980,000",
    originalPrice: "1,200,000",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80",
    seller: "Digital Congo",
    rating: 4.6,
    location: "Limete, Kinshasa",
  },
  {
    title: "Sculpture traditionnelle Kongo en bois d'ébène",
    price: "280,000",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    seller: "Artisan Kongo",
    rating: 5.0,
    location: "Matadi, Bas-Congo",
    isLocal: true,
  },
  {
    title: "Toyota RAV4 2020 - Excellent état, peu kilométré",
    price: "28,500,000",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
    seller: "Auto Plus RDC",
    rating: 4.5,
    location: "Lemba, Kinshasa",
  },
  {
    title: "Machine à coudre industrielle Brother - Semi-pro",
    price: "450,000",
    image: "https://images.unsplash.com/photo-1558618666-c3c80abe8020?auto=format&fit=crop&w=400&q=80",
    seller: "Couture Pro",
    rating: 4.7,
    location: "Masina, Kinshasa",
  },
  {
    title: "Chaussures artisanales en cuir - Fabrication locale",
    price: "125,000",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80",
    seller: "Cordonnier Expert",
    rating: 4.8,
    location: "Lubumbashi, Haut-Katanga",
    isLocal: true,
  },
  {
    title: "Générateur Honda 7.5KVA - Silencieux, peu utilisé",
    price: "1,850,000",
    originalPrice: "2,400,000",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=400&q=80",
    seller: "Énergie Solutions",
    rating: 4.4,
    location: "Ngaliema, Kinshasa",
  },
];

const EnhancedFeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-congo-blue/10 text-congo-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔥 Trending
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Produits vedettes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de produits populaires et de bonnes affaires du moment, 
            soigneusement choisis par notre équipe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <EnhancedProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-congo-blue to-congo-green text-white px-12 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
            Voir tous les produits
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeaturedProducts;
