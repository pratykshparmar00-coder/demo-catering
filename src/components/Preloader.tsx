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
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Null safety guard to prevent GSAP null reference runtime errors
    if (!containerRef.current || !logoBoxRef.current || !img1Ref.current || !img2Ref.current) {
      return;
    }

    const container = containerRef.current;
    const logoBox = logoBoxRef.current;
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
      gsap.set(logoBox, { opacity: 0, scale: 0.85, x: 0 });
      gsap.set([img1, img2], { opacity: 0, scale: 0.85, x: 60 });

      // Step 1: Solid background arises & holds
      tl.to(container, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      // Step 2: Logo appears in center
      .to(logoBox, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.4)"
      })
      // Logo moves to the left (x: -60px)
      .to(logoBox, {
        x: -60,
        duration: 0.55,
        ease: "power3.inOut"
      }, "+=0.1")

      // Step 3: Image 1 fades in & out (1st fade)
      .to(img1, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, scale: 0.85, duration: 0.35, ease: "power2.in" }, "+=0.15")

      // Step 4: Image 2 fades in & out (2nd fade)
      .to(img2, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, scale: 0.85, duration: 0.35, ease: "power2.in" }, "+=0.15")

      // Step 4 Repeated: Image 1 fades in & out (3rd fade)
      .to(img1, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, scale: 0.85, duration: 0.35, ease: "power2.in" }, "+=0.15")

      // Step 4 Repeated: Image 2 fades in & out (4th fade)
      .to(img2, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, scale: 0.85, duration: 0.35, ease: "power2.in" }, "+=0.15")

      // Step 5 & 6: Images gone, logo moves back to center
      .to(logoBox, {
        x: 0,
        duration: 0.55,
        ease: "power3.inOut"
      }, "+=0.1")

      // Step 7: Logo scales up
      .to(logoBox, {
        scale: 1.35,
        duration: 0.45,
        ease: "power2.out"
      })
      // Logo scales down
      .to(logoBox, {
        scale: 0.9,
        duration: 0.35,
        ease: "power2.inOut"
      })
      // Logo fades out
      .to(logoBox, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in"
      })
      // Step 8: Finally background fades out to land in home page
      .to(container, {
        opacity: 0,
        duration: 0.6,
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
      <div className="relative flex items-center justify-center">
        {/* R Logo Box */}
        <div
          ref={logoBoxRef}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-rc-cream/10 border border-rc-cream/20 flex items-center justify-center shadow-2xl backdrop-blur-md z-20"
        >
          <Logo className="w-14 h-14 sm:w-16 sm:h-16 text-rc-cream" fillColor="currentColor" />
        </div>

        {/* Startup Images (Same size as logo box) */}
        <div
          ref={img1Ref}
          className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-rc-cream/20 shadow-2xl bg-rc-charcoal z-10"
        >
          <img
            src="/startup-images/content.png"
            alt="Catering Highlight 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          ref={img2Ref}
          className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-rc-cream/20 shadow-2xl bg-rc-charcoal z-10"
        >
          <img
            src="/startup-images/content 2.png"
            alt="Catering Highlight 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
