# Services Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dedicated, responsive Services page at `/services` showcasing all 8 authentic services from `public/bnd_travel_and_tours_services.md` and insert the "Services" navigation link directly below "Reviews" in the sidebar drawer and header navigation.

**Architecture:** A dedicated data module `app/services/data.ts` provides structured definitions for the 8 services and contact information. `app/components/shared.tsx` and `app/page.tsx` update `navLinks` so Services is positioned directly after Reviews. `app/services/page.tsx` constructs the full page featuring Hero, Contact Information Ribbon, Responsive 8-Card Grid with promotional quotes and direct Messenger/Quote inquiry triggers, and bottom CTA banner.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Lucide React, CSS in JS / Vanilla CSS styling.

## Global Constraints
- Zero fabricated or made-up information; all descriptions, quotes, and contact numbers must strictly match `public/bnd_travel_and_tours_services.md`.
- Sidebar navigation item "Services" must be placed immediately below "Reviews".

---

### Task 1: Services Data & Integrity Test

**Files:**
- Create: `app/services/data.ts`
- Create: `tests/services-data.test.mjs`

**Interfaces:**
- Produces:
  ```typescript
  export interface ServiceItem {
    id: string;
    index: string; // "01", "02", ...
    title: string;
    description: string;
    quote: string;
    icon: string;
  }
  export interface ContactInfo {
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
  }
  export const servicesContactInfo: ContactInfo;
  export const servicesData: ServiceItem[];
  ```

- [ ] **Step 1: Write failing test `tests/services-data.test.mjs`**

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { servicesData, servicesContactInfo } from '../app/services/data.ts';

test('servicesData contains exactly 8 verified services', () => {
  assert.equal(servicesData.length, 8);
  const titles = servicesData.map(s => s.title);
  assert.deepEqual(titles, [
    'Hotel Booking',
    'Local and International Tour',
    'Local and International Ticketing',
    'Van Rental',
    'Educational Tour',
    'Team Building',
    'Insurance',
    'Visa Assistance',
  ]);
});

test('servicesData has accurate descriptions and quotes matching source document', () => {
  const hotel = servicesData.find(s => s.title === 'Hotel Booking');
  assert.equal(hotel.description, 'Book Your Stay and Wake up to Waves and Sunshine.');
  assert.equal(hotel.quote, "Looking for a place to stay when you travel. Don't worry We got you!");

  const van = servicesData.find(s => s.title === 'Van Rental');
  assert.equal(van.description, 'Your adventure is just a key turn away. Reliable van rental for your next getaway!');
  assert.equal(van.quote, 'Dependable like a friend! Reliable service for your travels');
});

test('servicesContactInfo matches official contact details', () => {
  assert.equal(servicesContactInfo.phone, '043 702 8516');
  assert.equal(servicesContactInfo.email, 'Bndtravels01@gmail.com');
  assert.equal(servicesContactInfo.facebook, 'BND Travel and Tours');
  assert.equal(servicesContactInfo.instagram, 'byahe_ni_drew_travel_and_tours');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/services-data.test.mjs`
Expected: FAIL (Cannot find module `../app/services/data.ts`)

- [ ] **Step 3: Implement `app/services/data.ts`**

```typescript
export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  quote: string;
  icon: "hotel" | "compass" | "ticket" | "car" | "graduation-cap" | "users" | "shield-check" | "file-check";
}

export interface ContactInfo {
  phone: string;
  phoneTel: string;
  email: string;
  facebook: string;
  facebookUrl: string;
  instagram: string;
  instagramUrl: string;
}

export const servicesContactInfo: ContactInfo = {
  phone: "043 702 8516",
  phoneTel: "0437028516",
  email: "Bndtravels01@gmail.com",
  facebook: "BND Travel and Tours",
  facebookUrl: "https://www.facebook.com/SkwitchiTravels",
  instagram: "byahe_ni_drew_travel_and_tours",
  instagramUrl: "https://www.instagram.com/byahe_ni_drew_travel_and_tours",
};

export const servicesData: ServiceItem[] = [
  {
    id: "hotel-booking",
    index: "01",
    title: "Hotel Booking",
    description: "Book Your Stay and Wake up to Waves and Sunshine.",
    quote: "Looking for a place to stay when you travel. Don't worry We got you!",
    icon: "hotel",
  },
  {
    id: "local-and-international-tour",
    index: "02",
    title: "Local and International Tour",
    description: "We Travel at your own Comfort.",
    quote: "Adventure awaits—go find it.",
    icon: "compass",
  },
  {
    id: "local-and-international-ticketing",
    index: "03",
    title: "Local and International Ticketing",
    description: "Connecting you to your dream destinations",
    quote: "Your next adventure is only a ticket away!",
    icon: "ticket",
  },
  {
    id: "van-rental",
    index: "04",
    title: "Van Rental",
    description: "Your adventure is just a key turn away. Reliable van rental for your next getaway!",
    quote: "Dependable like a friend! Reliable service for your travels",
    icon: "car",
  },
  {
    id: "educational-tour",
    index: "05",
    title: "Educational Tour",
    description: "Every journey is a new chapter.",
    quote: "Adventures are the best way to learn.",
    icon: "graduation-cap",
  },
  {
    id: "team-building",
    index: "06",
    title: "Team Building",
    description: "Teamwork makes the dream work—and the adventure fun!",
    quote: "Building bonds and breaking barriers.",
    icon: "users",
  },
  {
    id: "insurance",
    index: "07",
    title: "Insurance",
    description: "Flight or Passenger Insurance",
    quote: "We got your safety and comfortable journey",
    icon: "shield-check",
  },
  {
    id: "visa-assistance",
    index: "08",
    title: "Visa Assistance",
    description: "Explore your Dream Places and Destinations",
    quote: "Assisting you is our best priority!",
    icon: "file-check",
  },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/services-data.test.mjs`
Expected: PASS with 3 tests passing.

- [ ] **Step 5: Commit**

```bash
git add app/services/data.ts tests/services-data.test.mjs
git commit -m "feat(services): add verified services data and test suite"
```

---

### Task 2: Navigation & Sidebar Integration

**Files:**
- Modify: `app/components/shared.tsx:39-44`
- Modify: `app/page.tsx:154-159`

- [ ] **Step 1: Update `navLinks` in `app/components/shared.tsx`**

Add `{ label: "Services", href: "/services", children: null }` right below `{ label: "Reviews", href: "/reviews", children: null }`.

- [ ] **Step 2: Update `navLinks` in `app/page.tsx`**

Add `{ label: "Services", href: "/services", children: null }` right below `{ label: "Reviews", href: "#reviews", children: null }`.

- [ ] **Step 3: Verify TypeScript builds without errors**

Run: `npx tsc --noEmit`
Expected: SUCCESS (no type errors).

- [ ] **Step 4: Commit**

```bash
git add app/components/shared.tsx app/page.tsx
git commit -m "feat(navigation): add Services link below Reviews in nav and sidebar drawer"
```

---

### Task 3: Implement Services Page (`app/services/page.tsx`)

**Files:**
- Create: `app/services/page.tsx`

**Interfaces:**
- Consumes: `servicesData`, `servicesContactInfo` from `app/services/data.ts`
- Consumes: `Navbar`, `Footer`, `WhatsApp` from `app/components/shared.tsx`

- [ ] **Step 1: Write `app/services/page.tsx`**

Implement:
- `Hero` component with image `/pkg-lighthouse.jpg`, gradient overlay, title "OUR SERVICES", subtitle "BND Travel and Tours — Services Offered".
- `ContactBar` displaying Phone, Email, Facebook, and Instagram with icons and links.
- `ServicesGrid` displaying all 8 service cards with:
  - Numeric badge (`01` - `08`).
  - Lucide icon in soft orange container (`background: rgba(255,153,0,0.12)`, `color: #FF9900`).
  - Title and exact description.
  - Quote block styled with quotation mark accent and italics.
  - Direct Messenger Inquiry button: opens `https://m.me/SkwitchiTravels?text=Hi%20BND%20Travel%20and%20Tours!%20I%20would%20like%20to%20inquire%20about%20your%20[Title]%20service.`
  - Request Quote button: links to `/request-a-quote?service=[Title]`.
- `BottomCTA` with "Need a Custom Travel Arrangement?" banner and buttons to Request a Quote and Contact Us.
- Full layout wrapping `<Navbar />`, `<main>`, `<Footer />`, `<WhatsApp />`.

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat(services): implement responsive services page with interactive inquiry cards"
```

---

### Task 4: End-to-End Verification

- [ ] **Step 1: Run all test suites**

Run: `node tests/services-data.test.mjs` and `node tests/reviews-data.test.mjs`
Expected: All tests pass.

- [ ] **Step 2: Browser Verification**
- Navigate to `http://localhost:3000/`.
- Open the hamburger menu sidebar drawer and verify "Services" is visible below "Reviews".
- Click "Services" to verify navigation to `http://localhost:3000/services`.
- Verify the 8 cards and contact bar on desktop and mobile viewports.
