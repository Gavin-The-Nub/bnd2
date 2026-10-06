# Featured & Tour Packages Real Photos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all generic placeholder images (`pkg-village.jpg`, `pkg-lighthouse.jpg`, `pkg-hotel.jpg`, `pkg-beach.jpg`) on the homepage's Featured and Tour Packages sections with verified, authentic real photos of each destination from the internet.

**Architecture:** Download high-resolution, CC-licensed/public domain photography of each authentic landmark into `public/packages/`, verify asset integrity with an automated Node test, and update package image paths in `app/page.tsx`.

**Tech Stack:** Next.js (App Router), TypeScript, Node.js (`test` runner), Sharp / curl for asset optimization.

## Global Constraints
- Target directory: `public/packages/`
- All 8 destinations must feature authentic real photographs of their actual geographical landmarks
- Homepage file modified: `app/page.tsx`
- Must pass `npm run build` without missing image warnings or TypeScript errors

---

### Task 1: Package Assets Integrity Test

**Files:**
- Create: `tests/packages-images.test.mjs`

**Interfaces:**
- Produces: Test suite validating that all 8 destination photos exist in `public/packages/`, are >= 20KB, and start with valid JPEG magic bytes (`0xFF 0xD8 0xFF`).

- [ ] **Step 1: Write the failing test**

Create `tests/packages-images.test.mjs`:
```javascript
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const PACKAGES_DIR = path.resolve("public/packages");

const EXPECTED_IMAGES = [
  "buscalan-sagada.jpg",
  "vigan-ilocos.jpg",
  "baguio-city.jpg",
  "hundred-islands.jpg",
  "kaparkan-abra.jpg",
  "mayon-bicol.jpg",
  "mt-pinatubo.jpg",
  "el-nido-palawan.jpg",
];

test("package images directory exists", () => {
  assert.ok(fs.existsSync(PACKAGES_DIR), "public/packages directory should exist");
});

for (const imgName of EXPECTED_IMAGES) {
  test(`package image ${imgName} exists, is non-empty, and is a valid JPEG`, () => {
    const filePath = path.join(PACKAGES_DIR, imgName);
    assert.ok(fs.existsSync(filePath), `Expected image ${imgName} to exist`);

    const stats = fs.statSync(filePath);
    assert.ok(stats.size > 20000, `Expected ${imgName} size > 20KB, got ${stats.size}`);

    const buffer = Buffer.alloc(3);
    const fd = fs.openSync(filePath, "r");
    fs.readSync(fd, buffer, 0, 3, 0);
    fs.closeSync(fd);

    assert.equal(buffer[0], 0xff, `${imgName} should start with JPEG header 0xFF`);
    assert.equal(buffer[1], 0xd8, `${imgName} should start with JPEG header 0xD8`);
    assert.equal(buffer[2], 0xff, `${imgName} should start with JPEG header 0xFF`);
  });
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/packages-images.test.mjs`
Expected: FAIL (`public/packages directory should exist` or missing files)

- [ ] **Step 3: Commit test file**

```bash
git add tests/packages-images.test.mjs
git commit -m "test: add packages images integrity test"
```

---

### Task 2: Acquire and Place Verified Landmark Real Photos

**Files:**
- Create:
  - `public/packages/buscalan-sagada.jpg`
  - `public/packages/vigan-ilocos.jpg`
  - `public/packages/baguio-city.jpg`
  - `public/packages/hundred-islands.jpg`
  - `public/packages/kaparkan-abra.jpg`
  - `public/packages/mayon-bicol.jpg`
  - `public/packages/mt-pinatubo.jpg`
  - `public/packages/el-nido-palawan.jpg`

**Interfaces:**
- Consumes: Verified public domain / CC Wikimedia Commons URLs of the 8 landmarks
- Produces: 8 optimized JPEG images in `public/packages/` matching the test suite specifications.

- [ ] **Step 1: Download authentic photos for all 8 destinations**

Run a script or curl commands fetching verified Wikimedia Commons high-resolution photography for:
1. `buscalan-sagada.jpg`: Banaue rice terraces / Cordillera mountain landscape
2. `vigan-ilocos.jpg`: Calle Crisologo heritage colonial street in Vigan
3. `baguio-city.jpg`: Burnham Park lake with swan boats and pines
4. `hundred-islands.jpg`: Hundred Islands National Park islands and azure sea
5. `kaparkan-abra.jpg`: Kaparkan (Mulawin) Falls terraced cascades
6. `mayon-bicol.jpg`: Mount Mayon volcano and Cagsawa Ruins
7. `mt-pinatubo.jpg`: Mount Pinatubo turquoise crater lake
8. `el-nido-palawan.jpg`: El Nido Bacuit archipelago karst cliffs & lagoon

- [ ] **Step 2: Run test to verify it passes**

Run: `node --test tests/packages-images.test.mjs`
Expected: PASS (all 9 tests pass)

- [ ] **Step 3: Commit image assets**

```bash
git add public/packages/
git commit -m "feat(packages): add authentic landmark photos for 8 tour destinations"
```

---

### Task 3: Update Homepage Package Data & Build Verification

**Files:**
- Modify: `app/page.tsx:27-115`

**Interfaces:**
- Consumes: Assets in `public/packages/`
- Produces: Updated `featuredPackages` and `morePackages` referencing authentic images.

- [ ] **Step 1: Update package image paths in `app/page.tsx`**

Replace:
```typescript
const featuredPackages: Package[] = [
  {
    id: 1,
    slug: "buscalan",
    image: "/pkg-village.jpg",
...
  {
    id: 2,
    slug: "ilocos",
    image: "/pkg-lighthouse.jpg",
...
  {
    id: 3,
    slug: "baguio",
    image: "/pkg-hotel.jpg",
```
with:
```typescript
const featuredPackages: Package[] = [
  {
    id: 1,
    slug: "buscalan",
    image: "/packages/buscalan-sagada.jpg",
...
  {
    id: 2,
    slug: "ilocos",
    image: "/packages/vigan-ilocos.jpg",
...
  {
    id: 3,
    slug: "baguio",
    image: "/packages/baguio-city.jpg",
```

And in `morePackages`:
- `hundred-islands`: `image: "/packages/hundred-islands.jpg"`
- `kaparkan-abra`: `image: "/packages/kaparkan-abra.jpg"`
- `bicol`: `image: "/packages/mayon-bicol.jpg"`
- `mt-pinatubo`: `image: "/packages/mt-pinatubo.jpg"`
- `palawan`: `image: "/packages/el-nido-palawan.jpg"`

- [ ] **Step 2: Run all tests and build**

Run:
```bash
node --test tests/packages-images.test.mjs
npm run build
```
Expected: All tests pass and build succeeds.

- [ ] **Step 3: Commit code changes**

```bash
git add app/page.tsx
git commit -m "feat(home): update featured and tour packages with real destination photos"
```
