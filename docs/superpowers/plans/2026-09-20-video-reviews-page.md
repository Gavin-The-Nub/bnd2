# Video-First Reviews Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a video-first Reviews page at `/reviews` that showcases all 6 authentic guest video testimonials from `/public/reviews` in an engaging 9:16 portrait card grid with an interactive TikTok/Reels playback modal.

**Architecture:** A dedicated data definition module (`app/reviews/data.ts`) providing structured metadata for the 6 unique videos, a reusable `VideoReelModal` (`app/reviews/VideoReelModal.tsx`) handling playback, sound, progress, and previous/next carousel navigation, and the main `app/reviews/page.tsx` integrating Hero, Video Wall Grid, Modal, and conversion CTA.

**Tech Stack:** Next.js (App Router), React 19 / TypeScript, Lucide React icons, Vanilla CSS / Tailwind utilities matching the BND Travel & Tours brand aesthetic.

## Global Constraints
- Target route: `app/reviews/page.tsx`
- Video asset source: `/public/reviews/`
- Deduplication: Skip `AQPBFqnpl... (1).mp4` to present only the 6 unique videos
- Aspect ratio: 9:16 vertical orientation
- Brand palette: Deep Navy `#003366`, Amber/Gold `#FF9900` / `#FFD166`, Dark `#001219`
- Responsive design: Mobile (1 column), Tablet (2 columns), Desktop (3 columns)

---

### Task 1: Video Review Data Definition & Unit Test

**Files:**
- Create: `app/reviews/data.ts`
- Create: `tests/reviews-data.test.mjs`

**Interfaces:**
- Produces: `VideoReviewItem` interface, `videoReviews` array

- [ ] **Step 1: Write unit test to verify video review data structure**

Create `tests/reviews-data.test.mjs`:
```javascript
import assert from 'node:assert/strict';
import test from 'node:test';
import { videoReviews } from '../app/reviews/data.ts';

test('videoReviews contains exactly 6 unique videos', () => {
  assert.equal(videoReviews.length, 6);
  const srcSet = new Set(videoReviews.map(r => r.videoSrc));
  assert.equal(srcSet.size, 6);
});

test('videoReviews have required metadata and valid file paths', () => {
  for (const review of videoReviews) {
    assert.ok(review.id, 'Review must have an id');
    assert.ok(review.title, 'Review must have a title');
    assert.ok(review.highlight, 'Review must have a highlight caption');
    assert.ok(review.duration, 'Review must have a duration string');
    assert.equal(review.rating, 5);
    assert.ok(review.videoSrc.startsWith('/reviews/'));
    assert.ok(review.videoSrc.endsWith('.mp4'));
    assert.ok(!review.videoSrc.includes(' (1).mp4'), 'Must not include duplicate (1) file');
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/reviews-data.test.mjs`
Expected: FAIL with module not found or missing file.

- [ ] **Step 3: Implement `app/reviews/data.ts`**

Create `app/reviews/data.ts`:
```typescript
export interface VideoReviewItem {
  id: string;
  title: string;
  tagline: string;
  highlight: string;
  duration: string;
  durationSeconds: number;
  rating: number;
  videoSrc: string;
  tourName: string;
  traveler: string;
}

export const videoReviews: VideoReviewItem[] = [
  {
    id: "rev-1",
    title: "Batanes Island Explorer",
    tagline: "Rolling Hills & Dramatic Coastlines",
    highlight: "Breathtaking landscapes and heartwarming local Ivatan hospitality!",
    duration: "0:20",
    durationSeconds: 20,
    rating: 5,
    videoSrc: "/reviews/AQM0_qeNA_HUr3d8NPJtjQeaFaqKF4FZRrOSe6XePlWcnzjPpdgpf3nadzCAhgePMfTNnLHVbsD0sesQqj4hEeEUrhCf_kW0KoBa72MBlA.mp4",
    tourName: "Batanes Complete Experience",
    traveler: "Verified Guest"
  },
  {
    id: "rev-2",
    title: "Scenic Tour Highlights",
    tagline: "Unforgettable Moments with Family",
    highlight: "Unforgettable memories and an extraordinary itinerary from start to end.",
    duration: "0:26",
    durationSeconds: 26,
    rating: 5,
    videoSrc: "/reviews/AQMRavmBFNB-5iHTKypm78bHiBLhnJJRmm-xoSesyBuxG58pNbXewY7gatamMqpmA7sdti3FasVV5YBB_P4x-Ap7QD7HP6y9rzI1FtZpiA.mp4",
    tourName: "Scenic Northern Wonders",
    traveler: "Verified Guest"
  },
  {
    id: "rev-3",
    title: "Highland & Coast Adventure",
    tagline: "Seamless & Well-Organized",
    highlight: "Seamless tour coordination from start to finish—10/10 recommend to all!",
    duration: "0:18",
    durationSeconds: 18,
    rating: 5,
    videoSrc: "/reviews/AQO8i4L0CmgF-tZkuwlnBqHX2BgHUp0Yo7jETSxEHQD6-BGF36SbtlE30g8Y1_ovOWPehV7mC5LeV_Zxg_y3SAhO_0YfEOXdB-DvZJs1Uw.mp4",
    tourName: "Highland Coastline Tour",
    traveler: "Verified Guest"
  },
  {
    id: "rev-4",
    title: "Memorable Group Getaway",
    tagline: "Stress-Free Travel with Friends",
    highlight: "Super friendly tour coordinators and completely hassle-free group travel.",
    duration: "0:40",
    durationSeconds: 40,
    rating: 5,
    videoSrc: "/reviews/AQP76nGSu_2yup_GWynK5bezJArRmaJI2spBMj8GIXqNisYTwh1Kstp_i8ERViKDeKjUh5Cz2Tt6Bf7vT2hOA0IiOOMZzrn6_vRNEjavew.mp4",
    tourName: "Island Group Getaway",
    traveler: "Verified Guest"
  },
  {
    id: "rev-5",
    title: "Authentic Cultural Journey",
    tagline: "Top Hotels & Caring Tour Guides",
    highlight: "The cleanest hotels, top van service, and magical memories that last a lifetime.",
    duration: "0:21",
    durationSeconds: 21,
    rating: 5,
    videoSrc: "/reviews/AQPBFqnpl3oVEUp8gjgO0J65R5CHoI8UvoF_sRCzig65aqog-WJ1s50PEYLaogaAUru4_i4HPVtfrqKTt04DVlH2LpkNJjlvzM7TGoiyoQ.mp4",
    tourName: "Cultural Heritage Tour",
    traveler: "Verified Guest"
  },
  {
    id: "rev-6",
    title: "Paradise Experience",
    tagline: "Dream Vacation Made Effortless",
    highlight: "Truly a dream vacation made effortless and picturesque by BND Travel & Tours.",
    duration: "0:31",
    durationSeconds: 31,
    rating: 5,
    videoSrc: "/reviews/AQPiLzwcPKb38Nzy77pGZhXq1htQ3hwgjri5KeLJZxIBVuj2siMxsQtm1eSSJ5EJYvtec8zVSQjFY16SXGhrLQiRKPv54EcFa4DH0WTJhQ.mp4",
    tourName: "Exclusive Paradise Tour",
    traveler: "Verified Guest"
  }
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/reviews-data.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit data definition**

```bash
git add app/reviews/data.ts tests/reviews-data.test.mjs
git commit -m "feat(reviews): add video review data definitions and test"
```

---

### Task 2: Build `VideoReelModal` Component

**Files:**
- Create: `app/reviews/VideoReelModal.tsx`

**Interfaces:**
- Consumes: `VideoReviewItem` from `./data`
- Props:
  ```typescript
  interface VideoReelModalProps {
    reviews: VideoReviewItem[];
    currentIndex: number | null;
    onClose: () => void;
    onSelectIndex: (index: number) => void;
  }
  ```

- [ ] **Step 1: Implement `VideoReelModal.tsx`**

Features:
- Backdrop blur overlay with close button (`X`), click outside to close.
- Centered 9:16 vertical container (width 380px-440px on desktop, full screen on mobile).
- HTML5 `<video>` element with ref:
  - Autoplay on index change.
  - Video click toggles play/pause.
  - Interactive custom controls bar: Play/Pause button, current time / total duration display, progress scrubber bar, Mute/Unmute button, Fullscreen toggle.
  - Floating Left (`ChevronLeft`) and Right (`ChevronRight`) navigation buttons.
  - Top header overlay with traveler info, verified badge, review counter (e.g. `2 of 6`).
  - Keyboard event listeners: `Escape` calls `onClose()`, `ArrowLeft` goes to previous video, `ArrowRight` goes to next video, `Space` toggles play/pause.
  - Touch swipe support (detect swipe left/right for next/previous on mobile).

- [ ] **Step 2: Commit `VideoReelModal.tsx`**

```bash
git add app/reviews/VideoReelModal.tsx
git commit -m "feat(reviews): implement interactive VideoReelModal component"
```

---

### Task 3: Build Video Reviews Page (`app/reviews/page.tsx`)

**Files:**
- Modify: `app/reviews/page.tsx`

**Features:**
- **Hero Section**:
  - High-resolution hero background with smooth navy gradient overlay (`rgba(0,30,60,0.75)` to `rgba(0,18,25,0.88)`).
  - Floating pill badge: `<Sparkles size={14} /> Authentic Guest Stories`.
  - H1 Title: "Traveler Video Reviews".
  - Subtitle: Real moments, heartfelt smiles, and scenic adventures captured by our happy travelers.
  - Trust bar: 5.0 Star Rating (5 gold stars) • 100% Authentic Traveler Experiences.
- **Filter / Stats Bar**:
  - Quick destination / topic pills: "All Stories", "Batanes", "Group Getaways", "Family & Leisure".
  - Total video reviews counter: `6 Video Testimonials`.
- **Video Card Grid**:
  - 3-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`).
  - Card components:
    - 9:16 aspect ratio container with rounded-2xl corners, subtle border (`border-white/15`), dark gradient overlay.
    - Autoplay muted short clip on mouse enter (or poster/video paused frame).
    - Duration badge (`0:26`) and "Verified Guest" badge.
    - Center pulsating glass play button with icon.
    - Bottom content: Gold stars, review title, quote highlight, and "Watch Video Review" button.
    - Clicking any card opens `VideoReelModal` at that index.
- **Bottom Conversion CTA**:
  - Warm, branded card inviting visitors to embark on their own journey.
  - Direct CTAs: "Request a Quote" (`/request-a-quote`), "Chat on Messenger", and "View Tour Packages".
- **Shared Integrations**:
  - `<Navbar />`, `<Footer />`, `<WhatsApp />`.

- [ ] **Step 1: Implement the new `app/reviews/page.tsx`**
- [ ] **Step 2: Verify TypeScript and compilation via `npm run build` or Next.js build check**
- [ ] **Step 3: Commit `app/reviews/page.tsx`**

```bash
git add app/reviews/page.tsx
git commit -m "feat(reviews): create video-first reviews page with reels grid and CTA"
```

---

### Task 4: Verification and Visual Browser Inspection

**Files:**
- Test: Browser verification at `http://localhost:3000/reviews`

- [ ] **Step 1: Verify route in dev server via curl / HTTP request**
  Check that `http://localhost:3000/reviews` returns status 200 and renders the video cards.
- [ ] **Step 2: Launch browser subagent to interact with the Reviews page**
  - Navigate to `http://localhost:3000/reviews`.
  - Verify cards render with 9:16 aspect ratio, badges, and titles.
  - Click on a video card to open the `VideoReelModal`.
  - Test Next / Previous navigation in modal.
  - Test Mute / Unmute and Play / Pause controls.
  - Test closing modal via `X` or `Escape`.
  - Capture screenshot to confirm visual appeal and flawless UI.
- [ ] **Step 3: Final commit and summary walkthrough**
