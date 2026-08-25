import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';

const TestDrive = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedVehicleId = queryParams.get('vehicle');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: preSelectedVehicleId || '',
    date: '',
    time: '',
    locationType: 'showroom',
    address: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend here
    // e.g. API call to /api/test-drive
    
    // Track event for analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'test_drive_submit',
        vehicle: formData.vehicle,
        locationType: formData.locationType
      });
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center bg-primary">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-12 border border-border max-w-lg mx-auto"
        >
          <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-serif text-text-primary uppercase mb-4">Thank You</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            Your test drive request has been received. Our automotive concierge will review your details and contact you shortly to confirm your appointment.
          </p>
          <a href="/" className="inline-block px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors">
            Return to Homepage
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-primary pb-24">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary uppercase leading-[1.1] mb-6">
              Experience It <br/><span className="text-text-secondary">In Person.</span>
            </h1>
            <div className="w-12 h-px bg-accent mb-8"></div>
            <p className="text-text-muted text-lg font-light leading-relaxed mb-10">
              Schedule a private appointment at our showroom or request a premium doorstep test drive in Kolkata. Feel the performance, luxury, and engineering firsthand.
            </p>
            
            <div className="bg-surface p-8 border border-border space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-1">Showroom Location</h4>
                <p className="text-sm text-text-muted">123 Park Street, Kolkata, WB 700016</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-1">Hours</h4>
                <p className="text-sm text-text-muted">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                <p className="text-sm text-text-muted">Sunday: By Appointment Only</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-1">Concierge Desk</h4>
                <a href="tel:+918777202487" className="text-sm text-accent hover:text-accent-hover">+91 87772 02487</a>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Select Vehicle</label>
                <select 
                  id="vehicle" 
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">I'm not sure yet / General Enquiry</option>
                  {vehicles.map(v => (
                    <option key={v.id} value={v.id}>{v.year} {v.brand} {v.model}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Preferred Time</label>
                  <select 
                    id="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (10AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 pb-2 border-y border-border">
                <label className="block text-xs uppercase tracking-widest text-text-secondary mb-4">Location Preference</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="locationType" 
                      value="showroom"
                      checked={formData.locationType === 'showroom'}
                      onChange={handleChange}
                      className="accent-accent w-4 h-4"
                    />
                    <span className="text-sm text-text-primary">Showroom Visit</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="locationType" 
                      value="doorstep"
                      checked={formData.locationType === 'doorstep'}
                      onChange={handleChange}
                      className="accent-accent w-4 h-4"
                    />
                    <span className="text-sm text-text-primary">Doorstep Test Drive (Kolkata)</span>
                  </label>
                </div>
              </div>

              {formData.locationType === 'doorstep' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="address" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Delivery Address (Kolkata Only) *</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    required={formData.locationType === 'doorstep'}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>
              )}

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-text-secondary mb-2">Additional Requests</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary border border-border text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors mt-4"
              >
                Request Private Test Drive
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
