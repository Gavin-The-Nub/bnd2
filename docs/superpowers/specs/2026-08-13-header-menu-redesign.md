# Header and Menu Redesign Specification

## Overview
Redesign the existing website header and mobile navigation drawer for BND Travel & Tours to match the minimalist header layout and detailed off-canvas side drawer shown in the reference screenshots (Liko theme style), without a cart icon, while preserving all existing navigation links, dropdown routes, and styling conventions.

## Header Structure
- **Left**: BND Travel & Tours brand logo linking to `/`.
- **Center (Desktop)**: Centered horizontal navigation bar featuring all existing navigation items:
  - `Home` (`/`)
  - `BND Packages` (Dropdown: `Local Land Tour` -> `/packages/local`, `Asia Tour` -> `/packages/asia`)
  - `Travel Guides` (Dropdown: `Flights` -> `/flights`, `Reminders Before Arrival` -> `/reminders-before-arrival`, `Calendar of Events` -> `/calendar-of-events`, `Payment Option` -> `/payment-option`, `FAQs` -> `/faqs`)
  - `Gallery` (`/gallery`)
  - `Reviews` (`/reviews`)
  - `About Us` (`/about`)
  - `Contact Us` (`/contact`)
- **Right**: Clean 2-line minimalist hamburger icon (no cart icon).
- **Responsive behavior**: On desktop (>= 1024px), show center navigation links + right hamburger icon. On tablet/mobile (< 1024px), hide center links and rely on the right hamburger icon to open the drawer.

## Off-Canvas Side Drawer
Triggers when clicking the header hamburger button. Slides in from the right overlay with smooth CSS transition (`translateX`).
- **Header**: Large BND Logo + `✕` Close Button.
- **Intro Section**:
  - Title: "Hello There!" / "Welcome to BND Travel & Tours!"
  - Description: Brief intro to BND Travel & Tours as the premier guide in Batanes.
- **Gallery Grid**: 4 thumbnail images (e.g. Batanes landscapes / tour preview images).
- **Mobile Navigation Menu**: Complete interactive menu with accordion/dropdown toggles for sub-items.
- **Information Section**:
  - Phone: `(+632) 8633 0859`
  - Email: `info@bndtravelandtours.com`
  - Address: `Amboy Street, Kayhuvokan Basco, Batanes, 3900`
- **Follow Us Section**:
  - Social media icon badges (Facebook, Instagram, YouTube).

## Implementation Target
- File to update: `app/components/shared.tsx` (the `Navbar` component exported and used across all pages).
