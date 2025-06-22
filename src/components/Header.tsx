
import React, { useState } from 'react';
import { Search, ShoppingCart, User, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-congo-blue" />
              <span className="text-sm text-gray-600">Kinshasa, RDC</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-congo-blue hover:text-congo-blue/80">
              Vendre
            </Button>
            <Button variant="ghost" size="sm" className="text-congo-blue hover:text-congo-blue/80">
              S'inscrire
            </Button>
            <Button variant="outline" size="sm" className="border-congo-blue text-congo-blue hover:bg-congo-blue hover:text-white">
              Se connecter
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">
              <span className="text-congo-blue">LOW</span>
              <span className="text-congo-yellow">COST</span>
              <span className="text-xs text-congo-green ml-2">RDC</span>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-congo-blue transition-colors">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-congo-blue transition-colors">Catégories</a>
              <a href="#" className="text-gray-700 hover:text-congo-blue transition-colors">Produits Locaux</a>
              <a href="#" className="text-gray-700 hover:text-congo-blue transition-colors">Vendeurs</a>
            </nav>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Rechercher produits, services, vendeurs..."
                className="w-full pr-12 h-12 border-2 border-gray-200 focus:border-congo-blue"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-congo-blue hover:bg-congo-blue/90 h-10"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-congo-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6 text-gray-700" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Rechercher..."
              className="w-full pr-12 h-10 border-2 border-gray-200 focus:border-congo-blue"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bg-congo-blue hover:bg-congo-blue/90 h-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-2 pt-4">
              <a href="#" className="py-2 text-gray-700 hover:text-congo-blue transition-colors">Accueil</a>
              <a href="#" className="py-2 text-gray-700 hover:text-congo-blue transition-colors">Catégories</a>
              <a href="#" className="py-2 text-gray-700 hover:text-congo-blue transition-colors">Produits Locaux</a>
              <a href="#" className="py-2 text-gray-700 hover:text-congo-blue transition-colors">Vendeurs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
