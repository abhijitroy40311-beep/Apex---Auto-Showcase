import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-primary/70 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-20 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-6 font-semibold"
        >
          Premium Pre-Owned Automotive
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary uppercase leading-[1.1] mb-8"
        >
          <span className="block">Pre-Owned.</span>
          <span className="block text-text-secondary">Exceptional.</span>
          <span className="block">Yours.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Curated luxury vehicles for drivers who expect more from every journey. Independently inspected and prepared in Kolkata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/inventory" className="px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors w-full sm:w-auto">
            Explore Collection
          </Link>
          <Link to="/test-drive" className="px-8 py-4 bg-transparent border border-border text-text-primary text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors w-full sm:w-auto">
            Book Private Test Drive
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-text-muted">Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
