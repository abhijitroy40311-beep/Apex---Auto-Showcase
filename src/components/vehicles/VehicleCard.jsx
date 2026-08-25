import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const VehicleCard = ({ vehicle }) => {
  return (
    <Link to={`/vehicle/${vehicle.id}`} className="group block relative bg-surface border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:shadow-2xl hover:shadow-black/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={vehicle.images[0]} 
          alt={`${vehicle.brand} ${vehicle.model}`} 
          className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-[10px] uppercase tracking-widest text-text-primary border border-white/10">
            Available
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-serif text-text-primary mb-1">{vehicle.brand}</h3>
            <p className="text-sm text-text-secondary">{vehicle.model}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium text-accent">{formatPrice(vehicle.price)}</p>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs text-text-muted uppercase tracking-wider">
          <div className="flex flex-col">
            <span className="text-[10px] text-text-secondary/50 mb-0.5">Year</span>
            <span className="text-text-primary">{vehicle.year}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-text-secondary/50 mb-0.5">Mileage</span>
            <span className="text-text-primary">{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-text-secondary/50 mb-0.5">Fuel</span>
            <span className="text-text-primary">{vehicle.fuel}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-text-secondary/50 mb-0.5">Transmission</span>
            <span className="text-text-primary">{vehicle.transmission}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border flex justify-between items-center mt-2">
          <div className="flex items-center gap-1.5 text-text-muted text-xs">
            <MapPin size={14} className="text-accent" />
            <span>{vehicle.location}</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-accent font-medium group-hover:text-accent-hover transition-colors flex items-center gap-2">
            View Details
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
