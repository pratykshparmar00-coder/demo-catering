import React from 'react';
import { motion } from 'framer-motion';
import { Package, UtensilsCrossed, Box, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button, Badge } from '../../libraries/ui';
import { fadeIn, staggerContainer } from '../../libraries/animations/presets';

interface ServicesProps {
  onSelectTier: (tierKey: 'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive') => void;
  activeTier: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectTier, activeTier }) => {
  const serviceCards = [
    {
      key: 'ninjabox',
      title: 'Richard Box',
      subtitle: 'Hot Bulk Delivery in Eco Insulated Containers',
      icon: Package,
      badge: 'Popular for House Parties',
      features: [
        'Delivered piping hot in insulated leak-proof boxes',
        'Includes complimentary bio-degradable disposables',
        'Customizable 100+ gourmet menu options',
        'Zero setup hassle - open & serve directly'
      ],
      startingPrice: '₹280 / Pax',
      idealFor: '10 to 50 Guests (House Parties, Birthdays)'
    },
    {
      key: 'ninjabuffet',
      title: 'Richard Buffet',
      subtitle: 'Luxury Chafing Dish & Server Setup',
      icon: UtensilsCrossed,
      badge: 'Full Service Experience',
      features: [
        'Luxury stainless steel chafing dishes & warming stations',
        'Dressed uniform serving staff included',
        'Premium porcelain crockery & brass cutlery options',
        'Complete setup, maintenance & post-event cleanup'
      ],
      startingPrice: '₹450 / Pax',
      idealFor: '25 to 500+ Guests (Weddings, Corporate)'
    },
    {
      key: 'mealbox',
      title: 'Meal Box',
      subtitle: 'Individual 5-Compartment Meal Trays',
      icon: Box,
      badge: 'Corporate Preferred',
      features: [
        'Individual sealed hygienic compartment containers',
        'Starter + 2 Mains + Dal + Rice + Roti + Dessert',
        'Zero cross-contamination for corporate safety',
        'Easy bulk distribution for office lunches'
      ],
      startingPrice: '₹220 / Box',
      idealFor: '15+ Guests (Corporate Lunches, Seminars)'
    },
    {
      key: 'ninjalive',
      title: 'Richard Live',
      subtitle: 'Interactive Live Cooking Stations',
      icon: Flame,
      badge: 'Food-tainment',
      features: [
        'Live Woodfire Pizza, Pasta Bar, & Chaat counters',
        'Expert uniformed chefs cooking live on-site',
        'Fresh customized toppings & interactive guest choices',
        'Adds high visual energy & gourmet touch to events'
      ],
      startingPrice: '₹550 / Pax',
      idealFor: '30+ Guests (Anniversaries, Premium Receptions)'
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">Catering Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white font-light">
            Tailored Offerings For Every Scale
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Whether you desire hassle-free hot delivery boxes or full-service luxury buffets with uniform servers, Richard Catering delivers perfection.
          </p>
        </div>

        {/* Services Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceCards.map((service) => {
            const Icon = service.icon;
            const isSelected = activeTier === service.key;

            return (
              <motion.div
                key={service.key}
                variants={fadeIn}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#181818] border-amber-400 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-400/30'
                    : 'bg-[#121212] border-white/10 hover:border-amber-400/50 hover:bg-[#161616]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-amber-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/30 text-[10px] uppercase tracking-wider">{service.badge}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-light text-white tracking-wide">{service.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{service.subtitle}</p>
                  </div>

                  <div className="py-3 border-y border-white/10 space-y-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Starting From</span>
                    <div className="text-xl font-serif text-amber-400">{service.startingPrice}</div>
                    <div className="text-[11px] text-gray-400">{service.idealFor}</div>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Button
                    onClick={() => onSelectTier(service.key as any)}
                    className={`w-full text-xs font-bold uppercase tracking-wider rounded-2xl py-3 ${
                      isSelected
                        ? 'bg-amber-400 text-black hover:bg-amber-300'
                        : 'bg-white/5 border border-white/15 text-white hover:border-amber-400 hover:text-amber-400'
                    }`}
                  >
                    <span>{isSelected ? 'Selected' : 'Select Package'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
