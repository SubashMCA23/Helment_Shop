import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Helmets', path: '/helmets' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-2 relative z-50">
              <span className="font-display font-black text-2xl tracking-tight uppercase">
                {siteConfig.shopName}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary mb-3"></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={cn(
                    "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a 
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium border border-white/10 hover:border-primary px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP US
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {links.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path}
                    className={cn(
                      "text-3xl font-display font-bold uppercase tracking-widest",
                      location.pathname === link.path ? "text-primary" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <a 
                  href={createGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider"
                >
                  <MessageCircle className="w-5 h-5" />
                  WHATSAPP US
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
