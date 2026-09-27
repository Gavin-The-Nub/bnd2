# Home Page Real Data Migration Specification

## 1. Overview
This specification details replacing all placeholder/mockup data on the BND Travel & Tours home page (`app/page.tsx`) with genuine content, real Philippine tour packages, authentic video reviews, verified DOT business accreditations, and official contact and social media channels sourced from existing pages and documents in the repository.

---

## 2. Source Data Mapping

### 2.1 Tour Packages
- **Sources**: `app/packages/local/page.tsx` and `public/localTours/travel_packages.md`
- **Replaces**: Generic Batanes placeholder packages ("Honeymoon Package", "Cultural Heritage Tour", "Island Beach Tour", etc.).
- **Featured Packages Section (3 items)**:
  1. **Buscalan – Sagada (Package 12 & 16)**
     - Route: `/packages/local/buscalan`
     - Duration: 3D / 2N
     - Image: `/pkg-village.jpg`
     - Tag: `MOST POPULAR`
     - Description: "Explore Banaue Rice Terraces, visit legendary tattoo artist Apo Whang Od in Buscalan, and discover Sumaguing Cave and Marlboro Hills in Sagada."
  2. **Vigan – Paoay – Pagudpud (Package 5, 15 & 18)**
     - Route: `/packages/local/ilocos`
     - Duration: 3D / 2N
     - Image: `/pkg-lighthouse.jpg`
     - Tag: `BEST VALUE`
     - Description: "Tour historic Calle Crisologo, UNESCO-listed Paoay Church, 4x4 sand dunes adventure, Kapurpurawan Rock Formation, and Bangui Windmills."
  3. **Baguio City Tour (Package 2 & 17)**
     - Route: `/packages/local/baguio`
     - Duration: 3D / 2N
     - Image: `/pkg-hotel.jpg`
     - Tag: `TOP RATED`
     - Description: "Relax in the summer capital with roundtrip van transfer and guided tour to Burnham Park, Camp John Hay, Mines View, The Mansion, and Strawberry Farm."
- **All Packages Grid Section (6 items)**:
  1. **Hundred Islands, Pangasinan (Package 20)**
     - Route: `/packages/local/hundred-islands`
     - Duration: 3D / 2N
     - Image: `/pkg-beach.jpg`
     - Description: "Boat tour across 14 islands, ziplines, cave cliff jumping at Marcos Island, and pilgrimage shrine for only ₱3,600 per pax."
  2. **Kaparkan Falls & Abra (Package 21)**
     - Route: `/packages/local/kaparkan-abra`
     - Duration: 2D / 1N
     - Image: `/pkg-village.jpg`
     - Description: "Thrilling 6x6 monster truck ride to the terraced cascades of Kaparkan Falls, Lusuac Spring, and historical Abra landmarks."
  3. **Bicol Tricity & Sorsogon (Package 6, 13, 14 & 19)**
     - Route: `/packages/local/bicol`
     - Duration: 3D / 2N
     - Image: `/pkg-village.jpg`
     - Description: "Marvel at Mayon Volcano from Cagsawa Ruins, cruise Sumlang Lake, and go island hopping at Subic Pink Beach in Sorsogon."
  4. **Mt. Pinatubo 4x4 Adventure (Package 11)**
     - Route: `/packages/local/mt-pinatubo`
     - Duration: 1 Day Tour
     - Image: `/pkg-village.jpg`
     - Description: "All-inclusive day trip with 4x4 off-road ride across Crow Valley lahar fields and guided trek to the turquoise crater lake."
  5. **El Nido & Puerto Princesa, Palawan (Package 9 & 22)**
     - Route: `/packages/local/palawan`
     - Duration: 4D / 3N (or 7D / 6N combo)
     - Image: `/pkg-beach.jpg`
     - Description: "UNESCO Subterranean River wonder, pristine island hopping in El Nido's Big Lagoon, Secret Beach, and vibrant marine sanctuaries."
  6. **Cebu Heritage & Coastal Tour (Package 8)**
     - Route: `/packages/local/cebu`
     - Duration: 4D / 3N
     - Image: `/pkg-beach.jpg`
     - Description: "Explore historical landmarks, coastal wonders, and vibrant attractions with dedicated airport-to-hotel private van transfers."
- **Navigation Links**:
  - Each card's "VIEW DETAILS" / "BOOK NOW" action points to `/packages/local/[slug]` and `/request-a-quote`.
  - The "VIEW ALL PACKAGES" CTA button routes to `/packages/local`.

---

### 2.2 Highlights ("Why Choose Us")
- **Sources**: `about.md` and `app/about/page.tsx`
- **Replaces**: Unspoiled Nature / Rich Local Culture (generic Batanes placeholders).
- **Items**:
  1. **DOT Accredited & Trusted Agency**
     - Image: `/pkg-beach.jpg`
     - Title: "DOT Accredited Agency"
     - Description: "Officially accredited by the Department of Tourism (DOT-R4A-TTA-03110-2026), operating with strict safety standards and trusted ground partnerships."
  2. **Dedicated Van Transfers & Tour Coordinators**
     - Image: `/team.jpg`
     - Title: "Hassle-Free Van & Ground Tours"
     - Description: "Travel in comfort with dedicated air-conditioned high-roof vans, professional drivers, complete fuel/toll coverage, and attentive tour coordinators."
  3. **Comprehensive Local & International Packages**
     - Image: `/pkg-lighthouse.jpg`
     - Title: "Custom Curated Itineraries"
     - Description: "From mountain treks in the Cordilleras and tropical getaways in Palawan to custom corporate outings and international flights, we handle every detail."

---

### 2.3 Guest Reviews (Real Video Testimonials)
- **Sources**: `app/reviews/data.ts` and `app/reviews/VideoReelModal.tsx`
- **Replaces**: 3 dummy text reviews (Maria Santos, James Chen, Ana Reyes).
- **Features**:
  - Renders 3 featured video review cards on the home page (e.g. `rev-1`, `rev-2`, `rev-3`).
  - Supports video preview playback on mouse hover (muted).
  - Displays verified guest badge, rating stars, and video poster thumbnail.
  - Clicking a card triggers the real `VideoReelModal` modal player directly on the homepage, allowing users to watch the full vertical video stories with sound, scrub through playback, and navigate between reviews without leaving the page.
  - "VIEW ALL GUEST STORIES" CTA button routes visitors to the full `/reviews` page.

---

### 2.4 Stay In The Loop (Social Media Channels)
- **Sources**: `contact.md` and `app/contact/data.ts`
- **Replaces**: Placeholder URLs (`facebook.com`, `instagram.com`, `youtube.com`).
- **Items**:
  - Facebook: `https://www.facebook.com/SkwitchiTravels` (BND Travel and Tours)
  - Instagram: `https://www.instagram.com/byahe_ni_drew_travel_and_tours`
  - TikTok: `https://www.tiktok.com/@byahe_ni_drew_travel_and_tours`

---

### 2.5 Contact Section & Business Details
- **Sources**: `contact.md` and `app/contact/data.ts`
- **Replaces**: Placeholder Basco Batanes address, placeholder phone number `(+632) 8633 0859`, and placeholder emails.
- **Details**:
  - Enterprise: BND TRAVEL AND TOURS OPC
  - DOT Accreditation: `DOT- R4A- TTA- 03110-2026`
  - Region: Region 4A (CALABARZON) / Batangas, Philippines
  - Phones:
    - Smart / Mobile: `0970 206 5826` (tel: `09702065826`)
    - Landline (Batangas): `043 702 8516` (tel: `0437028516`)
  - Emails:
    - `Bndtravelsales@gmail.com`
    - `Bndtravels01@gmail.com`
  - Messenger Button: Direct link to Facebook Messenger (`https://m.me/SkwitchiTravels`).

---

## 3. Architecture & Component Updates

### 3.1 `app/page.tsx`
- Update package definitions to use typed `LocalTourItem` schema or enriched `Package` type with `slug`, `location`, `duration`, `image`, `desc`, `tag`.
- Replace dummy reviews with `videoReviews` imported from `app/reviews/data`.
- Integrate `VideoReelModal` with state `activeModalIndex: number | null` to support direct video story playback on the home page.
- Update `Highlights`, `StayInTheLoop`, and `Contact` sections with authentic verified data.
- Ensure all interactive links and buttons are functional (links to `/packages/local/[slug]`, `/packages/local`, `/reviews`, `/request-a-quote`, etc.).

---

## 4. Verification Plan
1. **Type Checking & Build**:
   - Run `npx tsc --noEmit` to ensure zero TypeScript errors.
   - Run `npm run build` to verify Next.js page generation.
2. **Interactive UI Verification**:
   - Open home page `http://localhost:3000/`.
   - Verify Featured Packages and All Packages display real Philippine destinations with correct images and links.
   - Hover and click on Video Review cards; verify `VideoReelModal` opens and plays properly.
   - Verify all contact phone numbers, emails, and social links match `contact.md`.
