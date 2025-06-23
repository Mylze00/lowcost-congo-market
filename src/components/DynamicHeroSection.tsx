
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Smartphone, ShoppingBag, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const heroSlides = [
  {
    title: "Trouvez tout ce dont vous avez besoin",
    subtitle: "Des milliers de produits à prix abordables",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    cta: "Explorer maintenant"
  },
  {
    title: "Vendez facilement en ligne",
    subtitle: "Rejoignez plus de 10,000 vendeurs congolais",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80",
    cta: "Commencer à vendre"
  },
  {
    title: "Livraison dans tout Kinshasa",
    subtitle: "Recevez vos achats rapidement et en sécurité",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    cta: "Voir les zones"
  }
];

const DynamicHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-congo-blue via-congo-blue/90 to-congo-green overflow-hidden">
      {/* Background Image avec overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isAnimating ? 'scale-110 opacity-70' : 'scale-100 opacity-80'}`}
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-congo-blue/80 via-congo-blue/60 to-transparent" />
      
      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[600px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Contenu texte */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-congo-yellow text-congo-blue font-semibold px-4 py-2">
                🇨🇩 Marketplace #1 en RDC
              </Badge>
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight transition-all duration-500 ${isAnimating ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}>
                {currentSlideData.title}
              </h1>
              <p className={`text-xl md:text-2xl text-white/90 transition-all duration-500 delay-100 ${isAnimating ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}>
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Barre de recherche améliorée */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Que recherchez-vous ? (ex: iPhone, voiture, wax...)"
                    className="pl-10 pr-4 py-3 text-lg border-0 focus:ring-2 focus:ring-congo-blue"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="whitespace-nowrap">
                    <MapPin className="h-4 w-4 mr-2" />
                    Kinshasa
                  </Button>
                  <Button className="bg-congo-blue hover:bg-congo-blue/90 px-8">
                    Rechercher
                  </Button>
                </div>
              </div>
              
              {/* Tags de recherche populaire */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-600 mr-2">Populaire:</span>
                {['iPhone', 'Voiture', 'Wax', 'Ordinateur', 'Moto'].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-congo-blue hover:text-white transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-congo-yellow text-congo-blue hover:bg-congo-yellow/90 font-semibold px-8 py-4 text-lg">
                {currentSlideData.cta}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-congo-blue px-8 py-4 text-lg">
                Devenir vendeur
              </Button>
            </div>
          </div>

          {/* Statistiques animées */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: ShoppingBag, number: '25K+', label: 'Produits', color: 'bg-congo-yellow' },
              { icon: Heart, number: '10K+', label: 'Vendeurs', color: 'bg-congo-red' },
              { icon: Star, number: '50K+', label: 'Clients satisfaits', color: 'bg-congo-green' },
              { icon: Smartphone, number: '1M+', label: 'Visites/mois', color: 'bg-white' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.color === 'bg-white' ? 'text-congo-blue' : 'text-white'}`} />
                </div>
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-congo-yellow scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicHeroSection;
