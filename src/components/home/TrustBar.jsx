import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, IndianRupee, Car } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <ShieldCheck size={28} className="text-accent mb-4" strokeWidth={1.5} />,
      title: '150-Point Inspection',
      desc: 'Every vehicle evaluated before listing',
    },
    {
      icon: <CheckCircle2 size={28} className="text-accent mb-4" strokeWidth={1.5} />,
      title: '6-Month Warranty',
      desc: 'Engine & transmission coverage',
    },
    {
      icon: <IndianRupee size={28} className="text-accent mb-4" strokeWidth={1.5} />,
      title: 'Transparent Pricing',
      desc: 'No unnecessary negotiation',
    },
    {
      icon: <Car size={28} className="text-accent mb-4" strokeWidth={1.5} />,
      title: 'Private Test Drives',
      desc: 'Premium doorstep experience',
    }
  ];

  return (
    <section className="bg-surface py-16 border-b border-border relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              {item.icon}
              <h3 className="text-sm uppercase tracking-widest text-text-primary font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
