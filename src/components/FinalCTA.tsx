"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

export const FinalCTA: React.FC = () => {
  return (
    <>
      {/* Dark CTA Block */}
      <section className="relative bg-rc-forest text-rc-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase text-rc-goldLight/80 font-medium">
                Custom Solutions
              </span>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-serif font-light text-rc-cream leading-[1.15]">
                Events that thrive invest in
                <br />
                exceptional catering. Let us
                <br />
                bring your vision to life.
              </h2>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              {/* Decorative food element */}
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-3xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <span className="text-7xl lg:text-8xl opacity-20">🍽️</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee Ticker */}
      <section className="bg-rc-forest border-t border-white/[0.08] overflow-hidden py-6 lg:py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-6 text-[clamp(1.2rem,3vw,2rem)] font-serif text-rc-cream/90 font-light mr-12"
            >
              <ArrowUpRight className="w-6 h-6 text-rc-goldLight shrink-0" />
              <span>Have a special request? Get in touch to find out.</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
};
