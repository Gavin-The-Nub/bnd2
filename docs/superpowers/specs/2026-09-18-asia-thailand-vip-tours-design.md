# Design Spec: Asia Tours & Thailand VIP Van Private Day Tours

**Date:** 2026-09-18  
**Status:** Approved  
**Topic:** Integration of Asia Packages & Thailand VIP Van Private Day Tours from `public/asiaTours/asia_packages.md`

---

## 1. Objective
Incorporate the Asia tour packages from [asia_packages.md](file:///Users/macbookairm2/codebase/bnd2/public/asiaTours/asia_packages.md) into the website, following the established patterns used in `packages/local`. Specifically:
1. Maintain the 4 Asia destinations (Japan, Thailand, Taiwan, Vietnam) with their promo/available status.
2. Update the [Asia overview page](file:///Users/macbookairm2/codebase/bnd2/app/packages/asia/page.tsx) to highlight the private VIP van day tours for Thailand.
3. Overhaul the [Thailand tour page](file:///Users/macbookairm2/codebase/bnd2/app/packages/asia/thailand/page.tsx) to feature a dedicated **Private VIP Van Day Tours** section showcasing all 5 day tour packages with their exact itineraries, pricing (₱14,499), durations, group capacities, and dynamic Facebook Messenger quote buttons.

---

## 2. Package Data

### 2.1 Thailand VIP Van Day Tours
All tours share the following baseline parameters:
- **Price:** ₱14,499 per tour
- **Duration:** 12 – 15 Hours
- **Group Capacity:** 3 to 10 Persons | 1 VIP Van

| Tour ID | Tour Name | Destination Area | Key Stops / Itinerary |
|---|---|---|---|
| `khao-yai` | Khao Yai Tour | Khao Yai / Nakhon Ratchasima | PB Valley, Primo Piazza, Hokkaido Flower Park, Bucolic Cafe, Toscana Valley, Flory Day Cafe, Trot Cafe, Pirom Cafe |
| `pattaya-city` | Pattaya City Tour | Pattaya / Chonburi | Chang Thai Thappraya, Train Ride - Gems Gallery, Sanctuary of Truth, Great and Grand, La Galeria, Nong Nooch Garden, Khao Chi Chan, Castello de Belagio, House of Benedict, Paboon Cafe |
| `bangkok-ratchaburi` | Bangkok & Ratchaburi Tour | Bangkok & Ratchaburi | Maeklong Railway Market, Chang Puak Elephant Rides, Damnoen Floating Market, Ancient City, Grand Palace, Wat Pho, Wat Arun, Asiatique Riverfront Dinner Cruise |
| `ayutthaya` | Ayutthaya Tour | Ayutthaya Historical City | Ayutthaya Historical Parks, Wat Yai Chai Mongkhon, Wat Mahathat, Wat Phra Si Sanphet, Wat Na Phra Meru, Wat Ratcha Burana, Ayutthaya Floating Market, Elephant Rides, Bang Pa In Palace |
| `kanchanaburi` | Kanchanaburi Tour | Kanchanaburi | Safari Park Kanchanaburi, Jeath War Museum, River Kwai Bridge, Elephant World, Kanchanaburi Train Ride, Bubble in the Forest Cafe, After the Rain Coffee |

---

## 3. Architecture & User Interface

### 3.1 Thailand Page (`app/packages/asia/thailand/page.tsx`)
1. **Hero & Intro**:
   - Header with `← ASIA TOURS` breadcrumb, Thailand hero image, tagline, duration, and badges.
   - Updated overview highlighting Thailand's golden temples, culture, and private VIP van tours.
2. **"VIP Van Private Day Tours" Section**:
   - Title: **"PRIVATE VIP VAN DAY TOURS"**
   - Subtitle: *"₱14,499 · 12–15 Hours · Exclusive VIP Van for 3 to 10 Persons"*
   - Description emphasizing private transportation, professional driver, fuel, and flexibility to explore top Thai destinations comfortably.
   - **Grid of 5 Tour Cards**:
     - Card Header: Tour title with destination badge and price tag (`₱14,499`).
     - Metadata badges: `12 - 15 Hours` duration and `3-10 Guests (1 VIP Van)`.
     - **Itinerary Timeline / Route**: Formatted list of all stops/attractions with location map pin markers.
     - **Call to Action**: Dynamic `<QuoteButton>` component configured with:
       - `tourName="Thailand - [Tour Name]"`
       - `duration="12 - 15 Hours"`
       - `label="BOOK VIP VAN"`
       - Direct integration into the Facebook Messenger quote generator with clipboard copy and toast notification.
3. **General Inclusions & Exclusions**:
   - Inclusions: VIP van transportation, driver & fuel, curated route itinerary, customer support.
   - Exclusions: Individual attraction entrance fees (unless specified), meals/café orders, travel insurance, personal expenses.
4. **Bottom CTA**:
   - Quick quote request button + back button to view all Asia tours.

### 3.2 Main Asia Page (`app/packages/asia/page.tsx`)
- Update the Thailand card tagline / badge / description to reflect:
  - Tag: `VIP DAY TOURS & GETAWAYS`
  - Price note / Subtext: `5 VIP Day Tours Available · From ₱14,499`

---

## 4. Messenger Integration
Leverage the existing `QuoteButton` component:
```tsx
<QuoteButton
  tourName={`Thailand - ${tour.name}`}
  duration="12 - 15 Hours"
  label="BOOK VIP VAN"
/>
```
Clicking the button generates the pre-filled inquiry text:
```
Hi BND Travel and Tours! I would like to inquire about:
- Package: Thailand - [Tour Name]
- Duration: 12 - 15 Hours
- Price: ₱14,499 (1 VIP Van, 3-10 Pax)
```
Copies to clipboard, triggers a toast notification, and navigates to the Messenger thread.

---

## 5. Verification Plan
1. Run Next.js build or lint check to ensure zero TypeScript errors or broken imports.
2. Open the browser to `http://localhost:3000/packages/asia` and `http://localhost:3000/packages/asia/thailand`.
3. Verify that all 5 VIP van day tours are rendered with their stops, badges, and pricing.
4. Verify that the quote buttons generate the correct messenger URLs with the tour name and duration.
