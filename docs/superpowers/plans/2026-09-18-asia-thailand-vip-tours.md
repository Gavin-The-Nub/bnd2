# Asia & Thailand VIP Van Private Day Tours Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Asia packages from `public/asiaTours/asia_packages.md` by updating the Asia overview page and building out the Thailand VIP Van Private Day Tours section on the Thailand destination page with dynamic Messenger quote buttons.

**Architecture:** Update the Next.js React client pages in `app/packages/asia/page.tsx` and `app/packages/asia/thailand/page.tsx`. Use Lucide icons, responsive CSS flex/grid matching the existing site aesthetic, and the pre-existing `QuoteButton` component for dynamic Messenger linking.

**Tech Stack:** Next.js (App Router), React 19, TypeScript, Lucide React, Vanilla CSS modules/inline styling matching project convention.

## Global Constraints

- Preserve all existing styles, fonts (`var(--font-figtree)`), colors (`#003366`, `#FF9900`, `#BACCDF`), and shared components (`Navbar`, `Footer`, `WhatsApp`, `QuoteButton`).
- All day tours cost ₱14,499 with 12-15 hours duration and 3-10 persons capacity (1 VIP Van).
- Quote button clicks must trigger Messenger with package name and duration prefilled.

---

### Task 1: Update Asia Overview Page with Thailand Day Tours Info

**Files:**
- Modify: `app/packages/asia/page.tsx:19-29`

**Interfaces:**
- Consumes: None
- Produces: Updated `asiaTours` array item for `thailand` showing private VIP van day tour availability.

- [ ] **Step 1: Update `thailand` entry in `asiaTours` array**

In [app/packages/asia/page.tsx](file:///Users/macbookairm2/codebase/bnd2/app/packages/asia/page.tsx), update the Thailand object:
```tsx
  {
    slug: "thailand",
    name: "Thailand",
    tagline: "Golden Temples, Floating Markets & VIP Day Tours",
    desc: "Explore vibrant Bangkok, royal palaces, Pattaya beaches, and historic cities. 5 exclusive private VIP van day tours available starting at ₱14,499 (12-15 hrs, 3-10 pax).",
    image: "/pkg-beach.jpg",
    tag: "5 VIP TOURS AVAILABLE",
    duration: "Day Tours & 4D/3N",
    location: "Bangkok, Pattaya, Khao Yai & more",
  },
```

- [ ] **Step 2: Verify page compilation**

Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 3: Commit Task 1**

```bash
git add app/packages/asia/page.tsx
git commit -m "feat(asia): update thailand card with VIP day tour details"
```

---

### Task 2: Build VIP Van Private Day Tours Section in Thailand Destination Page

**Files:**
- Modify: `app/packages/asia/thailand/page.tsx`

**Interfaces:**
- Consumes: `QuoteButton` from `../../../components/QuoteButton`, Lucide icons (`MapPin`, `Clock`, `Users`, `Car`, `Check`, `Sparkles`, `ShieldCheck`, etc.)
- Produces: Full Thailand destination hub featuring the 5 VIP Van private day tours with complete itineraries and Messenger quote triggers.

- [ ] **Step 1: Define the 5 Thailand Day Tours data**

In [app/packages/asia/thailand/page.tsx](file:///Users/macbookairm2/codebase/bnd2/app/packages/asia/thailand/page.tsx), define `thailandDayTours`:
```tsx
const thailandDayTours = [
  {
    id: "khao-yai",
    name: "Khao Yai Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "European Architecture, Vineyards & Lush Mountain Scenery",
    itinerary: [
      "PB Valley",
      "Primo Piazza",
      "Hokkaido Flower Park",
      "Bucolic Cafe",
      "Toscana Valley",
      "Flory Day Cafe",
      "Trot Cafe",
      "Pirom Cafe",
    ],
  },
  {
    id: "pattaya-city",
    name: "Pattaya City Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Coastal Wonders, Iconic Sanctuaries & Whimsical Cafes",
    itinerary: [
      "Chang Thai Thappraya",
      "Train Ride - Gems Gallery",
      "Sanctuary of Truth",
      "Great and Grand",
      "La Galeria",
      "Nong Nooch Garden",
      "Khao Chi Chan",
      "Castello de Belagio",
      "House of Benedict",
      "Paboon Cafe",
    ],
  },
  {
    id: "bangkok-ratchaburi",
    name: "Bangkok & Ratchaburi Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Famous Railway & Floating Markets to Grand Palaces & River Cruises",
    itinerary: [
      "Maeklong Railway Market",
      "Chang Puak Elephant Rides",
      "Damnoen Floating Market",
      "Ancient City",
      "Grand Palace",
      "Wat Pho",
      "Wat Arun",
      "Asiatique Riverfront Dinner Cruise",
    ],
  },
  {
    id: "ayutthaya",
    name: "Ayutthaya Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Ancient Siamese Capital, UNESCO Heritage Temples & Palaces",
    itinerary: [
      "Ayutthaya Historical Parks",
      "Wat Yai Chai Mongkhon",
      "Wat Mahathat",
      "Wat Phra Si Sanphet",
      "Wat Na Phra Meru",
      "Wat Ratcha Burana",
      "Ayutthaya Floating",
      "Elephant Rides",
      "Bang Pa In Palace",
    ],
  },
  {
    id: "kanchanaburi",
    name: "Kanchanaburi Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Historic River Kwai Bridge, Safari Wildlife & Riverfront Cafes",
    itinerary: [
      "Safari Park Kanchanaburi",
      "Jeath War Museum",
      "River Kwai Bridge",
      "Elephant World",
      "Kanchanaburi - Train Ride",
      "Bubble in the Forest",
      "After the Rain Coffee",
    ],
  },
];
```

- [ ] **Step 2: Implement `DayToursSection` Component**

Create `DayToursSection` within `app/packages/asia/thailand/page.tsx` that:
1. Displays a section title: **"PRIVATE VIP VAN DAY TOURS"** with a badge: `"₱14,499 · 12-15 HOURS · 3-10 PERSONS"`.
2. Explains the VIP van inclusions: dedicated private van, professional driver, fuel & toll handling, and custom pace for your party.
3. Renders a grid of cards for each of the 5 tours. Each card features:
   - Tour name, destination tagline, and price pill (`₱14,499`).
   - Badges for `12 - 15 Hours` and `3 to 10 Persons (1 VIP Van)`.
   - Numbered/pinned itinerary stops with neat chips/badges.
   - Dynamic `<QuoteButton tourName={`Thailand - ${tour.name}`} duration={tour.duration} label="BOOK THIS TOUR" />`.

- [ ] **Step 3: Update `InclusionsExclusions` and `Overview` for VIP day tours**

Update inclusions to mention VIP van transfers, driver, and gas/toll, while making clear what is entrance fees or personal meals.

- [ ] **Step 4: Verify TypeScript and compilation**

Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 5: Commit Task 2**

```bash
git add app/packages/asia/thailand/page.tsx
git commit -m "feat(thailand): add 5 VIP van day tour itineraries with messenger quote buttons"
```

---

### Task 3: Full End-to-End Verification

**Files:**
- None (verification only)

- [ ] **Step 1: Test production build**

Run: `npm run build`
Expected: Successful build with all routes compiled.

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:3000/packages/asia` and `http://localhost:3000/packages/asia/thailand`.
Check:
1. Asia overview cards display updated Thailand badge and description.
2. Thailand page displays the VIP Day Tours section with all 5 packages.
3. QuoteButton opens Messenger URL with properly encoded package name and duration, while copying the inquiry message to clipboard.
