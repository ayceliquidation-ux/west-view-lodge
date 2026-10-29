import React from 'react';
import { Compass, Clock, MapPin, Mountain, TreePine, Navigation } from 'lucide-react';
import { LOCAL_GUIDE_PLACES } from '../data/propertyData';

interface LocalGuideSectionProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const LocalGuideSection: React.FC<LocalGuideSectionProps> = ({ onSelectPhoto }) => {
  const driveTimeMatrix = [
    { time: 'Short Walk', place: 'Big Lake Bar & Grill (Lakeside dining & tavern)' },
    { time: '2 Mins', place: 'Valley View Farm Stand (Seasonal Skagit produce & pumpkins)' },
    { time: '5 Mins', place: 'Overlook Golf Course, Yudwasta Big Rock Park (Hiking)' },
    { time: '5 Mins', place: 'Big Rock Pickleball Courts & Big Rock Grocery' },
    { time: '10 Mins', place: 'Walker Valley ORV Area, Big Lake Boat Launch & Lang’s Pony Farm' },
    { time: '15–30 Mins', place: 'Mount Vernon (15m) & La Conner Waterfront (30m)' },
    { time: '1 Hour', place: 'Mt. Baker Hiking & Skiing' },
  ];

  return (
    <section id="local-guide" className="py-20 sm:py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
              <Compass className="w-4 h-4 text-cedar" />
              <span>Big Lake · Mount Vernon · Skagit Valley</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
              Explore Big Lake &amp; Skagit Valley
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
              Minutes from local farm stands, golf, pickleball, and forest trails—with easy day
              trips to La Conner and Mt. Baker.
            </p>
          </div>

          {/* Quick Drive-Time Matrix Card */}
          <div className="lg:col-span-5 bg-lodge text-alabaster rounded-3xl p-6 sm:p-7 shadow-luxury">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cedar-light font-semibold mb-3">
              <Navigation className="w-4 h-4" />
              <span>Drive &amp; Walk Times</span>
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {driveTimeMatrix.map((row) => (
                <div
                  key={row.place}
                  className="flex items-start justify-between gap-3 pb-2 border-b border-white/10 last:border-none last:pb-0"
                >
                  <span className="font-semibold text-amber-200 shrink-0 w-24">{row.time}</span>
                  <span className="text-stone-200 text-right">{row.place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Local Photo Cards — WebKit-safe explicit image wrapper + solid text body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCAL_GUIDE_PLACES.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectPhoto(item.image)}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-luxury transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 shrink-0 overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 bg-lodge-dark/85 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/15">
                    <Clock className="w-3.5 h-3.5 text-cedar-light" />
                    {item.timeBadge}
                  </span>
                </div>

                <div className="relative z-10 bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cedar-dark">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-lodge mt-1 group-hover:text-cedar-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 px-6 py-3.5 bg-stone-50 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cedar" />
                  <span>Skagit County, WA</span>
                </span>
                <span className="font-semibold text-lodge">View Photo →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Skagit Banner */}
        <div className="mt-10 bg-stone-100 border border-stone-200/90 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-lodge text-cedar-light flex items-center justify-center shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-lodge">
                A Four-Season Pacific Northwest Basecamp
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                Spring Skagit Valley Tulips · Summer Lake Days · Autumn Farm Harvests · Winter Mt.
                Baker Ski Trips
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cedar-dark bg-cedar-subtle px-3.5 py-2 rounded-full shrink-0">
            <TreePine className="w-4 h-4 text-cedar" />
            <span>~65 Mins North of Seattle</span>
          </span>
        </div>
      </div>
    </section>
  );
};
