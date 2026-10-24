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
    <section id="group-living" className="py-20 sm:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
            <Utensils className="w-4 h-4 text-cedar" />
            <span>Engineered for 20+ Guests · Zero Crowding</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
            Two Full Kitchens, 14-Chair Fire Pit, 85&quot; Theater &amp; 9-Car Parking
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Most large vacation rentals cram extra beds into a standard house without scaling the
            kitchens, seating, or parking. West View Lodge was purpose-built so 20+ guests can cook,
            dine, play, and park with resort-caliber ease.
          </p>
        </div>

        {/* Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {GROUP_BENTO_FEATURES.map((feature, index) => {
            const Icon = getIcon(feature.id);
            const isWide = index === 0 || index === 2;

            return (
              <div
                key={feature.id}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } bg-white rounded-3xl border border-stone-200/90 shadow-luxury overflow-hidden flex flex-col justify-between`}
              >
                {/* Top Photo Collage */}
                <div className="grid grid-cols-12 gap-1.5 bg-stone-100 p-1.5 h-64 sm:h-72">
                  <div
                    onClick={() => onSelectPhoto(feature.primaryImage)}
                    className={`${
                      feature.tertiaryImage ? 'col-span-7' : 'col-span-8'
                    } relative rounded-2xl overflow-hidden cursor-pointer group h-full`}
                  >
                    <img
                      src={feature.primaryImage}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      Click to Enlarge
                    </span>
                  </div>

                  <div
                    className={`${
                      feature.tertiaryImage ? 'col-span-5' : 'col-span-4'
                    } flex flex-col gap-1.5 h-full`}
                  >
                    <div
                      onClick={() => onSelectPhoto(feature.secondaryImage)}
                      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                        feature.tertiaryImage ? 'h-1/2' : 'h-full'
                      }`}
                    >
                      <img
                        src={feature.secondaryImage}
                        alt={`${feature.title} secondary`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {feature.tertiaryImage && (
                      <div
                        onClick={() => onSelectPhoto(feature.tertiaryImage!)}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group h-1/2"
                      >
                        <img
                          src={feature.tertiaryImage}
                          alt={`${feature.title} third`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Copy */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cedar-dark mb-2">
                      <Icon className="w-4 h-4 text-cedar" />
                      <span>{feature.eyebrow}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge leading-snug">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
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
                        Includes private across-the-street 3-bay shop with EV Charger + 1 covered
                        carport + 5-car main driveway!
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
