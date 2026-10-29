import React from 'react';
import { Anchor, Waves, Sun, LifeBuoy, Check, Sparkles } from 'lucide-react';
import { WATERCRAFT_LIST } from '../data/propertyData';

interface WaterfrontShowcaseProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const WaterfrontShowcase: React.FC<WaterfrontShowcaseProps> = ({ onSelectPhoto }) => {
  const watercraftChecklist = [
    'Private Dock (Bring your own boat or wave runner!)',
    '2 Lifetime Stand-Up Paddle Boards',
    '2 Double Kayaks + 2 Kids’ Kayaks',
    '4-Person Paddle Boat with Sun Shade & Built-In Cooler',
    '6’ × 12’ Inflatable Sunbathing Dock',
    '5’ × 10’ Foam Water Play Pad',
    'Selection of Kids & Adult Life Jackets + Paddles',
    'Lake Towels & Shaded Lakeside Patio Umbrella Included',
  ];

  return (
    <section id="waterfront" className="py-20 sm:py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
              <Anchor className="w-4 h-4 text-cedar" />
              <span>Private Shoreline · Included Watercraft</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
              Private Dock &amp; Included Watercraft on Big Lake
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Step off the lawn onto the private dock. Tie up your own boat or wave runner, or spend
              the day out on the water with our included paddle boards, kayaks, shaded paddle boat,
              and floating water mats.
            </p>
          </div>

          <div className="bg-stone-100 border border-stone-200/80 rounded-2xl p-5 lg:w-80 shrink-0">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lodge mb-1">
              <Sparkles className="w-4 h-4 text-cedar" />
              <span>All Watercraft Included</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every kayak, paddle board, floating mat, life jacket, and lake towel is ready at the
              shoreline for your group at no extra cost.
            </p>
          </div>
        </div>

        {/* Hero Waterfront Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Featured Aerial Dock Card — WebKit-safe absolute image + relative flex content */}
          <div
            onClick={() => onSelectPhoto('/images/photo-55.jpg')}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-luxury cursor-pointer min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-5 sm:p-7"
          >
            <img
              src="/images/photo-55.jpg"
              alt="West View Lodge Private Dock and Lakeside Watercraft on Big Lake"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lodge-dark/90 via-lodge-dark/30 to-lodge-dark/20" />

            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-lodge-dark/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                Private Moorage
              </span>
              <span className="bg-cedar text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow">
                Public Boat Launch 10 Mins Away
              </span>
            </div>

            <div className="relative z-10 text-white pt-16">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200 font-semibold mb-1">
                Bring Your Own Boat or Wave Runner
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                Private Dock, Swim Access &amp; Floating Islands
              </h3>
              <p className="text-sm text-stone-200 mt-2 max-w-2xl">
                Right in front of the lodge: our private dock, 6’×12’ inflatable sunbathing dock,
                4-person shaded paddle boat, kayaks, and level lakeside lawn.
              </p>
            </div>
          </div>

          {/* Right Included Watercraft Checklist Card */}
          <div className="lg:col-span-5 bg-lodge text-alabaster rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-luxury">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cedar-light font-semibold mb-2">
                <Waves className="w-4 h-4" />
                <span>Lakeside Gear Ready to Launch</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Included Watercraft &amp; Swim Gear
              </h3>
              <p className="text-sm text-stone-300 mt-2">
                Stored right on the shoreline and under the deck for easy access:
              </p>

              <ul className="mt-6 space-y-3">
                {watercraftChecklist.map((item) => (
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

        {/* 5 Watercraft & Shoreline Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WATERCRAFT_LIST.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectPhoto(item.image)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-luxury transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 shrink-0 overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 z-10 bg-lodge-dark/80 backdrop-blur-sm text-amber-100 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <div className="relative z-10 bg-white p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-lodge group-hover:text-cedar-dark transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
                <span className="mt-4 inline-block text-[11px] font-semibold text-cedar-dark uppercase tracking-wider">
                  View Photo →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
