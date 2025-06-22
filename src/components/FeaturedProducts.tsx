
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    title: "Smartphone Samsung Galaxy A54 - Neuf avec garantie",
    price: "450,000",
    originalPrice: "520,000",
    image: "",
    seller: "TechStore Kinshasa",
    rating: 4.8,
    location: "Gombe, Kinshasa",
    isPromoted: true,
  },
  {
    title: "Tissu Wax authentique - Motifs traditionnels congolais",
    price: "25,000",
    image: "",
    seller: "Mama Josephine",
    rating: 4.9,
    location: "Marché Central, Kinshasa",
    isLocal: true,
  },
  {
    title: "Ordinateur portable HP Pavilion - Reconditionné",
    price: "680,000",
    originalPrice: "850,000",
    image: "",
    seller: "Digital Congo",
    rating: 4.6,
    location: "Limete, Kinshasa",
  },
  {
    title: "Sculpture traditionnelle en bois d'ébène",
    price: "180,000",
    image: "",
    seller: "Artisan Kongo",
    rating: 5.0,
    location: "Matadi, Bas-Congo",
    isLocal: true,
  },
  {
    title: "Véhicule Toyota Corolla 2018 - Bon état",
    price: "12,500,000",
    image: "",
    seller: "Auto Plus RDC",
    rating: 4.5,
    location: "Lemba, Kinshasa",
  },
  {
    title: "Machine à coudre Singer - Semi-professionnelle",
    price: "320,000",
    image: "",
    seller: "Couture Pro",
    rating: 4.7,
    location: "Masina, Kinshasa",
  },
  {
    title: "Chaussures en cuir artisanales - Fait main",
    price: "85,000",
    image: "",
    seller: "Cordonnier Expert",
    rating: 4.8,
    location: "Lubumbashi, Haut-Katanga",
    isLocal: true,
  },
  {
    title: "Générateur électrique 5KVA - Peu utilisé",
    price: "850,000",
    originalPrice: "1,200,000",
    image: "",
    seller: "Énergie Solutions",
    rating: 4.4,
    location: "Ngaliema, Kinshasa",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produits vedettes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits populaires et de bonnes affaires du moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-congo-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-congo-blue/90 transition-colors">
            Voir tous les produits
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
