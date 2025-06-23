
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Heart, Eye, Share2, ShoppingCart } from 'lucide-react';
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
  views?: number;
  likes?: number;
}

const EnhancedProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  image,
  seller,
  rating,
  location,
  isLocal = false,
  isPromoted = false,
  views = Math.floor(Math.random() * 500) + 50,
  likes = Math.floor(Math.random() * 100) + 10
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gray-100 relative">
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay avec gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isPromoted && (
              <Badge className="bg-congo-red text-white shadow-lg animate-pulse">
                ⭐ Sponsorisé
              </Badge>
            )}
            {isLocal && (
              <Badge className="bg-congo-green text-white shadow-lg">
                🇨🇩 Local
              </Badge>
            )}
          </div>

          {/* Actions rapides */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <Button
              variant="ghost"
              size="icon"
              className={`bg-white/90 hover:bg-white transition-all duration-200 ${
                isLiked ? 'text-congo-red' : 'text-gray-600'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-600"
              onClick={(e) => e.stopPropagation()}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Statistiques en overlay */}
          <div className={`absolute bottom-3 left-3 flex gap-4 text-white text-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
            <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
              <Heart className="h-3 w-3" />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-congo-blue transition-colors text-sm">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-congo-blue">{price} FC</span>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through">{originalPrice} FC</span>
            )}
          </div>
          {originalPrice && (
            <Badge variant="destructive" className="text-xs">
              -{Math.round((1 - parseInt(price.replace(/,/g, '')) / parseInt(originalPrice.replace(/,/g, ''))) * 100)}%
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-congo-yellow text-congo-yellow" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500">({Math.floor(Math.random() * 100) + 10})</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="truncate max-w-20">{location}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 flex items-center justify-between">
          <span>par <span className="font-medium text-congo-blue">{seller}</span></span>
          <span className="text-congo-green">●</span>
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
          <Button className="w-full bg-congo-blue hover:bg-congo-blue/90 text-xs py-2">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Voir le produit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedProductCard;
