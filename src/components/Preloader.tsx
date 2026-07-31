"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      // Eased progress for premium feel
      const linear = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - linear, 3);
      const calculated = Math.min(100, Math.floor(eased * 100));

      setProgress(calculated);

      if (calculated < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden font-sans">
          {/* Top panel slides up */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute top-0 left-0 w-full h-[50%] bg-rc-forest flex items-end justify-center pb-3 z-10"
          >
            <div className="relative overflow-hidden px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif tracking-tight text-rc-cream leading-none"
              >
                <span className="text-4xl sm:text-6xl lg:text-7xl font-light">Richard</span>
                <span className="text-4xl sm:text-6xl lg:text-7xl italic font-light ml-4 text-rc-goldLight">Catering</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom panel slides down */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute bottom-0 left-0 w-full h-[50%] bg-rc-forest flex items-start justify-center pt-3 z-10"
          >
            <div className="relative flex flex-col items-center space-y-4 px-4 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[10px] sm:text-xs tracking-[0.35em] text-rc-sand uppercase font-light"
              >
                Premium Culinary Experiences
              </motion.p>
            </div>
          </motion.div>

          {/* Progress overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-14 pointer-events-none">
            {/* Top bar */}
            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-rc-goldLight font-medium">
              <span>Est. 2024</span>
              <span>Loading</span>
            </div>

            {/* Center progress bar */}
            <div className="max-w-sm w-full mx-auto space-y-3 text-center">
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-rc-goldLight"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="text-[10px] tracking-widest text-rc-sand/60 uppercase font-light">
                {progress}%
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="flex justify-between items-end text-rc-sand/40">
              <span className="text-[10px] tracking-[0.25em] uppercase">
                Richard Catering
              </span>
              <span className="text-3xl sm:text-5xl font-serif text-rc-goldLight/40 tracking-tight font-light">
                {progress < 10 ? `0${progress}` : progress}
              </span>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
