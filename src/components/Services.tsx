"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

const SERVICES = [
  {
    title: 'Corporate Events',
    description: 'Elevate your business gatherings with sophisticated culinary experiences designed to impress clients and inspire your team.',
    href: '#consultation',
  },
  {
    title: 'Weddings',
    description: 'Transform your special day with unforgettable gastronomy, meticulously planned and flawlessly executed for your perfect celebration.',
    href: '#consultation',
  },
  {
    title: 'Private Dining',
    description: 'Experience restaurant-quality dining in the comfort of your own space, with customized tasting menus and private chef services.',
    href: '#consultation',
  },
];

const TypewriterText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
  return (
    <span className="inline-block text-[18px] lg:text-[22px] font-serif font-light text-rc-charcoal/85 leading-relaxed">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ 
            duration: 0.15, 
            delay: isHovered ? 0.45 + index * 0.015 : 0 
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const FlipCard = ({ service }: { service: typeof SERVICES[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-[280px] lg:h-[300px] w-full cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 bg-[#F7F4EE] rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-sm border border-rc-border/50"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-2xl lg:text-[28px] font-serif font-light text-rc-charcoal mb-4">
            {service.title}
          </h3>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 text-[13px] text-rc-forest font-semibold transition-transform duration-300 group-hover:translate-x-1">
              Hover to explore
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 bg-[#F7F4EE] rounded-3xl p-8 lg:p-10 flex flex-col shadow-xl border border-rc-border/80"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <TypewriterText text={service.description} isHovered={isHovered} />
          </div>

          <div className="mt-auto">
            <a
              href={service.href}
              className="inline-flex items-center gap-2 text-[13px] text-rc-forest font-semibold hover:text-rc-charcoal transition-colors"
            >
              Tell me more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
            Our Services
          </span>
        </motion.div>

        {/* 3-Column Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <FlipCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
