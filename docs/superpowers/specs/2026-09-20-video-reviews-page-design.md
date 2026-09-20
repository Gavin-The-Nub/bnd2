# Video-First Reviews Page Specification

## Overview
A high-converting, modern, video-first Reviews page for BND Travel & Tours (`/reviews`), showcasing authentic guest video testimonials from `/public/reviews` in a 9:16 vertical TikTok/Instagram Reels style card grid with an immersive interactive playback modal.

---

## 1. Video Data & Deduplication

Six distinct guest video testimonials are located in `/public/reviews`:

1. `AQM0_qeNA_HUr3d8NPJtjQeaFaqKF4FZRrOSe6XePlWcnzjPpdgpf3nadzCAhgePMfTNnLHVbsD0sesQqj4hEeEUrhCf_kW0KoBa72MBlA.mp4` (Duration: ~20s)
   - **ID**: `rev-1`
   - **Tag**: Batanes Island Explorer
   - **Highlight**: "Breathtaking landscapes and heartwarming local hospitality!"
   - **Rating**: 5.0

2. `AQMRavmBFNB-5iHTKypm78bHiBLhnJJRmm-xoSesyBuxG58pNbXewY7gatamMqpmA7sdti3FasVV5YBB_P4x-Ap7QD7HP6y9rzI1FtZpiA.mp4` (Duration: ~26s)
   - **ID**: `rev-2`
   - **Tag**: Scenic Tour Highlights
   - **Highlight**: "Unforgettable moments with family and an extraordinary itinerary."
   - **Rating**: 5.0

3. `AQO8i4L0CmgF-tZkuwlnBqHX2BgHUp0Yo7jETSxEHQD6-BGF36SbtlE30g8Y1_ovOWPehV7mC5LeV_Zxg_y3SAhO_0YfEOXdB-DvZJs1Uw.mp4` (Duration: ~18s)
   - **ID**: `rev-3`
   - **Tag**: Highland & Coast Adventure
   - **Highlight**: "Seamless tour coordination from start to finish—10/10 recommend!"
   - **Rating**: 5.0

4. `AQP76nGSu_2yup_GWynK5bezJArRmaJI2spBMj8GIXqNisYTwh1Kstp_i8ERViKDeKjUh5Cz2Tt6Bf7vT2hOA0IiOOMZzrn6_vRNEjavew.mp4` (Duration: ~40s)
   - **ID**: `rev-4`
   - **Tag**: Memorable Group Getaway
   - **Highlight**: "Super friendly tour coordinators and stress-free travel."
   - **Rating**: 5.0

5. `AQPBFqnpl3oVEUp8gjgO0J65R5CHoI8UvoF_sRCzig65aqog-WJ1s50PEYLaogaAUru4_i4HPVtfrqKTt04DVlH2LpkNJjlvzM7TGoiyoQ.mp4` (Duration: ~21s)
   - **ID**: `rev-5`
   - **Tag**: Authentic Cultural Journey
   - **Highlight**: "The cleanest hotels, top van service, and magical memories."
   - **Rating**: 5.0
   *(Note: The duplicate file `... (1).mp4` in `/public/reviews` is excluded to prevent redundancy)*

6. `AQPiLzwcPKb38Nzy77pGZhXq1htQ3hwgjri5KeLJZxIBVuj2siMxsQtm1eSSJ5EJYvtec8zVSQjFY16SXGhrLQiRKPv54EcFa4DH0WTJhQ.mp4` (Duration: ~31s)
   - **ID**: `rev-6`
   - **Tag**: Paradise Experience
   - **Highlight**: "Truly a dream vacation made effortless by BND Travel & Tours."
   - **Rating**: 5.0

---

## 2. Page Architecture & Components

File: `app/reviews/page.tsx`

### Component Breakdown
1. **Hero Section (`Hero`)**:
   - Background image with deep navy gradient overlay (`rgba(0,30,60,0.75)` to `rgba(0,18,25,0.88)`).
   - Badge: Sparkles icon + "Authentic Guest Stories".
   - Heading: "Traveler Video Reviews".
   - Subheading with trust metrics: ★★★★★ 5.0 Star Rating • Real Experiences from Cherished Guests.

2. **Video Wall Grid (`VideoReviewsGrid`)**:
   - Container: `max-w-7xl mx-auto px-4 py-16`.
   - Grid: Responsive 3 columns on desktop, 2 columns on tablet, 1 column on mobile.
   - Cards (`VideoCard`):
     - Aspect ratio: 9:16 portrait.
     - Smooth video element (muted, plays inline preview on hover/touch).
     - Gradient overlay for text legibility.
     - Top pill badges: "Verified Guest" (with checkmark) and duration badge (e.g. "0:26").
     - Center: Floating glassmorphic Play button with hover transition.
     - Bottom content: Title tag, quote snippet, 5 star rating, and "Watch Story" action indicator.

3. **Reel Modal Player (`VideoReelModal`)**:
   - Cinema overlay: Dark blurred backdrop (`backdrop-blur-md bg-black/85`).
   - Center 9:16 vertical player (max-w-[420px], max-h-[85vh] on desktop, full-screen on mobile).
   - Controls:
     - Close button (`X` icon, top-right).
     - Play/Pause toggle on video tap.
     - Bottom scrub bar / timeline with elapsed time and total duration.
     - Sound / Volume toggle (Mute / Unmute).
     - Fullscreen toggle.
     - Previous & Next buttons with keyboard arrow navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
     - Counter: "Review X of 6".

4. **Call to Action Banner (`BottomCTA`)**:
   - Engaging call to action: "Ready to Experience Your Own Dream Getaway?"
   - Direct buttons: "Request a Custom Quote" (`/request-a-quote`), "Chat on Messenger", and "Browse Tour Packages" (`/packages/asia` / `/packages/local`).

5. **Shared Layout Integrations**:
   - `<Navbar />`
   - `<Footer />`
   - `<WhatsApp />`

---

## 3. Interaction & Accessibility Details
- Preload: Poster frame / metadata preload for responsive load times.
- Autoplay Policy: On desktop hover, video previews are strictly `muted` to respect browser autoplay policies. The modal player plays with sound upon direct user trigger.
- Mobile friendly: Touch swipe or bottom thumb controls for previous/next review.
- Keyboard support: `Escape` closes modal, `ArrowLeft` and `ArrowRight` navigate through reviews, `Space` toggles play/pause.

---

## 4. Verification Plan
- Build / Type check: Run `npm run build` or verify with dev server.
- Browser test: Load `http://localhost:3000/reviews`.
- Verify all 6 videos load correctly.
- Test hover preview, modal open, audio unmute, progress bar, next/previous buttons, and keyboard shortcuts.
