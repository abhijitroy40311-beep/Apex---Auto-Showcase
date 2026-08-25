import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The process felt completely different from a typical used-car purchase. Every detail was explained, and the doorstep test drive was incredibly convenient.",
      author: "Rahul S.",
      vehicle: "BMW X5",
      location: "Alipore, Kolkata"
    },
    {
      id: 2,
      quote: "Transparency is rare in this industry, but Apex delivered. The 150-point inspection report gave me the confidence to purchase my first luxury SUV.",
      author: "Aditi M.",
      vehicle: "Mercedes-Benz GLC",
      location: "Salt Lake, Kolkata"
    },
    {
      id: 3,
      quote: "Impeccable curation. The Porsche I bought looks and drives like it just rolled out of the factory. A truly premium experience from start to finish.",
      author: "Vikram D.",
      vehicle: "Porsche Macan",
      location: "Ballygunge, Kolkata"
    }
  ];

  return (
    <section className="py-24 bg-primary border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">The Apex Experience</h2>
          <p className="text-text-muted text-lg font-light">Don't just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-surface p-10 border border-border relative flex flex-col"
            >
              <Quote size={40} className="text-accent/20 absolute top-8 right-8" strokeWidth={1} />
              
              <p className="text-text-primary text-lg font-serif italic leading-relaxed mb-8 flex-grow z-10 relative">
                "{t.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="w-8 h-px bg-accent mb-4"></div>
                <p className="text-sm font-medium text-text-primary uppercase tracking-wider">{t.author}</p>
                <p className="text-xs text-text-muted mt-1">{t.vehicle} &bull; {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
