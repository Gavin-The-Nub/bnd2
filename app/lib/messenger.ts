export const SKWITCHI_FACEBOOK_URL = "https://www.facebook.com/SkwitchiTravels";
export const SKWITCHI_MESSENGER_URL = "https://m.me/SkwitchiTravels";

export interface QuoteRequestParams {
  tourName?: string;
  duration?: string;
  pageUrl?: string;
  customNotes?: string;
  guests?: number | string;
  dates?: string;
}

/**
 * Builds a friendly, pre-populated inquiry text for Facebook Messenger.
 */
export function buildQuoteMessage(params?: QuoteRequestParams): string {
  if (!params || (!params.tourName && !params.customNotes && !params.dates && !params.guests)) {
    return "Hi Skwitchi Travels! I would like to inquire about your travel packages and request a personalized quote for an upcoming trip.";
  }

  const lines: string[] = [];
  const destination = params.tourName ? `${params.tourName} Tour Package` : "a travel package";

  lines.push(`Hi Skwitchi Travels! I'd like to request a quote for the ${destination}.`);
  lines.push("");

  if (params.tourName || params.duration) {
    const details = [
      params.tourName ? `• Destination: ${params.tourName}` : null,
      params.duration ? `• Duration: ${params.duration}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    if (details) lines.push(details);
  }

  if (params.dates) {
    lines.push(`• Preferred Dates: ${params.dates}`);
  }

  if (params.guests) {
    const guestStr = typeof params.guests === "number" ? `${params.guests} guests` : `${params.guests}`;
    lines.push(`• Estimated Guests: ${guestStr}`);
  }

  if (params.pageUrl) {
    lines.push(`• Package Link: ${params.pageUrl}`);
  }

  if (params.customNotes) {
    lines.push(`• Notes/Requests: ${params.customNotes}`);
  }

  lines.push("");
  lines.push("Could you please share available dates, inclusions, and pricing? Thank you!");

  return lines.join("\n");
}

/**
 * Returns a direct m.me URL with the pre-populated quote message encoded.
 */
export function getMessengerQuoteUrl(params?: QuoteRequestParams): string {
  const text = buildQuoteMessage(params);
  return `${SKWITCHI_MESSENGER_URL}?text=${encodeURIComponent(text)}`;
}
