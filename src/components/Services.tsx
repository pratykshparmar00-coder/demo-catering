import React from 'react';
import { motion } from 'framer-motion';
import { Package, UtensilsCrossed, Box, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button, Badge } from '../../libraries/ui';
import { SERVICE_TIERS } from '../../libraries/pricing/calculator';
import { fadeIn, staggerContainer } from '../../libraries/animations/presets';

interface ServicesProps {
  onSelectTier: (tierKey: 'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive') => void;
  activeTier: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectTier, activeTier }) => {
  const serviceCards = [
    {
      key: 'ninjabox',
      title: 'NinjaBox',
      subtitle: 'Bulk Food Delivery in Insulated Packaging',
      icon: Package,
      badge: 'Most Popular for Parties',
      badgeVariant: 'orange' as const,
      features: [
        'Delivered piping hot in insulated leak-proof boxes',
        'Includes complimentary bio-degradable disposables',
        'Customizable 100+ menu options',
        'Zero setup hassle - open & serve directly'
      ],
      startingPrice: '₹280 / Pax',
      idealFor: '10 to 50 Guests (House Parties, Birthdays)'
    },
    {
      key: 'ninjabuffet',
      title: 'NinjaBuffet',
      subtitle: 'Full Service Luxury Buffet Setup',
      icon: UtensilsCrossed,
      badge: 'Full Service Experience',
      badgeVariant: 'green' as const,
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
      title: 'MealBox',
      subtitle: 'Individual 5-Compartment Meal Trays',
      icon: Box,
      badge: 'Corporate Choice',
      badgeVariant: 'blue' as const,
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
      title: 'NinjaLive',
      subtitle: 'Interactive Live Cooking Stations',
      icon: Flame,
      badge: 'Food-tainment',
      badgeVariant: 'orange' as const,
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
    <section id="packages" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="orange" className="text-xs uppercase tracking-wider">Catering Solutions</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Tailored Catering Services For Every Scale
          </h2>
          <p className="text-gray-600 text-base">
            Whether you want hassle-free bulk box delivery or full-service buffet setups with uniform servers, NinjaCater has you covered.
          </p>
        </div>

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
                    ? 'bg-orange-50/40 border-ninja-orange shadow-xl ring-2 ring-ninja-orange/30'
                    : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-ninja-orange text-white' : 'bg-gray-100 text-gray-700'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{service.subtitle}</p>
                  </div>

                  <div className="py-2 border-y border-gray-100">
                    <span className="text-xs text-gray-400 font-medium">Starting From</span>
                    <div className="text-lg font-extrabold text-ninja-orange">{service.startingPrice}</div>
                    <div className="text-[11px] text-gray-500 font-medium">{service.idealFor}</div>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <Button
                    onClick={() => onSelectTier(service.key as any)}
                    variant={isSelected ? 'primary' : 'outline'}
                    className="w-full text-xs"
                  >
                    <span>{isSelected ? 'Selected' : 'Select Package'}</span>
                    <ArrowRight className="w-4 h-4" />
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
