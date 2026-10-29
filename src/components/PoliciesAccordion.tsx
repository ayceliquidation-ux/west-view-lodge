import React, { useState } from 'react';
import {
  PackageCheck,
  KeyRound,
  ShieldAlert,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { HOUSE_ESSENTIALS_ACCORDION } from '../data/propertyData';

export const PoliciesAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([
    'stocked-starters',
    'guest-access',
    'house-policies',
  ]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'stocked-starters':
        return PackageCheck;
      case 'guest-access':
        return KeyRound;
      case 'house-policies':
        return ShieldAlert;
      default:
        return Info;
    }
  };

  return (
    <section id="essentials" className="py-20 sm:py-24 bg-stone-100/90 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
            <PackageCheck className="w-4 h-4 text-cedar" />
            <span>Stocked Starters &amp; House Policies</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight">
            Everything Stocked for Arrival &amp; Clear House Rules
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Here is what is stocked in the kitchens and baths when you arrive, along with our
            straightforward house policies.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {HOUSE_ESSENTIALS_ACCORDION.map((section) => {
            const isOpen = openIds.includes(section.id);
            const Icon = getIcon(section.id);
            const isPolicy = section.id === 'house-policies';

            return (
              <div
                key={section.id}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(section.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isPolicy
                          ? 'bg-amber-100/80 text-amber-800 border border-amber-300/60'
                          : 'bg-lodge text-cedar-light'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 mt-0.5">{section.subtitle}</p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-cedar-subtle text-cedar-dark' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-7 pt-2 border-t border-stone-100">
                    <ul className="space-y-3 mt-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-base text-stone-700 leading-relaxed"
                        >
                          {isPolicy ? (
                            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-cedar shrink-0 mt-1" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
