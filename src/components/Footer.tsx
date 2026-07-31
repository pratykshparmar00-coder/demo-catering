import React from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin, Heart, Star, CheckCircle } from 'lucide-react';
import { Badge } from '../../libraries/ui';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ninja-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      
      {/* How It Works Section */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-gray-800">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <Badge variant="orange" className="text-xs uppercase tracking-wider">3 Easy Steps</Badge>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">How NinjaCater Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/60 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-ninja-orange text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              1
            </div>
            <h4 className="font-bold text-white text-lg">Pick Guests & Menu</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Use our custom menu builder to select guest count, veg/non-veg split, and your favorite starters & mains.
            </p>
          </div>

          <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/60 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-ninja-orange text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              2
            </div>
            <h4 className="font-bold text-white text-lg">Instant Quote & Customize</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get 100% transparent live pricing with GST & volume discounts. Lock your booking with a quick deposit.
            </p>
          </div>

          <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/60 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-ninja-orange text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              3
            </div>
            <h4 className="font-bold text-white text-lg">Delivered Fresh & Hot</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Food arrives hot in insulated eco boxes or gets laid out with luxury chafing dishes by uniform servers.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-800">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="flex justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-2xl font-extrabold text-white">Loved By 50,000+ Party Hosts</h3>
          <p className="text-xs text-gray-400">4.9/5 Rating across Google Reviews, Zomato & Magicpin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">Priya Sharma</span>
              <span className="text-amber-400">★★★★★</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              "Ordered NinjaBox for my son's 5th birthday house party in Bengaluru. Paneer tikka was extremely soft and food stayed scalding hot in insulated boxes for 3 hours!"
            </p>
            <div className="text-[10px] text-gray-500 font-medium">Bengaluru • House Party for 35 Pax</div>
          </div>

          <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">Anand Deshmukh</span>
              <span className="text-amber-400">★★★★★</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              "We booked NinjaBuffet with staff for our team quarterly meet in Pune. Super professional setup, immaculate chafing dishes, and zero cleanup work for us."
            </p>
            <div className="text-[10px] text-gray-500 font-medium">Pune • Corporate Lunch for 80 Pax</div>
          </div>

          <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">Rohan Mehta</span>
              <span className="text-amber-400">★★★★★</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              "The live woodfire pizza counter (NinjaLive) was the star of our anniversary party in Mumbai! Guests couldn't stop praising the fresh hot thin-crust slices."
            </p>
            <div className="text-[10px] text-gray-500 font-medium">Mumbai • Anniversary Party for 50 Pax</div>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-ninja-orange to-amber-500 text-white flex items-center justify-center text-lg font-bold">
                👨‍🍳
              </div>
              <span className="text-lg font-extrabold text-white">
                Richard <span className="text-ninja-orange">Catering</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's premier online catering platform. Simplifying house party catering, corporate meal boxes, and full-service buffet setups with instant online quotes.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" /> FSSAI Lic. #11223999000123
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#packages" className="hover:text-ninja-orange transition">NinjaBox Bulk Delivery</a></li>
              <li><a href="#packages" className="hover:text-ninja-orange transition">NinjaBuffet Luxury Setup</a></li>
              <li><a href="#packages" className="hover:text-ninja-orange transition">MealBox Corporate Thalis</a></li>
              <li><a href="#packages" className="hover:text-ninja-orange transition">NinjaLive Cooking Stations</a></li>
              <li><a href="#menu-builder" className="hover:text-ninja-orange transition">Custom Party Menu Builder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Cities We Serve</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bengaluru (Koramangala, Indiranagar, Whitefield)</li>
              <li>Mumbai (Andheri, Bandra, Powai, Thane)</li>
              <li>Pune (Kothrud, Baner, Viman Nagar)</li>
              <li>Delhi-NCR (Gurugram, Noida, South Delhi)</li>
              <li>Hyderabad (Gachibowli, Jubilee Hills)</li>
              <li>Chennai (Adyar, Anna Nagar)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Help & Support</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-ninja-orange" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ninja-orange" />
                <span>orders@ninjacater.com</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-ninja-orange shrink-0 mt-0.5" />
                <span>HSR Layout Sector 1, Bengaluru, Karnataka 560102</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-[11px] text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>© {new Date().getFullYear()} Richard Catering Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using TypeScript, React & Node.js
          </div>
        </div>
      </div>
    </footer>
  );
};
