import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  Calendar,
  Images,
  Anchor,
  Maximize2,
  Users,
  BedDouble,
  Bath,
  Flame,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

const HERO_SLIDES = [
  {
    src: '/images/photo-59.jpg',
    label: 'Sunset Over West View Lodge · 4,300 Sq. Ft. on Big Lake',
  },
  {
    src: '/images/photo-01.jpg',
    label: 'Illuminated Private Dock & Lakeside Fire Pit Circle',
  },
  {
    src: '/images/photo-24.jpg',
    label: 'Golden Hour Lake-View Hot Tub Looking Out to the Dock',
  },
  {
    src: '/images/photo-06.jpg',
    label: 'Vaulted Cedar Great Room & Floor-to-Ceiling River-Rock Hearth',
  },
  {
    src: '/images/photo-55.jpg',
    label: 'Private Dock + Included Kayaks, SUPs, Paddle Boat & Floating Mats',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGallery }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const statPills = [
    { icon: Maximize2, text: '4,300 Sq. Ft.' },
    { icon: Users, text: 'Sleeps 20+' },
    { icon: BedDouble, text: '7 Bedrooms (6 + Bunkroom)' },
    { icon: Bath, text: '4 Baths' },
    { icon: Anchor, text: 'Private Dock' },
    { icon: Flame, text: 'Lake-View Hot Tub' },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-12 sm:pb-16 pt-32 overflow-hidden bg-lodge-dark text-white">
      {/* Background Image Switcher */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={HERO_SLIDES[activeSlide].src}
          src={HERO_SLIDES[activeSlide].src}
          alt={HERO_SLIDES[activeSlide].label}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Luxury Layered Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-lodge-dark via-lodge-dark/55 to-lodge-dark/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-lodge-dark/80 via-lodge-dark/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Direct Booking Savings Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center gap-2 bg-white/12 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs sm:text-sm text-amber-100 mb-5 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cedar-light shrink-0" />
            <span className="font-medium">
              Book Direct with Host Casey &amp; Save ~14% vs. Airbnb Service Fees
            </span>
          </motion.div>

          {/* Location Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-stone-200 text-xs sm:text-sm uppercase tracking-[0.22em] font-medium mb-3"
          >
            <MapPin className="w-4 h-4 text-cedar-light shrink-0" />
            <span>Big Lake · Mount Vernon, WA (Heart of Skagit Valley)</span>
          </motion.div>

          {/* Main Editorial Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.04] text-white"
          >
            West View Lodge
            <span className="block font-normal italic text-3xl sm:text-4xl lg:text-5xl text-stone-200 mt-2">
              A Private Pacific Northwest Lakefront Sanctuary for 20+
            </span>
          </motion.h1>

          {/* Editorial Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 text-base sm:text-lg text-stone-200/95 max-w-2xl leading-relaxed font-light"
          >
            Three expansive levels of cedar-and-stone craftsmanship right on the shores of Big Lake.
            Featuring a private boat dock, complimentary watercraft fleet, two full kitchens, an
            8-bed custom fish bunkroom, lake-view hot tub, and 14-chair waterfront fire pit.
          </motion.p>

          {/* Quick Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {statPills.map((pill) => {
              const Icon = pill.icon;
              return (
                <div
                  key={pill.text}
                  className="inline-flex items-center gap-2 bg-lodge-dark/70 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium text-stone-100"
                >
                  <Icon className="w-3.5 h-3.5 text-cedar-light shrink-0" />
                  <span>{pill.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 bg-cedar hover:bg-cedar-dark text-white font-semibold px-7 py-4 rounded-full text-base shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Check Availability &amp; Book Direct</span>
            </button>

            <button
              onClick={onOpenGallery}
              className="inline-flex items-center justify-center gap-2.5 bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium px-6 py-4 rounded-full text-base transition-all duration-300"
            >
              <Images className="w-5 h-5 text-cedar-light" />
              <span>Explore All 79 Photos</span>
            </button>
          </motion.div>
        </div>

        {/* Slide Switcher Bar */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.src}
                onClick={() => setActiveSlide(idx)}
                aria-label={`View slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? 'w-10 bg-cedar-light'
                    : 'w-3 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
            <span className="ml-3 text-xs text-stone-300 font-medium">
              {HERO_SLIDES[activeSlide].label}
            </span>
          </div>

          <a
            href="#book-direct"
            className="text-xs uppercase tracking-[0.2em] text-amber-200 hover:text-white transition-colors font-semibold"
          >
            Zero OTA Service Fees · Save $350–$600+ →
          </a>
        </div>
      </div>
    </section>
  );
};
