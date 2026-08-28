import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inventory', path: '/inventory' },
    { name: 'Why Apex', path: '/why-apex' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-primary/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-widest text-text-primary uppercase flex flex-col leading-none">
            <span>APEXORA</span>
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-text-secondary mt-1">AUTOMOTIVE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/contact" className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">
              WhatsApp
            </Link>
            <Link to="/test-drive" className="px-6 py-3 bg-accent text-primary text-xs uppercase tracking-widest font-semibold hover:bg-accent-hover transition-colors">
              Book Test Drive
            </Link>
          </div>

          <button aria-label="Open mobile menu" className="md:hidden text-text-primary" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-primary z-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" className="text-xl font-serif tracking-widest text-text-primary uppercase flex flex-col leading-none" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Apex</span>
              </Link>
              <button aria-label="Close mobile menu" className="text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              <Link to="/" className="text-xl uppercase tracking-widest text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-xl uppercase tracking-widest text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <Link to="/test-drive" className="w-full text-center px-6 py-4 bg-accent text-primary text-sm uppercase tracking-widest font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Book Test Drive
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
