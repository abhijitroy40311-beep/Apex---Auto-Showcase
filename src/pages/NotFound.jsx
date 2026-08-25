import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-serif text-text-primary uppercase mb-6">This Road <br/><span className="text-text-secondary">Ends Here.</span></h1>
        <div className="w-12 h-px bg-accent mx-auto mb-8"></div>
        <p className="text-text-muted text-lg font-light mb-12 max-w-md mx-auto">
          The vehicle or page you're looking for could not be found. It may have been sold or removed.
        </p>
        <Link to="/inventory" className="inline-block px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors">
          Explore Collection
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
