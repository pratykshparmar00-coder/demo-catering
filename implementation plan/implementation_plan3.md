# Redesign Naman Catering Homepage to Match Yucca.co.za

Redesign the entire Naman Catering homepage UI/UX to match the Yucca.co.za design language — warm cream backgrounds, editorial serif typography, full-width hero with product imagery, hamburger menu, dark accent sections, scrolling marquee, mission/vision layout, and a Yucca-style footer.

## Yucca Design Reference Screenshots

````carousel
![Yucca Hero — Full-width warm beige bg, massive serif headline, product image on right, 3-column glass cards](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_desktop_hero_1785608914915.png)
<!-- slide -->
![Yucca CTA Section — Centered serif text on warm cream bg with dark "See products" button](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_section_3_1785608961988.png)
<!-- slide -->
![Yucca Mission/Vision — Split two-column rows separated by thin borders, serif headings with bullet dots](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_section_5_1785608984149.png)
<!-- slide -->
![Yucca Custom Solutions dark section + scrolling marquee ticker](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_section_7_1785609003261.png)
<!-- slide -->
![Yucca Mobile Menu — Large nav links with arrows, full-screen overlay](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_mobile_menu_1785608935446.png)
<!-- slide -->
![Yucca Footer — Tagline, large logo mark, 3 bordered cards, bottom bar with socials and links](C:/Users/rakhi/.gemini/antigravity-ide/brain/e13cb86a-c279-4044-a402-8a1aa6a14345/yucca_footer_1785609035487.png)
````

## Proposed Changes

### Header — Yucca-Style Navigation with Hamburger Menu

#### [MODIFY] [Header.tsx](file:///c:/demo%20catering/src/components/Header.tsx)

**Current**: Standard fixed header with inline nav links, phone number, and "Get a Quote" CTA pill.

**Yucca Pattern**: 
- **Desktop**: Logo left, horizontal nav links center (`Services`, `Menu`, `About`, `Contact Us`), right side has "Get a Quote" outlined button + solid "Book Now" dark button.
- **Mobile**: Logo left, "Book Now" dark button + hamburger (☰) icon on the right. Hamburger opens a **full-screen overlay** with large serif nav links (each link has an arrow →), stacking vertically with generous spacing.
- **Background**: Warm cream `bg-rc-cream` (not transparent) at all times, with a subtle bottom border.

---

### Hero Section — Full-Width Editorial Layout

#### [MODIFY] [Hero.tsx](file:///c:/demo%20catering/src/components/Hero.tsx)

**Current**: Two-column grid (text left, card right) with trust metrics.

**Yucca Pattern**:
- **Full-width warm beige/cream background** filling the viewport.
- **Massive serif headline** on the left: "Crafting Exceptional *Culinary* Experiences." — very large `clamp(3rem, 7vw, 6rem)` editorial serif font.
- **Hero image on the right** — a beautiful food/catering image with parallax scroll offset (use generated image).
- **Three glass/frosted service cards** at the bottom of the hero: "Corporate Events", "Weddings", "Private Dining" — each card is a semi-transparent rounded rectangle with a title, short description, and "Tell me more →" arrow link.
- Remove trust metrics bar from hero (relocate to WhyChooseUs).

---

### Core Values / Brand Keywords Section (NEW)

#### [NEW] [CoreValues.tsx](file:///c:/demo%20catering/src/components/CoreValues.tsx)

**Yucca Pattern**: Below hero, a section shows branded keyword chips in a row — "Quality", "Freshness", "Sustainability", etc. Warm cream bg with centered layout.

For Naman Catering: Display 6 brand values: `Quality`, `Freshness`, `Presentation`, `Custom Menus`, `Sustainable`, `Innovation` — as rounded pill/chip labels in a horizontally centered flex row.

---

### Excellence Callout Section (NEW)

#### [NEW] [ExcellenceCallout.tsx](file:///c:/demo%20catering/src/components/ExcellenceCallout.tsx)

**Yucca Pattern**: A large centered serif text block on warm cream background:
> "Set the standard for culinary excellence at your events. Let us make your occasions truly memorable."

Below the text: a dark rounded button "Explore Our Menu →". Clean, spacious, editorial feel.

---

### Services Section — Yucca Solutions Detail Layout

#### [MODIFY] [Services.tsx](file:///c:/demo%20catering/src/components/Services.tsx)

**Current**: 6 service cards in a 3-column grid.

**Yucca Pattern**: Instead of a card grid, use a **stacked list layout** (like Yucca's Solutions Detail). Each service is a **full-width row** with:
- Left: Service title ("Corporate Catering") in large serif font
- Right: Description paragraph + "Learn more →" arrow link
- Separated by thin horizontal borders
- Warm cream background

Keep 3 primary services: `Corporate Events`, `Wedding Catering`, `Private Dining`.

---

### Mission & Vision Section — Two-Column Split

#### [MODIFY] [WhyChooseUs.tsx](file:///c:/demo%20catering/src/components/WhyChooseUs.tsx)

**Current**: Dark forest bg with left text + right grid of 6 trust cards.

**Yucca Pattern**: Warm cream bg section with:
- **Top area**: Large serif headline "Committed to Excellence, *always Innovating*" on the left, description paragraph + "About Us" dark button on the right.
- **Two horizontal rows below** (separated by thin colored borders):
  - Row 1: `• Our Mission` (left, serif) + mission text (right)
  - Row 2: `• Our Vision` (left, serif) + vision text (right)

---

### Featured Menu — Product Showcase Grid

#### [MODIFY] [FeaturedMenu.tsx](file:///c:/demo%20catering/src/components/FeaturedMenu.tsx)

**Current**: 2-column grid of menu category cards.

**Yucca Pattern** (New Products section): A **showcase grid** with:
- Header: "Featured Menu" (serif) + "View Full Menu" outlined button on the right
- 4-column grid of dish cards, each with:
  - Large image placeholder area (generated images)
  - Dish name below
  - Type indicator (veg/non-veg dot)
  - Price: "From ₹XX / pax"
- Cards have hover lift + shadow animation

---

### Custom Solutions / Dark CTA — Scrolling Marquee

#### [MODIFY] [FinalCTA.tsx](file:///c:/demo%20catering/src/components/FinalCTA.tsx)

**Current**: Dark forest bg with centered CTA text.

**Yucca Pattern**: Two sub-sections:
1. **Dark forest background block** with large serif white text: "Events that thrive invest in exceptional catering. Let us bring your vision to life." + transparent product/food image overlay on the right.
2. **Horizontal scrolling marquee ticker** below: "Have a special request? Get in touch to find out. →" — looping infinitely left-to-right in large bold text. Uses CSS `@keyframes` or GSAP ticker for smooth infinite scroll.

---

### Standards Section — Certification Badges Row

#### [MODIFY] [Standards.tsx](file:///c:/demo%20catering/src/components/Standards.tsx)

**Current**: 3-column card grid + certifications bar.

**Yucca Pattern**: Clean warm cream bg with:
- Left: Large serif heading "Quality & Safety Standards"
- Right: Description paragraph
- Below: A horizontal row of certification badges/text (FSSAI, HACCP, ISO 22000, etc.) displayed as simple text labels or icons in a flex row. No cards.

---

### FAQ Section — Accordion Panel

#### [MODIFY] [FAQ.tsx](file:///c:/demo%20catering/src/components/FAQ.tsx)

**Current**: Two-column layout (header left, accordion right). Already close to Yucca style.

**Changes**: 
- Add a "View all" outlined button in the header area
- Use smooth expand/collapse with `AnimatePresence`
- Keep warm cream bg

---

### Footer — Yucca-Style Editorial Footer

#### [MODIFY] [Footer.tsx](file:///c:/demo%20catering/src/components/Footer.tsx)

**Current**: Dark charcoal footer with 4-column grid.

**Yucca Pattern**: Warm cream/beige background footer with:
- **Top area**: Large serif tagline "Premium Culinary Experiences." + "Back to top ↑" button on the right
- **Middle area**: Large R logo mark (left) + three bordered cards for service categories: "Corporate Events", "Weddings", "Private Dining" (rounded rectangles with border, no fill, centered text)
- **Bottom bar**: Copyright text + social icons (left), utility links (Contact Us, Privacy Policy, Terms & Conditions) on the right
- **Floating WhatsApp button**: Fixed position bottom-right corner

---

### Consultation Section — Simplified

#### [MODIFY] [Consultation.tsx](file:///c:/demo%20catering/src/components/Consultation.tsx)

Keep existing structure but refine styling to match Yucca's warm editorial aesthetic — lighter borders, warmer backgrounds, serif headings.

---

### Testimonials Section — Refinement

#### [MODIFY] [Testimonials.tsx](file:///c:/demo%20catering/src/components/Testimonials.tsx)

Keep existing 3-column card layout but refine:
- Warmer card styling matching the Yucca cream palette
- Hover lift animations matching other sections

---

### Page Layout

#### [MODIFY] [page.tsx](file:///c:/demo%20catering/src/app/page.tsx)

Update section order to match Yucca flow:
1. `Preloader` → `Header` → `Hero` → `CoreValues` → `ExcellenceCallout` → `Services` → `WhyChooseUs` (Mission/Vision) → `FeaturedMenu` → `Consultation` → `FinalCTA` (dark + marquee) → `Standards` → `Testimonials` → `FAQ` → `Footer`

---

### Hero Image Asset

Generate a premium food/catering hero image to use in the hero section.

---

## Verification Plan

### Automated Tests
- `npm run build` — Zero TypeScript/compile errors

### Manual Verification
- Visual comparison of live dev server against Yucca screenshots
- Responsive hamburger menu test at mobile breakpoints
- Scroll parallax and marquee animation verification
