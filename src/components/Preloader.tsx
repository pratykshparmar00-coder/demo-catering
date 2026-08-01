"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Logo } from './Logo';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoGroupRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<HTMLDivElement>(null);
  const brandTextRef = useRef<HTMLDivElement>(null);
  const imageCircleRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Null safety guard
    if (
      !containerRef.current ||
      !logoGroupRef.current ||
      !logoIconRef.current ||
      !brandTextRef.current ||
      !imageCircleRef.current ||
      !img1Ref.current ||
      !img2Ref.current
    ) {
      return;
    }

    const container = containerRef.current;
    const logoGroup = logoGroupRef.current;
    const logoIcon = logoIconRef.current;
    const brandText = brandTextRef.current;
    const imageCircle = imageCircleRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }
      });

      // Initial GSAP Setup
      gsap.set(container, { opacity: 0 });
      gsap.set(logoGroup, { opacity: 0, y: 0, scale: 0.9 });
      gsap.set(logoIcon, { opacity: 0, scale: 0.5 });
      gsap.set(brandText, { opacity: 0, y: 15 });
      gsap.set(imageCircle, { opacity: 0, scale: 0, y: 20 });
      gsap.set([img1, img2], { opacity: 0 });

      // Phase 1: Background arises & Logo Assembly (0.0s - 1.0s)
      tl.to(container, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(logoGroup, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "<")
      .to(logoIcon, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.6)"
      }, "-=0.2")
      .to(brandText, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")

      // Phase 2: Shift Logo Upward & Reveal Circular Image Container (Yucca style split)
      .to(logoGroup, {
        y: -75,
        duration: 0.7,
        ease: "power3.inOut"
      }, "+=0.15")
      .to(imageCircle, {
        opacity: 1,
        scale: 1,
        y: 35,
        duration: 0.7,
        ease: "power3.inOut"
      }, "<")

      // Phase 3: Alternating Image Slideshow inside Circle (4 transitions)
      // Fade 1: Image 1
      .to(img1, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 2: Image 2
      .to(img2, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 3: Image 1
      .to(img1, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 4: Image 2
      .to(img2, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Phase 4: Image Circle Shrinks & Collapses (Yucca style collapse)
      .to(imageCircle, {
        scale: 0,
        opacity: 0,
        y: 0,
        duration: 0.55,
        ease: "power3.inOut"
      }, "+=0.1")

      // Phase 5: Logo Shifts Back to Center, Scales Up & Down, then Fades
      .to(logoGroup, {
        y: 0,
        duration: 0.55,
        ease: "power3.inOut"
      }, "<")
      .to(logoGroup, {
        scale: 1.25,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(logoGroup, {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(logoGroup, {
        opacity: 0,
        scale: 0.8,
        duration: 0.35,
        ease: "power2.in"
      })

      // Phase 6: Solid Background Overlay Fades Out to reveal Home Page
      .to(container, {
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut"
      }, "+=0.05");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (isLoaded) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-rc-forest flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4">
        {/* Yucca-Style Assembled Logo & Brand Mark */}
        <div
          ref={logoGroupRef}
          className="flex flex-col items-center justify-center text-center z-20"
        >
          <div
            ref={logoIconRef}
            className="w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-2xl bg-rc-cream/10 border border-rc-cream/20 flex items-center justify-center shadow-2xl backdrop-blur-md"
          >
            <Logo className="w-12 h-12 sm:w-14 sm:h-14 text-rc-cream" fillColor="currentColor" />
          </div>

          <div
            ref={brandTextRef}
            className="font-serif tracking-tight text-rc-cream leading-none mt-1"
          >
            <span className="text-2xl sm:text-3xl font-light">Richard</span>
            <span className="text-2xl sm:text-3xl italic font-light ml-2 text-rc-goldLight">Catering</span>
          </div>
        </div>

        {/* Yucca-Style Circular Image Container Below Logo */}
        <div
          ref={imageCircleRef}
          className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-rc-goldLight/40 shadow-2xl bg-rc-charcoal z-10"
        >
          <div
            ref={img1Ref}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/startup-images/content.png"
              alt="Catering Preview 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={img2Ref}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/startup-images/content 2.png"
              alt="Catering Preview 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
