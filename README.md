# 🥂 Naman Catering | Premium Catering Platform

An end-to-end, commercial-grade online catering booking platform designed for luxury events, corporate gatherings, weddings, and private parties. Built with a focus on **premium design aesthetics**, smooth animations, and a seamless user experience.

---

## 📖 Landing Page Architecture & Flow

The main landing page is designed to guide users through a premium journey, featuring the following sequential sections:

1. **Preloader**: A luxurious loading animation to establish the brand tone before revealing the site.
2. **Hero**: Full-width editorial layout with a massive serif headline and parallax imagery.
3. **Core Values**: Horizontally scrolling marquee highlighting key brand pillars (Quality, Freshness, Presentation, etc.).
4. **Excellence Callout**: A visually striking banner emphasizing our culinary standards.
5. **Services**: Elegant display of our core offerings (Weddings, Corporate, Private Dining).
6. **Why Choose Us**: Detailed breakdown of our commitment to excellence and professional staff.
7. **Featured Menu**: A visual grid showcasing our signature dishes and culinary range.
8. **Consultation**: A sleek, minimal contact and booking section to capture high-value leads.
9. **Final CTA**: A strong, mid-page call-to-action encouraging users to book their event.
10. **Standards**: Highlighting our hygiene, sourcing, and sustainability commitments.
11. **Testimonials**: Authentic reviews from past clients in an elegant carousel.
12. **FAQ**: Expandable accordion sections for common customer questions.
13. **Footer**: Clean, sophisticated multi-column footer with links and contact info.

---

## 💻 Technical Architecture & Tech Stack

Built with a full-stack **TypeScript** setup optimized for performance, SEO, and visual excellence:

### Framework & Backend
- **Framework**: Next.js (App Router)
- **API Routes**: Next.js Route Handlers (`src/app/api`)
- **Language**: TypeScript

### Styling & UI
- **Styling**: Tailwind CSS with custom Naman Catering luxury color theme (Cream, Forest Green, Gold, Charcoal).
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
