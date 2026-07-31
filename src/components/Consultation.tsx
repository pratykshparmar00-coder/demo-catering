"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, Phone } from 'lucide-react';
import { fadeUp, staggerCards } from '../../libraries/animations/presets';

export const Consultation: React.FC = () => {
  return (
    <section id="consultation" className="py-24 lg:py-32 bg-rc-cream relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
              Custom Event Catering
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.15]">
              Let's Plan Your{' '}
              <span className="italic text-rc-forest">Perfect</span> Event
            </h2>
            <p className="text-rc-textLight text-[15px] leading-relaxed">
              Every event is unique. Share your vision with us, and our dedicated
              event specialists will craft a tailored catering proposal that
              exceeds your expectations.
            </p>

            {/* Process steps */}
            <div className="pt-6 space-y-5">
              {[
                {
                  step: '01',
                  title: 'Share Your Vision',
                  desc: 'Tell us about your event — size, style, dietary needs, and preferences.',
                },
                {
                  step: '02',
                  title: 'Receive a Custom Proposal',
                  desc: 'Our team crafts a detailed menu and service plan within 24 hours.',
                },
                {
                  step: '03',
                  title: 'Taste & Refine',
                  desc: 'Optional tasting session to perfect every dish before your event.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-[13px] font-serif text-rc-forest/40 mt-0.5 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-[15px] text-rc-charcoal font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-rc-textMuted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl border border-rc-border p-8 sm:p-10 shadow-[0_8px_40px_-12px_rgba(27,58,45,0.05)]">
              <h3 className="font-serif text-xl font-light text-rc-charcoal mb-8 tracking-tight">
                Request a Consultation
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text placeholder:text-rc-textMuted/50 focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text placeholder:text-rc-textMuted/50 focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text placeholder:text-rc-textMuted/50 focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Event Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300 appearance-none">
                      <option>Corporate Event</option>
                      <option>Wedding</option>
                      <option>Private Party</option>
                      <option>Office Meals</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text placeholder:text-rc-textMuted/50 focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-rc-textMuted uppercase tracking-wider font-medium">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements, dietary preferences, or venue details..."
                    className="w-full px-4 py-3 rounded-xl border border-rc-border bg-rc-cream/50 text-sm text-rc-text placeholder:text-rc-textMuted/50 focus:outline-none focus:border-rc-forest focus:ring-1 focus:ring-rc-forest/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rc-forest text-rc-cream text-[13px] tracking-wide hover:bg-rc-forestLight transition-all duration-500 group"
                >
                  <span>Submit Enquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Alternative contact */}
              <div className="mt-8 pt-6 border-t border-rc-borderLight flex flex-wrap items-center justify-center gap-6 text-xs text-rc-textMuted">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-rc-forest transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  Call Directly
                </a>
                <a href="mailto:events@richardcatering.com" className="flex items-center gap-2 hover:text-rc-forest transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Email Us
                </a>
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Response within 4 hours
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
