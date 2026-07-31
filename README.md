# 🥷 CaterNinja-Inspired Catering Platform

An end-to-end, commercial-grade online catering booking platform and instant menu configurator modeled directly after **[CaterNinja.com](https://caterninja.com)**. Designed for ordering bulk party food, luxury buffet setups, corporate meal boxes, and interactive live cooking stations across major Indian cities (Bengaluru, Mumbai, Pune, Delhi-NCR, Hyderabad, Chennai).

---

## 🏬 Business Core Offerings & Product Lines

Modelled after CaterNinja's proven event catering model:

| Product Line | Format & Packaging | Ideal Event Type | Key Features |
|---|---|---|---|
| **NinjaBox** | Hot Bulk Delivery in 3-Layer Insulated Eco Containers | House Parties, Birthdays (10–50 Pax) | Delivered piping hot; includes complimentary bio-degradable disposables; zero setup hassle. |
| **NinjaBuffet** | Luxury Chafing Dish Setup + Uniformed Staff | Weddings, Receptions, Corporate (25–500+ Pax) | Premium stainless steel warming dishes, dressed server staff, crockery, setup & post-event cleanup. |
| **MealBox** | Individual 5-Compartment Hygienic Thali Trays | Office Lunches, Seminars, Conferences (15+ Pax) | Individual sealed portions (Starter + 2 Mains + Dal + Rice + Roti + Dessert); zero cross-contamination. |
| **NinjaLive** | Interactive Live Cooking Stations | Anniversaries, Premium Gatherings (30+ Pax) | On-site live Woodfire Pizza, Pasta Bar, Live Chaat & BBQ stations manned by expert chefs. |

---

## ⚡ Interactive Menu Configurator & Pricing Engine

1. **Dynamic Guest Count & Ratio Controls**:
   - Live guest slider (10 to 500+ guests).
   - Veg vs Non-Veg guest percentage ratio picker (e.g. 70% Veg / 30% Non-Veg).
2. **Categorized Gourmet Catalog**:
   - Starters (Paneer Tikka Angara, Murgh Malai Tikka, Amritsari Fish Fry, Cheese Corn Balls).
   - Main Course Gravies (Paneer Butter Masala, Dal Makhani, Boneless Butter Chicken, Hyderabadi Mutton Korma).
   - Rice & Breads (Dum Veg Biryani, Chicken Dum Biryani, Assorted Tandoori Naan & Roti).
   - Desserts & Add-ons (Kesari Rasmalai, Hot Gulab Jamun, Moong Dal Halwa, Live Counters).
3. **Transparent Price Calculation**:
   - Real-time per-head rate calculation.
   - Volume discount tiers (5% off for 30+ pax, 10% off for 50+ pax, 15% off for 100+ pax).
   - Optional uniformed server fee & cutlery add-on toggles.
   - 5% GST and free delivery calculations.

---

## 💻 Technical Architecture & Tech Stack

Built with a full-stack **TypeScript** setup:

### Frontend
- **Framework**: React 18 with Vite & TypeScript
- **Styling**: Tailwind CSS v3 with custom CaterNinja color theme (`#FF6B00` Orange & `#1A1D20` Dark Charcoal)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: React Hook Form with Zod resolver

### Backend
- **Runtime**: Node.js
- **API Framework**: Express.js with TypeScript (`ts-node-dev`)

### Modular `/libraries` Directory
```
libraries/
├── pricing/
│   ├── calculator.ts        # Pricing, discount logic & GST calculation engine
│   └── menuData.ts          # Categorized food catalog (Veg/Non-Veg)
├── forms/
│   └── bookingSchema.ts     # Zod schema for Indian phone & city validation
├── animations/
│   └── presets.ts           # Framer Motion transition variants & modal pops
└── ui/
    └── index.tsx            # Reusable UI primitives (Button, Card, Badge)
```

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
npm install
```

### 2. Run Development Servers
- **Frontend App**: `npm run dev` (Runs at `http://localhost:3000`)
- **Backend API**: `npm run dev:server` (Runs at `http://localhost:5000`)

### 3. Type Checking & Production Build
```bash
npm run typecheck
npm run build
```

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/menu` | Fetches active catering menu catalog |
| `POST` | `/api/quote/calculate` | Calculates dynamic per-pax pricing, savings, and taxes |
| `POST` | `/api/booking` | Validates Zod booking payload and issues reference Booking ID |

---

## 🏢 Reference Website
Reference website: **[https://caterninja.com](https://caterninja.com)**
