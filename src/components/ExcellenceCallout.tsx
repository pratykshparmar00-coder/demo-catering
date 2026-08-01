"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../libraries/animations/presets';

export const ExcellenceCallout: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-rc-beige relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <p className="text-[clamp(1.2rem,2.5vw,1.75rem)] font-serif text-rc-charcoal leading-relaxed font-light">
            Set the standard for culinary excellence at your events.
            Let us help you make your occasions truly memorable.
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-rc-charcoal text-white text-sm hover:bg-rc-forest transition-all duration-300"
          >
            Explore Our Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};
