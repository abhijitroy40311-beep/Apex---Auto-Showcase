import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center bg-primary px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface p-8 md:p-12 border border-border max-w-lg mx-auto w-full"
      >
        <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
          <CheckCircle2 size={32} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-serif text-text-primary uppercase mb-4">Thank You</h1>
        <p className="text-text-muted text-sm leading-relaxed mb-8">
          Your test drive request has been received. Our automotive concierge will review your details and contact you shortly to confirm your appointment.
        </p>
        <Link to="/" className="inline-block px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors w-full sm:w-auto">
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
