import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div>
            <Link to="/" className="text-2xl font-serif tracking-widest text-text-primary uppercase flex flex-col leading-none mb-6 block">
              <span>Apex</span>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-text-secondary mt-1">Auto Showcase</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              A curated collection of exceptional pre-owned vehicles. Premium automotive experience in Kolkata.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-text-muted hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Facebook" className="text-text-muted hover:text-accent transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Twitter" className="text-text-muted hover:text-accent transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-primary font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/inventory" className="text-sm text-text-muted hover:text-accent transition-colors">Inventory</Link></li>
              <li><Link to="/why-apex" className="text-sm text-text-muted hover:text-accent transition-colors">Why Apex</Link></li>
              <li><Link to="/about" className="text-sm text-text-muted hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-sm text-text-muted hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-primary font-semibold mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/contact" className="text-sm text-text-muted hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/test-drive" className="text-sm text-text-muted hover:text-accent transition-colors">Book Test Drive</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-text-muted hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-muted hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-primary font-semibold mb-6">Visit Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-text-muted">123 Park Street, Kolkata<br/>West Bengal, 700016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                <a href="tel:+918777202487" className="text-sm text-text-muted hover:text-accent transition-colors">+91 87772 02487</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                <a href="mailto:abhijitroy40311@gmail.com" className="text-sm text-text-muted hover:text-accent transition-colors">abhijitroy40311@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Apex Auto Showcase. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted uppercase tracking-wider">
            <span>Premium Pre-Owned Luxury Cars</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
