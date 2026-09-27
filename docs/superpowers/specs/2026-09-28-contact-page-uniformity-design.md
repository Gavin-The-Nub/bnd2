# Design Specification: Contact Page Uniformity Redesign

- **Date:** 2026-09-28
- **Target File:** `app/contact/page.tsx`
- **Data File:** `app/contact/data.ts`
- **Data Source:** `contact.md`
- **Status:** Approved

---

## 1. Overview & Goals

Bring the Contact Us page (`app/contact/page.tsx`) into complete visual uniformity with the other core pages on the site (specifically `app/about/page.tsx` and `app/gallery/page.tsx`).
The contact page will adopt the standard scenic hero banner, brand signature wave dividers, card containers, and bottom call-to-action banner, while presenting all official company contact and accreditation information from `contact.md`.

---

## 2. Page Structure & Component Design

### 2.1 Hero Section
- **Component:** `Hero`
- **Background:** High-res scenic photo (`/hero.png`) with dark overlay (`rgba(0,18,25,0.65)`).
- **Height:** `40vh`, minimum height of `320px`, centered flex layout.
- **Eyebrow Tag:** "BND Travel and Tours" (`#BACCDF`, Figtree, uppercase, 3px letter-spacing).
- **Heading:** "Contact Us" (`clamp(32px, 5vw, 48px)`, bold 800, uppercase, `#FFFFFF`).
- **Tagline:** "Get To Know Us!" (`#BACCDF`, font size 15px, 600 weight).

### 2.2 Signature Wave Divider
- **Component:** `WaveDivider`
- **Description:** Reusable SVG wave accent matching the company branding (`#003366` or `#ffffff` depending on background contrast).

### 2.3 Contact & Social Hub Section
- **Component:** `ContactSection`
- **Container:** `max-width: 1100px`, padding `80px 24px`, matching About and Gallery sections.
- **Section Intro:**
  - Eyebrow: "GET IN TOUCH" (`#003366`, 13px, bold 700, 3px letter-spacing).
  - Wave Divider (`#003366`, width 120px).
  - Section Heading: "Reach Out To Us" (`clamp(24px, 3.5vw, 32px)`, bold 800, `#001219`).
- **Two-Column Card Grid:** `gridTemplateColumns: repeat(auto-fit, minmax(min(100%, 460px), 1fr))`, gap 32px.
  - **Left Card: Direct Inquiries & Accreditation**
    - Container: `#FFFFFF` card, 12px border radius, border `1px solid #E2E8F0`, shadow `0 4px 20px rgba(0, 51, 102, 0.05)`.
    - **Phone Contacts**: Vector Phone badge, clickable phone rows (`0970 206 5826`, `043 702 8516`).
    - **Email Contacts**: Vector Mail badge, clickable email rows (`Bndtravelsales@gmail.com`, `Bndtravels01@gmail.com`).
    - **Official Business Details**: ShieldCheck badge, Enterprise name ("BND Travel and Tours") and DOT Accreditation (`DOT- R4A- TTA- 03110-2026`).
  - **Right Card: Social Media & Direct Chat**
    - Container: `#FFFFFF` card, 12px border radius, border `1px solid #E2E8F0`, shadow `0 4px 20px rgba(0, 51, 102, 0.05)`.
    - Eyebrow: "SOCIAL MEDIA" (`#FF9900`).
    - Subtitle: "Check our Social Media to get Information About Us!".
    - Social Media Links with custom SVG badges:
      - Facebook: `BND Travel and Tours`
      - Instagram: `BND Travel and Tours`
      - TikTok: `Byahe_ni_Drew Travel and Tours`
    - Action Button: Direct Facebook Messenger button (`#0084FF`) with Messenger icon.

### 2.4 Bottom Call to Action (CTA) Banner
- **Component:** `BottomBanner`
- **Background:** High-res scenic banner (`/hero.png`) with brand overlay (`rgba(0,18,25,0.72)`).
- **Heading:** "LET'S GO AND TRAVEL WITH US" (uppercase, bold 800, `#FFFFFF`).
- **Accent:** White wave divider (`width: 120px`).
- **Body Copy:** "From curated local getaways to international adventures, we make every trip smooth, comfortable, and memorable."
- **Dual Buttons:**
  - "Explore Tour Packages" (`btn-outline` linking to `/packages`).
  - "Request A Quote" (`btn-primary` linking to `/request-a-quote`).

---

## 3. Verification & Testing

1. **Data Integrity Test:** Run automated unit tests verifying that all emails, phone numbers, and accreditation numbers from `contact.md` match `app/contact/data.ts`.
2. **Build & Typecheck:** Run `npm run build` or Next.js type check to confirm zero TypeScript and syntax errors.
3. **Responsive Visual Verification:** Check render on desktop, tablet, and mobile breakpoints.
