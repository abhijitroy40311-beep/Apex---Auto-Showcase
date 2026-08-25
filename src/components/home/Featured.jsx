import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import VehicleCard from '../vehicles/VehicleCard';
import { vehicles } from '../../data/vehicles';

const Featured = () => {
  const featuredVehicles = vehicles.slice(0, 3); // Just show 3 on home

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">The Current Collection</p>
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary">Hand-selected luxury vehicles prepared for their next chapter.</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/inventory" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-text-primary font-medium hover:text-accent transition-colors pb-1 border-b border-accent">
              View All Vehicles
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
