"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-rc-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.015] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.02] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-rc-goldLight font-medium">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-rc-cream font-light leading-[1.1]">
            Let's Create Something{' '}
            <span className="italic text-rc-goldLight">Extraordinary</span>
          </h2>
          <p className="text-rc-sand/70 text-[15px] leading-relaxed max-w-xl mx-auto">
            Whether it's a board meeting for 20 or a wedding for 500,
            we bring the same dedication to every table we set.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-rc-cream text-rc-forest text-[13px] tracking-wide font-medium hover:bg-white transition-all duration-500 group"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full border border-white/15 text-rc-cream text-[13px] tracking-wide hover:border-white/30 transition-all duration-500"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
