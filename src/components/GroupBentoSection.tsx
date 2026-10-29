import React from 'react';
import { Utensils, Flame, Gamepad2, Car, CheckCircle2, Zap } from 'lucide-react';
import { GROUP_BENTO_FEATURES } from '../data/propertyData';

interface GroupBentoSectionProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const GroupBentoSection: React.FC<GroupBentoSectionProps> = ({ onSelectPhoto }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'kitchens':
        return Utensils;
      case 'after-dark':
        return Flame;
      case 'entertainment':
        return Gamepad2;
      case 'parking':
        return Car;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="group-living" className="py-20 sm:py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
            <Utensils className="w-4 h-4 text-cedar" />
            <span>Built for 20+ Guests · Room to Gather</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
            Two Full Kitchens, Lakeside Fire Pit, 85&quot; Movie Lounge &amp; 9-Car Parking
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
            Designed so large groups can cook, dine, relax, and park comfortably without feeling
            crowded.
          </p>
        </div>

        {/* Bento Cards — 100% WebKit/iOS/iPadOS safe stacked image + text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {GROUP_BENTO_FEATURES.map((feature, index) => {
            const Icon = getIcon(feature.id);
            const isWide = index === 0 || index === 2;

            return (
              <div
                key={feature.id}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } bg-white rounded-3xl border border-stone-200/90 shadow-luxury overflow-hidden flex flex-col`}
              >
                {/* Top Photo Collage — Explicit pixel/rem heights + absolute inset-0 images prevent any WebKit overflow */}
                <div className="grid grid-cols-12 gap-2 bg-stone-100 p-2 shrink-0 overflow-hidden">
                  <div
                    onClick={() => onSelectPhoto(feature.primaryImage)}
                    className={`${
                      feature.tertiaryImage ? 'col-span-7' : 'col-span-8'
                    } relative h-52 sm:h-64 rounded-2xl overflow-hidden cursor-pointer group bg-stone-200`}
                  >
                    <img
                      src={feature.primaryImage}
                      alt={feature.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 z-10 text-[11px] font-semibold text-white bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      View Photo
                    </span>
                  </div>

                  {feature.tertiaryImage ? (
                    <div className="col-span-5 grid grid-rows-2 gap-2 h-52 sm:h-64">
                      <div
                        onClick={() => onSelectPhoto(feature.secondaryImage)}
                        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group bg-stone-200"
                      >
                        <img
                          src={feature.secondaryImage}
                          alt={`${feature.title} view 2`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div
                        onClick={() => onSelectPhoto(feature.tertiaryImage!)}
                        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group bg-stone-200"
                      >
                        <img
                          src={feature.tertiaryImage}
                          alt={`${feature.title} view 3`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => onSelectPhoto(feature.secondaryImage)}
                      className="col-span-4 relative h-52 sm:h-64 rounded-2xl overflow-hidden cursor-pointer group bg-stone-200"
                    >
                      <img
                        src={feature.secondaryImage}
                        alt={`${feature.title} view 2`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                {/* Card Copy — Isolated in relative z-10 solid white container below images */}
                <div className="relative z-10 bg-white p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cedar-dark mb-2">
                      <Icon className="w-4 h-4 text-cedar" />
                      <span>{feature.eyebrow}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge leading-snug">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-600 mt-2.5 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cedar shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {feature.id === 'parking' && (
                    <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-2.5 rounded-xl">
                      <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        Includes across-the-street 3-bay shop with EV Charger + 1 covered carport +
                        5-car main driveway.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
