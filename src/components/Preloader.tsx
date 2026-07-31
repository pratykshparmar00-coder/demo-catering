import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ninja-dark text-white overflow-hidden selection:bg-ninja-orange"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-ninja-orange/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Animated Logo Container */}
          <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-4">
            
            {/* Emblemed Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-ninja-orange to-amber-500 flex items-center justify-center text-4xl shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/20">
                👨‍🍳
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2 text-ninja-orange"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Animated Brand Name: RICHARD CATERING */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="overflow-hidden"
              >
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
                  Richard <span className="gradient-text">Catering</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xs sm:text-sm font-medium tracking-widest text-gray-300 uppercase flex items-center justify-center gap-2"
              >
                <Utensils className="w-3.5 h-3.5 text-ninja-orange" />
                Crafting Culinary Experiences • Est. 2026
              </motion.p>
            </div>

            {/* Glowing Progress Bar */}
            <div className="w-64 sm:w-80 space-y-2 pt-4">
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden p-0.5 border border-gray-700/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-ninja-orange via-amber-400 to-ninja-orange rounded-full shadow-lg shadow-orange-500/50"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Loading Menu Engine</span>
                <span className="text-ninja-orange">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Bottom Trust Watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 text-[11px] text-gray-400 font-medium tracking-wide uppercase"
          >
            India's Premier Gourmet Party Catering
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
