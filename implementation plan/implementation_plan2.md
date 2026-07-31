# Premium Catering UI Integration Plan

The goal is to set up a premium tech stack for building a highly animated, luxurious catering website, incorporating tools like GSAP, Lenis, Embla Carousel, and shadcn/ui.

## User Review Required

> [!IMPORTANT]  
> **Framework Decision: Next.js vs. Vite**
> Your prompt mentions using **Next.js** as the framework. However, the current repository (`demo-catering`) is already built using **Vite, React, and an Express server**. 
> 
> **Option A (Migrate to Next.js):** I will completely restructure the repository to use Next.js. This involves replacing Vite, migrating the React components to Next.js App router, and porting the Express API to Next.js route handlers.
> 
> **Option B (Keep Vite):** I will install all the requested UI and animation libraries (GSAP, Lenis, Embla Carousel, Three.js, etc.) into the existing Vite project and we will build the premium design without migrating to Next.js.
> 
> **Please reply with which option you prefer!**

## Proposed Changes (Assuming Option B for now, or adaptable to Option A)

We will install and configure the following packages to achieve the premium design stack:

### Dependencies to Install
- **Animations:** `gsap`, `@studio-freight/lenis` (or `lenis`)
- **UI Components:** `shadcn/ui` dependencies like `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`
- **Carousels & Galleries:** `embla-carousel-react`, `photoswipe`, `react-photoswipe-gallery`
- **Video:** `react-player`

### Configuration
- Add Google Fonts for headings (Playfair Display / Cinzel) and body (Inter).
- Configure a base luxury color palette (Dark backgrounds, gold accents) in `tailwind.config.js`.
- Set up a global `Lenis` smooth scroll wrapper in `App.tsx` (or Next.js `layout.tsx`).

## Verification Plan
- Run `npm install` for all new dependencies.
- Ensure the dev server starts correctly without dependency conflicts.
- Render a simple GSAP + Lenis scroll animation to confirm the animation stack works.
