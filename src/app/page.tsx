"use client";

import React, { useState } from 'react';
import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedMenu } from '../components/FeaturedMenu';
import { Consultation } from '../components/Consultation';
import { Standards } from '../components/Standards';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-rc-cream text-rc-text font-sans">
      {/* Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero → Services → Why Us → Menu → Consultation → Standards → Testimonials → FAQ → CTA */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <FeaturedMenu />
        <Consultation />
        <Standards />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
