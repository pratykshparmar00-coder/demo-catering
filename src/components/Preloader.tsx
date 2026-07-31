import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loader
    const steps = 100;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0A0A0A] text-white p-8 sm:p-16 select-none font-sans overflow-hidden"
        >
          {/* Top Bar Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between items-center text-xs tracking-[0.25em] text-amber-400 uppercase font-semibold border-b border-white/10 pb-4"
          >
            <span>RICHARD CATERING</span>
            <span>EST. 2026</span>
          </motion.div>

          {/* Center Brand Title & Reveal Animation */}
          <div className="my-auto space-y-6 text-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl sm:text-7xl lg:text-8xl font-serif tracking-tight font-light text-white uppercase"
              >
                RICHARD <span className="italic font-serif text-amber-400">CATERING</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-300 font-light"
            >
              ARTISANAL CULINARY EXPERIENCES & GOURMET EVENT CATERING
            </motion.p>

            {/* Yucca-style Line Progress Animation */}
            <div className="max-w-md mx-auto pt-6 space-y-3">
              <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300"
                  style={{ width: `${counter}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Counter Footer */}
          <div className="flex justify-between items-end border-t border-white/10 pt-4 text-xs font-mono text-gray-400">
            <div className="tracking-widest uppercase text-[10px] text-gray-500">
              GASTRONOMY • INNOVATION • ELEGANCE
            </div>
            <div className="text-3xl sm:text-5xl font-light text-amber-400 tracking-tighter font-serif">
              {counter < 10 ? `0${counter}` : counter}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
