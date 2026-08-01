"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#consultation' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-rc-cream/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-rc-cream'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group z-[110]">
              <Logo className="w-8 h-8 text-rc-forest transition-transform duration-500 group-hover:scale-105" fillColor="currentColor" />
              <span className="text-lg font-serif tracking-tight text-rc-charcoal leading-none">
                Richard
                <br />
                <span className="text-[13px] tracking-normal">Catering</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-rc-text hover:text-rc-forest transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href="#consultation"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-rc-text/20 text-rc-text text-[13px] hover:border-rc-forest hover:text-rc-forest transition-all duration-300"
              >
                Get a Quote
              </a>
              <a
                href="#consultation"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-rc-charcoal text-white text-[13px] hover:bg-rc-forest transition-all duration-300"
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-rc-charcoal z-[110]"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="flex flex-col gap-[5px]">
                    <span className="w-6 h-[1.5px] bg-rc-charcoal rounded-full" />
                    <span className="w-6 h-[1.5px] bg-rc-charcoal rounded-full" />
                    <span className="w-4 h-[1.5px] bg-rc-charcoal rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-rc-cream flex flex-col"
          >
            {/* Top spacing for header */}
            <div className="h-16 shrink-0" />

            {/* Banner */}
            <div className="bg-rc-beige py-3 text-center text-sm text-rc-textLight">
              📞 Free Consultation Available
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between py-5 border-b border-rc-border/50 text-rc-charcoal text-[clamp(1.5rem,4vw,2.5rem)] font-light font-serif hover:text-rc-forest transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-6 h-6 text-rc-textMuted group-hover:text-rc-forest group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 sm:px-10 pb-8 pt-4">
              <a
                href="#consultation"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-rc-charcoal text-white text-[15px] font-medium hover:bg-rc-forest transition-all duration-300"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
