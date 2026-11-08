import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Send,
  SlidersHorizontal,
  Code2,
  Percent,
  Mail,
} from 'lucide-react';
import { bookingConfig, isHospitableLive, BookingMode } from '../config/bookingConfig';

interface DirectBookingEngineProps {
  isDrawer?: boolean;
  suspendWidget?: boolean;
  onCloseDrawer?: () => void;
}

export const DirectBookingEngine: React.FC<DirectBookingEngineProps> = ({
  isDrawer = false,
  suspendWidget = false,
  onCloseDrawer,
}) => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  // Default dates: 21 days from today for 4 nights
  const defaultDates = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() + 21);
    const end = new Date(start);
    end.setDate(start.getDate() + 4);
    return {
      checkIn: start.toISOString().split('T')[0],
      checkOut: end.toISOString().split('T')[0],
    };
  }, []);

  const [previewModeOverride, setPreviewModeOverride] = useState<BookingMode | null>(null);
  const effectiveMode: BookingMode =
    previewModeOverride ?? (isHospitableLive() ? 'hospitable' : bookingConfig.mode);

  const [checkIn, setCheckIn] = useState(defaultDates.checkIn);
  const [checkOut, setCheckOut] = useState(defaultDates.checkOut);
  const [guests, setGuests] = useState(14);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Family Reunion / Multi-Generational Stay');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Adopt the pre-mounted #hospitable-widget-verification container from index.html (or mount fresh script)
  useEffect(() => {
    if (effectiveMode !== 'hospitable' || suspendWidget) return;
    const container = widgetContainerRef.current;
    if (!container || !bookingConfig.hospitableWidgetScriptSrc.trim()) return;

    const preMounted = document.getElementById('hospitable-widget-verification');

    if (preMounted) {
      preMounted.removeAttribute('style');
      preMounted.removeAttribute('aria-hidden');
      preMounted.className = 'w-full';
      container.appendChild(preMounted);

      // If widget-loader hasn't injected widget DOM nodes beyond the <script> tag yet, trigger a fresh script execution
      if (preMounted.children.length <= 1) {
        const freshScript = document.createElement('script');
        freshScript.src = bookingConfig.hospitableWidgetScriptSrc.trim();
        freshScript.setAttribute('data-site-uuid', bookingConfig.hospitableSiteUuid.trim());
        freshScript.setAttribute('data-property-id', bookingConfig.hospitablePropertyId.trim());
        freshScript.setAttribute('data-theme', bookingConfig.hospitableTheme.trim());
        preMounted.innerHTML = '';
        preMounted.appendChild(freshScript);
      }

      return () => {
        preMounted.setAttribute('aria-hidden', 'true');
        preMounted.setAttribute(
          'style',
          'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;'
        );
        document.body.appendChild(preMounted);
      };
    }

    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = bookingConfig.hospitableWidgetScriptSrc.trim();
    script.setAttribute('data-site-uuid', bookingConfig.hospitableSiteUuid.trim());
    script.setAttribute('data-property-id', bookingConfig.hospitablePropertyId.trim());
    script.setAttribute('data-theme', bookingConfig.hospitableTheme.trim());
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [effectiveMode, suspendWidget]);

  // Calculate selected nights and percentage-based fee savings (no fake nightly rates)
  const staySummary = useMemo(() => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const rawNights = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const nights = rawNights > 0 && rawNights <= 60 ? rawNights : 4;

    return {
      nights,
      rateLabel: bookingConfig.bookingSettings.rateLabel,
      feeSavingsPercent: bookingConfig.bookingSettings.airbnbServiceFeePercent,
      typicalSavingsRange: bookingConfig.bookingSettings.typicalGroupSavingsRange,
    };
  }, [checkIn, checkOut]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `West View Lodge Inquiry: ${checkIn} to ${checkOut} (${guests} Guests)`
    );
    const body = encodeURIComponent(
      [
        `Hi Casey,`,
        ``,
        `I would like to inquire about West View Lodge on Big Lake:`,
        `- Check-In: ${checkIn}`,
        `- Check-Out: ${checkOut} (${staySummary.nights} Nights)`,
        `- Guests: ${guests}`,
        `- Group Occasion: ${occasion}`,
        fullName ? `- Name: ${fullName}` : '',
        email ? `- Email: ${email}` : '',
        phone ? `- Phone: ${phone}` : '',
        message ? `\nQuestions / Notes:\n${message}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    );
    return `mailto:${bookingConfig.hostEmail}?subject=${subject}&body=${body}`;
  }, [checkIn, checkOut, guests, staySummary.nights, occasion, fullName, email, phone, message]);

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let deliveredViaAjax = false;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${bookingConfig.hostEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `West View Lodge Direct Inquiry: ${checkIn} to ${checkOut} (${guests} Guests)`,
          fullName,
          email,
          phone,
          checkIn,
          checkOut,
          nights: staySummary.nights,
          guests,
          occasion,
          message: message || '(No additional notes)',
          estimatedSavings: `Save ~${staySummary.feeSavingsPercent}% (${staySummary.typicalSavingsRange} vs. OTA fees)`,
        }),
      });
      if (response.ok) {
        const result = await response.json().catch(() => null);
        if (result && (result.success === 'true' || result.success === true)) {
          deliveredViaAjax = true;
        }
      }
    } catch {
      // Fallback handled below
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
    } catch {
      // Ignore Netlify local/non-form errors
    }

    if (!deliveredViaAjax) {
      window.location.href = mailtoHref;
    }

    setSubmitted(true);
  };

  return (
    <div className={isDrawer ? 'p-5 sm:p-7' : ''}>
      {/* Top Mode & Host Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <img
            src="/images/host-casey.jpg"
            alt="Host Casey"
            className="w-11 h-11 rounded-full object-cover border-2 border-cedar"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-semibold text-lodge">
                Book Direct with Host {bookingConfig.hostName}
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                Save ~{staySummary.feeSavingsPercent}%
              </span>
            </div>
            <p className="text-xs text-stone-500 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span>{bookingConfig.responseTimeText}</span>
              <span>·</span>
              <a
                href={`mailto:${bookingConfig.hostEmail}`}
                className="text-cedar-dark hover:text-lodge font-medium underline underline-offset-2"
              >
                {bookingConfig.hostEmail}
              </a>
            </p>
          </div>
        </div>

        {/* Toggle between Live Hospitable Checkout & Direct Inquiry Form */}
        <button
          type="button"
          onClick={() =>
            setPreviewModeOverride(effectiveMode === 'inquiry' ? 'hospitable' : 'inquiry')
          }
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-stone-600 hover:text-lodge bg-stone-100 hover:bg-stone-200/80 px-3 py-1.5 rounded-full border border-stone-200 transition-colors"
          title="Switch between Live Hospitable Direct Checkout and Direct Inquiry Form"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-cedar" />
          <span>
            {effectiveMode === 'hospitable'
              ? 'Have a Question? Send Direct Inquiry'
              : 'Switch to Instant Book Widget'}
          </span>
        </button>
      </div>

      {/* MODE 1: HOSPITABLE DIRECT EMBED CONTAINER */}
      {effectiveMode === 'hospitable' ? (
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-stone-200">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cedar-dark font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cedar" />
                <span>Hospitable Direct · Live Seasonal Rates</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge mt-1">
                Real-Time Calendar &amp; Zero-Fee Direct Checkout
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>2-Way Synced Calendar</span>
            </span>
          </div>

          {/* Official Hospitable Self-Hosted Direct Booking Widget Container */}
          <div className="hospitable-widget-wrapper min-h-[240px] flex flex-col justify-center">
            {bookingConfig.hospitableWidgetScriptSrc.trim() ? (
              <div className="w-full">
                <div
                  ref={widgetContainerRef}
                  className="hospitable-direct-widget-mount w-full min-h-[160px] flex flex-col items-center justify-center"
                />
                <div className="mt-6 pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
                  <span>
                    Have a question for Host {bookingConfig.hostName} before booking (boat moorage,
                    room layout, or special requests)? Email{' '}
                    <a
                      href={`mailto:${bookingConfig.hostEmail}`}
                      className="text-cedar-dark hover:text-lodge font-semibold underline underline-offset-2"
                    >
                      {bookingConfig.hostEmail}
                    </a>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPreviewModeOverride('inquiry')}
                    className="text-cedar-dark hover:text-lodge font-semibold underline underline-offset-4 shrink-0"
                  >
                    Send a Direct Inquiry Message →
                  </button>
                </div>
              </div>
            ) : bookingConfig.hospitableIframeUrl.trim() ? (
              <iframe
                src={bookingConfig.hospitableIframeUrl}
                title="West View Lodge Hospitable Direct Booking"
                className="w-full min-h-[580px] rounded-2xl border border-stone-200"
              />
            ) : bookingConfig.hospitableCustomEmbedHtml.trim() ? (
              <div
                dangerouslySetInnerHTML={{ __html: bookingConfig.hospitableCustomEmbedHtml }}
              />
            ) : (
              <div
                className="hospitable-direct-widget bg-alabaster rounded-2xl border-2 border-dashed border-cedar/40 p-8 text-center"
                data-property-id={bookingConfig.hospitablePropertyId || 'west-view-lodge'}
              >
                <div className="w-12 h-12 rounded-2xl bg-cedar/15 text-cedar-dark flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-lodge">
                  Hospitable Direct Widget Container Ready
                </h4>
                <p className="text-sm text-stone-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  This live container (
                  <code className="text-xs bg-stone-200/80 px-1.5 py-0.5 rounded">
                    .hospitable-direct-widget
                  </code>
                  ) is wired directly to{' '}
                  <code className="text-xs bg-stone-200/80 px-1.5 py-0.5 rounded">
                    src/config/bookingConfig.ts
                  </code>
                  .
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPreviewModeOverride('inquiry')}
                    className="bg-lodge hover:bg-lodge-light text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                  >
                    Use Interactive Date Picker &amp; Direct Inquiry Form Now →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* MODE 2: INTERACTIVE DATE PICKER + FEE-SAVINGS BREAKDOWN + NETLIFY DIRECT INQUIRY FORM */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Date Picker, Guest Counter & Live Seasonal Rate / Fee Savings Box */}
          <div
            className={`${
              isDrawer ? 'lg:col-span-12' : 'lg:col-span-5'
            } bg-lodge text-alabaster rounded-3xl p-6 sm:p-8 shadow-luxury`}
          >
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cedar-light font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Live Seasonal Rates · Direct Fee Waiver</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Select Your Dates &amp; Group Size
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Pricing is 100% synced with our live seasonal calendar. Book directly with Host Casey
              to waive the ~{staySummary.feeSavingsPercent}% Airbnb service fee markup.
            </p>

            {/* Date Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
              <label className="block bg-white/10 border border-white/15 rounded-2xl p-3.5">
                <span className="block text-[11px] uppercase tracking-wider text-stone-300 font-semibold">
                  Check-In Date
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="mt-1 w-full bg-transparent text-white text-sm font-semibold focus:outline-none [color-scheme:dark]"
                />
              </label>

              <label className="block bg-white/10 border border-white/15 rounded-2xl p-3.5">
                <span className="block text-[11px] uppercase tracking-wider text-stone-300 font-semibold">
                  Check-Out Date
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="mt-1 w-full bg-transparent text-white text-sm font-semibold focus:outline-none [color-scheme:dark]"
                />
              </label>
            </div>

            {/* Guest Counter */}
            <div className="mt-3.5 bg-white/10 border border-white/15 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-stone-300 font-semibold">
                  Total Guests (Sleeps 20+)
                </span>
                <span className="text-sm font-semibold text-white">
                  {guests} {guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold flex items-center justify-center"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-sm">{guests}</span>
                <button
                  type="button"
                  onClick={() =>
                    setGuests((g) => Math.min(bookingConfig.bookingSettings.maxGuests, g + 1))
                  }
                  className="w-9 h-9 rounded-full bg-cedar hover:bg-cedar-dark text-white font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Live Seasonal Rates & Fee-Savings Breakdown */}
            <div className="mt-6 bg-lodge-dark/90 border border-white/15 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-300">
                <span>Selected Stay Duration</span>
                <span className="font-semibold text-white">
                  {staySummary.nights} {staySummary.nights === 1 ? 'Night' : 'Nights'} · {guests}{' '}
                  Guests
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-300">
                <span>Nightly Accommodation Rate</span>
                <span className="font-semibold text-amber-200">{staySummary.rateLabel}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-rose-300 pt-2 border-t border-white/10">
                <span>Airbnb Guest Service Fee</span>
                <span className="line-through font-semibold">
                  ~{staySummary.feeSavingsPercent}% Service Fee Markup
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-emerald-300">
                <span>West View Lodge Direct Booking Fee</span>
                <span className="font-bold">$0 (100% Waived)</span>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-amber-200 font-semibold">
                    Direct Booking Advantage
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                    Save ~{staySummary.feeSavingsPercent}% Direct
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] text-stone-400">Typical Group Savings</span>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-white">
                    {staySummary.typicalSavingsRange}
                  </span>
                  <span className="block text-[10px] text-stone-400">vs. third-party OTAs</span>
                </div>
              </div>
            </div>

            {/* Verified Airbnb Reviews Link */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-stone-300">
              <span>Want to read verified past guest reviews first?</span>
              <a
                href={bookingConfig.airbnbListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-200 hover:text-white font-semibold underline underline-offset-4 shrink-0"
              >
                <span>View on Airbnb</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Netlify-Compatible Direct Booking Request Form */}
          <div
            className={`${
              isDrawer ? 'lg:col-span-12' : 'lg:col-span-7'
            } bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-luxury`}
          >
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-3xl font-semibold text-lodge">
                  Direct Booking Request Received!
                </h4>
                <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-lodge">{fullName || 'Guest'}</span>!
                  Host Casey has received your request for{' '}
                  <span className="font-semibold text-lodge">
                    {checkIn} to {checkOut} ({staySummary.nights} nights, {guests} guests)
                  </span>{' '}
                  and will reply shortly with your exact live seasonal quote and fee-free Hospitable
                  direct checkout link (saving your group ~{staySummary.feeSavingsPercent}% vs.
                  Airbnb service fees).
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full border border-stone-300 text-xs font-semibold text-lodge hover:bg-stone-100"
                  >
                    Modify Dates or Send Another Inquiry
                  </button>
                  {isDrawer && onCloseDrawer && (
                    <button
                      type="button"
                      onClick={onCloseDrawer}
                      className="px-5 py-2.5 rounded-full bg-lodge text-white text-xs font-semibold"
                    >
                      Return to West View Lodge
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form
                name="west-view-lodge-direct-inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleInquirySubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="west-view-lodge-direct-inquiry" />
                <input type="hidden" name="checkIn" value={checkIn} />
                <input type="hidden" name="checkOut" value={checkOut} />
                <input type="hidden" name="nights" value={staySummary.nights} />
                <input type="hidden" name="guests" value={guests} />
                <input
                  type="hidden"
                  name="estimatedSavings"
                  value={`Save ~${staySummary.feeSavingsPercent}% (${staySummary.typicalSavingsRange} vs. OTA fees)`}
                />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="pb-2 border-b border-stone-100">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cedar-dark">
                    Direct Reservation Request · Live Seasonal Rates
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-lodge mt-0.5">
                    Check Availability &amp; Hold Dates with Host Casey
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full rounded-xl border border-stone-300 bg-alabaster px-4 py-3 text-sm text-lodge focus:border-cedar focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full rounded-xl border border-stone-300 bg-alabaster px-4 py-3 text-sm text-lodge focus:border-cedar focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Mobile Phone (for fast text confirmation) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(206) 555-0192"
                      className="w-full rounded-xl border border-stone-300 bg-alabaster px-4 py-3 text-sm text-lodge focus:border-cedar focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Group Occasion
                    </label>
                    <select
                      name="occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-alabaster px-4 py-3 text-sm text-lodge focus:border-cedar focus:outline-none"
                    >
                      <option value="Family Reunion / Multi-Generational Stay">
                        Family Reunion / Multi-Generational Stay
                      </option>
                      <option value="Summer Lake & Boating Vacation">
                        Summer Lake &amp; Boating Vacation
                      </option>
                      <option value="Holiday Feast / Thanksgiving / Christmas">
                        Holiday Feast / Thanksgiving / Christmas
                      </option>
                      <option value="Friends Retreat / Golf / Pickleball">
                        Friends Retreat / Golf / Pickleball
                      </option>
                      <option value="Corporate / Executive Offsite">
                        Corporate / Executive Offsite
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Questions for Casey (Boat moorage, room setup, arrival notes)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Casey a little about your group, if you plan to bring a boat/wave runner for the private dock, or any questions..."
                    className="w-full rounded-xl border border-stone-300 bg-alabaster px-4 py-3 text-sm text-lodge focus:border-cedar focus:outline-none"
                  />
                </div>

                {/* Selected Summary Pill */}
                <div className="bg-cedar-subtle/80 border border-cedar/25 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-lodge">
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4 text-cedar shrink-0" />
                    <span>
                      {checkIn} → {checkOut} ({staySummary.nights} Nights · {guests} Guests)
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-800">
                    <Percent className="w-3.5 h-3.5" />
                    <span>Save ~{staySummary.feeSavingsPercent}% vs. Airbnb Fees</span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-cedar hover:bg-cedar-dark text-white font-semibold text-base shadow-lg shadow-cedar/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    Request Live Seasonal Quote &amp; Save ~{staySummary.feeSavingsPercent}% Direct
                  </span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  Sent directly to Host {bookingConfig.hostName} at{' '}
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-1 text-cedar-dark hover:text-lodge font-semibold underline underline-offset-2"
                  >
                    <Mail className="w-3 h-3" />
                    <span>{bookingConfig.hostEmail}</span>
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
