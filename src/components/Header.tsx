"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Menu', href: '#menu' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'bg-rc-cream/95 backdrop-blur-xl shadow-[0_1px_0_0_#E5E0D8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl border border-rc-forest/20 bg-rc-forest flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <span className="text-rc-cream font-serif text-lg font-light italic">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif tracking-tight text-rc-charcoal leading-none">
                Richard <span className="italic text-rc-forest">Catering</span>
              </span>
              <span className="text-[9px] text-rc-textMuted tracking-[0.2em] uppercase mt-0.5 hidden sm:block">
                Premium Culinary Experiences
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="premium-underline text-[13px] tracking-wide text-rc-textLight hover:text-rc-forest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 text-[13px] text-rc-textLight hover:text-rc-forest transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>

            <a
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rc-forest text-rc-cream text-[13px] tracking-wide hover:bg-rc-forestLight transition-all duration-500 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-rc-charcoal hover:text-rc-forest transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-rc-border bg-rc-cream/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="block py-3 text-rc-text text-[15px] border-b border-rc-borderLight hover:text-rc-forest hover:pl-2 transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-6 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-rc-textLight"
                >
                  <Phone className="w-4 h-4 text-rc-forest" />
                  +91 98765 43210
                </a>
                <a
                  href="#consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-rc-forest text-rc-cream text-sm tracking-wide"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
