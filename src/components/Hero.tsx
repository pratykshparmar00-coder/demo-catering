"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

const HERO_CARDS = [
  {
    title: 'Corporate Events',
    description: 'Board meetings to conferences — curated menus for the professional world.',
    href: '#services',
  },
  {
    title: 'Weddings',
    description: 'Bespoke wedding feasts with luxury presentation and white-glove service.',
    href: '#services',
  },
  {
    title: 'Private Dining',
    description: 'Intimate gatherings and celebrations crafted to your personal taste.',
    href: '#services',
  },
];

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-rc-cream pt-20 lg:pt-20"
    >
      {/* Main Hero Content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">
          {/* Left: Massive Editorial Headline */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-serif tracking-tight text-rc-charcoal leading-[1.05] font-light">
              Crafting
              <br />
              Exceptional.{' '}
              <span className="italic font-normal">Innovated</span>
              <br />
              for{' '}
              <span className="italic font-normal">Culinary</span>{' '}
              Leaders.
            </h1>
          </motion.div>

          {/* Right: Hero Image with Parallax */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rc-charcoal/10 aspect-[3/4] max-h-[520px]">
              <img
                src="/hero-food.png"
                alt="Premium catering spread"
                className="w-full h-full object-cover"
              />
              {/* Warm overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-rc-charcoal/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom: Three Glass/Frosted Service Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-20 pb-8 lg:pb-12"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HERO_CARDS.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-rc-border/50 p-6 sm:p-7 hover:bg-white hover:border-rc-forest/20 transition-all duration-500 hover:shadow-xl flex flex-col h-[180px] lg:h-[200px]"
              >
                <h3 className="text-lg sm:text-xl font-serif font-light text-rc-charcoal">
                  {card.title}
                </h3>
                
                <div className="flex-1 relative mt-3">
                  <p className="text-sm text-rc-textLight leading-relaxed absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {card.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-rc-forest font-medium mt-auto">
                  Tell me more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
