# Design Specification: About Us Page Update with Official Data

- **Date:** 2026-09-27
- **Target File:** `app/about/page.tsx`
- **Data Source:** `about.md`
- **Status:** Approved

---

## 1. Overview & Goals

Replace placeholder/mockup content on the About Us page (`app/about/page.tsx`) with verified, official company data provided in `about.md` for **BND Travel and Tours OPC**.
Key requirement from the user: **Do not create mockup data**. All company narratives, mission, vision, and core services must strictly reflect the official text.

---

## 2. Page Structure & Component Design

### 2.1 Hero Section
- **Component:** `Hero`
- **Background:** `/hero.png` or existing hero background with subtle dark overlay (`rgba(0,18,25,0.65)`).
- **Heading:** "About Us"
- **Subheading/Eyebrow:** "BND Travel and Tours OPC"
- **Typography & Styling:** Consistent with Figtree font token and site navigation aesthetic.

### 2.2 About the Company Section
- **Component:** `AboutCompany`
- **Eyebrow:** "ABOUT THE COMPANY"
- **Signature Wave:** Reusable SVG wave accent matching the company branding.
- **Narrative Content (exact from `about.md`):**
  - "BND Travel and Tours OPC is a dynamic travel service provider based in Batangas, Philippines, committed to delivering exceptional travel experiences through carefully curated packages and reliable travel solutions."
  - "Founded with a vision to make travel more accessible, convenient, and memorable, the company specializes in organizing both local and international trips for individuals, families, corporate clients, and groups."
  - "We pride ourselves on professionalism, strong industry partnerships, and a customer-first approach in every transaction."

### 2.3 Mission & Vision Section
- **Component:** `MissionVision`
- **Container:** Two-column grid with clean card containers on brand background tint (`#BACCDF`).
- **Mission Card:**
  - Icon: Flag / Target / Compass badge.
  - Title: "OUR MISSION"
  - Copy: "BND Travel and Tours is committed to providing comfortable, safe, and hassle-free travel experiences. We aim to deliver well-planned and detailed itineraries while ensuring every client enjoys a smooth and relaxing journey. Your comfort and satisfaction are our priority, and your smile is the energy that drives us to make every trip memorable."
- **Vision Card:**
  - Icon: Eye / Globe / Rocket badge.
  - Title: "OUR VISION"
  - Copy: "To become a reputable and trusted travel and tours company recognized for excellence in service, operational efficiency, and customer-focused travel solutions, while continuously enhancing comfort, safety, and overall travel experience."

### 2.4 Core Services Section
- **Component:** `CoreServices`
- **Eyebrow:** "OUR EXPERTISE"
- **Heading:** "Core Services"
- **4 Cards (exact list from `about.md`):**
  1. **Local & International Tour Packages** (links to `/packages`)
  2. **Hotel and Resort Reservations** (links to `/services`)
  3. **Flight Booking Assistance** (links to `/services`)
  4. **Visa Processing Assistance** (links to `/services`)
- **Card Design:** Elevated white cards, subtle border, interactive hover transition, clean typography.

### 2.5 Call to Action (CTA) Banner
- **Component:** `BottomBanner`
- **Background:** High-res scenic banner with brand overlay.
- **Heading:** "PLAN YOUR JOURNEY WITH BND TRAVEL & TOURS"
- **Body:** "From curated local getaways to international adventures, we make every trip smooth and memorable."
- **Actions:**
  - "Explore Tour Packages" (`/packages`)
  - "Contact Us" (`/contact`)

### 2.6 Removal of Mockup Artifacts
- Remove old Batanes dummy story and generic advantage cards.
- Remove fake accreditation numbers (`TOP-R02-00003024-1701-2018`) and unverified PHILTOA mockup badge.

---

## 3. Verification & Testing

1. Validate Next.js compile/lint: Run `npm run build` or Next.js typecheck to ensure zero syntax or build errors.
2. Responsive layout verification: Verify layout integrity on desktop (1400px), tablet (768px), and mobile (375px) viewports.
3. Content review: Verify all text matches `about.md` without omission or extraneous mockup text.
