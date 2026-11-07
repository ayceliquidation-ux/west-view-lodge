import React from 'react';
import { Compass, MapPin, Calendar, ExternalLink, Sparkles, Anchor } from 'lucide-react';
import { bookingConfig } from '../config/bookingConfig';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-lodge-dark text-stone-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cedar/20 border border-cedar/40 flex items-center justify-center text-cedar-light">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-semibold text-white leading-none">
                  West View Lodge
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-stone-400 mt-1">
                  Big Lake · Mount Vernon, WA
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              A 4,300 sq. ft. Pacific Northwest lakefront lodge in the heart of Skagit Valley.
              Built for 20+ guests with a private dock, included watercraft, 7 bedrooms across 3
              levels, two full kitchens, lake-view hot tub, and lakeside fire pit.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-200 font-medium pt-1">
              <MapPin className="w-4 h-4 text-cedar-light shrink-0" />
              <span>Big Lake Shoreline · Mount Vernon, WA (Skagit County)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white">Explore the Lodge</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#waterfront" className="hover:text-white transition-colors">
                  Private Dock &amp; Included Watercraft
                </a>
              </li>
              <li>
                <a href="#floorplan" className="hover:text-white transition-colors">
                  3-Level Sleeping Floorplan (Sleeps 20+)
                </a>
              </li>
              <li>
                <a href="#group-living" className="hover:text-white transition-colors">
                  2 Full Kitchens, Hot Tub &amp; Game Room
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Complete 80-Photo Tour
                </a>
              </li>
              <li>
                <a href="#local-guide" className="hover:text-white transition-colors">
                  Big Lake &amp; Skagit Valley Guide
                </a>
              </li>
              <li>
                <a href="#essentials" className="hover:text-white transition-colors">
                  Stocked Starters &amp; House Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Booking & Host Casey Box */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/host-casey.jpg"
                  alt="Host Casey"
                  className="w-12 h-12 rounded-full object-cover border border-cedar-light"
                />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cedar-light font-semibold">
                    Direct Owner Hospitality
                  </span>
                  <span className="font-serif text-xl font-semibold text-white">
                    Hosted by {bookingConfig.hostName}
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Skip the ~14% Airbnb service fee markup by booking directly here. Two-way synced
                calendar via Hospitable Direct.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-xl bg-cedar hover:bg-cedar-dark text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Dates &amp; Book Direct</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verified Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Anchor className="w-3.5 h-3.5 text-cedar-light" />
            <span>
              © {new Date().getFullYear()} West View Lodge on Big Lake · Mount Vernon, Washington.
              All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1 text-amber-200/90">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Powered by Hospitable Direct</span>
            </span>
            <a
              href={bookingConfig.airbnbListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Verified Airbnb Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
