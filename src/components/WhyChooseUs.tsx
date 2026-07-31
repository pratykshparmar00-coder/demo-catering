"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, Clock, ChefHat, Users } from 'lucide-react';
import { staggerCards, fadeUp } from '../../libraries/animations/presets';

const TRUST_POINTS = [
  {
    icon: ChefHat,
    title: 'Chef-Led Excellence',
    description: 'Every menu is crafted by our team of experienced chefs trained in fine dining and large-scale catering.',
  },
  {
    icon: ShieldCheck,
    title: 'FSSAI Certified',
    description: 'Full compliance with food safety standards. Licensed, audited, and committed to the highest hygiene protocols.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Eco-conscious packaging, locally sourced ingredients, and waste-reduction processes at every step.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    description: 'Military-precision logistics ensure your catering arrives fresh, hot, and perfectly on schedule.',
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognised by leading hospitality platforms with a 4.9-star rating across 50,000+ events.',
  },
  {
    icon: Users,
    title: 'Dedicated Event Manager',
    description: 'A single point of contact from planning to execution, ensuring seamless coordination.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-rc-forest text-rc-cream relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[1px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[1px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-rc-goldLight font-medium">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-rc-cream font-light leading-[1.15]">
              Built on Trust,{' '}
              <span className="italic text-rc-goldLight">Delivered</span> with Pride
            </h2>
            <p className="text-rc-sand/80 text-[15px] leading-relaxed">
              Every detail matters. From sourcing the finest ingredients to the
              final presentation, we uphold standards that set us apart in the
              industry.
            </p>

            {/* Trust stats */}
            <div className="pt-8 space-y-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-serif font-light text-rc-cream">15+</span>
                <span className="text-[13px] text-rc-sand/70">Years of culinary excellence</span>
              </div>
              <div className="w-full h-[1px] bg-white/10" />
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-serif font-light text-rc-goldLight">6</span>
                <span className="text-[13px] text-rc-sand/70">Cities served across India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Trust Cards */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-rc-goldLight/20 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-rc-goldLight" />
                  </div>
                  <h3 className="text-[17px] font-serif font-light text-rc-cream mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-rc-sand/60 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
