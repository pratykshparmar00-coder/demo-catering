import React, { useState } from 'react';
import { MapPin, PhoneCall, ShoppingBag, Menu, X, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Banner Bar */}
      <div className="bg-ninja-dark text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-ninja-orange font-medium">
              <Sparkles className="w-3.5 h-3.5" /> India's #1 Instant Catering Platform
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> FSSAI Certified Kitchens
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <a href="tel:9876543210" className="hover:text-white flex items-center gap-1 transition">
              <PhoneCall className="w-3 h-3 text-ninja-orange" /> Help: +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ninja-orange to-amber-500 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform">
                👨‍🍳
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-gray-900 leading-none">
                  Richard <span className="text-ninja-orange">Catering</span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide">Crafting Culinary Experiences</span>
              </div>
            </a>

            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:border-ninja-orange hover:text-ninja-orange transition"
              >
                <MapPin className="w-3.5 h-3.5 text-ninja-orange" />
                <span>{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Select Your City</div>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        onCityChange(city);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-ninja-lightOrange hover:text-ninja-orange transition ${selectedCity === city ? 'bg-orange-50 text-ninja-orange font-bold' : 'text-gray-700'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#packages" className="text-sm font-medium text-gray-700 hover:text-ninja-orange transition">
              Packages
            </a>
            <button onClick={onScrollToBuilder} className="text-sm font-medium text-gray-700 hover:text-ninja-orange transition">
              Menu Builder
            </button>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-ninja-orange transition">
              How It Works
            </a>
            <a href="#reviews" className="text-sm font-medium text-gray-700 hover:text-ninja-orange transition">
              Reviews
            </a>
          </nav>

          {/* Actions & Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="relative flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl border border-orange-200 text-ninja-orange hover:bg-orange-100 transition cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] uppercase font-bold tracking-wider text-orange-600">Selected ({cartCount})</div>
                <div className="text-xs font-bold text-gray-900">₹{totalQuoteAmount.toLocaleString('en-IN')}</div>
              </div>
              {cartCount > 0 && (
                <span className="sm:hidden absolute -top-1.5 -right-1.5 bg-ninja-orange text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                  {cartCount}
                </span>
              )}
            </button>

            <Button onClick={onOpenBookingModal} size="sm" className="hidden sm:inline-flex">
              Get Instant Quote
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <div className="pb-2 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase">City:</span>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onCityChange(city);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs py-1.5 rounded-lg border text-center font-semibold ${selectedCity === city ? 'bg-ninja-orange text-white border-ninja-orange' : 'border-gray-200 text-gray-700'}`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700">
            Packages
          </a>
          <button
            onClick={() => {
              onScrollToBuilder();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-sm font-medium text-gray-700"
          >
            Custom Menu Builder
          </button>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700">
            How It Works
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700">
            Customer Reviews
          </a>
          <Button onClick={onOpenBookingModal} className="w-full mt-2">
            Book Catering Now
          </Button>
        </div>
      )}
    </header>
  );
};
