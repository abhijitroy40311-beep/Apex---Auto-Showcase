import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "Are the vehicles independently inspected?", 
    a: "Yes, every vehicle undergoes a rigorous 150-point inspection covering mechanical, electrical, and aesthetic components before it is listed for sale. We use advanced diagnostic tools to ensure peak condition." 
  },
  { 
    q: "Do you provide service history?", 
    a: "Absolutely. We verify and provide the complete service history for every vehicle in our collection. We only select cars with impeccable provenance." 
  },
  { 
    q: "Is a warranty included with my purchase?", 
    a: "Confidence comes standard. All our vehicles include a complimentary 6-month warranty covering major engine and transmission components, giving you peace of mind." 
  },
  { 
    q: "Can I schedule a private test drive?", 
    a: "Yes, you can schedule a private test drive appointment at our showroom or request a premium doorstep test drive anywhere in Kolkata." 
  },
  { 
    q: "Is financing available for pre-owned luxury cars?", 
    a: "We work with leading financial institutions to offer premium financing options tailored to your needs, often with highly competitive rates for certified pre-owned vehicles." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">Questions Answered</h2>
          <p className="text-text-muted text-lg font-light">Everything you need to know about the Apex experience.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border bg-primary/30"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium text-text-primary uppercase tracking-wider">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-accent transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                      <p className="text-text-muted text-sm leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
