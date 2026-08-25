import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Detail of luxury vehicle" 
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary leading-[1.2] mb-8 uppercase">
              Not Every Car <br/><span className="text-text-secondary">Belongs In The Collection.</span>
            </h2>
            <div className="w-12 h-px bg-accent mb-8"></div>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Apex carefully selects luxury vehicles based on condition, history, maintenance, specification, and desirability. 
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-10 font-light">
              We reject more vehicles than we accept. Only those that meet our uncompromising standards for quality and provenance earn a place on our showroom floor.
            </p>
            <Link to="/about" className="inline-block px-8 py-4 bg-transparent border border-border text-text-primary text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors">
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
