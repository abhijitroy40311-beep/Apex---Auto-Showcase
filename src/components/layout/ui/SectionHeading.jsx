import React from 'react';
import { motion } from 'motion/react';

const SectionHeading = ({ 
  eyebrow, 
  title, 
  titleHighlight, 
  description, 
  centered = false,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center mx-auto max-w-4xl' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      
      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-[1.1] mb-6 uppercase`}>
        {title} 
        {titleHighlight && (
          <>
            <br className="hidden md:block" />
            <span className="text-text-secondary">{titleHighlight}</span>
          </>
        )}
      </h2>
      
      <div className={`w-12 h-px bg-accent mb-8 ${centered ? 'mx-auto' : ''}`}></div>
      
      {description && (
        <p className="text-text-muted text-lg font-light leading-relaxed mb-10">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
