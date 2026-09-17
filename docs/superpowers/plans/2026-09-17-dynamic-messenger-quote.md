# Dynamic Messenger Quote System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static contact form and quote buttons into a dynamic Facebook Messenger inquiry system where buttons directly launch `m.me/SkwitchiTravels` with pre-filled, tour-specific inquiry messages (e.g. Bataan), and replace the standalone `/request-a-quote` form with an interactive Messenger Quote Hub.

**Architecture:** A centralized helper (`app/lib/messenger.ts`) formats and encodes pre-filled Messenger deep links pointing to `https://m.me/SkwitchiTravels?text=...`. Tour package pages dynamically build links including their package title, duration, and details. The `/request-a-quote` page is redesigned into an interactive Messenger Hub featuring quick-select tour chips, dynamic preview, and instant chat redirection.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Lucide React, Node.js Test Runner.

## Global Constraints
- Target Facebook page: `https://www.facebook.com/SkwitchiTravels`
- Messenger link structure: `https://m.me/SkwitchiTravels?text=${encodeURIComponent(message)}`
- External links must specify: `target="_blank" rel="noopener noreferrer"`
- Must preserve styling aesthetic (brand navy `#003366`, gold `#FF9900`, Figtree typography).

---

### Task 1: Messenger Helper Module & Tests

**Files:**
- Create: `app/lib/messenger.ts`
- Test: `tests/messenger.test.mjs`

**Interfaces:**
- Produces:
  ```typescript
  export interface QuoteRequestParams {
    tourName?: string;
    duration?: string;
    pageUrl?: string;
    customNotes?: string;
    guests?: number | string;
    dates?: string;
  }
  export function buildQuoteMessage(params?: QuoteRequestParams): string;
  export function getMessengerQuoteUrl(params?: QuoteRequestParams): string;
  ```

- [ ] **Step 1: Write the unit test**
Create `tests/messenger.test.mjs` testing that `buildQuoteMessage` formats tour messages with tour name, duration, and URL, and that `getMessengerQuoteUrl` properly encodes the parameters into `https://m.me/SkwitchiTravels?text=...`.

- [ ] **Step 2: Run test to verify it fails**
Run: `node --test tests/messenger.test.mjs`
Expected: FAIL (module not found)

- [ ] **Step 3: Write minimal implementation in `app/lib/messenger.ts`**
Implement `buildQuoteMessage` and `getMessengerQuoteUrl` with clean URL encoding.

- [ ] **Step 4: Run test to verify it passes**
Run: `node --test tests/messenger.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add app/lib/messenger.ts tests/messenger.test.mjs
git commit -m "feat: add messenger quote url builder utility and tests"
```

---

### Task 2: Dynamic Messenger Quote on Bataan Tour Page

**Files:**
- Modify: `app/packages/local/bataan/page.tsx:90-100` and `200-210`

**Interfaces:**
- Consumes: `getMessengerQuoteUrl` from `app/lib/messenger.ts`

- [ ] **Step 1: Update Bataan tour page**
Import `getMessengerQuoteUrl`. Replace the static `<Link href="/request-a-quote">` buttons (in `Overview` sidebar and `BookingCTA` section) with an `<a>` tag pointing to `getMessengerQuoteUrl({ tourName: tour.name, duration: tour.duration })` with `target="_blank" rel="noopener noreferrer"`.
Add a subtle chat icon or indicator for clarity.

- [ ] **Step 2: Verify TypeScript & Build**
Run: `npx tsc --noEmit`
Expected: Zero errors.

- [ ] **Step 3: Commit**
```bash
git add app/packages/local/bataan/page.tsx
git commit -m "feat(bataan): connect quote buttons to dynamic messenger link"
```

---

### Task 3: Roll Out Dynamic Messenger Quote to Remaining Tour Pages

**Files:**
- Modify: Local tours:
  - `app/packages/local/sagada/page.tsx`
  - `app/packages/local/siquijor/page.tsx`
  - `app/packages/local/bacolod/page.tsx`
  - `app/packages/local/siargao/page.tsx`
  - `app/packages/local/batanes/page.tsx`
  - `app/packages/local/buscalan/page.tsx`
  - `app/packages/local/cebu/page.tsx`
- Modify: Asia tours:
  - `app/packages/asia/vietnam/page.tsx`
  - `app/packages/asia/thailand/page.tsx`
  - `app/packages/asia/japan/page.tsx`
  - `app/packages/asia/taiwan/page.tsx`

**Interfaces:**
- Consumes: `getMessengerQuoteUrl` from `app/lib/messenger.ts`

- [ ] **Step 1: Update local tour pages**
Connect "GET A QUOTE" and "REQUEST A QUOTE" to `getMessengerQuoteUrl` with each page's `tour.name` and `tour.duration`.

- [ ] **Step 2: Update Asia tour pages**
Connect quote buttons in Asia tour templates to `getMessengerQuoteUrl`.

- [ ] **Step 3: Verify TypeScript & Build**
Run: `npx tsc --noEmit`
Expected: Zero errors.

- [ ] **Step 4: Commit**
```bash
git add app/packages/local/ app/packages/asia/
git commit -m "feat: connect all tour pages to dynamic messenger quote links"
```

---

### Task 4: Modernize `/request-a-quote` Page into Messenger Inquiry Hub

**Files:**
- Modify: `app/request-a-quote/page.tsx`

**Interfaces:**
- Consumes: `getMessengerQuoteUrl`, `buildQuoteMessage` from `app/lib/messenger.ts`

- [ ] **Step 1: Implement Messenger Hub UI**
Replace the static `<form>` with the Messenger Quote Hub:
1. Destination quick-select chips (Batanes, Bataan, Sagada, Siargao, Cebu, Buscalan, Bacolod, Japan, Vietnam, Thailand, Taiwan, Custom/Other).
2. Approximate dates & guest count optional inputs that automatically update the pre-filled message.
3. Live chat bubble preview of the message.
4. High-contrast, brand-aligned "Chat on Messenger" button linking directly to `https://m.me/SkwitchiTravels?text=...`.
5. Support URL search parameter (e.g. `/request-a-quote?tour=Bataan`) to automatically pre-select that destination when arriving from an external link.

- [ ] **Step 2: Verify in browser / TypeScript**
Run: `npx tsc --noEmit`
Expected: Zero errors.

- [ ] **Step 3: Commit**
```bash
git add app/request-a-quote/page.tsx
git commit -m "feat: redesign request-a-quote into interactive messenger hub"
```

---

### Task 5: End-to-End Verification

- [ ] **Step 1: Run unit tests**
Run: `node --test tests/messenger.test.mjs`
Expected: All tests pass.

- [ ] **Step 2: Run typecheck and production build**
Run: `npm run build`
Expected: Build passes with 0 errors.

- [ ] **Step 3: Verify Bataan page in browser**
Navigate to `http://localhost:3000/packages/local/bataan` and verify "GET A QUOTE" button target URL points to `https://m.me/SkwitchiTravels?text=...Bataan...`.
Navigate to `http://localhost:3000/request-a-quote` and test destination chip selection and message preview updates.
