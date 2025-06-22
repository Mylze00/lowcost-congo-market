
import React from 'react';
import { Smartphone, Car, Home, Shirt, Gamepad2, Heart, Wrench, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { name: 'Électronique', icon: Smartphone, color: 'bg-blue-500', items: '2.5K+' },
  { name: 'Automobiles', icon: Car, color: 'bg-red-500', items: '850+' },
  { name: 'Maison & Jardin', icon: Home, color: 'bg-green-500', items: '1.2K+' },
  { name: 'Mode & Beauté', icon: Shirt, color: 'bg-pink-500', items: '3.1K+' },
  { name: 'Sports & Loisirs', icon: Gamepad2, color: 'bg-purple-500', items: '680+' },
  { name: 'Santé & Bien-être', icon: Heart, color: 'bg-red-400', items: '420+' },
  { name: 'Outils & Bricolage', icon: Wrench, color: 'bg-gray-600', items: '290+' },
  { name: 'Livres & Culture', icon: BookOpen, color: 'bg-indigo-500', items: '150+' },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explorez nos catégories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des milliers de produits dans chaque catégorie, vendus par des commerçants congolais de confiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-congo-blue transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.items} articles</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-congo-blue font-semibold text-lg hover:text-congo-blue/80 transition-colors">
            Voir toutes les catégories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
