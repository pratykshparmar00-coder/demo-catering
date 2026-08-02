"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

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
  
  // Plate Refs
  const plate1Ref = useRef<HTMLImageElement>(null); // Butter Chicken
  const plate2Ref = useRef<HTMLImageElement>(null); // Biryani
  const plate3Ref = useRef<HTMLImageElement>(null); // Dal Makhani
  const plate4Ref = useRef<HTMLImageElement>(null); // Paneer Tikka
  const plate5Ref = useRef<HTMLImageElement>(null); // Murgh Malai
  
  const lenis = useLenis();

  useGSAP(() => {
    // 1. Lock scrolling immediately using standard CSS
    document.body.style.overflow = 'hidden';
    
    // Safety fallback: if lenis is available, stop it too
    if (lenis) lenis.stop();

    // Ensure elements are initially hidden/positioned before animation
    gsap.set([plate1Ref.current, plate2Ref.current, plate3Ref.current, plate4Ref.current, plate5Ref.current], { opacity: 0, scale: 0.2 });
    
    // Set initial off-screen positions for plates
    gsap.set(plate1Ref.current, { x: -200, y: -200, rotation: -45 });
    gsap.set(plate2Ref.current, { x: 200, y: -100, rotation: 45 });
    gsap.set(plate3Ref.current, { x: -200, y: 150, rotation: -20 });
    gsap.set(plate4Ref.current, { x: 200, y: 150, rotation: 30 });
    gsap.set(plate5Ref.current, { x: 0, y: 250, rotation: 10 });

    const headlineLines = headlineRef.current?.querySelectorAll('.line-inner');
    gsap.set(headlineLines!, { yPercent: 100 });
    
    // 2. Build GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scrolling after animation completes
        document.body.style.overflow = 'auto';
        if (lenis) lenis.start();
      }
    });

    // Phase 1: Text Entrance
    tl.to(headlineLines!, {
      yPercent: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.1
    });

    // Phase 2: Dishes fly in and settle with overlapping 3D feel
    tl.to([plate1Ref.current, plate2Ref.current, plate3Ref.current, plate4Ref.current, plate5Ref.current], {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 1.8,
      stagger: 0.12,
      ease: 'expo.out'
    }, "-=0.6");

    // Phase 3: Final Reveal Scale Up (Subtle breathing effect)
    tl.to(imageContainerRef.current, {
      scale: 1.03,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    }, "-=0.5");

  }, { scope: sectionRef, dependencies: [lenis] }); // Scope animations to the section

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
            <h1 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-serif tracking-tight text-rc-charcoal leading-[1.05] font-light relative z-20">
              <div className="overflow-hidden py-1"><div className="line-inner">Crafting</div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">Exceptional. <span className="italic font-normal text-rc-forest">Innovated</span></div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">for <span className="italic font-normal">Culinary</span></div></div>
              <div className="overflow-hidden py-1"><div className="line-inner">Leaders.</div></div>
            </h1>
          </div>

          {/* Right: Clean Transparent Dish Composition */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Soft backdrop glow to make plates pop */}
            <div className="absolute inset-0 bg-rc-forest/5 rounded-full blur-3xl scale-75 animate-pulse" />

            <div 
              ref={imageContainerRef}
              className="relative w-full h-full max-w-[500px]"
            >
              {/* Floating Plates - Absolute positioned geometrically */}
              
              {/* Back layer plates */}
              <img 
                ref={plate4Ref}
                src="/menu/paneer-tikka.png"
                alt="Paneer Tikka"
                className="absolute top-[10%] right-[5%] w-[45%] object-contain drop-shadow-2xl z-10"
              />
              <img 
                ref={plate3Ref}
                src="/menu/dal-makhani.png"
                alt="Dal Makhani"
                className="absolute bottom-[15%] left-[0%] w-[45%] object-contain drop-shadow-2xl z-20"
              />
              
              {/* Middle layer plates */}
              <img 
                ref={plate1Ref}
                src="/menu/butter-chicken.png"
                alt="Butter Chicken"
                className="absolute top-[5%] left-[10%] w-[50%] object-contain drop-shadow-2xl z-30"
              />
              <img 
                ref={plate5Ref}
                src="/menu/murgh-malai.png"
                alt="Murgh Malai"
                className="absolute bottom-[5%] right-[10%] w-[50%] object-contain drop-shadow-2xl z-40"
              />

              {/* Front center plate (Hero Dish) */}
              <img 
                ref={plate2Ref}
                src="/menu/gosht-biryani.png"
                alt="Gosht Biryani"
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[65%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50"
              />
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
            {HERO_CARDS.map((card) => (
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
