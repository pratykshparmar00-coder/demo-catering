export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'rice' | 'desserts' | 'beverages' | 'addons';
  type: 'veg' | 'non-veg';
  pricePerPax: number;
  description: string;
  popular?: boolean;
}

export interface QuoteRequest {
  guestCount: number;
  vegRatio: number; // e.g., 60 for 60% veg, 40% non-veg
  selectedItems: MenuItem[];
  serviceTier: 'ninjabox' | 'ninjabuffet' | 'mealbox' | 'ninjalive';
  deliveryCity: string;
  includeServers?: boolean;
  includeCutlery?: boolean;
}

export interface PriceBreakdown {
  foodSubtotal: number;
  vegGuestCount: number;
  nonVegGuestCount: number;
  tierMultiplier: number;
  perPaxPrice: number;
  serversFee: number;
  cutleryFee: number;
  deliveryFee: number;
  gstAmount: number;
  totalAmount: number;
  savingsPercentage: number;
}

export const SERVICE_TIERS = {
  ninjabox: {
    name: 'NinjaBox',
    subtitle: 'Hot Bulk Delivery in Insulated Boxes',
    multiplier: 1.0,
    minGuests: 10,
    badge: 'Popular for House Parties',
    color: 'bg-amber-500'
  },
  ninjabuffet: {
    name: 'NinjaBuffet',
    subtitle: 'Luxury Chafing Dish Setup + Server Staff',
    multiplier: 1.25,
    minGuests: 25,
    badge: 'Full Service Experience',
    color: 'bg-emerald-600'
  },
  mealbox: {
    name: 'MealBox',
    subtitle: 'Individual 5-Compartment Thali Boxes',
    multiplier: 0.9,
    minGuests: 15,
    badge: 'Corporate Preferred',
    color: 'bg-blue-600'
  },
  ninjalive: {
    name: 'NinjaLive',
    subtitle: 'Live Cooking Station + Chef Experience',
    multiplier: 1.4,
    minGuests: 30,
    badge: 'Food-tainment',
    color: 'bg-purple-600'
  }
};

export function calculateCateringQuote(req: QuoteRequest): PriceBreakdown {
  const { guestCount, vegRatio, selectedItems, serviceTier, includeServers, includeCutlery } = req;
  
  const safeGuests = Math.max(10, guestCount);
  const vegGuestCount = Math.round(safeGuests * (vegRatio / 100));
  const nonVegGuestCount = safeGuests - vegGuestCount;

  // Base raw price per pax from selected items
  let baseFoodPerPax = selectedItems.reduce((acc, item) => acc + item.pricePerPax, 0);
  if (baseFoodPerPax === 0) {
    baseFoodPerPax = 280; // Default base starter menu price
  }

  // Tier multiplier
  const tierConfig = SERVICE_TIERS[serviceTier] || SERVICE_TIERS.ninjabox;
  let adjustedPerPax = baseFoodPerPax * tierConfig.multiplier;

  // Bulk discount based on volume
  let volumeDiscount = 0;
  if (safeGuests >= 100) volumeDiscount = 0.15; // 15% off
  else if (safeGuests >= 50) volumeDiscount = 0.10; // 10% off
  else if (safeGuests >= 30) volumeDiscount = 0.05; // 5% off

  adjustedPerPax = adjustedPerPax * (1 - volumeDiscount);

  const foodSubtotal = Math.round(adjustedPerPax * safeGuests);

  // Optional add-ons
  const serversFee = includeServers ? Math.max(1500, Math.ceil(safeGuests / 25) * 800) : 0;
  const cutleryFee = includeCutlery ? Math.round(safeGuests * 35) : 0;
  const deliveryFee = foodSubtotal > 5000 ? 0 : 350;

  const subtotalBeforeTax = foodSubtotal + serversFee + cutleryFee + deliveryFee;
  const gstAmount = Math.round(subtotalBeforeTax * 0.05); // 5% GST on catering
  const totalAmount = subtotalBeforeTax + gstAmount;

  return {
    foodSubtotal,
    vegGuestCount,
    nonVegGuestCount,
    tierMultiplier: tierConfig.multiplier,
    perPaxPrice: Math.round(totalAmount / safeGuests),
    serversFee,
    cutleryFee,
    deliveryFee,
    gstAmount,
    totalAmount,
    savingsPercentage: Math.round(volumeDiscount * 100)
  };
}
