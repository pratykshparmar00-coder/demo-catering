"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

const SLIDES = [
  '/cta/slide-1.png',
  '/cta/slide-2.png',
  '/cta/slide-3.png',
];

export const FinalCTA: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

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
            <div className="lg:col-span-4 flex lg:justify-end justify-center mt-8 lg:mt-0">
              {/* Slideshow element */}
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-[2rem] bg-white/[0.04] border border-white/[0.08] relative overflow-hidden shadow-2xl">
                <AnimatePresence>
                  <motion.img
                    key={currentSlide}
                    src={SLIDES[currentSlide]}
                    alt={`Catering Slide ${currentSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
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
