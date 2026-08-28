import React from 'react';
import { motion } from 'motion/react';

const Intro = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-[1.1] mb-8">
              Luxury, <br/><span className="text-text-secondary">Without the Uncertainty.</span>
            </h2>
            <div className="w-12 h-px bg-accent mb-8"></div>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Buying a used luxury vehicle often brings uncertainty around vehicle condition, hidden repair costs, and service history. We eliminate the guesswork.
            </p>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              At APEXORA AUTOMOTIVE, every vehicle is subjected to a rigorous 150-point inspection and prepared to an exceptional standard. We don't just sell cars; we curate a collection of the finest pre-owned luxury vehicles in Kolkata, ensuring your peace of mind comes standard.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Mercedes Interior" 
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary to-transparent z-20">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Apex Standard</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
