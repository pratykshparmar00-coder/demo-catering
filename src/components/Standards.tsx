"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { fadeUp } from '@/libraries/animations/presets';

const CERTIFICATIONS = [
  'FSSAI Licensed',
  'HACCP Certified',
  'ISO 22000:2018',
  'Green Kitchen Certified',
  'Eco-Responsible Packaging',
  'Staff Health Certified',
];

export const Standards: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 lg:mb-16"
        >
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
              Quality & Safety
              <br />
              <span className="italic font-normal">Standards</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-[15px] text-rc-textLight leading-relaxed">
              Our partners share our commitment to responsible practices,
              so you can trust that every dish is prepared to the highest
              standards of food safety, hygiene, and sustainability.
            </p>
          </div>
        </motion.div>

        {/* Certification Badges Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap items-center gap-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-rc-border bg-white text-sm text-rc-text hover:border-rc-forest/30 transition-all duration-300"
            >
              <ShieldCheck className="w-4 h-4 text-rc-forest shrink-0" />
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
