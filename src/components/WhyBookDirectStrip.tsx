import React from 'react';
import { ShieldCheck, Percent, RefreshCw, MessageSquareHeart, ExternalLink, CheckCircle2 } from 'lucide-react';
import { bookingConfig } from '../config/bookingConfig';

interface WhyBookDirectStripProps {
  onOpenBooking: () => void;
}

export const WhyBookDirectStrip: React.FC<WhyBookDirectStripProps> = ({ onOpenBooking }) => {
  const perks = [
    {
      icon: Percent,
      title: 'Zero Airbnb Service Fees',
      subtitle: 'Save $350–$600+ on Group Stays',
      description:
        'Skip the ~14% third-party booking fee and keep more of your budget for group meals and lake adventures.',
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Hospitable Sync',
      subtitle: 'Live Seasonal Rates & Calendar',
      description:
        'Our availability and seasonal rates sync automatically via Hospitable so dates are always accurate.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Direct Access to Host Casey',
      subtitle: 'Personal Stay & Arrival Planning',
      description:
        'Connect directly with Casey for boat moorage questions, bedroom planning, and local tips.',
    },
    {
      icon: ShieldCheck,
      title: 'Protected Direct Checkout',
      subtitle: 'Clear Terms & Secure Payment',
      description:
        'Transparent pricing, instant confirmation, and encrypted checkout powered by Hospitable Direct.',
    },
  ];

  return (
    <section className="relative z-20 bg-lodge text-alabaster py-14 sm:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Host + Direct Value Banner */}
        <div className="bg-lodge-light/90 border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 mb-10 shadow-luxury-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Host Casey Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 max-w-2xl">
              <div className="relative shrink-0">
                <img
                  src="/images/host-casey.jpg"
                  alt="Host Casey at Big Lake"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-cedar-light shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 bg-cedar text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                  Superhost
                </span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cedar-light font-semibold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Official Direct Booking Website · Hosted by {bookingConfig.hostName}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                  “Welcome to our family’s lakefront home on Big Lake.”
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-1.5 leading-relaxed">
                  Booking directly on our website gives your group the exact same live seasonal
                  rates, stocked lodge starters, and personal care—without paying $350 to $600+ in
                  extra Airbnb service fees.
                </p>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="bg-lodge-dark/80 border border-white/15 rounded-2xl p-5 sm:p-6 shrink-0 lg:w-96">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-stone-400 pb-3 border-b border-white/10">
                <span>Nightly Pricing</span>
                <span className="text-cedar-light font-semibold">Live Seasonal Rates</span>
              </div>
              <div className="space-y-2.5 my-3.5 text-sm">
                <div className="flex items-center justify-between text-stone-300">
                  <span>Airbnb Guest Service Fee</span>
                  <span className="line-through text-rose-300 font-medium">~14% Markup</span>
                </div>
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Direct Booking Service Fee</span>
                  <span className="text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full text-xs">
                    0% · Save $350–$600+
                  </span>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto flex-1 bg-cedar hover:bg-cedar-dark text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors text-center"
                >
                  Check Dates &amp; Book Direct
                </button>
                <a
                  href={bookingConfig.airbnbListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-stone-300 hover:text-white underline underline-offset-4 shrink-0"
                >
                  <span>Verify on Airbnb</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Direct Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cedar/20 border border-cedar/40 flex items-center justify-center text-cedar-light mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wider text-cedar-light font-semibold">
                  {perk.subtitle}
                </p>
                <h3 className="font-serif text-xl font-semibold text-white mt-1">
                  {perk.title}
                </h3>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
