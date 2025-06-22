
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  seller: string;
  rating: number;
  location: string;
  isLocal?: boolean;
  isPromoted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  image,
  seller,
  rating,
  location,
  isLocal = false,
  isPromoted = false,
}) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
          <span className="text-gray-400 text-sm">Image produit</span>
          {isPromoted && (
            <Badge className="absolute top-2 left-2 bg-congo-red text-white">
              Sponsorisé
            </Badge>
          )}
          {isLocal && (
            <Badge className="absolute top-2 right-2 bg-congo-green text-white">
              🇨🇩 Local
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-congo-blue transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xl font-bold text-congo-blue">{price} FC</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice} FC</span>
          )}
        </div>
        
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-congo-yellow text-congo-yellow" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-gray-500">({Math.floor(Math.random() * 100) + 10})</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          Vendu par <span className="font-medium text-congo-blue">{seller}</span>
        </div>
        
        <Button className="w-full bg-congo-blue hover:bg-congo-blue/90">
          Voir le produit
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
