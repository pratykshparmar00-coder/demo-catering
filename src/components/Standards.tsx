"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Thermometer, Microscope, Recycle, Truck, BadgeCheck } from 'lucide-react';
import { fadeUp, staggerCards } from '../../libraries/animations/presets';

const STANDARDS = [
  {
    icon: ShieldCheck,
    title: 'FSSAI Licensed',
    description: 'Fully licensed and regularly audited by the Food Safety and Standards Authority of India.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Control',
    description: 'HACCP-compliant hot chain and cold chain systems ensure food safety at every stage.',
  },
  {
    icon: Microscope,
    title: 'Lab Tested',
    description: 'Regular microbiological testing of ingredients and prepared food for guaranteed quality.',
  },
  {
    icon: Recycle,
    title: 'Eco-Responsible',
    description: 'Biodegradable packaging, minimal waste, and sustainable sourcing practices.',
  },
  {
    icon: Truck,
    title: 'Insulated Transport',
    description: 'Purpose-built insulated containers maintain optimal temperature during delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Staff Certified',
    description: 'Every team member holds food handling certification and undergoes regular health checks.',
  },
];

export const Standards: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-rc-warmWhite relative">
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
            Quality & Hygiene
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
            Uncompromising{' '}
            <span className="italic text-rc-forest">Standards</span>
          </h2>
          <p className="text-rc-textLight text-[15px] leading-relaxed max-w-lg mx-auto">
            Safety isn't an afterthought — it's the foundation of everything we do.
            Our processes meet and exceed industry benchmarks.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STANDARDS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-2xl border border-rc-border bg-white group hover:border-rc-forest/15 transition-colors duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-rc-forest/[0.06] flex items-center justify-center shrink-0 group-hover:bg-rc-forest/[0.1] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-rc-forest" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-rc-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-rc-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-rc-textMuted"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rc-forest" />
            FSSAI Lic. #11223999000123
          </span>
          <span className="w-[1px] h-4 bg-rc-border hidden sm:block" />
          <span>ISO 22000:2018 Compliant</span>
          <span className="w-[1px] h-4 bg-rc-border hidden sm:block" />
          <span>HACCP Certified</span>
          <span className="w-[1px] h-4 bg-rc-border hidden sm:block" />
          <span>Green Kitchen Certified</span>
        </motion.div>
      </div>
    </section>
  );
};
