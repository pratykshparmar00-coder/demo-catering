"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Facebook, Linkedin } from 'lucide-react';
import { fadeUp } from '@/libraries/animations/presets';
import { Logo } from './Logo';

const SERVICE_CARDS = [
  { title: 'Corporate Events', href: '#services', image: '/footer/corporate.png' },
  { title: 'Weddings', href: '#services', image: '/footer/wedding.png' },
  { title: 'Private Dining', href: '#services', image: '/footer/private_dining.png' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rc-cream pt-20 pb-0 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top: Tagline + Back to Top */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-start justify-between pb-16 lg:pb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
            Premium Culinary
            <br />
            <span className="italic font-normal">Experiences.</span>
          </h2>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl border border-rc-border flex items-center justify-center hover:border-rc-forest hover:bg-rc-forest hover:text-white text-rc-charcoal transition-all duration-300 shrink-0"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Middle: Large Logo Mark + Service Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 lg:pb-20"
        >
          {/* Large Logo Mark */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <Logo
              className="w-40 h-40 lg:w-52 lg:h-52 text-rc-forest"
              fillColor="currentColor"
            />
          </div>

          {/* Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVICE_CARDS.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative flex items-center justify-center py-16 lg:py-20 rounded-2xl border border-rc-forest/20 text-lg font-serif font-light text-rc-charcoal hover:border-rc-forest transition-all duration-500 overflow-hidden"
              >
                {/* Background color transition */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-rc-forest transition-colors duration-500 z-0" />

                {/* Circular Wipe Image Reveal on Hover */}
                <div 
                  className="absolute inset-0 pointer-events-none z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  />
                </div>

                <span className="relative z-20 group-hover:text-rc-cream transition-colors duration-500">
                  {card.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rc-border">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
            {/* Left: Copyright + Socials */}
            <div className="flex items-center gap-5">
              <span className="text-xs text-rc-textMuted">
                © Naman Catering {new Date().getFullYear()}. All Rights Reserved
              </span>
              <div className="flex items-center gap-3">
                <a href="#" className="text-rc-textMuted hover:text-rc-forest transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-rc-textMuted hover:text-rc-forest transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-rc-textMuted hover:text-rc-forest transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Utility Links */}
            <div className="flex items-center gap-6 text-xs text-rc-textMuted">
              <a href="#consultation" className="hover:text-rc-forest transition-colors">Contact Us</a>
              <a href="#" className="hover:text-rc-forest transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rc-forest transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
};
