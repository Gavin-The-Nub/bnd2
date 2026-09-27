# Contact Page Uniformity Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-architect and restyle `app/contact/page.tsx` to match the exact visual design system, hero aesthetic, signature wave accents, and bottom CTA banner established on the About Us and Gallery pages.

**Architecture:** Maintain a clean separation between data (`app/contact/data.ts`) and presentation (`app/contact/page.tsx`). Implement `Hero`, `WaveDivider`, `ContactSection`, and `BottomBanner` using the brand's Figtree typography tokens, `#003366` / `#BACCDF` color palette, and Next.js image optimization.

**Tech Stack:** Next.js (App Router), TypeScript, Lucide React, CSS in JS / inline styling consistent with `app/about/page.tsx`.

## Global Constraints

- Preserve all verified contact data and links from `contact.md` without omission.
- Do not introduce placeholder/mockup content.
- Hero must use `40vh` min-height 320px with `/hero.png` and `rgba(0,18,25,0.65)` overlay.
- Include brand wave dividers and "LET'S GO AND TRAVEL WITH US" bottom banner.
- Zero build or TypeScript errors.

---

### Task 1: Verify and Update Contact Data & Test Suite

**Files:**
- Modify: `app/contact/data.ts`
- Modify: `tests/contact-data.test.mjs`

**Interfaces:**
- `contactData`: `{ header, tagline, motto, callout, phones, emails, businessDetails, socialLinks }`

- [ ] **Step 1: Check existing test for contact data**
Run `node tests/contact-data.test.mjs` and confirm it validates phone, email, and accreditation fields.

- [ ] **Step 2: Ensure data.ts has all required fields aligned with `contact.md`**
Verify `header`, `tagline`, `motto`, `callout`, `phones`, `emails`, `businessDetails` in `app/contact/data.ts`.

- [ ] **Step 3: Run test to verify it passes**
Run `node tests/contact-data.test.mjs` to ensure all assertions pass.

---

### Task 2: Redesign Contact Page Components in `app/contact/page.tsx`

**Files:**
- Modify: `app/contact/page.tsx`

**Interfaces:**
- `Hero`: Hero section with scenic background image (`/hero.png`), dark overlay, eyebrow `BND Travel and Tours`, title `Contact Us`, tagline `Get To Know Us!`.
- `WaveDivider`: Reusable SVG wave accent.
- `ContactSection`: 2-column responsive layout with `GET IN TOUCH` eyebrow, wave divider, Phone & Email card, Business details, Social Media card with Messenger CTA.
- `BottomBanner`: Scenic CTA banner with `LET'S GO AND TRAVEL WITH US` headline, wave divider, and dual action buttons.

- [ ] **Step 1: Implement `Hero` component with scenic image overlay**
Replace the gradient block with the standard 40vh scenic hero image.

- [ ] **Step 2: Implement `WaveDivider` component**
Add the SVG wave matching the About Us page wave divider.

- [ ] **Step 3: Implement `ContactSection` with uniform cards and typography**
Style the direct contacts and social media cards to match the About Us card system.

- [ ] **Step 4: Implement `BottomBanner` with scenic background and CTA buttons**
Add the bottom banner with links to `/packages` and `/request-a-quote`.

- [ ] **Step 5: Assemble `ContactPage`**
Compose `Navbar`, `Hero`, `ContactSection`, `BottomBanner`, `Footer`, and `WhatsApp`.

---

### Task 3: Build & Verification

**Files:**
- Check: `app/contact/page.tsx`

- [ ] **Step 1: Run Next.js build / typecheck**
Run `npm run build` or `npx tsc --noEmit` to verify zero compile or type errors.

- [ ] **Step 2: Run data test**
Run `node tests/contact-data.test.mjs` to confirm all contact data assertions pass.
