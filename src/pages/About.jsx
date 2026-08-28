import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-primary pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-text-primary uppercase leading-[1.1] mb-8">
            Driven by <span className="text-text-secondary">Excellence.</span>
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="text-text-muted text-lg font-light leading-relaxed">
             APEXORA AUTOMOTIVE was founded on a simple principle: buying a pre-owned luxury vehicle should feel just as special, secure, and exciting as buying a new one. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503376760367-17559e2a4be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury vehicle detailing" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary uppercase">The Art of Curation</h2>
            <p className="text-text-muted leading-relaxed font-light text-lg">
              We do not operate a standard used-car lot. We manage a curated collection. Every vehicle that enters our facility in Kolkata is subjected to intense scrutiny. We review its service history, its provenance, and its mechanical integrity before it even reaches our 150-point inspection bay.
            </p>
            <p className="text-text-muted leading-relaxed font-light text-lg">
              If a vehicle has a questionable past, structural damage, or poor maintenance records, we reject it. We only present cars that we would proudly own ourselves.
            </p>
            <Link to="/inventory" className="inline-block px-8 py-4 bg-transparent border border-border text-text-primary text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors mt-4">
              View The Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
