"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { ArrowRight } from 'lucide-react';

const HERO_CARDS = [
  {
    title: 'Corporate Events',
    description: 'Board meetings to conferences — curated menus for the professional world.',
    href: '#services',
  },
  {
    title: 'Weddings',
    description: 'Bespoke wedding feasts with luxury presentation and white-glove service.',
    href: '#services',
  },
  {
    title: 'Private Dining',
    description: 'Intimate gatherings and celebrations crafted to your personal taste.',
    href: '#services',
  },
];

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLImageElement>(null);
  const plate1Ref = useRef<HTMLImageElement>(null); // Condiment
  const plate2Ref = useRef<HTMLImageElement>(null); // Dal
  const plate3Ref = useRef<HTMLImageElement>(null); // Butter Chicken
  const plate4Ref = useRef<HTMLImageElement>(null); // Biryani
  const plate5Ref = useRef<HTMLImageElement>(null); // Naan
  
  const lenis = useLenis();

  useEffect(() => {
    // 1. Lock scrolling immediately
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = 'hidden';

    // Ensure elements are initially hidden/positioned before animation
    gsap.set(tableRef.current, { opacity: 0 });
    gsap.set([plate1Ref.current, plate2Ref.current, plate3Ref.current, plate4Ref.current, plate5Ref.current], { opacity: 0, scale: 0.5 });
    
    // Set initial off-screen positions for plates
    gsap.set(plate1Ref.current, { x: -150, y: -100 });
    gsap.set(plate2Ref.current, { x: 150, y: -100 });
    gsap.set(plate3Ref.current, { x: -200, y: 50 });
    gsap.set(plate4Ref.current, { x: 200, y: 50 });
    gsap.set(plate5Ref.current, { x: 0, y: 200 });

    const headlineLines = headlineRef.current?.querySelectorAll('.line-inner');
    gsap.set(headlineLines!, { yPercent: 100 });
    
    // 2. Build GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scrolling after animation completes
        if (lenis) lenis.start();
        document.body.style.overflow = 'auto';
      }
    });

    // Phase 1: Text & Table Entrance
    tl.to(headlineLines!, {
      yPercent: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2
    })
    .to(tableRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    }, "-=0.8");

    // Phase 2: Dishes fly in and settle
    tl.to([plate1Ref.current, plate2Ref.current, plate3Ref.current, plate4Ref.current, plate5Ref.current], {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power4.out'
    }, "-=0.5");

    // Phase 3: Final Reveal Scale Up
    tl.to(imageContainerRef.current, {
      scale: 1.05,
      duration: 2,
      ease: 'power2.out'
    }, "-=0.5");

    return () => {
      tl.kill();
      if (lenis) lenis.start();
      document.body.style.overflow = 'auto';
    };
  }, [lenis]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-rc-cream pt-32 lg:pt-40"
    >
      {/* Main Hero Content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left: Massive Editorial Headline */}
          <div className="lg:col-span-7" ref={headlineRef}>
            <h1 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-serif tracking-tight text-rc-charcoal leading-[1.05] font-light">
              <div className="overflow-hidden py-1"><div className="line-inner">Crafting</div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">Exceptional. <span className="italic font-normal">Innovated</span></div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">for <span className="italic font-normal">Culinary</span></div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">Leaders.</div></div>
            </h1>
          </div>

          {/* Right: Composited Hero Image */}
          <div className="lg:col-span-5 relative">
            <div 
              ref={imageContainerRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rc-charcoal/10 aspect-[3/4] max-h-[520px] bg-[#fdfdfd]"
            >
              {/* Base Table */}
              <img
                ref={tableRef}
                src="/hero-plates/table-base.webp"
                alt="Marble Table"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Floating Plates - mix-blend-multiply hides the white background */}
              <img 
                ref={plate1Ref}
                src="/hero-plates/condiment.webp"
                alt="Condiment"
                className="absolute top-[10%] left-[15%] w-24 h-24 object-contain mix-blend-multiply drop-shadow-xl"
              />
              <img 
                ref={plate2Ref}
                src="/hero-plates/dal.webp"
                alt="Dal Makhani"
                className="absolute top-[20%] right-[10%] w-32 h-32 object-contain mix-blend-multiply drop-shadow-xl"
              />
              <img 
                ref={plate3Ref}
                src="/hero-plates/butter-chicken.webp"
                alt="Butter Chicken"
                className="absolute top-[40%] left-[5%] w-48 h-48 object-contain mix-blend-multiply drop-shadow-xl"
              />
              <img 
                ref={plate4Ref}
                src="/hero-plates/biryani.webp"
                alt="Biryani"
                className="absolute top-[35%] right-[5%] w-40 h-40 object-contain mix-blend-multiply drop-shadow-xl"
              />
              <img 
                ref={plate5Ref}
                src="/hero-plates/naan.webp"
                alt="Naan Basket"
                className="absolute bottom-[5%] left-[20%] w-56 h-56 object-contain mix-blend-multiply drop-shadow-xl"
              />

              {/* Warm overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-rc-charcoal/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Three Glass/Frosted Service Cards */}
      <div className="w-full relative z-20 mt-16 lg:mt-24 pb-12 lg:pb-20 opacity-0" style={{ animation: 'fadeIn 1s ease-out 2.5s forwards' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
            from { opacity: 0; transform: translateY(30px); }
          }
        `}} />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HERO_CARDS.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-rc-border/50 p-6 sm:p-7 hover:bg-white hover:border-rc-forest/20 transition-all duration-500 hover:shadow-xl flex flex-col h-[180px] lg:h-[200px]"
              >
                <h3 className="text-lg sm:text-xl font-serif font-light text-rc-charcoal">
                  {card.title}
                </h3>
                
                <div className="flex-1 relative mt-3">
                  <p className="text-sm text-rc-textLight leading-relaxed absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {card.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-rc-forest font-medium mt-auto">
                  Tell me more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
