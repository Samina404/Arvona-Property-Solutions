import React from 'react';
import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="group rounded-sm overflow-hidden bg-background border border-white/5 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(200,169,106,0.1)]">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 text-accent text-xs font-bold tracking-widest uppercase rounded-sm border border-accent/20">
          {property.status}
        </div>
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 text-primary font-serif text-xl border border-white/10">
          {property.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-secondary text-sm mb-3">
          <MapPin size={16} className="text-accent" />
          <span>{property.location}</span>
        </div>
        <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        <p className="text-secondary text-sm mb-6 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex justify-between items-center pt-6 border-t border-white/10 text-secondary text-sm">
          <div className="flex items-center gap-2">
            <BedDouble size={18} className="text-accent" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-accent" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={18} className="text-accent" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
