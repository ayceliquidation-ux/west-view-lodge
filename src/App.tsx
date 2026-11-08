import React, { useState } from 'react';
import { X, Sparkles, Calendar } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyBookDirectStrip } from './components/WhyBookDirectStrip';
import { WaterfrontShowcase } from './components/WaterfrontShowcase';
import { FloorplanSection } from './components/FloorplanSection';
import { GroupBentoSection } from './components/GroupBentoSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LocalGuideSection } from './components/LocalGuideSection';
import { PoliciesAccordion } from './components/PoliciesAccordion';
import { DirectBookingEngine } from './components/DirectBookingEngine';
import { Footer } from './components/Footer';

export function App() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);
  const [externalLightboxSrc, setExternalLightboxSrc] = useState<string | null>(null);

  const handleOpenGallerySection = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-alabaster text-lodge selection:bg-cedar/20">
      {/* Sticky Luxury Navigation */}
      <Navbar
        onOpenBooking={() => setBookingDrawerOpen(true)}
        onOpenGallery={handleOpenGallerySection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Full-Bleed Cinematic Hero */}
        <Hero
          onOpenBooking={() => setBookingDrawerOpen(true)}
          onOpenGallery={handleOpenGallerySection}
        />

        {/* 2. "Why Book Direct" Value Strip with Host Casey */}
        <WhyBookDirectStrip onOpenBooking={() => setBookingDrawerOpen(true)} />

        {/* 3. The Big Lake Waterfront & Watercraft Showcase */}
        <WaterfrontShowcase onSelectPhoto={(src) => setExternalLightboxSrc(src)} />

        {/* 4. Interactive 3-Level Sleeping Floorplan */}
        <FloorplanSection onSelectPhoto={(src) => setExternalLightboxSrc(src)} />

        {/* 5. Built for 20+ Guests Bento Grid */}
        <GroupBentoSection onSelectPhoto={(src) => setExternalLightboxSrc(src)} />

        {/* 6. Curated 79-Photo Masonry Gallery + Full-Screen Lightbox */}
        <PhotoGallery
          externalLightboxSrc={externalLightboxSrc}
          onCloseExternalLightbox={() => setExternalLightboxSrc(null)}
        />

        {/* 7. Explore Big Lake & Skagit Valley Guide */}
        <LocalGuideSection onSelectPhoto={(src) => setExternalLightboxSrc(src)} />

        {/* 8. Transparent House Essentials & Policies Accordion */}
        <PoliciesAccordion />

        {/* 9. Dedicated "Book Direct & Save" Section (Hospitable + Inquiry Engine) */}
        <section id="book-direct" className="py-20 sm:py-28 bg-alabaster border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-cedar" />
                <span>Direct Booking Architecture · Powered by Hospitable</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
                Book Direct with Host Casey &amp; Save ~12%
              </h2>
              <p className="mt-3 text-stone-600 text-base sm:text-lg">
                Reserve West View Lodge directly below to save ~12% compared to Airbnb with $0
                service fees. Select your dates to check live availability and hold your stay.
              </p>
            </div>

            <DirectBookingEngine suspendWidget={bookingDrawerOpen} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setBookingDrawerOpen(true)} />

      {/* Mobile Floating Sticky Bottom Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
        <button
          onClick={() => setBookingDrawerOpen(true)}
          className="w-full py-3.5 px-5 rounded-full bg-lodge text-white shadow-2xl border border-white/15 flex items-center justify-between text-xs font-semibold"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cedar-light" />
            <span>Save ~12% • $0 Service Fees</span>
          </span>
          <span className="bg-cedar px-3.5 py-1.5 rounded-full text-white flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Check Dates</span>
          </span>
        </button>
      </div>

      {/* Slide-Over Direct Booking Drawer */}
      {bookingDrawerOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Direct Booking Drawer"
        >
          <div
            onClick={() => setBookingDrawerOpen(false)}
            className="fixed inset-0 bg-lodge-dark/70 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <div className="w-screen max-w-2xl bg-alabaster shadow-2xl flex flex-col justify-between overflow-y-auto">
              {/* Drawer Header */}
              <div className="sticky top-0 z-20 bg-lodge text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-cedar-light font-semibold block">
                    West View Lodge · Big Lake, WA
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">
                    Live Availability &amp; Direct Booking
                  </h3>
                </div>
                <button
                  onClick={() => setBookingDrawerOpen(false)}
                  aria-label="Close booking drawer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1">
                <DirectBookingEngine
                  isDrawer={true}
                  onCloseDrawer={() => setBookingDrawerOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
