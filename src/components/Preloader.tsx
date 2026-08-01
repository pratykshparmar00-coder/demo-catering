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
  const logoIconRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Null safety guard
    if (
      !containerRef.current ||
      !logoIconRef.current ||
      !imageWrapperRef.current ||
      !img1Ref.current ||
      !img2Ref.current
    ) {
      return;
    }

    const container = containerRef.current;
    const logoIcon = logoIconRef.current;
    const imageWrapper = imageWrapperRef.current;
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
      gsap.set(logoIcon, { opacity: 0, scale: 0.6, y: 0 });
      gsap.set(imageWrapper, { opacity: 0, scale: 0.7, y: 20 });
      gsap.set([img1, img2], { opacity: 0 });

      // Phase 1: Background arises & pure R Logo Appears (0.0s - 0.8s)
      tl.to(container, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(logoIcon, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.6)"
      }, "-=0.2")

      // Phase 2: Shift Logo Upward & Reveal Floating Transparent Image Wrapper
      .to(logoIcon, {
        y: -70,
        duration: 0.65,
        ease: "power3.inOut"
      }, "+=0.15")
      .to(imageWrapper, {
        opacity: 1,
        scale: 1,
        y: 40,
        duration: 0.65,
        ease: "power3.inOut"
      }, "<")

      // Phase 3: Alternating Transparent WebP Images (4 transitions)
      // Fade 1: Image 1
      .to(img1, { opacity: 1, scale: 1.05, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, scale: 0.9, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 2: Image 2
      .to(img2, { opacity: 1, scale: 1.05, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, scale: 0.9, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 3: Image 1
      .to(img1, { opacity: 1, scale: 1.05, duration: 0.35, ease: "power2.out" })
      .to(img1, { opacity: 0, scale: 0.9, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Fade 4: Image 2
      .to(img2, { opacity: 1, scale: 1.05, duration: 0.35, ease: "power2.out" })
      .to(img2, { opacity: 0, scale: 0.9, duration: 0.35, ease: "power2.in" }, "+=0.2")

      // Phase 4: Image Wrapper Fades Away & Collapses
      .to(imageWrapper, {
        scale: 0.5,
        opacity: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.inOut"
      }, "+=0.1")

      // Phase 5: Logo Shifts Back to Center, Scales Up & Down, then Fades
      .to(logoIcon, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut"
      }, "<")
      .to(logoIcon, {
        scale: 1.3,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(logoIcon, {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(logoIcon, {
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
        {/* Pure Floating SVG R-Logo (No Background Box / No Words) */}
        <div
          ref={logoIconRef}
          className="flex items-center justify-center z-20"
        >
          <Logo className="w-24 h-24 sm:w-28 sm:h-28 text-rc-cream drop-shadow-2xl" fillColor="currentColor" />
        </div>

        {/* Floating Transparent WebP Images Container (No Background Box/Circle) */}
        <div
          ref={imageWrapperRef}
          className="absolute w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center z-10"
        >
          <div
            ref={img1Ref}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src="/startup-images/content.webp"
              alt="Catering Preview 1"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>

          <div
            ref={img2Ref}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src="/startup-images/content-2.webp"
              alt="Catering Preview 2"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
