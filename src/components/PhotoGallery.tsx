import React, { useState, useEffect, useMemo } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Grid,
  Sparkles,
} from 'lucide-react';
import { LODGE_PHOTOS, PHOTO_CATEGORIES, PhotoCategory, LodgePhoto } from '../data/photos';

interface PhotoGalleryProps {
  externalLightboxSrc: string | null;
  onCloseExternalLightbox: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  externalLightboxSrc,
  onCloseExternalLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | PhotoCategory>('all');
  const [showAllGrid, setShowAllGrid] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return LODGE_PHOTOS;
    return LODGE_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const visiblePhotos = useMemo(() => {
    if (showAllGrid || selectedCategory !== 'all') {
      return filteredPhotos;
    }
    return filteredPhotos.slice(0, 24);
  }, [filteredPhotos, showAllGrid, selectedCategory]);

  // Open lightbox when another section triggers externalLightboxSrc
  useEffect(() => {
    if (externalLightboxSrc) {
      const idx = LODGE_PHOTOS.findIndex((p) => p.src === externalLightboxSrc);
      if (idx !== -1) {
        setSelectedCategory('all');
        setLightboxIndex(idx);
      }
    }
  }, [externalLightboxSrc]);

  const closeLightbox = () => {
    setLightboxIndex(null);
    onCloseExternalLightbox();
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
    );
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const currentLightboxPhoto: LodgePhoto | null =
    lightboxIndex !== null && filteredPhotos[lightboxIndex]
      ? filteredPhotos[lightboxIndex]
      : null;

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-stone-100/90 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cedar-dark font-semibold mb-3">
              <Camera className="w-4 h-4 text-cedar" />
              <span>Photo Tour · 80 Property &amp; Local Photos</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-lodge tracking-tight leading-[1.1]">
              Explore Every Corner of West View Lodge
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Filter by category or click any photo to open the full-screen slideshow.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setLightboxIndex(0);
              }}
              className="inline-flex items-center gap-2 bg-lodge hover:bg-lodge-light text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full shadow transition-all"
            >
              <Maximize2 className="w-4 h-4 text-cedar-light" />
              <span>Open Full-Screen 80-Photo Slideshow</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {PHOTO_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-cedar text-white shadow-md shadow-cedar/20'
                      : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      active ? 'bg-black/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedCategory === 'all' && (
            <button
              onClick={() => setShowAllGrid(!showAllGrid)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cedar-dark hover:text-lodge underline underline-offset-4"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>
                {showAllGrid
                  ? 'Show Featured 24 Photos in Grid'
                  : 'Expand All 80 Photos in Grid'}
              </span>
            </button>
          )}
        </div>

        {/* Photo Grid — WebKit-safe explicit heights + absolute inset-0 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visiblePhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 sm:h-60 rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/80 cursor-pointer shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between p-3.5"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 flex justify-start">
                <span className="bg-black/55 backdrop-blur-md text-white/90 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  #{String(photo.id).padStart(2, '0')}
                </span>
              </div>

              <div className="relative z-10 text-white pt-6">
                <p className="font-serif text-base sm:text-lg font-semibold leading-snug">
                  {photo.title}
                </p>
                <p className="text-xs text-stone-200 line-clamp-2 mt-0.5">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand All 79 Photos Button if collapsed */}
        {selectedCategory === 'all' && !showAllGrid && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllGrid(true)}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-lodge hover:text-white text-lodge border border-stone-300 font-semibold px-7 py-4 rounded-full text-sm shadow-sm transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-cedar" />
              <span>Show All 80 Photos in Grid (+56 More)</span>
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Keyboard-Navigable Lightbox Modal */}
      {currentLightboxPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-lodge-dark/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo viewer"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="bg-cedar text-white text-xs font-bold px-3 py-1 rounded-full">
                Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 hidden sm:inline">
                {currentLightboxPhoto.title} (Photo #{String(currentLightboxPhoto.id).padStart(2, '0')})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400 hidden md:inline mr-2">
                Use ← / → arrow keys or Esc
              </span>
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Stage */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 z-10 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-cedar text-white border border-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentLightboxPhoto.src}
              alt={currentLightboxPhoto.title}
              className="max-h-[70vh] max-w-[88vw] object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 z-10 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-cedar text-white border border-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Navigation */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-5xl mx-auto w-full">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                {currentLightboxPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                {currentLightboxPhoto.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={goPrev}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
              >
                ← Prev
              </button>
              <button
                onClick={goNext}
                className="px-4 py-2 rounded-lg bg-cedar hover:bg-cedar-dark text-xs font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
