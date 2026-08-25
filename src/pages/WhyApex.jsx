import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import TrustBar from '../components/home/TrustBar';
import Process from '../components/home/Process';
import { ShieldCheck, Wrench, CheckCircle2, Award } from 'lucide-react';

const WhyApex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-primary pb-0">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-text-primary uppercase leading-[1.1] mb-8">
            Why <span className="text-text-secondary">Apex.</span>
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="text-text-muted text-lg font-light leading-relaxed">
            We are redefining the pre-owned luxury automotive experience in Kolkata through transparency, rigorous standards, and uncompromising quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface p-10 border border-border"
          >
            <ShieldCheck size={40} className="text-accent mb-6" strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary uppercase mb-4">Uncompromising Inspection</h3>
            <p className="text-text-muted font-light leading-relaxed">
              Our 150-point inspection is not a marketing term—it is a rigorous technical evaluation. We check engine compression, transmission shifting logic, suspension components, and electronic modules using diagnostic tools. Only vehicles that pass flawlessly are listed for sale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-10 border border-border"
          >
            <CheckCircle2 size={40} className="text-accent mb-6" strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary uppercase mb-4">Verified Provenance</h3>
            <p className="text-text-muted font-light leading-relaxed">
              A luxury car is only as good as its history. We verify service records, ownership history, and accident reports. We refuse vehicles with questionable backgrounds, ensuring you inherit a car's performance, not its problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface p-10 border border-border"
          >
            <Award size={40} className="text-accent mb-6" strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary uppercase mb-4">6-Month Warranty</h3>
            <p className="text-text-muted font-light leading-relaxed">
              Confidence comes standard. We stand behind our vehicles with a complimentary 6-month warranty covering major engine and transmission components, giving you peace of mind from the moment you take delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-10 border border-border"
          >
            <Wrench size={40} className="text-accent mb-6" strokeWidth={1} />
            <h3 className="text-xl font-serif text-text-primary uppercase mb-4">Concierge Service</h3>
            <p className="text-text-muted font-light leading-relaxed">
              From doorstep test drives to transparent paperwork handling and financing assistance, our concierge team manages every detail of the acquisition process so you can focus purely on the driving experience.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Process />
      <TrustBar />
    </div>
  );
};

export default WhyApex;
