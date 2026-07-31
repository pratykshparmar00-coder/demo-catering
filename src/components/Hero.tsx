import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, ShieldCheck, ArrowRight, Flame, Clock, Utensils } from 'lucide-react';
import { Button, Badge } from '../../libraries/ui';
import { fadeIn, staggerContainer } from '../../libraries/animations/presets';

interface HeroProps {
  onStartBuilder: () => void;
  selectedCity: string;
}

export const Hero: React.FC<HeroProps> = ({ onStartBuilder, selectedCity }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 selection:bg-amber-400 selection:text-black border-b border-white/10">
      {/* Yucca Style Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Editorial Headline & CTA */}
          <motion.div variants={fadeIn} className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PREMIER GOURMET CATERER IN {selectedCity.toUpperCase()}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.08] font-light">
              Crafting <span className="italic font-serif text-amber-400">Unforgettable</span> <br />
              Culinary Experiences.
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-sans font-light leading-relaxed">
              From intimate private dining of 10 guests to grand corporate buffets of 500+. Richard Catering combines artisanal gastronomy with transparent instant menu planning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={onStartBuilder}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20"
              >
                <span>Build Custom Menu Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a href="#packages">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-amber-400 hover:text-amber-400 rounded-2xl text-xs uppercase tracking-wider">
                  Explore Offerings
                </Button>
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-3xl font-serif font-light text-amber-400">50,000+</div>
                <div className="text-xs text-gray-400 font-sans tracking-wider uppercase mt-1">Events Catered</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-light text-white">100+</div>
                <div className="text-xs text-gray-400 font-sans tracking-wider uppercase mt-1">Gourmet Dishes</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-light text-amber-400">4.9 ★</div>
                <div className="text-xs text-gray-400 font-sans tracking-wider uppercase mt-1">5-Star Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Yucca-Style Card */}
          <motion.div variants={fadeIn} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-[#141414] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 space-y-6 relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black flex items-center justify-center text-2xl font-bold shadow-lg shadow-amber-500/20">
                      📦
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-light text-white tracking-wide">Richard Box Special</h3>
                      <p className="text-xs text-gray-400">Hot Gourmet Bulk Delivery</p>
                    </div>
                  </div>
                  <Badge variant="orange" className="bg-amber-400/10 text-amber-400 border-amber-400/30 text-xs">Bestseller</Badge>
                </div>

                {/* Sample items preview */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <span>Sample 25 Pax Menu</span>
                    <span className="text-amber-400 font-bold">₹320 / Person</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-medium text-gray-200">Paneer Tikka Angara</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <span className="font-medium text-gray-200">Murgh Malai Tikka</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-medium text-gray-200">Dal Makhani Special</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-medium text-gray-200">Kesari Rasmalai</span>
                    </div>
                  </div>
                </div>

                {/* Quick Estimate Card */}
                <div className="bg-[#1C1C1C] text-white p-5 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-300 flex items-center gap-1.5 tracking-wider uppercase">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> Instant Quote
                    </span>
                    <span className="text-emerald-400 font-bold text-xs">Free Delivery</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/40 p-3.5 rounded-xl border border-white/5">
                    <div>
                      <div className="text-[11px] text-gray-400">30 Pax Estimate</div>
                      <div className="text-xl font-serif text-amber-400">₹9,600 <span className="text-xs font-sans text-gray-400">all incl.</span></div>
                    </div>
                    <Button onClick={onStartBuilder} size="sm" className="bg-amber-400 text-black hover:bg-amber-300 font-bold uppercase text-[11px]">
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
