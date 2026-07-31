"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeUp, staggerCards } from '../../libraries/animations/presets';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Event Manager, Infosys',
    rating: 5,
    text: 'Richard Catering transformed our annual conference dinner into an unforgettable experience. The food was exceptional, the presentation immaculate, and the team was incredibly professional.',
    event: 'Corporate Event • 200 Guests',
  },
  {
    name: 'Anand & Meera Deshmukh',
    role: 'Wedding Couple',
    rating: 5,
    text: 'Our wedding reception was flawless thanks to Richard Catering. The live counters were a massive hit, and every guest complimented the food. Truly world-class service.',
    event: 'Wedding Reception • 350 Guests',
  },
  {
    name: 'Rohan Mehta',
    role: 'CTO, TechStart India',
    rating: 5,
    text: 'We\'ve been using their daily office meal service for six months now. Consistent quality, rotating menus, and they accommodate every dietary need. Our team loves it.',
    event: 'Daily Office Meals • 80 Pax',
  },
];

const CLIENT_LOGOS = [
  'Infosys', 'Wipro', 'TCS', 'Accenture', 'Google', 'Microsoft',
  'Flipkart', 'Swiggy',
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
            Trusted by Those Who{' '}
            <span className="italic text-rc-forest">Demand</span> the Best
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-rc-border p-7 space-y-5 flex flex-col card-premium"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-rc-forest/[0.06] flex items-center justify-center">
                <Quote className="w-4 h-4 text-rc-forest" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rc-gold text-rc-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-rc-textLight leading-relaxed flex-grow">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-rc-borderLight">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-rc-charcoal">{t.name}</div>
                    <div className="text-xs text-rc-textMuted mt-0.5">{t.role}</div>
                  </div>
                  <span className="text-[10px] text-rc-textMuted tracking-wider uppercase">
                    {t.event}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-rc-textMuted">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {CLIENT_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-lg font-serif font-light text-rc-textMuted/40 hover:text-rc-forest/60 transition-colors duration-500 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
