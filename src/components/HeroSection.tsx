
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Package } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-congo-blue via-congo-blue/90 to-congo-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              La marketplace
              <span className="block text-congo-yellow">congolaise</span>
              qui vous fait économiser
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Découvrez des milliers de produits à prix abordables, vendus par des commerçants locaux de confiance. 
              De l'artisanat traditionnel aux produits high-tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-congo-yellow text-congo-blue hover:bg-congo-yellow/90 font-semibold">
                Commencer à acheter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-congo-blue">
                Devenir vendeur
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-congo-yellow mr-2" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-blue-200">Vendeurs actifs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-congo-yellow mr-2" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-blue-200">Produits disponibles</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-congo-yellow mr-2" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-blue-200">Note moyenne</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-congo-yellow rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6 text-congo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Livraison rapide</h3>
                    <p className="text-blue-200 text-sm">Partout à Kinshasa et en RDC</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-congo-green rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Vendeurs vérifiés</h3>
                    <p className="text-blue-200 text-sm">Tous nos vendeurs sont authentifiés</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-congo-red rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Paiement sécurisé</h3>
                    <p className="text-blue-200 text-sm">M-Pesa, Airtel Money, Orange Money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
