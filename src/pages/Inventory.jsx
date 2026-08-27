import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import VehicleCard from '../components/vehicles/VehicleCard';
import { vehicles } from '../data/vehicles';
import { SlidersHorizontal, X } from 'lucide-react';

const Inventory = () => {
  const [activeBrand, setActiveBrand] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const brands = ['All', ...new Set(vehicles.map(v => v.brand))];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      const matchesBrand = activeBrand === 'All' || v.brand === activeBrand;
      const matchesSearch = v.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [activeBrand, searchQuery]);

  return (
    <div className="pt-24 min-h-screen bg-primary">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary uppercase mb-4">The Collection</h1>
          <p className="text-text-muted text-lg font-light max-w-2xl">
            Explore our hand-selected inventory of premium pre-owned vehicles. Each car has passed our rigorous 150-point inspection.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          {/* Filters/Search area */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="hidden lg:block border border-border bg-surface p-6">
              <h3 className="text-xs uppercase tracking-widest text-text-primary font-semibold mb-6 flex items-center gap-2">
                <SlidersHorizontal size={14} /> Filters
              </h3>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-text-muted mb-3">Brand</h4>
                <div className="flex flex-col gap-2">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className={`text-left text-sm py-1 transition-colors ${activeBrand === brand ? 'text-accent font-medium' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="lg:hidden w-full flex items-center justify-center gap-2 border border-border bg-surface px-4 py-3 text-sm uppercase tracking-widest text-text-primary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={16} /> {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Mobile Filters */}
            {isFilterOpen && (
              <div className="lg:hidden border border-border bg-surface p-6">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-text-muted mb-3">Brand</h4>
                  <div className="flex flex-col gap-2">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setActiveBrand(brand)}
                        className={`text-left text-sm py-1 transition-colors ${activeBrand === brand ? 'text-accent font-medium' : 'text-text-secondary hover:text-text-primary'}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Vehicle Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex justify-between items-center text-sm text-text-muted">
              <span>Showing {filteredVehicles.length} vehicles</span>
            </div>

            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-surface border border-border">
                <h3 className="text-xl font-serif text-text-primary mb-2">No vehicles found</h3>
                <p className="text-text-muted text-sm mb-6">We couldn't find any vehicles matching your current filters.</p>
                <button
                  onClick={() => { setActiveBrand('All'); setSearchQuery(''); }}
                  className="text-xs uppercase tracking-widest text-accent font-medium hover:text-accent-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
