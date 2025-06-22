
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-congo-blue">LOW</span>
              <span className="text-congo-yellow">COST</span>
              <span className="text-xs text-congo-green ml-2">RDC</span>
            </div>
            <p className="text-gray-300 mb-6">
              La première marketplace congolaise qui démocratise le commerce en ligne 
              et soutient l'économie locale.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-congo-blue cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-congo-blue cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-congo-blue cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-congo-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Catégories</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Produits Locaux</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Vendeurs</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Comment vendre</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Sécurité</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Résolution de litiges</a></li>
              <li><a href="#" className="hover:text-congo-yellow transition-colors">Contactez-nous</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-congo-green" />
                <span>+243 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-congo-green" />
                <span>support@lowcost.cd</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-congo-green" />
                <span>Kinshasa, RDC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Moyens de paiement acceptés</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              M-Pesa
            </div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Airtel Money
            </div>
            <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Orange Money
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Africell Money
            </div>
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Virement bancaire
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            © 2024 LOWCOST RDC. Tous droits réservés.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-congo-yellow transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-congo-yellow transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-congo-yellow transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
