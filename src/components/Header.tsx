import React, { useState } from 'react';
import { MapPin, PhoneCall, ShoppingBag, Menu, X, ChevronDown, Sparkles, Utensils } from 'lucide-react';
import { Button } from '../../libraries/ui';

interface HeaderProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  cartCount: number;
  totalQuoteAmount: number;
  onOpenBookingModal: () => void;
  onScrollToBuilder: () => void;
}

const CITIES = ['Bengaluru', 'Mumbai', 'Pune', 'Delhi-NCR', 'Hyderabad', 'Chennai'];

export const Header: React.FC<HeaderProps> = ({
  selectedCity,
  onCityChange,
  cartCount,
  totalQuoteAmount,
  onOpenBookingModal,
  onScrollToBuilder
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 text-white selection:bg-amber-400 selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#141414] text-gray-300 text-[11px] py-1.5 px-4 border-b border-white/5 tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> ARTISANAL CATERING IN {selectedCity.toUpperCase()}
            </span>
            <span className="hidden sm:inline-block text-gray-400">
              • 5-Star Hygiene Certified • 50,000+ Events Served
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9876543210" className="hover:text-amber-400 flex items-center gap-1.5 transition">
              <PhoneCall className="w-3 h-3 text-amber-400" /> Concierge: +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black flex items-center justify-center text-xl font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                👨‍🍳
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif tracking-tight text-white uppercase font-light leading-none">
                  RICHARD <span className="text-amber-400 italic">CATERING</span>
                </span>
                <span className="text-[10px] text-gray-400 font-sans tracking-[0.2em] uppercase mt-1">CATERING MADE SIMPLE</span>
              </div>
            </a>

            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-gray-200 hover:border-amber-400 hover:text-amber-400 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#141414] rounded-2xl shadow-2xl border border-white/10 py-2 z-50">
                  <div className="px-4 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest">Select Location</div>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        onCityChange(city);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-white/5 hover:text-amber-400 transition ${selectedCity === city ? 'bg-amber-400/10 text-amber-400 font-bold' : 'text-gray-300'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-300">
            <a href="#packages" className="hover:text-amber-400 transition">
              Offerings
            </a>
            <button onClick={onScrollToBuilder} className="hover:text-amber-400 transition">
              Menu Builder
            </button>
            <a href="#how-it-works" className="hover:text-amber-400 transition">
              Experience
            </a>
            <a href="#reviews" className="hover:text-amber-400 transition">
              Reviews
            </a>
          </nav>

          {/* Cart & Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="flex items-center gap-2.5 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 text-white transition cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <div className="text-left hidden sm:block">
                <div className="text-[9px] uppercase font-bold tracking-wider text-amber-400">Cart ({cartCount})</div>
                <div className="text-xs font-bold text-white">₹{totalQuoteAmount.toLocaleString('en-IN')}</div>
              </div>
            </button>

            <Button onClick={onOpenBookingModal} size="sm" className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-2xl shadow-lg shadow-amber-500/20">
              Get Instant Quote
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#101010] px-4 py-6 space-y-4 text-xs uppercase tracking-wider">
          <div className="pb-3 border-b border-white/10">
            <span className="text-[10px] font-bold text-amber-400 tracking-widest">Select Location:</span>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onCityChange(city);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-xl border text-center font-semibold ${selectedCity === city ? 'bg-amber-400 text-black border-amber-400 font-bold' : 'border-white/15 text-gray-300'}`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400">
            Offerings
          </a>
          <button
            onClick={() => {
              onScrollToBuilder();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-gray-300 hover:text-amber-400"
          >
            Menu Builder
          </button>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400">
            Experience
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400">
            Customer Reviews
          </a>
          <Button onClick={onOpenBookingModal} className="w-full bg-amber-400 text-black font-bold py-3 mt-2">
            Book Catering Now
          </Button>
        </div>
      )}
    </header>
  );
};
