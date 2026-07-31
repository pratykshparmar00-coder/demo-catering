# 🥂 Richard Catering | Premium Catering Platform

An end-to-end, commercial-grade online catering booking platform designed for luxury events, corporate gatherings, weddings, and private parties. Built with a focus on **premium design aesthetics**, smooth animations, and a seamless booking experience.

---

## 🏬 Business Core Offerings & Product Lines

| Product Line | Format & Packaging | Ideal Event Type | Key Features |
|---|---|---|---|
| **Premium Box** | Hot Bulk Delivery in 3-Layer Insulated Eco Containers | House Parties, Birthdays (10–50 Pax) | Delivered piping hot; includes complimentary bio-degradable disposables; zero setup hassle. |
| **Luxury Buffet** | Luxury Chafing Dish Setup + Uniformed Staff | Weddings, Receptions, Corporate (25–500+ Pax) | Premium stainless steel warming dishes, dressed server staff, crockery, setup & post-event cleanup. |
| **Executive MealBox**| Individual 5-Compartment Hygienic Thali Trays | Office Lunches, Seminars, Conferences (15+ Pax) | Individual sealed portions (Starter + 2 Mains + Dal + Rice + Roti + Dessert); zero cross-contamination. |
| **Live Stations** | Interactive Live Cooking Stations | Anniversaries, Premium Gatherings (30+ Pax) | On-site live Woodfire Pizza, Pasta Bar, Live Chaat & BBQ stations manned by expert chefs. |

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
   - Volume discount tiers.
   - Optional uniformed server fee & cutlery add-on toggles.
   - Tax and delivery calculations.

---

## 💻 Technical Architecture & Tech Stack

Built with a full-stack **TypeScript** setup optimized for performance, SEO, and visual excellence:

### Framework & Backend
- **Framework**: Next.js (App Router)
- **API Routes**: Next.js Route Handlers (`src/app/api`)
- **Language**: TypeScript

### Styling & UI
- **Styling**: Tailwind CSS with custom Richard Catering luxury color theme (Cream, Forest Green, Gold, Charcoal).
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### Animations & Interactions
- **Smooth Scroll**: Lenis
- **Animations**: GSAP, Framer Motion, Tailwind Animate
- **Carousels & Media**: Embla Carousel, PhotoSwipe

### Forms & Validation
- **Validation**: React Hook Form with Zod resolver

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Runs the Next.js app at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/menu` | Fetches active catering menu catalog |
| `POST` | `/api/quote/calculate` | Calculates dynamic per-pax pricing, savings, and taxes |
| `POST` | `/api/booking` | Validates Zod booking payload and issues reference Booking ID |

---

## 👨‍💻 Team Workflow

This repository is structured to support multiple developers without version control issues. Feature branches are actively maintained for:
- `skygod-*`: Hero animations, UI components, booking forms.
- `pratyksh-*`: API integrations, menu services, gallery modules.
