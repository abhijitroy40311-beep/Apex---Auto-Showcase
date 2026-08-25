import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';
import { ShieldCheck, Calendar, Disc, Fuel, CheckCircle2, ArrowLeft } from 'lucide-react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = vehicles.find(v => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-text-primary uppercase mb-4">This Road Ends Here.</h1>
        <p className="text-text-muted mb-8 max-w-md">The vehicle you're looking for could not be found. It may have been sold or removed.</p>
        <Link to="/inventory" className="px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-primary pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/inventory" className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-6 w-fit">
          <ArrowLeft size={16} /> Back to Inventory
        </Link>

        {/* Hero Gallery area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-[16/9] w-full overflow-hidden bg-surface relative">
              <img src={vehicle.images[0]} alt={vehicle.model} className="object-cover w-full h-full" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {vehicle.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-[4/3] overflow-hidden bg-surface cursor-pointer group">
                  <img src={img} alt={`Detail ${idx}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 bg-surface border border-border">
              <h1 className="text-3xl font-serif text-text-primary uppercase mb-1">{vehicle.brand}</h1>
              <h2 className="text-xl text-text-secondary mb-6">{vehicle.model}</h2>
              <p className="text-3xl text-accent font-medium mb-8">{formatPrice(vehicle.price)}</p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 text-sm">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar size={14} /> Year</p>
                  <p className="text-text-primary">{vehicle.year}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1"><Disc size={14} /> Mileage</p>
                  <p className="text-text-primary">{vehicle.mileage.toLocaleString()} km</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1"><Fuel size={14} /> Fuel</p>
                  <p className="text-text-primary">{vehicle.fuel}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Trans</p>
                  <p className="text-text-primary">{vehicle.transmission}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link to={`/test-drive?vehicle=${vehicle.id}`} className="w-full text-center px-6 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors">
                  Book Private Test Drive
                </Link>
                <a href={`https://wa.me/918777202487?text=I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model}`} target="_blank" rel="noreferrer" className="w-full text-center px-6 py-4 bg-transparent border border-border text-text-primary text-sm uppercase tracking-widest font-semibold hover:border-accent hover:text-accent transition-colors">
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif text-text-primary uppercase mb-6 border-b border-border pb-4">Features & Specification</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {vehicle.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-serif text-text-primary uppercase mb-6 border-b border-border pb-4">Inspected With Purpose</h3>
            <div className="bg-surface p-8 border border-border mb-12">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck size={32} className="text-accent" />
                <h4 className="text-lg font-medium text-text-primary uppercase tracking-wide">150-Point Inspection</h4>
              </div>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">
                This vehicle has passed our rigorous mechanical and visual inspection, ensuring it meets the highest standards for performance and safety.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {vehicle.inspection.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-serif text-text-primary uppercase mb-6 border-b border-border pb-4">Service History</h3>
            <div className="relative border-l border-border ml-3 space-y-8 pb-8">
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent"></div>
                <h5 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-1">{vehicle.year + 3} - 150-Point Apex Inspection</h5>
                <p className="text-xs text-text-muted">Completed prior to listing. Passed all checks.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-border"></div>
                <h5 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-1">{vehicle.year + 2} - Scheduled Service</h5>
                <p className="text-xs text-text-muted">Verified Dealership Service. Oil change, filters replaced.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-border"></div>
                <h5 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-1">{vehicle.year + 1} - Initial Service</h5>
                <p className="text-xs text-text-muted">Verified Dealership Service.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
             <div className="bg-surface p-8 border border-border mb-8">
              <h4 className="text-lg font-serif text-text-primary uppercase mb-4">Confidence Comes Standard</h4>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                We stand behind the quality of our collection. This vehicle includes a complimentary {vehicle.warranty} warranty covering engine and transmission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
