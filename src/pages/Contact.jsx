import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-primary pb-24">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary uppercase leading-[1.1] mb-6">
              Connect <br/><span className="text-text-secondary">With Us.</span>
            </h1>
            <div className="w-12 h-px bg-accent mb-8"></div>
            <p className="text-text-muted text-lg font-light leading-relaxed mb-12">
              Speak with our automotive concierge regarding a specific vehicle, selling your luxury car, or arranging a private viewing.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-accent shrink-0 mt-1" strokeWidth={1} />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-1">Showroom Location</h4>
                  <p className="text-text-muted font-light">123 Park Street, Kolkata<br/>West Bengal, 700016</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-accent shrink-0 mt-1" strokeWidth={1} />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-1">Direct Line</h4>
                  <a href="tel:+918777202487" className="text-text-muted hover:text-accent font-light transition-colors">+91 87772 02487</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={24} className="text-accent shrink-0 mt-1" strokeWidth={1} />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:concierge@apexauto.in" className="text-text-muted hover:text-accent font-light transition-colors">concierge@apexauto.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={24} className="text-accent shrink-0 mt-1" strokeWidth={1} />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-1">Hours of Operation</h4>
                  <p className="text-text-muted font-light">Mon-Sat: 10:00 AM – 7:00 PM<br/>Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-8 md:p-12 border border-border"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                 <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 className="text-2xl font-serif text-text-primary uppercase mb-4">Message Sent</h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  Thank you for reaching out. Our concierge team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Full Name *</label>
                    <input type="text" id="name" required className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Phone Number *</label>
                    <input type="tel" id="phone" required className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Message *</label>
                  <textarea id="message" required rows="5" className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 bg-transparent border border-border text-text-primary text-sm uppercase tracking-widest font-semibold hover:border-accent hover:text-accent transition-colors mt-4">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
