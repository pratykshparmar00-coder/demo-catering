"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../libraries/animations/presets';

const VALUES = [
  'Quality',
  'Freshness',
  'Presentation',
  'Custom Menus',
  'Sustainable',
  'Innovation',
];

export const CoreValues: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {VALUES.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rc-border bg-white/50 text-sm text-rc-text hover:border-rc-forest/30 hover:bg-white transition-all duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rc-forest/40" />
              {value}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
