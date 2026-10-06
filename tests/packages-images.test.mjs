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
