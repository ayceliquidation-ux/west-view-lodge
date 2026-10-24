import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenGallery }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Waterfront & Fleet', href: '#waterfront' },
    { label: '3-Level Floorplan', href: '#floorplan' },
    { label: 'Built for 20+', href: '#group-living' },
    { label: '79 Photos', href: '#gallery' },
    { label: 'Skagit Valley', href: '#local-guide' },
    { label: 'Essentials & Rules', href: '#essentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-alabaster/95 backdrop-blur-md shadow-luxury py-3 border-b border-stone-200/80 text-lodge'
          : 'bg-gradient-to-b from-lodge-dark/80 via-lodge-dark/45 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3 focus:outline-none">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
              scrolled
                ? 'border-cedar/40 bg-lodge text-alabaster'
                : 'border-white/30 bg-white/10 backdrop-blur-sm text-white'
            }`}
          >
            <Compass className="w-5 h-5 text-cedar-light transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight leading-none">
              West View Lodge
            </span>
            <span
              className={`block text-[10px] uppercase tracking-[0.22em] mt-0.5 ${
                scrolled ? 'text-stone-600' : 'text-stone-200'
              }`}
            >
              Big Lake · Skagit Valley, WA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-stone-700 hover:text-cedar-dark'
                  : 'text-white/90 hover:text-cedar-light'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <div
            className={`hidden lg:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${
              scrolled
                ? 'bg-cedar-subtle border-cedar/30 text-cedar-dark'
                : 'bg-black/35 backdrop-blur-md border-white/20 text-amber-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cedar" />
            <span>Save ~14% Booking Direct</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-cedar hover:bg-cedar-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-cedar/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability & Book Direct</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenBooking}
            className="bg-cedar text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow"
          >
            Book Direct
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-lg ${
              scrolled ? 'text-lodge hover:bg-stone-200/60' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-alabaster text-lodge border-b border-stone-200 shadow-2xl px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-cedar-dark bg-cedar-subtle px-3 py-2 rounded-lg">
            <Sparkles className="w-4 h-4 text-cedar shrink-0" />
            <span>Book Direct with Host Casey & Save ~14% vs. Airbnb Fees</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 hover:bg-stone-200/60"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGallery();
              }}
              className="w-full py-2.5 rounded-xl border border-stone-300 text-sm font-semibold text-lodge"
            >
              Browse All 79 Property Photos
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-lodge text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-cedar-light" />
              <span>Check Availability & Book Direct</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
