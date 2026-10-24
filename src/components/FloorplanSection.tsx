import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  BedDouble,
  Tv,
  Bath,
  Check,
  Copy,
  CheckCheck,
  Sparkles,
  Eye,
  Users,
} from 'lucide-react';
import { FLOORPLAN_LEVELS, FloorplanLevel } from '../data/propertyData';

interface FloorplanSectionProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const FloorplanSection: React.FC<FloorplanSectionProps> = ({ onSelectPhoto }) => {
  const [activeLevelId, setActiveLevelId] = useState<FloorplanLevel['id']>('upper');
  const [copiedPlan, setCopiedPlan] = useState(false);

  const activeLevel =
    FLOORPLAN_LEVELS.find((lvl) => lvl.id === activeLevelId) || FLOORPLAN_LEVELS[0];

  const handleCopyRoomSheet = () => {
    const summaryText = `WEST VIEW LODGE — 3-LEVEL SLEEPING FLOORPLAN (Sleeps 20+)\nBig Lake · Mount Vernon, WA (4,300 Sq. Ft. · 7 Bedrooms · 4 Baths)\n\n• UPPER LEVEL (Detached Full Spa Bath w/ Soaking Tub & Walk-In Shower):\n  - Primary Suite: King Bed, Roku TV, Lake Views, Walk-In Closet, Seating for 2 + Private Lake-View Office\n\n• MAIN LEVEL (Shares Full Bath):\n  - Bedroom 1: King Bed + Roku TV + Lake View + Luggage Racks\n  - Bedroom 2: King Bed + Roku TV + Lake View + Luggage Racks\n  - Bedroom 3: Queen Bed + Roku TV + Garden View + Luggage Racks\n\n• LOWER WALK-OUT LEVEL (Full Bath + 3/4 Bath):\n  - Bedroom 4: King Bed + Roku TV + Lake View + Luggage Racks\n  - Bedroom 5: Queen Bed + Roku TV + Lake View + Luggage Racks\n  - Bedroom 6 (Custom Fish Bunkroom): 8 Built-In Bunk Beds (each with its own reading light & fan!)\n\n• BONUS SLEEPING:\n  - Fold-Out Sofa in Gaming Nook, 1 Queen Air Mattress, 1 Twin Air Mattress, Pack 'n Play`;

    navigator.clipboard?.writeText(summaryText);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 3000);
  };

  return (
    <section id="floorplan" className="py-20 sm:py-28 bg-stone-100/80 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
              <Layers className="w-4 h-4 text-cedar" />
              <span>Interactive 3-Level Sleeping Floorplan · Built for Reunion Organizers</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
              7 Bedrooms Across 3 Levels — Thoughtfully Separated for Group Harmony
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Assigning rooms for 20+ guests is effortless when everyone knows exactly which level
              they’re on. Explore each floor below—from the private top-floor Primary Wing to the
              lower-level 8-bed Custom Fish Bunkroom.
            </p>
          </div>

          {/* Copy Room Sheet Button for Reunion Organizers */}
          <button
            onClick={handleCopyRoomSheet}
            className="inline-flex items-center gap-2.5 self-start lg:self-auto bg-white hover:bg-stone-50 text-lodge border border-stone-300 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            {copiedPlan ? (
              <>
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied Reunion Room Sheet to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cedar" />
                <span>Copy Room Assignment Sheet for Group Chat</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Total Bed Count Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              King Suites
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-lodge mt-0.5">
              4 King Beds
            </p>
            <span className="text-xs text-stone-600">All 4 with Panoramic Lake Views</span>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Queen Suites
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-lodge mt-0.5">
              2 Queen Beds
            </p>
            <span className="text-xs text-stone-600">1 Lake View · 1 Quiet Garden View</span>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Custom Bunkroom
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-lodge mt-0.5">
              8 Built-In Bunks
            </p>
            <span className="text-xs text-stone-600">Each w/ Own Reading Light &amp; Fan</span>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Bonus &amp; Baths
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-lodge mt-0.5">
              4 Baths + Bonus
            </p>
            <span className="text-xs text-stone-600">Sofa Bed, 2 Air Mattresses, Pack ’n Play</span>
          </div>
        </div>

        {/* Interactive Level Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Lodge Floorplan Levels"
          className="flex flex-wrap gap-2 sm:gap-3 bg-stone-200/75 p-2 rounded-2xl mb-8"
        >
          {FLOORPLAN_LEVELS.map((lvl) => {
            const isActive = lvl.id === activeLevelId;
            return (
              <button
                key={lvl.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`flex-1 min-w-[140px] py-3.5 px-4 rounded-xl text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-lodge text-white shadow-md'
                    : 'bg-transparent text-stone-700 hover:bg-white/70'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-lg sm:text-xl font-semibold">{lvl.label}</span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-cedar text-white'
                        : 'bg-stone-300/80 text-stone-700'
                    }`}
                  >
                    {lvl.rooms.length} {lvl.rooms.length === 1 ? 'Zone' : 'Zones'}
                  </span>
                </div>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isActive ? 'text-stone-300' : 'text-stone-500'
                  }`}
                >
                  {lvl.totalSleepsText}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Level Detail Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cedar-dark">
                    {activeLevel.label} Overview
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge mt-1">
                    {activeLevel.floorTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 mt-1.5 max-w-3xl">
                    {activeLevel.description}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
                  <div className="bg-stone-100 px-4 py-3 rounded-xl border border-stone-200">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-lodge">
                      <Bath className="w-4 h-4 text-cedar" />
                      <span>Bathroom Access</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">{activeLevel.bathSummary}</p>
                  </div>
                  <div className="bg-cedar-subtle px-4 py-3 rounded-xl border border-cedar/25">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-cedar-dark">
                      <Users className="w-4 h-4 text-cedar" />
                      <span>Level Capacity</span>
                    </div>
                    <p className="text-xs text-lodge font-medium mt-1">
                      {activeLevel.totalSleepsText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Room Cards Grid */}
              <div
                className={`grid grid-cols-1 gap-6 mt-6 ${
                  activeLevel.rooms.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
                }`}
              >
                {activeLevel.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="group bg-alabaster rounded-2xl overflow-hidden border border-stone-200/90 flex flex-col justify-between hover:shadow-luxury transition-all duration-300"
                  >
                    <div>
                      {/* Room Image + Optional Secondary Thumbnail */}
                      <div className="relative h-60 overflow-hidden bg-stone-200">
                        <img
                          src={room.image}
                          alt={room.name}
                          loading="lazy"
                          onClick={() => onSelectPhoto(room.image)}
                          className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          <span className="bg-lodge-dark/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-cedar-light" />
                            {room.bedType}
                          </span>
                          <span className="bg-cedar text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            {room.sleeps}
                          </span>
                        </div>

                        {room.secondaryImage && (
                          <button
                            onClick={() => onSelectPhoto(room.secondaryImage!)}
                            title="View alternate angle"
                            className="absolute bottom-3 right-3 w-16 h-12 rounded-lg overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform"
                          >
                            <img
                              src={room.secondaryImage}
                              alt={`${room.name} alternate view`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        )}
                      </div>

                      {/* Room Details */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 text-xs text-stone-500 font-medium">
                          <span>{room.subtitle}</span>
                          <span className="inline-flex items-center gap-1 text-cedar-dark font-semibold">
                            <Eye className="w-3.5 h-3.5" />
                            {room.view}
                          </span>
                        </div>

                        <h4 className="font-serif text-2xl font-semibold text-lodge mt-1.5">
                          {room.name}
                        </h4>

                        <ul className="mt-4 space-y-2">
                          {room.highlights.map((hl) => (
                            <li
                              key={hl}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700"
                            >
                              <Check className="w-4 h-4 text-cedar shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Tv className="w-3.5 h-3.5 text-cedar" />
                        <span>Smart TV &amp; Fresh Linens</span>
                      </span>
                      <button
                        onClick={() => onSelectPhoto(room.image)}
                        className="font-semibold text-lodge hover:text-cedar-dark"
                      >
                        Inspect Room Photo →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
