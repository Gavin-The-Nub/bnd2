# Dynamic Messenger Quote & Inquiry System Design

## 1. Overview
Currently, "Request A Quote" / "Get A Quote" buttons across tour package pages navigate to a static `/request-a-quote` page containing a traditional HTML contact form with mock Cloudflare turnstile. The client wishes to streamline this process by:
1. Linking directly to Facebook Messenger (`https://www.facebook.com/SkwitchiTravels` / `https://m.me/SkwitchiTravels`) instead of a traditional contact form.
2. Dynamically tailoring the inquiry message to the specific tour package / destination page the user is viewing (e.g., Bataan, Sagada, Siargao, Batanes, etc.).
3. Modernizing the `/request-a-quote` destination page into an interactive Messenger Inquiry Hub with destination quick-picks and direct Messenger chat launch.

---

## 2. Architecture & Link Generation

### 2.1 Messenger Deep Link Specifications
* **Facebook Page**: `https://www.facebook.com/SkwitchiTravels`
* **Direct Messenger Protocol**: `https://m.me/SkwitchiTravels`
* **Query Parameter Format**: `https://m.me/SkwitchiTravels?text=${encodeURIComponent(message)}`
* **Target Link Attributes**: `target="_blank" rel="noopener noreferrer"` (ensuring smooth opening in a new tab on desktop or launching the Messenger mobile app on iOS/Android).

### 2.2 Helper Module (`app/lib/messenger.ts`)
A reusable utility module providing:
```typescript
export interface QuoteRequestParams {
  tourName?: string;
  duration?: string;
  pageUrl?: string;
  customNotes?: string;
}

export function getMessengerQuoteUrl(params?: QuoteRequestParams): string;
export function buildQuoteMessage(params?: QuoteRequestParams): string;
```

#### Message Templates:
- **Tour-Specific (e.g. Bataan)**:
  ```text
  Hi Skwitchi Travels! I would like to request a quote for the Bataan Tour Package.

  Tour: Bataan (2D / 1N)
  Link: [Current Page URL]

  Please let me know availability and pricing. Thank you!
  ```
- **General Inquiry (Standalone Hub)**:
  ```text
  Hi Skwitchi Travels! I would like to inquire about tour packages and request a personalized quote.
  ```

---

## 3. UI & Page Updates

### 3.1 Tour Package Pages
* **Pages updated**:
  - Local tours: `/packages/local/bataan`, `/packages/local/sagada`, `/packages/local/siquijor`, `/packages/local/bacolod`, `/packages/local/siargao`, `/packages/local/batanes`, `/packages/local/buscalan`, `/packages/local/cebu`.
  - Asia tours: `/packages/asia/vietnam`, `/packages/asia/thailand`, `/packages/asia/japan`, `/packages/asia/taiwan`.
* **Changes**:
  - "GET A QUOTE" button in the "Tour At A Glance" sidebar now links directly to `getMessengerQuoteUrl({ tourName, duration, pageUrl })`.
  - "REQUEST A QUOTE" button in the "Ready To Book?" CTA section now links directly to the dynamic Messenger URL with the tour name pre-populated.
  - Buttons include clear visual cues (e.g., Messenger icon or distinct chat indicator).

### 3.2 Standalone `/request-a-quote` Page (Messenger Hub)
* Replace the static `<QuoteForm>` with an interactive **Messenger Quote Hub**:
  - **Hero & Intro**: Clear explanation that quotes and itineraries are coordinated directly on Facebook Messenger with the Skwitchi Travels team for fast responses.
  - **Quick-Select Tour Chips**: Grid of popular destinations (Batanes, Bataan, Sagada, Cebu, Siargao, Vietnam, Japan, etc.) allowing users to select a destination.
  - **Live Message Preview Box**: Shows the user the exact text that will be sent to Skwitchi Travels.
  - **Customizable Fields / Notes**: Optional inputs (approximate travel dates, number of guests) that dynamically update the message preview.
  - **Primary CTA**: Prominent "Chat on Messenger" button with the official Messenger color palette and icon, launching `https://m.me/SkwitchiTravels?text=...`.
  - **Alternative Contact**: WhatsApp floating widget and phone/email details remain available for visitors who prefer other channels.

---

## 4. Verification & Testing
1. **Link Verification**:
   - Verify `m.me/SkwitchiTravels?text=...` encodes parameters cleanly without broken characters.
   - Verify links on Bataan tour page populate "Bataan" in the message.
   - Verify links on Sagada, Siargao, etc., populate their respective names and durations.
2. **Interactive Hub Testing**:
   - Navigate to `/request-a-quote`.
   - Test selecting different destination chips and verifying that the live preview updates and the primary Messenger button target URL updates accordingly.
3. **Build & Lint Verification**:
   - Run Next.js build / typecheck to confirm zero TypeScript or build errors.
