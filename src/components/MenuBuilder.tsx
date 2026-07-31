import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Check, Trash2, Sliders, ChevronRight, Shield, Info, Sparkles } from 'lucide-react';
import { Button, Card, Badge } from '../../libraries/ui';
import { MenuItem, PriceBreakdown, calculateCateringQuote } from '../../libraries/pricing/calculator';

interface MenuBuilderProps {
  menuItems: MenuItem[];
  selectedTier: 'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive';
  onTierChange: (tier: 'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive') => void;
  selectedCity: string;
  onOpenBookingModal: (quote: PriceBreakdown) => void;
}

export const MenuBuilder: React.FC<MenuBuilderProps> = ({
  menuItems,
  selectedTier,
  onTierChange,
  selectedCity,
  onOpenBookingModal
}) => {
  // Guest Config State
  const [guestCount, setGuestCount] = useState<number>(30);
  const [vegRatio, setVegRatio] = useState<number>(75); // 75% veg by default
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'rice' | 'desserts' | 'addons'>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  
  // Selected items state (default select a nice popular menu mix)
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>(['v1', 'nv1', 'mv1', 'r1', 'd2']);
  
  // Service Options
  const [includeServers, setIncludeServers] = useState<boolean>(selectedTier === 'ninjabuffet');
  const [includeCutlery, setIncludeCutlery] = useState<boolean>(true);

  // Filtered menu items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = dietFilter === 'all' || item.type === dietFilter;
    return matchesCategory && matchesDiet;
  });

  const selectedObjects = menuItems.filter((item) => selectedItemIds.includes(item.id));

  // Compute live quote
  const liveQuote = calculateCateringQuote({
    guestCount,
    vegRatio,
    selectedItems: selectedObjects,
    serviceTier: selectedTier,
    deliveryCity: selectedCity,
    includeServers,
    includeCutlery
  });

  const toggleItemSelection = (id: string) => {
    if (selectedItemIds.includes(id)) {
      setSelectedItemIds(selectedItemIds.filter((itemId) => itemId !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  return (
    <section id="menu-builder" className="py-20 bg-gray-50 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="orange" className="text-xs uppercase tracking-wider">Instant Configurator</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Build Your Party Menu & Get Live Price
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Adjust guest counts, veg/non-veg split, pick appetizers, main courses, and desserts. Watch your instant transparent quote calculate in real-time.
          </p>
        </div>

        {/* Builder Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Middle: Controls & Item Selector (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Guest Count & Diet Ratio Card */}
            <Card className="p-6 space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                  <span className="w-7 h-7 rounded-full bg-ninja-orange text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Guest Count & Dietary Preference</span>
                </div>
                <Badge variant="green" className="text-xs">
                  {selectedCity}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Guest Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-ninja-orange" /> Total Guests:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setGuestCount(Math.max(10, guestCount - 5))}
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center transition"
                      >
                        -
                      </button>
                      <span className="text-lg font-extrabold text-ninja-orange w-12 text-center">{guestCount}</span>
                      <button
                        onClick={() => setGuestCount(guestCount + 5)}
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-ninja-orange cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                    <span>10 Min</span>
                    <span>50 Pax</span>
                    <span>100 Pax (15% Off)</span>
                    <span>300+ Pax</span>
                  </div>
                </div>

                {/* Veg / Non-Veg Split Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-emerald-700 flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Veg: {liveQuote.vegGuestCount} Pax ({vegRatio}%)
                    </span>
                    <span className="text-red-700 flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Non-Veg: {liveQuote.nonVegGuestCount} Pax ({100 - vegRatio}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={vegRatio}
                    onChange={(e) => setVegRatio(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="text-[11px] text-gray-400 text-center font-medium">
                    Drag slider to adjust Veg vs Non-Veg guest ratio
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2: Service Tier Selector Tabs */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-lg border-b border-gray-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-ninja-orange text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Select Catering Delivery Type</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'ninjabox', name: 'NinjaBox', desc: 'Hot Bulk Box', icon: '📦' },
                  { id: 'ninjabuffet', name: 'NinjaBuffet', desc: 'Setup & Staff', icon: '🍽️' },
                  { id: 'mealbox', name: 'MealBox', desc: 'Individual Thalis', icon: '🍱' },
                  { id: 'ninjalive', name: 'NinjaLive', desc: 'Live Counters', icon: '🔥' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      onTierChange(tier.id as any);
                      if (tier.id === 'ninjabuffet') setIncludeServers(true);
                    }}
                    className={`p-3 rounded-xl border text-left transition ${
                      selectedTier === tier.id
                        ? 'bg-orange-50 border-ninja-orange ring-2 ring-ninja-orange/20'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xl mb-1">{tier.icon}</div>
                    <div className="font-bold text-xs text-gray-900">{tier.name}</div>
                    <div className="text-[10px] text-gray-500">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Step 3: Menu Item Catalog Selector */}
            <Card className="p-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                  <span className="w-7 h-7 rounded-full bg-ninja-orange text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>Choose Your Gourmet Dishes ({selectedItemIds.length} Selected)</span>
                </div>

                {/* Diet Filter Switch */}
                <div className="flex rounded-lg bg-gray-100 p-1 text-xs font-semibold">
                  <button
                    onClick={() => setDietFilter('all')}
                    className={`px-2.5 py-1 rounded-md transition ${dietFilter === 'all' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-500'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setDietFilter('veg')}
                    className={`px-2.5 py-1 rounded-md transition flex items-center gap-1 ${dietFilter === 'veg' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-gray-500'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Veg Only
                  </button>
                  <button
                    onClick={() => setDietFilter('non-veg')}
                    className={`px-2.5 py-1 rounded-md transition flex items-center gap-1 ${dietFilter === 'non-veg' ? 'bg-white text-red-700 shadow-2xs' : 'text-gray-500'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Non-Veg
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'starters', label: 'Starters & Appetizers' },
                  { id: 'mains', label: 'Main Course Gravies' },
                  { id: 'rice', label: 'Biryani & Breads' },
                  { id: 'desserts', label: 'Desserts' },
                  { id: 'addons', label: 'Live Counters & Addons' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                      activeCategory === cat.id
                        ? 'bg-ninja-dark text-white border-ninja-dark'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => {
                  const isSelected = selectedItemIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemSelection(item.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex justify-between items-start gap-3 ${
                        isSelected
                          ? 'bg-orange-50/50 border-ninja-orange shadow-xs'
                          : 'bg-white border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-xs border border-gray-400 flex items-center justify-center p-0.5 ${
                              item.type === 'veg' ? 'border-emerald-600' : 'border-red-600'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.type === 'veg' ? 'bg-emerald-600' : 'bg-red-600'
                              }`}
                            ></span>
                          </span>
                          <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                          {item.popular && <Badge variant="orange" className="text-[9px]">Popular</Badge>}
                        </div>
                        <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
                        <div className="text-xs font-bold text-ninja-orange">+₹{item.pricePerPax}/pax</div>
                      </div>

                      <button
                        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition ${
                          isSelected ? 'bg-ninja-orange text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                      >
                        {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </Card>

          </div>

          {/* Right Column: Sticky Live Pricing & Order Summary Sidebar (4 Columns) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <Card className="p-6 bg-white border border-gray-200 shadow-xl space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg">Instant Quote Summary</h3>
                  <p className="text-xs text-gray-500">{selectedCity} Delivery</p>
                </div>
                {liveQuote.savingsPercentage > 0 && (
                  <Badge variant="green" className="text-xs animate-pulse">
                    {liveQuote.savingsPercentage}% Bulk Savings
                  </Badge>
                )}
              </div>

              {/* Per Head Price Highlight */}
              <div className="bg-ninja-lightOrange p-4 rounded-2xl border border-orange-200 text-center space-y-1">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Per Head Rate</div>
                <div className="text-3xl font-extrabold text-ninja-orange">
                  ₹{liveQuote.perPaxPrice} <span className="text-xs font-normal text-gray-500">/ person</span>
                </div>
                <div className="text-[11px] text-gray-600 font-medium">
                  {guestCount} Guests ({liveQuote.vegGuestCount} Veg + {liveQuote.nonVegGuestCount} Non-Veg)
                </div>
              </div>

              {/* Selected Items Quick List */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                  <span>Selected Dishes ({selectedObjects.length})</span>
                  <button
                    onClick={() => setSelectedItemIds([])}
                    className="text-red-500 text-[10px] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear All
                  </button>
                </div>
                <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                  {selectedObjects.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs py-1 border-b border-gray-50 text-gray-700">
                      <span className="truncate pr-2">{item.name}</span>
                      <span className="font-semibold text-gray-900">₹{item.pricePerPax}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Add-ons Toggles */}
              <div className="space-y-3 border-t border-gray-100 pt-4 text-xs">
                <div className="font-bold text-gray-800">Add-on Services:</div>

                <label className="flex items-center justify-between p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <span className="text-gray-700 font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-ninja-orange" /> Uniformed Serving Staff
                  </span>
                  <input
                    type="checkbox"
                    checked={includeServers}
                    onChange={(e) => setIncludeServers(e.target.checked)}
                    className="w-4 h-4 accent-ninja-orange"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <span className="text-gray-700 font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-ninja-orange" /> Eco Disposable Plates & Cutlery
                  </span>
                  <input
                    type="checkbox"
                    checked={includeCutlery}
                    onChange={(e) => setIncludeCutlery(e.target.checked)}
                    className="w-4 h-4 accent-ninja-orange"
                  />
                </label>
              </div>

              {/* Detailed Cost Breakdown */}
              <div className="border-t border-gray-100 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Food Subtotal ({guestCount} Pax)</span>
                  <span>₹{liveQuote.foodSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {liveQuote.serversFee > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Serving Staff Fee</span>
                    <span>₹{liveQuote.serversFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {liveQuote.cutleryFee > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Cutlery & Serviettes</span>
                    <span>₹{liveQuote.cutleryFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>GST (5%)</span>
                  <span>₹{liveQuote.gstAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Delivery & Box Setup</span>
                  <span>FREE</span>
                </div>
              </div>

              {/* Total Amount */}
              <div className="border-t-2 border-dashed border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 font-bold">Total Estimated Amount</div>
                  <div className="text-2xl font-extrabold text-gray-900">
                    ₹{liveQuote.totalAmount.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <Button
                onClick={() => onOpenBookingModal(liveQuote)}
                size="lg"
                className="w-full shadow-lg shadow-orange-500/20"
              >
                <span>Book / Lock This Quote</span>
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Price Lock Guarantee • No hidden fees</span>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
