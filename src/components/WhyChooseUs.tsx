"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../libraries/animations/presets';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top: Headline + Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 lg:pb-20"
        >
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
              Committed to Excellence,
              <br />
              <span className="italic font-normal">always Innovating</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p className="text-[15px] text-rc-textLight leading-relaxed">
              Exceptional catering is our promise to you. What doesn't meet
              Richard Catering standards is refined until it does. Every detail
              matters — from sourcing the finest ingredients to the final
              presentation.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-rc-charcoal text-white text-sm w-fit hover:bg-rc-forest transition-all duration-300"
            >
              About us
            </a>
          </div>
        </motion.div>

        {/* Mission Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t-2 border-rc-forest/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16">
            <div className="lg:col-span-5 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rc-forest mt-2 shrink-0" />
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-rc-charcoal">
                Our Mission
              </h3>
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-[15px] text-rc-textLight leading-relaxed">
                We provide world-class, chef-led catering from our certified
                kitchen to corporate events, weddings, and private gatherings
                across India. Every menu is crafted with FSSAI-compliant
                ingredients and delivered with military-precision logistics.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t-2 border-rc-forest/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16">
            <div className="lg:col-span-5 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rc-forest mt-2 shrink-0" />
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-rc-charcoal">
                Our Vision
              </h3>
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-[15px] text-rc-textLight leading-relaxed">
                To be the trusted, industry-leading catering partner, known for
                ethical practices, on-time delivery, sustainable sourcing, and
                dedication to culinary innovation that delights every guest.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
