import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MenuBuilder } from './components/MenuBuilder';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { MenuItem, PriceBreakdown, calculateCateringQuote } from '../libraries/pricing/calculator';
import { SAMPLE_MENU } from '../libraries/pricing/menuData';


export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>('Bengaluru');
  const [activeTier, setActiveTier] = useState<'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive'>('ninjabox');
  const [menuItems, setMenuItems] = useState<MenuItem[]>(SAMPLE_MENU);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [activeQuote, setActiveQuote] = useState<PriceBreakdown | null>(null);

  // Fetch Menu from API endpoint
  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setMenuItems(data.data);
        }
      })
      .catch((err) => {
        console.log('Using local fallback menu dataset', err);
      });
  }, []);

  const handleOpenBookingModal = (quote?: PriceBreakdown) => {
    if (quote) {
      setActiveQuote(quote);
    } else {
      // Default sample quote
      const defaultQuote = calculateCateringQuote({
        guestCount: 30,
        vegRatio: 70,
        selectedItems: menuItems.slice(0, 5),
        serviceTier: activeTier,
        deliveryCity: selectedCity,
        includeServers: activeTier === 'ninjabuffet',
        includeCutlery: true
      });
      setActiveQuote(defaultQuote);
    }
    setIsBookingModalOpen(true);
  };

  const scrollToBuilder = () => {
    const el = document.getElementById('menu-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      {/* Navigation Header */}
      <Header
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        cartCount={5}
        totalQuoteAmount={activeQuote ? activeQuote.totalAmount : 9600}
        onOpenBookingModal={() => handleOpenBookingModal()}
        onScrollToBuilder={scrollToBuilder}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onStartBuilder={scrollToBuilder}
          selectedCity={selectedCity}
        />

        <Services
          activeTier={activeTier}
          onSelectTier={(tier) => {
            setActiveTier(tier);
            scrollToBuilder();
          }}
        />

        <MenuBuilder
          menuItems={menuItems}
          selectedTier={activeTier}
          onTierChange={setActiveTier}
          selectedCity={selectedCity}
          onOpenBookingModal={(quote) => handleOpenBookingModal(quote)}
        />
      </main>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        quoteSummary={activeQuote}
        selectedCity={selectedCity}
      />

      {/* Footer & Reviews */}
      <Footer />
    </div>
  );
}
