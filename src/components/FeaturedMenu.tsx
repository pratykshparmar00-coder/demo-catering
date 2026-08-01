"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerCards, fadeUp } from '../../libraries/animations/presets';

const MENU_ITEMS = [
  { name: 'Paneer Tikka Angara', type: 'veg', price: '₹65/pax', category: 'Starter', image: '/menu/paneer-tikka.png' },
  { name: 'Murgh Malai Tikka', type: 'non-veg', price: '₹85/pax', category: 'Starter', image: '/menu/murgh-malai.png' },
  { name: 'Dal Makhani Special', type: 'veg', price: '₹50/pax', category: 'Main Course', image: '/menu/dal-makhani.png' },
  { name: 'Butter Chicken Classic', type: 'non-veg', price: '₹80/pax', category: 'Main Course', image: '/menu/butter-chicken.png' },
  { name: 'Hyderabadi Veg Biryani', type: 'veg', price: '₹55/pax', category: 'Biryani', image: '/menu/veg-biryani.png' },
  { name: 'Lucknowi Gosht Biryani', type: 'non-veg', price: '₹85/pax', category: 'Biryani', image: '/menu/gosht-biryani.png' },
  { name: 'Kesari Rasmalai', type: 'veg', price: '₹45/pax', category: 'Dessert', image: '/menu/rasmalai.png' },
  { name: 'Belgian Chocolate Mousse', type: 'veg', price: '₹55/pax', category: 'Dessert', image: '/menu/mousse.png' },
];

export const FeaturedMenu: React.FC = () => {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-rc-warmWhite relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-16"
        >
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
              Featured Menu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif tracking-tight text-rc-charcoal font-light leading-[1.1]">
              A Glimpse of Our{' '}
              <span className="italic font-normal">Offerings</span>
            </h2>
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rc-text/20 text-rc-text text-sm hover:border-rc-forest hover:text-rc-forest transition-all duration-300 whitespace-nowrap shrink-0"
          >
            View Full Menu
          </a>
        </motion.div>

        {/* Product Showcase Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {MENU_ITEMS.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-2xl border border-rc-border overflow-hidden hover:border-rc-forest/20 hover:shadow-[0_12px_40px_-12px_rgba(27,58,45,0.10)] transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-rc-beige via-rc-warmWhite to-rc-sand relative overflow-hidden img-scale">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category tag */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] tracking-wider uppercase text-rc-charcoal font-medium z-10 shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.type === 'veg' ? 'bg-rc-success' : 'bg-red-400'}`} />
                  <h3 className="text-sm font-medium text-rc-charcoal truncate">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-rc-textMuted">
                  From <span className="text-rc-forest font-medium">{item.price}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
