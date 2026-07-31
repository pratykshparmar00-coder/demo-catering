"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { heroStagger, fadeUp, fadeIn } from '../../libraries/animations/presets';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-rc-cream pt-24 lg:pt-0">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rc-forest/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rc-gold/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-rc-border origin-left"
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 lg:py-0">
          {/* Left: Editorial headline */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Tag */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rc-border text-[11px] tracking-[0.15em] uppercase text-rc-textMuted">
                <span className="w-1.5 h-1.5 rounded-full bg-rc-forest" />
                Premier Catering Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.5rem,5.5vw,5rem)] font-serif tracking-tight text-rc-charcoal leading-[1.08] font-light"
            >
              Crafting Exceptional{' '}
              <span className="italic text-rc-forest">Culinary</span>
              <br />
              Experiences.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-rc-textLight max-w-xl leading-relaxed font-light"
            >
              From intimate private dining to grand corporate events with 500+ guests.
              We combine artisanal gastronomy with flawless execution, delivering
              memorable moments at every occasion.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-rc-forest text-rc-cream text-[13px] tracking-wide hover:bg-rc-forestLight transition-all duration-500 group"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-rc-border text-rc-text text-[13px] tracking-wide hover:border-rc-forest hover:text-rc-forest transition-all duration-500"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-rc-border"
            >
              <div>
                <div className="text-3xl font-serif font-light text-rc-charcoal">50,000+</div>
                <div className="text-[11px] text-rc-textMuted tracking-wider uppercase mt-1">Events Served</div>
              </div>
              <div className="w-[1px] h-10 bg-rc-border hidden sm:block" />
              <div>
                <div className="text-3xl font-serif font-light text-rc-charcoal">100+</div>
                <div className="text-[11px] text-rc-textMuted tracking-wider uppercase mt-1">Gourmet Dishes</div>
              </div>
              <div className="w-[1px] h-10 bg-rc-border hidden sm:block" />
              <div>
                <div className="flex items-center gap-1 text-3xl font-serif font-light text-rc-charcoal">
                  4.9
                  <Star className="w-5 h-5 fill-rc-gold text-rc-gold" />
                </div>
                <div className="text-[11px] text-rc-textMuted tracking-wider uppercase mt-1">Client Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Premium card */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border border-rc-forest/10" />

              <div className="relative bg-white rounded-2xl p-7 sm:p-8 border border-rc-border space-y-6 shadow-[0_8px_40px_-12px_rgba(27,58,45,0.06)]">
                {/* Card header */}
                <div className="flex items-center justify-between border-b border-rc-borderLight pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-rc-forest/[0.08] flex items-center justify-center">
                      <span className="text-xl">🍽️</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-light text-rc-charcoal">Signature Experience</h3>
                      <p className="text-xs text-rc-textMuted">Full-Service Luxury Catering</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rc-forest/[0.06] text-rc-forest text-[10px] tracking-wider uppercase font-medium">
                    Popular
                  </span>
                </div>

                {/* Sample items */}
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] text-rc-textMuted uppercase tracking-wider">
                    <span>Sample 30 Guest Menu</span>
                    <span className="text-rc-forest font-medium">From ₹450 / Guest</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Paneer Tikka Angara', type: 'veg' },
                      { name: 'Murgh Malai Kebab', type: 'non-veg' },
                      { name: 'Dal Makhani Special', type: 'veg' },
                      { name: 'Kesari Rasmalai', type: 'veg' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-rc-warmWhite border border-rc-borderLight flex items-center gap-2 text-xs"
                      >
                        <span className={`w-2 h-2 rounded-full shrink-0 ${item.type === 'veg' ? 'bg-rc-success' : 'bg-red-400'}`} />
                        <span className="text-rc-text truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick estimate */}
                <div className="bg-rc-warmWhite p-5 rounded-xl border border-rc-borderLight space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-rc-textMuted uppercase tracking-wider font-medium">Quick Estimate</span>
                    <span className="text-rc-success text-[11px] font-medium">Free Consultation</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[11px] text-rc-textMuted">30 Guest Estimate</div>
                      <div className="text-xl font-serif text-rc-charcoal">
                        ₹13,500{' '}
                        <span className="text-xs font-sans text-rc-textMuted">all inclusive</span>
                      </div>
                    </div>
                    <a
                      href="#consultation"
                      className="px-5 py-2.5 rounded-full bg-rc-forest text-rc-cream text-xs tracking-wide hover:bg-rc-forestLight transition-all duration-500"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
