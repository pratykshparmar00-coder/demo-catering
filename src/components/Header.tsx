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
        className={`fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
          scrolled
            ? 'top-4 lg:top-6 left-4 right-4 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-[1000px] rounded-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-white'
            : 'top-0 left-0 right-0 w-full rounded-none bg-transparent border-b border-transparent text-rc-charcoal'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-700 ${scrolled ? 'h-16' : 'h-20 lg:h-24'}`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group z-[110]">
              <Logo className={`w-8 h-8 transition-colors duration-500 group-hover:scale-105 ${scrolled ? 'text-white' : 'text-rc-forest'}`} fillColor="currentColor" />
              <span className="text-lg font-serif tracking-tight leading-none text-current">
                Naman
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
                  className={`text-[14px] transition-colors duration-300 ${
                    scrolled ? 'text-white/70 hover:text-white' : 'text-rc-text hover:text-rc-forest'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href="#consultation"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border text-[13px] transition-all duration-300 ${
                  scrolled 
                    ? 'border-white/20 text-white hover:bg-white hover:text-rc-charcoal' 
                    : 'border-rc-text/20 text-rc-text hover:border-rc-forest hover:text-rc-forest'
                }`}
              >
                Get a Quote
              </a>
              <a
                href="#consultation"
                className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] transition-all duration-300 ${
                  scrolled
                    ? 'bg-white text-rc-charcoal hover:bg-rc-cream'
                    : 'bg-rc-charcoal text-white hover:bg-rc-forest'
                }`}
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors z-[110] ${
                  scrolled && !menuOpen ? 'text-white' : 'text-rc-charcoal'
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="flex flex-col gap-[5px]">
                    <span className={`w-6 h-[1.5px] rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-rc-charcoal'}`} />
                    <span className={`w-6 h-[1.5px] rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-rc-charcoal'}`} />
                    <span className={`w-4 h-[1.5px] rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-rc-charcoal'}`} />
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
