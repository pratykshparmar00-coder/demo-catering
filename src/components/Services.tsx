"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Heart, PartyPopper, Coffee, Flame, Palette } from 'lucide-react';
import { staggerCards, fadeUp } from '../../libraries/animations/presets';

const SERVICES = [
  {
    icon: Building2,
    title: 'Corporate Catering',
    description: 'Elevate your corporate events with curated menus designed for board meetings, conferences, and team celebrations.',
    features: ['Custom menu planning', 'Dietary accommodations', 'Seamless logistics'],
    startingAt: '₹350 / guest',
  },
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Create unforgettable wedding feasts with our bespoke menus, luxury presentation, and white-glove service.',
    features: ['Multi-cuisine options', 'Live cooking stations', 'Décor coordination'],
    startingAt: '₹550 / guest',
  },
  {
    icon: PartyPopper,
    title: 'Private Events',
    description: 'From intimate gatherings to grand celebrations, we craft personalized dining experiences that delight.',
    features: ['House parties', 'Birthday celebrations', 'Anniversaries'],
    startingAt: '₹280 / guest',
  },
  {
    icon: Coffee,
    title: 'Daily Office Meals',
    description: 'Nourishing, balanced meals delivered fresh to your office daily. Keep your team energized and productive.',
    features: ['Weekly rotating menus', 'Eco-friendly packaging', 'Bulk ordering'],
    startingAt: '₹150 / meal',
  },
  {
    icon: Flame,
    title: 'Live Counters',
    description: 'Interactive live cooking stations that add theatre and energy to any event. Fresh, hot, and captivating.',
    features: ['Woodfire pizza', 'Pasta bar', 'Chaat counters'],
    startingAt: '₹500 / guest',
  },
  {
    icon: Palette,
    title: 'Custom Menus',
    description: 'Work directly with our chefs to design a completely bespoke menu tailored to your vision and palate.',
    features: ['Chef consultation', 'Tasting sessions', 'Seasonal ingredients'],
    startingAt: 'Custom pricing',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-rc-cream relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16 lg:mb-20 space-y-4"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
            Tailored Catering for
            <br />
            <span className="italic text-rc-forest">Every Occasion</span>
          </h2>
          <p className="text-rc-textLight text-[15px] leading-relaxed max-w-lg">
            From corporate boardrooms to grand wedding celebrations, we deliver
            exceptional culinary experiences with meticulous attention to detail.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="card-premium group relative bg-white rounded-2xl p-7 border border-rc-border hover:border-rc-forest/20 transition-colors duration-500 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-rc-forest/[0.06] flex items-center justify-center mb-6 group-hover:bg-rc-forest/[0.1] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-rc-forest" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-light text-rc-charcoal mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-rc-textLight leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-rc-textMuted">
                      <span className="w-1 h-1 rounded-full bg-rc-forest" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-5 border-t border-rc-borderLight flex items-center justify-between">
                  <span className="text-[12px] text-rc-textMuted">
                    Starting at{' '}
                    <span className="text-rc-forest font-medium">{service.startingAt}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full border border-rc-border flex items-center justify-center group-hover:bg-rc-forest group-hover:border-rc-forest transition-all duration-500">
                    <ArrowUpRight className="w-3.5 h-3.5 text-rc-textMuted group-hover:text-rc-cream transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
