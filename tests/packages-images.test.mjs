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
