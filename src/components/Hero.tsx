import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, ShieldCheck, ArrowRight, Flame, Clock } from 'lucide-react';
import { Button, Badge } from '../../libraries/ui';
import { fadeIn, staggerContainer } from '../../libraries/animations/presets';

interface HeroProps {
  onStartBuilder: () => void;
  selectedCity: string;
}

export const Hero: React.FC<HeroProps> = ({ onStartBuilder, selectedCity }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-gray-50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Headlines & CTA */}
          <motion.div variants={fadeIn} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-ninja-orange text-xs font-bold shadow-2xs">
              <Flame className="w-4 h-4 fill-ninja-orange" />
              <span>India's Most Trusted Caterer in {selectedCity}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Gourmet Party Catering. <br />
              <span className="gradient-text">Instant Quotes & Instant Menus.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              From intimate house parties of 10 to grand corporate buffets of 500+ guests. Choose from hot <strong className="text-gray-900 font-semibold">NinjaBox</strong> deliveries or full-service <strong className="text-gray-900 font-semibold">NinjaBuffet</strong> with luxury chafing dish setups.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button onClick={onStartBuilder} size="lg" className="shadow-lg shadow-orange-500/25">
                <span>Build Custom Menu Now</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="#packages">
                <Button variant="outline" size="lg">
                  Explore Pre-set Packages
                </Button>
              </a>
            </div>

            {/* Quick Metrics & Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 max-w-xl">
              <div>
                <div className="text-2xl font-extrabold text-gray-900">50,000+</div>
                <div className="text-xs text-gray-500 font-medium">Parties Catered</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">100+</div>
                <div className="text-xs text-gray-500 font-medium">Gourmet Dishes</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">4.9 ★</div>
                <div className="text-xs text-gray-500 font-medium">Google & Zomato</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card (CaterNinja Box & Buffet Highlights) */}
          <motion.div variants={fadeIn} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Box */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                      📦
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">NinjaBox Party Special</h3>
                      <p className="text-xs text-gray-500">Delivered Hot in 3-layer Insulated Eco Boxes</p>
                    </div>
                  </div>
                  <Badge variant="orange">Best Seller</Badge>
                </div>

                {/* Sample items snippet */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <span>Sample 25 Pax Menu</span>
                    <span className="text-ninja-orange">₹320 / Person</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-gray-800">Paneer Tikka Angara</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="font-medium text-gray-800">Murgh Malai Tikka</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-gray-800">Dal Makhani Special</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-gray-800">Kesari Rasmalai</span>
                    </div>
                  </div>
                </div>

                {/* Quick Instant Configurator Floating Card */}
                <div className="bg-ninja-dark text-white p-4 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-ninja-orange" /> Instant Estimate
                    </span>
                    <span className="text-emerald-400 font-bold text-xs">Free Delivery</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800/80 p-3 rounded-xl">
                    <div>
                      <div className="text-[11px] text-gray-400">Guest Count: 30 Guests</div>
                      <div className="text-lg font-extrabold text-white">₹9,600 <span className="text-xs font-normal text-gray-400">all inclusive</span></div>
                    </div>
                    <Button onClick={onStartBuilder} size="sm" className="bg-ninja-orange hover:bg-orange-600">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
