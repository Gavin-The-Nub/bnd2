# BND Travel and Tours - Services Page Specification

## Overview
A dedicated, responsive, high-converting Services page (`/services`) for BND Travel & Tours, highlighting all 8 core services offered by the agency along with verified contact information sourced directly from `public/bnd_travel_and_tours_services.md`. Navigation is integrated into the site header and mobile sidebar off-canvas drawer immediately below the "Reviews" link.

---

## Source Data Integrity (Zero Fabricated Content)
All contact data, descriptions, and promotional quotes originate strictly from `public/bnd_travel_and_tours_services.md`:

### Contact Information
- **Phone**: `043 702 8516` (tel: `tel:0437028516`)
- **Email**: `Bndtravels01@gmail.com` (mailto: `mailto:Bndtravels01@gmail.com`)
- **Facebook**: `BND Travel and Tours` (`https://www.facebook.com/SkwitchiTravels`)
- **Instagram**: `byahe_ni_drew_travel_and_tours` (`https://www.instagram.com/byahe_ni_drew_travel_and_tours`)

### The 8 Services
1. **Hotel Booking**
   - **Description**: Book Your Stay and Wake up to Waves and Sunshine.
   - **Promotional Quote**: *"Looking for a place to stay when you travel. Don't worry We got you!"*
   - **Icon**: `Hotel`

2. **Local and International Tour**
   - **Description**: We Travel at your own Comfort.
   - **Promotional Quote**: *"Adventure awaits—go find it."*
   - **Icon**: `Compass`

3. **Local and International Ticketing**
   - **Description**: Connecting you to your dream destinations
   - **Promotional Quote**: *"Your next adventure is only a ticket away!"*
   - **Icon**: `Ticket`

4. **Van Rental**
   - **Description**: Your adventure is just a key turn away. Reliable van rental for your next getaway!
   - **Promotional Quote**: *"Dependable like a friend! Reliable service for your travels"*
   - **Icon**: `Car`

5. **Educational Tour**
   - **Description**: Every journey is a new chapter.
   - **Promotional Quote**: *"Adventures are the best way to learn."*
   - **Icon**: `GraduationCap`

6. **Team Building**
   - **Description**: Teamwork makes the dream work—and the adventure fun!
   - **Promotional Quote**: *"Building bonds and breaking barriers."*
   - **Icon**: `Users`

7. **Insurance**
   - **Description**: Flight or Passenger Insurance
   - **Promotional Quote**: *"We got your safety and comfortable journey"*
   - **Icon**: `ShieldCheck`

8. **Visa Assistance**
   - **Description**: Explore your Dream Places and Destinations
   - **Promotional Quote**: *"Assisting you is our best priority!"*
   - **Icon**: `FileCheck`

---

## Navigation & Sidebar Integration
In `app/components/shared.tsx` and `app/page.tsx`, the `navLinks` array is updated to position **Services** directly below **Reviews**:

```typescript
export const navLinks = [
  { label: "Home", href: "/", children: null },
  { label: "BND Packages", href: "/packages", children: [...] },
  { label: "Travel Guides", href: "#", children: [...] },
  { label: "Gallery", href: "/gallery", children: null },
  { label: "Reviews", href: "/reviews", children: null },
  { label: "Services", href: "/services", children: null },
  { label: "About Us", href: "/about", children: null },
  { label: "Contact Us", href: "/contact", children: null },
];
```

This guarantees:
- **Mobile / Desktop Sidebar Drawer**: "Services" appears immediately after "Reviews" inside the off-canvas drawer navigation.
- **Desktop Navbar**: "Services" appears between "Reviews" and "About Us" with hover states and styling consistent with existing navbar links.

---

## Page Components & Architecture (`app/services/page.tsx`)

1. **Hero Section (`Hero`)**:
   - Header title: **OUR SERVICES**
   - Subtitle: *"BND Travel and Tours — Services Offered"*
   - Deep navy tinted backdrop (`/pkg-beach.jpg` or `/pkg-lighthouse.jpg` with `#001830` gradient)

2. **Contact Information Bar (`ContactBar`)**:
   - Clean horizontal banner presenting:
     - Phone: `043 702 8516`
     - Email: `Bndtravels01@gmail.com`
     - Facebook: `BND Travel and Tours`
     - Instagram: `byahe_ni_drew_travel_and_tours`
   - All items have clickable actions (`tel:`, `mailto:`, external tab).

3. **Services Grid (`ServicesGrid`)**:
   - Responsive CSS Grid (1 column on mobile, 2 columns on tablet, 3-4 columns on desktop).
   - Each card displays:
     - Number indicator (`01` to `08`) with accent `#FF9900` tag.
     - Lucide icon matching the service domain.
     - Service Title (`h2` / `h3`) with font styling `var(--font-figtree)`.
     - Exact service description.
     - Highlight quote container with decorative quotation marks and italicized quote.
     - Action buttons:
       - **Messenger Inquiry**: Opens `https://m.me/SkwitchiTravels?text=...` prefilled with inquiry for the specific service.
       - **Request Quote**: Links to `/request-a-quote?service=[ServiceName]`.

4. **Call to Action Banner (`BottomCTA`)**:
   - Branded section encouraging inquiries for customized packages.
   - Buttons linking to `/request-a-quote` and `/contact`.

5. **Layout Integration**:
   - Includes `<Navbar />`, `<Footer />`, and `<WhatsApp />` from `app/components/shared.tsx`.

---

## Verification Plan
1. **Unit Test**: Run `node tests/services-data.test.mjs` to verify all 8 services contain required attributes (`id`, `title`, `description`, `quote`, `iconName`) and match source data strictly.
2. **Type Check & Lint**: Run `npx tsc --noEmit` to verify type safety.
3. **Browser Verification**:
   - Load `http://localhost:3000/services`.
   - Verify sidebar drawer opens and shows "Services" directly below "Reviews".
   - Verify desktop navigation displays "Services" directly below/after "Reviews".
   - Verify all 8 service cards render properly on mobile and desktop viewports.
   - Verify Messenger and Quote links work.
