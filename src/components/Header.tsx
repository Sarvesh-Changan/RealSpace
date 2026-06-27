import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll state to shrink/add white backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header
        id="luxury-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-luxury/95 backdrop-blur-md py-4 border-b border-border-luxury shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" id="header-logo-link" className="flex items-center gap-2 group focus:outline-none">
            <Compass className="h-6 w-6 text-gold-luxury transition-transform duration-500 group-hover:rotate-45" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-bold text-text-luxury uppercase leading-none">
                REAL<span className="text-gold-luxury">SPACE</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-luxury leading-none mt-1">
                INTERIORS • THANE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-widest relative py-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-gold-luxury font-medium'
                      : 'text-muted-luxury hover:text-text-luxury'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-luxury"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              id="header-cta-btn"
              to="/contact"
              className="bg-[#1C1C1C] hover:bg-gold-luxury border border-[#1C1C1C] hover:border-gold-luxury text-white px-6 py-3 rounded-none font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-luxury focus:outline-none p-1.5 hover:text-gold-luxury transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-bg-luxury/98 backdrop-blur-lg border-b border-border-luxury shadow-lg md:hidden py-6 px-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-serif text-lg tracking-wide py-1 border-b border-border-luxury/50 ${
                      isActive ? 'text-gold-luxury font-medium' : 'text-text-luxury'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <Link
              id="mobile-header-cta"
              to="/contact"
              className="w-full bg-[#1C1C1C] hover:bg-gold-luxury border border-border-luxury text-white py-3 rounded-none text-center font-mono text-[10px] uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
