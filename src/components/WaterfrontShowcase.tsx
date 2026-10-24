import React from 'react';
import { Anchor, Waves, Sun, LifeBuoy, Check, Sparkles } from 'lucide-react';
import { WATERCRAFT_FLEET } from '../data/propertyData';

interface WaterfrontShowcaseProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const WaterfrontShowcase: React.FC<WaterfrontShowcaseProps> = ({ onSelectPhoto }) => {
  const fleetChecklist = [
    'Private Illuminated Dock (Moor your own boat or wave runner!)',
    '2 Lifetime Stand-Up Paddle Boards (SUPs)',
    '2 Double Tandem Kayaks + 2 Dedicated Kids’ Kayaks',
    '4-Person Canopy Paddle Boat with Sun Shade & Built-In Cooler',
    '6’ × 12’ Inflatable Sunbathing Dock Island',
    '5’ × 10’ Floating Foam Water Play Pad',
    'Selection of Kids & Adult Life Jackets (PFDs) + Paddles',
    'Plush Lake Towels + Shaded Lakeside Patio Umbrella Included',
  ];

  return (
    <section id="waterfront" className="py-20 sm:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
              <Anchor className="w-4 h-4 text-cedar" />
              <span>Private Shoreline · Included Watercraft Fleet</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
              Your Own Private Resort Dock &amp; Fleet on Big Lake
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Step off the lawn onto your private illuminated dock. Bring your own wake boat,
              fishing boat, or wave runner to tie up for the week—or launch straight into the lake
              with our complimentary fleet of paddle boards, kayaks, canopy pedal boat, and floating
              water mats.
            </p>
          </div>

          <div className="bg-stone-100 border border-stone-200/80 rounded-2xl p-5 lg:w-80 shrink-0">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lodge mb-1">
              <Sparkles className="w-4 h-4 text-cedar" />
              <span>$0 Watercraft Rental Fees</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every watercraft, floating dock, life jacket, and lake towel is included with your
              stay—saving your group hundreds in daily marina rentals.
            </p>
          </div>
        </div>

        {/* Hero Waterfront Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Featured Aerial Dock Card */}
          <div
            onClick={() => onSelectPhoto('/images/photo-55.jpg')}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-luxury cursor-pointer min-h-[380px] sm:min-h-[460px]"
          >
            <img
              src="/images/photo-55.jpg"
              alt="West View Lodge Private Dock and Watercraft Fleet on Big Lake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lodge-dark/90 via-lodge-dark/25 to-transparent" />
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              <span className="bg-lodge-dark/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                Private Deep-Water Moorage
              </span>
              <span className="bg-cedar text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow">
                Public Boat Launch 10 Mins Away
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200 font-semibold mb-1">
                Bring Your Own Boat or Wave Runner
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                Private Illuminated Dock, Swim Beach &amp; Floating Islands
              </h3>
              <p className="text-sm text-stone-200 mt-2 max-w-2xl">
                Pictured right in front of the lodge: our private dock, 6’×12’ inflatable sunbathing
                dock, 4-person shaded paddle boat, kayaks, and level lakeside lawn.
              </p>
            </div>
          </div>

          {/* Right Included Fleet Checklist Card */}
          <div className="lg:col-span-5 bg-lodge text-alabaster rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-luxury">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cedar-light font-semibold mb-2">
                <Waves className="w-4 h-4" />
                <span>Complimentary Lake Gear</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Complete Waterfront Fleet Included with Every Stay
              </h3>
              <p className="text-sm text-stone-300 mt-2">
                Everything is stored right on the shoreline and in our lakeside gear bay for
                effortless launch:
              </p>

              <ul className="mt-6 space-y-3">
                {fleetChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-100">
                    <span className="w-5 h-5 rounded-full bg-cedar/25 border border-cedar/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cedar-light" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <LifeBuoy className="w-4 h-4 text-cedar-light shrink-0" />
                <span>Adult &amp; kids life jackets racked lakeside</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-200 font-medium">
                <Sun className="w-4 h-4" />
                <span>Lake towels stocked</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Fleet & Shoreline Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {WATERCRAFT_FLEET.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectPhoto(item.image)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-luxury transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-lodge-dark/80 backdrop-blur-sm text-amber-100 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-lodge group-hover:text-cedar-dark transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
                <span className="mt-4 inline-block text-[11px] font-semibold text-cedar-dark uppercase tracking-wider">
                  Click to Enlarge Photo →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
