"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

const SERVICES = [
  {
    title: 'Corporate Events',
    description: 'Elevate your corporate events with curated menus designed for board meetings, conferences, team celebrations, and product launches. Custom menu planning, dietary accommodations, and seamless logistics.',
    href: '#consultation',
  },
  {
    title: 'Wedding Catering',
    description: 'Create unforgettable wedding feasts with our bespoke menus, luxury presentation, and white-glove service. Multi-cuisine options, live cooking stations, and décor coordination included.',
    href: '#consultation',
  },
  {
    title: 'Private Dining',
    description: 'From intimate house parties to grand birthday celebrations and anniversaries, we craft personalized dining experiences that delight every palate. Tailored to your vision.',
    href: '#consultation',
  },
];

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

        {/* Stacked Service Rows */}
        <div className="space-y-0">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-10 lg:py-14 border-b border-rc-border group">
                {/* Left: Large Serif Title */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-rc-charcoal leading-tight group-hover:text-rc-forest transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Right: Description + Arrow Link */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
                  <p className="text-[15px] text-rc-textLight leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm text-rc-forest font-medium group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
