"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUp } from '../../libraries/animations/presets';

const FAQ_ITEMS = [
  {
    question: 'What is the minimum guest count for catering orders?',
    answer: 'Our minimum guest count varies by service type. For hot box delivery, we start at 10 guests. For full-service buffets with staff, the minimum is 25 guests. Live counter setups start at 30 guests. For daily office meals, we accommodate teams of 15 or more.',
  },
  {
    question: 'How far in advance should I book?',
    answer: `We recommend booking at least 5–7 days in advance for standard orders and 2–3 weeks for large events (100+ guests) or weddings. However, we do accommodate last-minute requests based on availability. Contact us and we'll do our best.`,
  },
  {
    question: 'Do you accommodate dietary restrictions and allergies?',
    answer: `Absolutely. We handle vegetarian, vegan, Jain, gluten-free, nut-free, and other dietary requirements. Our kitchen maintains strict segregation protocols. Please inform us of any allergies during the consultation stage.`,
  },
  {
    question: 'What does "full-service catering" include?',
    answer: 'Full-service includes menu planning, food preparation, insulated transport, luxury chafing dish setup, uniformed serving staff, premium crockery/cutlery (upon request), and complete post-event cleanup. Your dedicated event manager oversees everything.',
  },
  {
    question: 'Can I do a tasting before confirming my order?',
    answer: 'Yes, we offer tasting sessions for events above 100 guests. For smaller events, we can arrange a modified tasting. This helps you finalize the menu with confidence. Tasting sessions are typically scheduled 2 weeks before your event.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We require a 30% advance to confirm the booking. The remaining 70% is due 2 days before the event. For corporate clients on retainer, we offer NET-15 and NET-30 payment terms. All prices include GST and delivery.',
  },
  {
    question: 'Which cities do you currently serve?',
    answer: `We currently operate in Bengaluru, Mumbai, Pune, Delhi-NCR, Hyderabad, and Chennai. We're rapidly expanding. For events in other cities, please reach out — we may be able to accommodate through our partner network.`,
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-rc-warmWhite relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-rc-border" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 space-y-4"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-rc-forest font-medium">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-rc-charcoal font-light leading-[1.15]">
              Frequently{' '}
              <span className="italic text-rc-forest">Asked</span>
            </h2>
            <p className="text-rc-textLight text-[15px] leading-relaxed">
              Everything you need to know about our services.
              Can't find the answer? Reach out to our team.
            </p>
            <div className="pt-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-[13px] text-rc-forest font-medium premium-underline"
              >
                Contact us for more
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8"
          >
            <div className="space-y-0">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-rc-border"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className={`text-[15px] pr-8 transition-colors duration-300 ${isOpen ? 'text-rc-forest' : 'text-rc-charcoal group-hover:text-rc-forest'}`}>
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-rc-forest border-rc-forest' : 'border-rc-border group-hover:border-rc-forest'}`}>
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-rc-cream" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-rc-textMuted group-hover:text-rc-forest transition-colors" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.3, delay: 0.05 }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm text-rc-textLight leading-relaxed max-w-2xl">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
