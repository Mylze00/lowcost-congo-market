
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LocalProductsSection = () => {
  const localProducts = [
    {
      name: "Artisanat Traditionnel",
      description: "Sculptures, masques et objets d'art authentiques",
      image: "🎭",
      vendors: "150+ artisans"
    },
    {
      name: "Tissus & Mode Locale",
      description: "Wax, pagnes et créations de stylistes congolais",
      image: "👗",
      vendors: "200+ créateurs"
    },
    {
      name: "Produits Alimentaires",
      description: "Épices, condiments et spécialités culinaires",
      image: "🌶️",
      vendors: "80+ producteurs"
    },
    {
      name: "Cosmétiques Naturels",
      description: "Produits de beauté à base d'ingrédients locaux",
      image: "🧴",
      vendors: "60+ marques"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-congo-green/10 to-congo-yellow/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-congo-green text-white mb-4">
            🇨🇩 Produits 100% Congolais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            L'artisanat et les produits locaux
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soutenez l'économie locale en découvrant les créations uniques de nos artisans et producteurs congolais. 
            Chaque achat contribue au développement de nos communautés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {localProducts.map((product, index) => (
            <Card 
              key={product.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-congo-green/20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{product.image}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-congo-green transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <Badge variant="outline" className="border-congo-green text-congo-green">
                  {product.vendors}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-congo-green/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rejoignez notre communauté de vendeurs locaux
              </h3>
              <p className="text-gray-600 mb-6">
                Vous êtes artisan, producteur ou créateur congolais ? Vendez vos produits sur LOWCOST 
                et touchez des milliers de clients à travers le pays.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>✓ Inscription gratuite et simple</div>
                <div>✓ Commission réduite pour les produits locaux</div>
                <div>✓ Support dédié en français et lingala</div>
                <div>✓ Formation à la vente en ligne</div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-congo-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-congo-green/90 transition-colors text-lg">
                Devenir vendeur local
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Plus de 500 vendeurs nous font déjà confiance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalProductsSection;
