"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rc-charcoal text-rc-sand pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rc-forest flex items-center justify-center">
                <span className="text-rc-cream font-serif text-lg font-light italic">R</span>
              </div>
              <div>
                <span className="text-lg font-serif tracking-tight text-white leading-none">
                  Richard <span className="italic text-rc-goldLight">Catering</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-rc-sand/50 leading-relaxed">
              Premium catering services for corporate events, weddings,
              private gatherings, and daily office meals across India.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-rc-goldLight/30 hover:bg-white/[0.03] transition-all duration-500"
                  >
                    <Icon className="w-4 h-4 text-rc-sand/50 hover:text-rc-goldLight transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Corporate Catering',
                'Wedding Catering',
                'Private Events',
                'Daily Office Meals',
                'Live Counters',
                'Custom Menu Design',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-rc-sand/50 hover:text-rc-cream transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-5">
              Cities We Serve
            </h4>
            <ul className="space-y-3">
              {[
                'Bengaluru',
                'Mumbai',
                'Pune',
                'Delhi NCR',
                'Hyderabad',
                'Chennai',
              ].map((city) => (
                <li key={city}>
                  <span className="text-sm text-rc-sand/50">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-rc-sand/50 hover:text-rc-cream transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-rc-forest shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="mailto:events@richardcatering.com"
                className="flex items-center gap-3 text-sm text-rc-sand/50 hover:text-rc-cream transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-rc-forest shrink-0" />
                events@richardcatering.com
              </a>
              <div className="flex items-start gap-3 text-sm text-rc-sand/50">
                <MapPin className="w-4 h-4 text-rc-forest shrink-0 mt-0.5" />
                <span>
                  HSR Layout, Sector 1,<br />
                  Bengaluru, Karnataka 560102
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-rc-sand/30">
          <span>© {new Date().getFullYear()} Richard Catering. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-rc-sand/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rc-sand/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-rc-sand/50 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
