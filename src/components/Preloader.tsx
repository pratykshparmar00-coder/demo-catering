import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Precise Awwwards-style fast timer counter
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(calculated);

      if (calculated < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 400);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden font-sans">
          
          {/* Top Curtain Panel (Slides UP on Exit) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute top-0 left-0 w-full h-[50%] bg-[#080808] border-b border-white/5 flex items-end justify-center pb-2 z-10"
          >
            {/* Upper Portion of Logo Mask */}
            <div className="relative overflow-hidden px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white uppercase font-light leading-none"
              >
                RICHARD <span className="italic text-amber-400 font-serif font-normal">CATERING</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Curtain Panel (Slides DOWN on Exit) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute bottom-0 left-0 w-full h-[50%] bg-[#080808] border-t border-white/5 flex items-start justify-center pt-2 z-10"
          >
            {/* Lower Portion & Subtitle */}
            <div className="relative flex flex-col items-center space-y-4 px-4 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[10px] sm:text-xs tracking-[0.35em] text-gray-300 uppercase font-light"
              >
                ARTISANAL GASTRONOMY • EST. 2026
              </motion.p>
            </div>
          </motion.div>

          {/* Center Liquid Fill Text SVG & Progress Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-14 pointer-events-none">
            {/* Top Bar Header */}
            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-amber-400 font-semibold">
              <span>YUCCA DESIGN SPEC</span>
              <span>CATERING ENGINE</span>
            </div>

            {/* Middle Liquid Fill Bar Progress Indicator */}
            <div className="max-w-md w-full mx-auto space-y-3 text-center">
              <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                LOADING EXPERIENCE • {progress}%
              </div>
            </div>

            {/* Bottom Counter Indicator */}
            <div className="flex justify-between items-end text-xs font-mono text-gray-400 border-t border-white/10 pt-4">
              <span className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
                RICHARD CATERING PORTAL
              </span>
              <span className="text-4xl sm:text-6xl font-serif text-amber-400 tracking-tight font-light">
                {progress < 10 ? `0${progress}` : progress}
              </span>
            </div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
};
