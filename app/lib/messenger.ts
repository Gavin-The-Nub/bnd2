export const BND_FACEBOOK_URL = "https://www.facebook.com/drewAdventures";
export const BND_MESSENGER_URL = "https://m.me/drewAdventures";

export const SKWITCHI_FACEBOOK_URL = BND_FACEBOOK_URL;
export const SKWITCHI_MESSENGER_URL = BND_MESSENGER_URL;

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
    return "Hi BND Travel and Tours! I would like to inquire about your travel packages and request a personalized quote for an upcoming trip.";
  }

  const lines: string[] = [];
  const destination = params.tourName ? `${params.tourName} Tour Package` : "a travel package";

  lines.push(`Hi BND Travel and Tours! I'd like to request a quote for the ${destination}.`);
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
 * Returns a direct m.me URL with the pre-populated quote message and ref tag encoded.
 */
export function getMessengerQuoteUrl(params?: QuoteRequestParams): string {
  const text = buildQuoteMessage(params);
  const ref = params?.tourName
    ? `${params.tourName.toLowerCase().replace(/[^a-z0-9]/g, "_")}_quote`
    : "general_quote";
  return `${SKWITCHI_MESSENGER_URL}?text=${encodeURIComponent(text)}&ref=${encodeURIComponent(ref)}`;
}

/**
 * Helper to safely copy text to the clipboard across all browser environments.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback to execCommand below
    }
  }

  if (typeof document !== "undefined") {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      return successful;
    } catch {
      return false;
    }
  }

  return false;
}
