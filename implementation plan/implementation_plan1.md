# Implementation Plan - CaterNinja Inspired Catering Platform (TypeScript & Node.js)

Build a modern, high-performance catering web application inspired by [CaterNinja.com](https://caterninja.com), built with a Node.js + TypeScript backend API and a React + Vite + TypeScript frontend.

## Key Features & Architecture

### 1. CaterNinja Core Service Offerings
- **NinjaBox**: Bulk party catering delivered hot in insulated eco-friendly containers.
- **NinjaBuffet**: Luxury buffet setup with chafing dishes, premium presentation, and uniform serving staff.
- **MealBox**: Individual thali-style boxes designed for corporate lunches and team meetings.
- **NinjaLive**: Live food-tainment counters (Live BBQ, Woodfire Pizza, Chaat counter, Pasta bar).

### 2. Interactive Menu Configurator & Instant Price Calculator
- Dynamic Guest Count Slider (10 to 500+ guests).
- Veg / Non-Veg guest distribution ratio controls.
- Categorized multi-select menu items (Starters, Mains, Breads/Rice, Desserts, Beverages, Add-ons).
- Real-time quote recalculation (Per-plate pricing, volume discount thresholds, serving add-on costs, taxes).

### 3. Reusable `libraries/` Folder (Requested by User)
A dedicated `libraries/` directory structured for modular UI components, validation schemas, animation presets, and pricing algorithms:
- `libraries/ui/`: Reusable components (Buttons, Cards, Modals, Sliders, Badges, Tabs).
- `libraries/forms/`: React Hook Form hooks + Zod schemas for order booking & contact forms.
- `libraries/animations/`: Framer Motion transition variants and page animations.
- `libraries/icons/`: Centralized icon exports using Lucide React.
- `libraries/pricing/`: Catering pricing, tax, and package calculation utilities.

### 4. Node.js & TypeScript Backend (Express API)
- REST endpoints for menu catalog (`/api/menu`), dynamic quote calculation (`/api/quote/calculate`), and order submission (`/api/booking`).

---

## User Review Required

> [!IMPORTANT]
> - Node.js environment will run on Express + TypeScript (`ts-node-dev`).
> - Frontend will use Vite + React + TypeScript + Tailwind CSS v3 + Framer Motion + Lucide React + React Hook Form + Zod.
> - Dependencies listed by user (Shadcn/Radix UI patterns, Lucide React, Framer Motion, React Hook Form, Zod) will be installed in `package.json` and organized under the root `/libraries` folder for modular reusability.

---

## Proposed Changes

### Root Directory
#### [NEW] [package.json](file:///c:/demo%20catering/package.json)
- Main package setup with dependencies (`express`, `react`, `react-dom`, `lucide-react`, `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`, `clsx`, `tailwind-merge`) and devDependencies (`vite`, `@types/react`, `typescript`, `tailwindcss`, `autoprefixer`, `postcss`, `ts-node-dev`, `@types/express`, `@types/node`).

#### [NEW] [tsconfig.json](file:///c:/demo%20catering/tsconfig.json)
- TypeScript configuration with paths alias support (`@/libraries/*`, `@/src/*`, `@/server/*`).

#### [NEW] [vite.config.ts](file:///c:/demo%20catering/vite.config.ts)
- Vite configuration with React plugin and dev server proxy to backend Node.js port (`http://localhost:5000`).

#### [NEW] [tailwind.config.js](file:///c:/demo%20catering/tailwind.config.js) & [postcss.config.js](file:///c:/demo%20catering/postcss.config.js)
- Styling configuration with CaterNinja inspired colors (Amber/Orange theme `#FF6B00`, Charcoal `#1E1E1E`, Emerald `#10B981`).

---

### Reusable Libraries (`/libraries`)
#### [NEW] [libraries/pricing/calculator.ts](file:///c:/demo%20catering/libraries/pricing/calculator.ts)
- Catering price engine to calculate per-head rates, tiered discounts for large guest counts, add-on servers cost, and GST calculation.

#### [NEW] [libraries/forms/bookingSchema.ts](file:///c:/demo%20catering/libraries/forms/bookingSchema.ts)
- Zod schema and React Hook Form validation definitions for booking inquiries.

#### [NEW] [libraries/animations/presets.ts](file:///c:/demo%20catering/libraries/animations/presets.ts)
- Framer Motion animation variants (fade-in, slide-up, stagger container, modal pop).

#### [NEW] [libraries/ui/index.ts](file:///c:/demo%20catering/libraries/ui/index.ts)
- Collection of UI primitives (Button, Card, Badge, Slider, Modal, TabButton).

---

### Backend Server (`/server`)
#### [NEW] [server/index.ts](file:///c:/demo%20catering/server/index.ts)
- Express server entry point running on port 5000.

#### [NEW] [server/routes/api.ts](file:///c:/demo%20catering/server/routes/api.ts)
- Express routes for fetching menus, calculating quotes, and submitting catering bookings.

---

### Frontend Application (`/src`)
#### [NEW] [src/index.css](file:///c:/demo%20catering/src/index.css)
- Global styles, typography imports, and custom glassmorphism / scrollbar classes.

#### [NEW] [src/App.tsx](file:///c:/demo%20catering/src/App.tsx)
- Main application component rendering Header, Hero Banner, Service Tier Cards, Interactive Menu Builder, How It Works, Testimonials, Booking Modal, and Footer.

#### [NEW] [src/components/Header.tsx](file:///c:/demo%20catering/src/components/Header.tsx)
- Top navbar with city selector, phone helper, service shortcuts, and dynamic cart badge.

#### [NEW] [src/components/Hero.tsx](file:///c:/demo%20catering/src/components/Hero.tsx)
- High-impact catering banner with quick quote widget and trust indicators.

#### [NEW] [src/components/MenuBuilder.tsx](file:///c:/demo%20catering/src/components/MenuBuilder.tsx)
- The core CaterNinja-style menu customizer featuring guest count controls, veg/non-veg split sliders, menu item selector by categories, and sticky live pricing summary.

#### [NEW] [src/components/Services.tsx](file:///c:/demo%20catering/src/components/Services.tsx)
- Showcases NinjaBox, NinjaBuffet, MealBox, and NinjaLive packages with instant configuration triggers.

#### [NEW] [src/components/BookingModal.tsx](file:///c:/demo%20catering/src/components/BookingModal.tsx)
- Booking dialog integrated with Zod validation & React Hook Form.

---

## Verification Plan

### Automated Verification
1. Run `npm install` to install all TypeScript, React, Express, Tailwind, Framer Motion, and Zod dependencies.
2. Run TypeScript build compiler check: `npx tsc --noEmit` to verify type safety.
3. Build Vite bundle check: `npm run build`.

### Manual Verification
1. Start local server using `npm run dev` / concurrent execution.
2. Test interactive Guest Count slider & Veg/Non-veg ratio selector with live price updates.
3. Verify menu item selection updates item count and total quote cost.
4. Verify Booking form validation (phone format, required fields, date selector).
5. Verify responsive desktop and mobile views.
