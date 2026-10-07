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
  "cebu.jpg",
  "batanes-vayang-hills.jpg",
  "batanes-sabtang-island.jpg",
  "batanes-fundacion-pacita.jpg",
  "batanes-homestay-ivatan.jpg",
  "batanes-car-van-tour.jpg",
  "batanes-tricycle-tour.jpg",
  "batanes-tayid-lighthouse.jpg",
  "batanes-basco-lighthouse.jpg",
  "batanes-valugan-beach.jpg",
  "batanes-marlboro-hills.jpg",
  "sagada.jpg",
  "la-union.jpg",
  "bacolod.jpg",
  "siargao.jpg",
  "iloilo.jpg",
  "local-hero.jpg",
  "asia-japan.jpg",
  "asia-thailand.jpg",
  "asia-taiwan.jpg",
  "asia-vietnam.jpg",
  "asia-khao-yai.jpg",
  "asia-pattaya.jpg",
  "asia-bangkok.jpg",
  "asia-ayutthaya.jpg",
  "asia-kanchanaburi.jpg",
  "asia-hero.jpg",
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

test("hero-coron.jpg exists, is non-empty, and is a valid JPEG", () => {
  const heroPath = path.resolve("public/hero-coron.jpg");
  assert.ok(fs.existsSync(heroPath), "Expected public/hero-coron.jpg to exist");

  const stats = fs.statSync(heroPath);
  assert.ok(stats.size > 50000, `Expected hero-coron.jpg size > 50KB, got ${stats.size}`);

  const buffer = Buffer.alloc(3);
  const fd = fs.openSync(heroPath, "r");
  fs.readSync(fd, buffer, 0, 3, 0);
  fs.closeSync(fd);

  assert.equal(buffer[0], 0xff, "hero-coron.jpg should start with JPEG header 0xFF");
  assert.equal(buffer[1], 0xd8, "hero-coron.jpg should start with JPEG header 0xD8");
  assert.equal(buffer[2], 0xff, "hero-coron.jpg should start with JPEG header 0xFF");
});

test("app/page.tsx does not reference /team.jpg or Dedicated Team", () => {
  const pageContent = fs.readFileSync(path.resolve("app/page.tsx"), "utf-8");
  assert.ok(!pageContent.includes("/team.jpg"), "app/page.tsx should not reference /team.jpg");
  assert.ok(!pageContent.includes("Dedicated Team"), "app/page.tsx should not contain 'Dedicated Team'");
  assert.ok(pageContent.includes("/hero-coron.jpg"), "app/page.tsx should reference /hero-coron.jpg");
});

test("app/packages/page.tsx references authentic Batanes photos and not /team.jpg", () => {
  const pkgContent = fs.readFileSync(path.resolve("app/packages/page.tsx"), "utf-8");
  assert.ok(!pkgContent.includes("/team.jpg"), "app/packages/page.tsx should not reference /team.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-vayang-hills.jpg"), "should reference batanes-vayang-hills.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-sabtang-island.jpg"), "should reference batanes-sabtang-island.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-fundacion-pacita.jpg"), "should reference batanes-fundacion-pacita.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-homestay-ivatan.jpg"), "should reference batanes-homestay-ivatan.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-car-van-tour.jpg"), "should reference batanes-car-van-tour.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-tricycle-tour.jpg"), "should reference batanes-tricycle-tour.jpg");
  assert.ok(pkgContent.includes("/packages/batanes-tayid-lighthouse.jpg"), "should reference batanes-tayid-lighthouse.jpg");
});

test("app/packages subpages do not reference /team.jpg", () => {
  for (const sub of ["hotel", "homestay", "tour"]) {
    const content = fs.readFileSync(path.resolve(`app/packages/${sub}/page.tsx`), "utf-8");
    assert.ok(!content.includes("/team.jpg"), `app/packages/${sub}/page.tsx should not reference /team.jpg`);
  }
});

test("app/packages/local/page.tsx and its subpages use authentic destination photos and no fake pkg- images", () => {
  const localContent = fs.readFileSync(path.resolve("app/packages/local/page.tsx"), "utf-8");
  assert.ok(!localContent.includes("/pkg-"), "local/page.tsx should not reference /pkg-");
  assert.ok(localContent.includes("/packages/local-hero.jpg"), "local/page.tsx should reference local-hero.jpg");
  assert.ok(localContent.includes("/packages/vigan-ilocos.jpg"), "local/page.tsx should reference vigan-ilocos.jpg");
  assert.ok(localContent.includes("/packages/siargao.jpg"), "local/page.tsx should reference siargao.jpg");
  assert.ok(localContent.includes("/packages/bacolod.jpg"), "local/page.tsx should reference bacolod.jpg");

  const localSubs = ["ilocos", "iloilo", "cebu", "palawan", "la-union", "buscalan", "mt-pinatubo", "siargao", "hundred-islands", "kaparkan-abra", "baguio", "bicol", "bacolod", "sagada"];
  for (const sub of localSubs) {
    const subContent = fs.readFileSync(path.resolve(`app/packages/local/${sub}/page.tsx`), "utf-8");
    assert.ok(!subContent.includes("/pkg-"), `local/${sub}/page.tsx should not reference /pkg-`);
    assert.ok(subContent.includes("/packages/"), `local/${sub}/page.tsx should reference authentic /packages/ photo`);
  }
});

test("app/packages/asia/page.tsx and its subpages use authentic destination photos and no fake pkg- images", () => {
  const asiaContent = fs.readFileSync(path.resolve("app/packages/asia/page.tsx"), "utf-8");
  assert.ok(!asiaContent.includes("/pkg-"), "asia/page.tsx should not reference /pkg-");
  assert.ok(asiaContent.includes("/packages/asia-hero.jpg"), "asia/page.tsx should reference asia-hero.jpg");
  assert.ok(asiaContent.includes("/packages/asia-japan.jpg"), "asia/page.tsx should reference asia-japan.jpg");
  assert.ok(asiaContent.includes("/packages/asia-thailand.jpg"), "asia/page.tsx should reference asia-thailand.jpg");
  assert.ok(asiaContent.includes("/packages/asia-taiwan.jpg"), "asia/page.tsx should reference asia-taiwan.jpg");
  assert.ok(asiaContent.includes("/packages/asia-vietnam.jpg"), "asia/page.tsx should reference asia-vietnam.jpg");

  const asiaSubs = ["japan", "thailand", "taiwan", "vietnam"];
  for (const sub of asiaSubs) {
    const subContent = fs.readFileSync(path.resolve(`app/packages/asia/${sub}/page.tsx`), "utf-8");
    assert.ok(!subContent.includes("/pkg-"), `asia/${sub}/page.tsx should not reference /pkg-`);
    assert.ok(subContent.includes("/packages/"), `asia/${sub}/page.tsx should reference authentic /packages/ photo`);
  }
});

