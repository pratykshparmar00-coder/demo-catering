"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerCards, fadeUp } from '../../libraries/animations/presets';

const MENU_CATEGORIES = [
  {
    category: 'Starters',
    items: [
      { name: 'Paneer Tikka Angara', type: 'veg', price: '₹65/pax' },
      { name: 'Hara Bhara Kebab', type: 'veg', price: '₹55/pax' },
      { name: 'Murgh Malai Tikka', type: 'non-veg', price: '₹85/pax' },
      { name: 'Fish Amritsari', type: 'non-veg', price: '₹95/pax' },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Dal Makhani Special', type: 'veg', price: '₹50/pax' },
      { name: 'Paneer Lababdar', type: 'veg', price: '₹60/pax' },
      { name: 'Butter Chicken Classic', type: 'non-veg', price: '₹80/pax' },
      { name: 'Rogan Josh Kashmiri', type: 'non-veg', price: '₹90/pax' },
    ],
  },
  {
    category: 'Biryani & Breads',
    items: [
      { name: 'Hyderabadi Veg Biryani', type: 'veg', price: '₹55/pax' },
      { name: 'Lucknowi Gosht Biryani', type: 'non-veg', price: '₹85/pax' },
      { name: 'Assorted Tandoori Breads', type: 'veg', price: '₹30/pax' },
      { name: 'Jeera Pulao', type: 'veg', price: '₹35/pax' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Gulab Jamun', type: 'veg', price: '₹35/pax' },
      { name: 'Kesari Rasmalai', type: 'veg', price: '₹45/pax' },
      { name: 'Phirni Banarasi', type: 'veg', price: '₹40/pax' },
      { name: 'Belgian Chocolate Mousse', type: 'veg', price: '₹55/pax' },
    ],
  },
];

export const FeaturedMenu: React.FC = () => {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-rc-warmWhite relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
            Featured Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
            A Glimpse of Our{' '}
            <span className="italic text-rc-forest">Offerings</span>
          </h2>
          <p className="text-rc-textLight text-[15px] leading-relaxed max-w-lg mx-auto">
            Our menu spans 100+ curated dishes, each prepared with premium ingredients
            and presented to perfection. Here's a taste of what we offer.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {MENU_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-rc-border p-7 space-y-5"
            >
              {/* Category header */}
              <div className="flex items-center justify-between pb-4 border-b border-rc-borderLight">
                <h3 className="font-serif text-xl font-light text-rc-charcoal tracking-tight">
                  {cat.category}
                </h3>
                <span className="text-[10px] tracking-[0.15em] uppercase text-rc-textMuted">
                  {cat.items.length} items
                </span>
              </div>

              {/* Items */}
              <div className="space-y-0">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3.5 border-b border-rc-borderLight last:border-0 group"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-sm border ${
                          item.type === 'veg'
                            ? 'border-rc-success'
                            : 'border-red-400'
                        } flex items-center justify-center`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.type === 'veg' ? 'bg-rc-success' : 'bg-red-400'
                          }`}
                        />
                      </span>
                      <span className="text-sm text-rc-text group-hover:text-rc-forest transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-rc-textMuted font-medium ml-4 shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-sm text-rc-textMuted">
            Full menu available upon request. All prices are per guest and may vary by event size.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-rc-border text-rc-text text-[13px] tracking-wide hover:border-rc-forest hover:text-rc-forest transition-all duration-500"
          >
            Request Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};
