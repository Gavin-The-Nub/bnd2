# Home Page Real Data Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove all placeholder/mockup content on the BND Travel & Tours home page (`app/page.tsx`) and replace it with verified data from the existing local packages, authentic video reviews, DOT business details, and official contact channels.

**Architecture:** Update `app/page.tsx` with structured tour packages linking to `/packages/local/[slug]`, integrate `VideoReelModal` and `videoReviews` for interactive video testimonials on the homepage, and replace placeholder contact/socials with verified data from `app/contact/data.ts`.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Vanilla CSS styles, Lucide React icons.

## Global Constraints
- Do NOT use placeholder/mock data anywhere on `app/page.tsx`.
- All phone numbers, emails, social handles, and DOT accreditation must match `contact.md` and `app/contact/data.ts`.
- Package links must navigate to active local tour routes: `/packages/local/buscalan`, `/packages/local/ilocos`, `/packages/local/baguio`, `/packages/local/hundred-islands`, `/packages/local/kaparkan-abra`, `/packages/local/bicol`, `/packages/local/mt-pinatubo`, `/packages/local/palawan`, `/packages/local/cebu`.
- Video reviews must consume `videoReviews` from `app/reviews/data.ts` and interactive playback must open `VideoReelModal` from `app/reviews/VideoReelModal.tsx`.

---

### Task 1: Update Tour Packages Data & Cards in `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Package details from `public/localTours/travel_packages.md` and `app/packages/local/page.tsx`.
- Produces: `HomePackage` interface, `featuredPackages`, `morePackages`, and updated `PackageCard` with active links.

- [ ] **Step 1: Define `HomePackage` interface and real package dataset in `app/page.tsx`**

```tsx
interface HomePackage {
  id: number;
  slug: string;
  image: string;
  title: string;
  duration: string;
  location: string;
  stars: number;
  desc: string;
  tag?: string;
}

const featuredPackages: HomePackage[] = [
  {
    id: 1,
    slug: "buscalan",
    image: "/pkg-village.jpg",
    title: "Buscalan – Sagada Tour",
    duration: "3D / 2N",
    location: "Kalinga & Mt. Province",
    stars: 5,
    desc: "Explore Banaue Rice Terraces, visit legendary tattoo artist Apo Whang Od in Buscalan, and discover Sumaguing Cave and Marlboro Hills in Sagada.",
    tag: "MOST POPULAR",
  },
  {
    id: 2,
    slug: "ilocos",
    image: "/pkg-lighthouse.jpg",
    title: "Vigan – Paoay – Pagudpud",
    duration: "3D / 2N",
    location: "Ilocos Norte & Sur",
    stars: 5,
    desc: "Tour historic Calle Crisologo, UNESCO-listed Paoay Church, 4x4 sand dunes adventure, Kapurpurawan Rock Formation, and Bangui Windmills.",
    tag: "BEST VALUE",
  },
  {
    id: 3,
    slug: "baguio",
    image: "/pkg-hotel.jpg",
    title: "Baguio City Tour",
    duration: "3D / 2N",
    location: "Baguio City, Benguet",
    stars: 5,
    desc: "Relax in the summer capital with roundtrip van transfer and guided tour to Burnham Park, Camp John Hay, Mines View, The Mansion, and Strawberry Farm.",
    tag: "TOP RATED",
  },
];

const morePackages: HomePackage[] = [
  {
    id: 4,
    slug: "hundred-islands",
    image: "/pkg-beach.jpg",
    title: "Hundred Islands",
    duration: "3D / 2N",
    location: "Alaminos, Pangasinan",
    stars: 5,
    desc: "Boat tour across 14 islands, ziplines, cave cliff jumping at Marcos Island, and pilgrimage shrine with full accommodation for only ₱3,600/pax.",
  },
  {
    id: 5,
    slug: "kaparkan-abra",
    image: "/pkg-village.jpg",
    title: "Kaparkan Falls & Abra",
    duration: "2D / 1N",
    location: "Tineg & Bangued, Abra",
    stars: 5,
    desc: "Thrilling 6x6 monster truck ride to the terraced cascades of Kaparkan Falls, Lusuac Spring, and historical Abra landmarks.",
  },
  {
    id: 6,
    slug: "bicol",
    image: "/pkg-village.jpg",
    title: "Bicol Tricity & Sorsogon",
    duration: "3D / 2N",
    location: "Albay & Sorsogon",
    stars: 5,
    desc: "Marvel at Mayon Volcano from Cagsawa Ruins, cruise Sumlang Lake, and go island hopping at Subic Pink Beach in Sorsogon.",
  },
  {
    id: 7,
    slug: "mt-pinatubo",
    image: "/pkg-village.jpg",
    title: "Mt. Pinatubo 4x4 Adventure",
    duration: "1D Tour",
    location: "Capas, Tarlac & Zambales",
    stars: 5,
    desc: "All-inclusive day trip with 4x4 off-road ride across Crow Valley lahar fields and guided trek to the turquoise crater lake.",
  },
  {
    id: 8,
    slug: "palawan",
    image: "/pkg-beach.jpg",
    title: "El Nido & Puerto Princesa",
    duration: "4D / 3N",
    location: "Palawan",
    stars: 5,
    desc: "UNESCO Subterranean River wonder, pristine island hopping in El Nido's Big Lagoon, Secret Beach, and vibrant marine sanctuaries.",
  },
  {
    id: 9,
    slug: "cebu",
    image: "/pkg-beach.jpg",
    title: "Cebu Cultural & Coastal",
    duration: "4D / 3N",
    location: "Cebu, Visayas",
    stars: 5,
    desc: "Explore Cebu's historical landmarks, coastal wonders, and vibrant attractions with dedicated airport-to-hotel private van transfers.",
  },
];
```

- [ ] **Step 2: Update `PackageCard`, `FeaturedPackages`, and `AllPackages` components**

Update `PackageCard` to:
- Show duration and location metadata.
- Wrap card and "BOOK NOW" buttons in `<Link href={`/packages/local/${pkg.slug}`}>` and provide a secondary quote button or direct booking action.
- Update "VIEW ALL PACKAGES" button to be a `<Link href="/packages/local">`.

- [ ] **Step 3: Test compilation**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): replace mock packages with authentic local tour packages"
```

---

### Task 2: Replace Mock Highlights with Real Company Strengths

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Company information from `about.md` and `app/about/page.tsx`.
- Produces: Updated `highlights` array and `Highlights` component.

- [ ] **Step 1: Replace `highlights` array in `app/page.tsx`**

```tsx
const highlights = [
  {
    image: "/pkg-beach.jpg",
    title: "DOT Accredited Agency",
    desc: "Officially accredited by the Department of Tourism (DOT-R4A-TTA-03110-2026) based in Batangas, operating with the highest standards of safety and hospitality.",
  },
  {
    image: "/team.jpg",
    title: "Hassle-Free Ground Tours",
    desc: "Travel comfortably in fully air-conditioned high-roof vans with professional drivers, fuel & toll coverage, and dedicated tour coordinators on every trip.",
  },
  {
    image: "/pkg-lighthouse.jpg",
    title: "Custom Curated Itineraries",
    desc: "Over 24+ comprehensive tour packages across the Cordilleras, Luzon, Visayas, Mindanao, and Asia tailored for joiners, barkadas, and corporate outings.",
  },
];
```

- [ ] **Step 2: Update `Highlights` section header label and title**

Change title to:
```tsx
<SectionHeader
  label="WHY CHOOSE US"
  title="WHAT MAKES BND YOUR TRUSTED TRAVEL PARTNER?"
  dark
/>
```

- [ ] **Step 3: Test compilation**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): update why choose us highlights with real company details"
```

---

### Task 3: Replace Testimonials with Real Video Reviews & Interactive Modal

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `videoReviews` from `app/reviews/data.ts`, `VideoReelModal` from `app/reviews/VideoReelModal.tsx`.
- Produces: `VideoReviewsSection` on the home page with hover preview and modal playback.

- [ ] **Step 1: Import video reviews data and modal component in `app/page.tsx`**

```tsx
import { Play } from "lucide-react";
import { videoReviews, VideoReviewItem } from "./reviews/data";
import VideoReelModal from "./reviews/VideoReelModal";
```

- [ ] **Step 2: Implement HomeVideoCard component**

Create `HomeVideoCard`:
- Accepts `review: VideoReviewItem`, `index: number`, `onOpenModal: (index: number) => void`.
- Includes `<video>` ref for preview on mouse hover (`muted`, `loop`, `playsInline`).
- Center play button overlay with hover animations.
- Verified guest badge and star rating.

- [ ] **Step 3: Replace `Testimonials` with `HomeVideoReviews` in `app/page.tsx`**

Implement `HomeVideoReviews`:
- Section header: `label="GUEST STORIES" title="AUTHENTIC VIDEO REVIEWS FROM OUR TRAVELERS"`.
- Displays top 3 video reviews in a responsive grid.
- Has "VIEW ALL GUEST STORIES" CTA button linking to `/reviews`.
- Renders `VideoReelModal` wired to `activeModalIndex` state.

- [ ] **Step 4: Test compilation**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): integrate authentic video reviews and modal player"
```

---

### Task 4: Replace Mock Contact & Social Media with Verified Business Details

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `contactData` from `app/contact/data.ts` and `SKWITCHI_MESSENGER_URL` from `app/lib/messenger.ts`.
- Produces: Updated `StayInTheLoop` and `Contact` components with authentic channels.

- [ ] **Step 1: Update `StayInTheLoop` social media links**

Update socials array:
```tsx
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SkwitchiTravels",
    bg: "#1877F2",
    icon: (/* Facebook SVG */),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/byahe_ni_drew_travel_and_tours",
    bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: (/* Instagram SVG */),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@byahe_ni_drew_travel_and_tours",
    bg: "#000000",
    icon: (/* TikTok SVG */),
  },
];
```

- [ ] **Step 2: Update `Contact` component with official BND details**

Replace fake contact info with:
- Phone: Smart `0970 206 5826` (`tel:09702065826`), Landline `043 702 8516` (`tel:0437028516`).
- Emails: `Bndtravelsales@gmail.com` and `Bndtravels01@gmail.com`.
- Business: BND TRAVEL AND TOURS OPC.
- DOT Accreditation: `DOT- R4A- TTA- 03110-2026` (Region 4A CALABARZON).
- Location: Batangas, Philippines.
- Chat on Messenger button linking to `https://m.me/SkwitchiTravels`.

- [ ] **Step 3: Test compilation**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): update contact section and social media with official business details"
```

---

### Task 5: Build Verification & End-to-End Testing

**Files:**
- Verify: `app/page.tsx`

- [ ] **Step 1: Run TypeScript typecheck**

Run: `npx tsc --noEmit`
Expected: Exit code 0, 0 errors.

- [ ] **Step 2: Run Next.js production build check**

Run: `npm run build`
Expected: Successfully generated all static routes and App Router bundles.

- [ ] **Step 3: Browser verification**

- Open `http://localhost:3000/`.
- Verify Featured Packages cards show real packages (Buscalan, Ilocos, Baguio) with working links.
- Verify All Packages grid cards show real packages (Hundred Islands, Kaparkan, Bicol, Mt. Pinatubo, Palawan, Cebu).
- Verify Video Reviews section loads authentic guest video cards, hover preview functions, and clicking opens `VideoReelModal`.
- Verify Contact section displays official Batangas enterprise details, DOT accreditation, phone numbers, and working Messenger link.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore(home): finalize real data migration on home page"
```
