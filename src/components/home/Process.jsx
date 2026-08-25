import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Curate', desc: 'We hand-select exceptional vehicles.' },
    { num: '02', title: 'Inspect', desc: 'Every vehicle undergoes rigorous evaluation.' },
    { num: '03', title: 'Prepare', desc: 'Vehicles are professionally prepared.' },
    { num: '04', title: 'Experience', desc: 'Book your private test drive.' },
    { num: '05', title: 'Own', desc: 'Drive away with confidence.' },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-text-primary"
          >
            The Apex Journey
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col relative"
            >
              <div className="text-4xl font-serif text-border mb-4 md:bg-primary md:pr-4 inline-block self-start">
                {step.num}
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-3 uppercase tracking-wider">{step.title}</h3>
              <p className="text-sm text-text-muted font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
