"use client";

import React, { useState } from 'react';
import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CoreValues } from '@/components/CoreValues';
import { ExcellenceCallout } from '@/components/ExcellenceCallout';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FeaturedMenu } from '@/components/FeaturedMenu';
import { Consultation } from '@/components/Consultation';
import { FinalCTA } from '@/components/FinalCTA';
import { Standards } from '@/components/Standards';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-rc-cream text-rc-text font-sans">
      {/* Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Navigation */}
      <Header />

      {/* Main Content — Yucca Section Flow */}
      <main className="flex-grow">
        <Hero loading={loading} />
        <CoreValues />
        <ExcellenceCallout />
        <Services />
        <WhyChooseUs />
        <FeaturedMenu />
        <Consultation />
        <FinalCTA />
        <Standards />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
