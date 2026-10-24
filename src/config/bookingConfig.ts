/**
 * ============================================================================
 * WEST VIEW LODGE — HOSPITABLE DIRECT BOOKING CONFIGURATION
 * ============================================================================
 *
 * Host Casey: Edit ONLY this file tomorrow when your Hospitable Direct Booking
 * widget or URL is ready!
 *
 * HOW TO ACTIVATE HOSPITABLE INSTANT CHECKOUT:
 * 1. Change `mode` from `'inquiry'` to `'hospitable'`, OR simply paste your
 *    Hospitable widget code / URL below (if `autoSwitchWhenConfigured` is true,
 *    the site will automatically switch to live Hospitable checkout as soon as
 *    either `hospitableWidgetScriptSrc` or `hospitableIframeUrl` is filled in!).
 *
 * 2. OPTION A (Hospitable Self-Hosted Widget Script + Div):
 *    Paste your Hospitable script URL into `hospitableWidgetScriptSrc` and your
 *    property widget ID/identifier into `hospitablePropertyId`.
 *
 * 3. OPTION B (Hospitable Direct Booking Page / Iframe URL):
 *    Paste your direct booking URL (e.g. "https://direct.hospitable.com/...")
 *    into `hospitableIframeUrl`.
 * ============================================================================
 */

export type BookingMode = 'hospitable' | 'inquiry';

export interface BookingConfig {
  /**
   * Default mode is 'inquiry' until Hospitable Direct credentials are pasted.
   * Users can also preview the Hospitable container in the UI via the preview toggle.
   */
  mode: BookingMode;

  /**
   * Automatically switches to 'hospitable' mode as soon as a script src or iframe URL is provided.
   */
  autoSwitchWhenConfigured: boolean;

  /**
   * Option A: Official Hospitable Self-Hosted Direct Booking Widget Script URL
   * Example: "https://w.hospitable.com/widget.js"
   */
  hospitableWidgetScriptSrc: string;

  /**
   * Option A: Hospitable Property / Widget Identifier for `<div class="hospitable-direct-widget" data-property-id="...">`
   */
  hospitablePropertyId: string;

  /**
   * Option A: Optional custom HTML snippet if Hospitable provides a raw embed `<script>...`
   */
  hospitableCustomEmbedHtml: string;

  /**
   * Option B: Hospitable Direct Booking URL for embedded iframe or direct redirect
   * Example: "https://westviewlodge.hospitable.rentals"
   */
  hospitableIframeUrl: string;

  /**
   * Booking parameters & OTA fee comparison settings (no hardcoded nightly rates;
   * nightly pricing stays 100% controlled by Hospitable Live Seasonal Rates).
   */
  bookingSettings: {
    rateLabel: string;
    airbnbServiceFeePercent: number;
    typicalGroupSavingsRange: string;
    minNightsDefault: number;
    maxGuests: number;
  };

  /**
   * External verified review link & host contact details
   */
  airbnbListingUrl: string;
  hostName: string;
  hostTitle: string;
  responseTimeText: string;
}

export const bookingConfig: BookingConfig = {
  mode: 'inquiry',
  autoSwitchWhenConfigured: true,

  // Paste Hospitable Direct details here tomorrow:
  hospitableWidgetScriptSrc: '',
  hospitablePropertyId: '',
  hospitableCustomEmbedHtml: '',
  hospitableIframeUrl: '',

  bookingSettings: {
    rateLabel: 'Live Seasonal Rates',
    airbnbServiceFeePercent: 14,
    typicalGroupSavingsRange: '$350–$600+',
    minNightsDefault: 3,
    maxGuests: 22,
  },

  airbnbListingUrl: 'https://www.airbnb.com/rooms/1760984114398559371',
  hostName: 'Casey',
  hostTitle: 'Owner & Dedicated Big Lake Host',
  responseTimeText: 'Typically responds within 1 hour',
};

export function isHospitableLive(config: BookingConfig = bookingConfig): boolean {
  const hasCredentials = Boolean(
    config.hospitableWidgetScriptSrc.trim() ||
    config.hospitableIframeUrl.trim() ||
    config.hospitableCustomEmbedHtml.trim()
  );
  if (config.autoSwitchWhenConfigured && hasCredentials) {
    return true;
  }
  return config.mode === 'hospitable' && hasCredentials;
}
