import { test } from "node:test";
import assert from "node:assert/strict";
import { buildQuoteMessage, getMessengerQuoteUrl, copyToClipboard } from "../app/lib/messenger.ts";

test("buildQuoteMessage formats message for a specific tour", () => {
  const message = buildQuoteMessage({
    tourName: "Baguio",
    duration: "3D / 2N",
    pageUrl: "http://localhost:3000/packages/local/baguio",
  });

  assert.match(message, /Baguio/);
  assert.match(message, /3D \/ 2N/);
  assert.match(message, /http:\/\/localhost:3000\/packages\/local\/baguio/);
  assert.match(message, /BND Travel and Tours/);
});

test("buildQuoteMessage includes optional guests and dates", () => {
  const message = buildQuoteMessage({
    tourName: "Sagada",
    guests: 4,
    dates: "Nov 10-13, 2026",
    customNotes: "Traveling with senior citizens",
  });

  assert.match(message, /Sagada/);
  assert.match(message, /4 guests/);
  assert.match(message, /Nov 10-13, 2026/);
  assert.match(message, /Traveling with senior citizens/);
});

test("buildQuoteMessage falls back cleanly for general inquiry", () => {
  const message = buildQuoteMessage({});
  assert.match(message, /BND Travel and Tours/);
  assert.match(message, /quote/i);
});

test("getMessengerQuoteUrl generates valid m.me deep link with ref and encoded text", () => {
  const url = getMessengerQuoteUrl({
    tourName: "Baguio",
    duration: "3D / 2N",
  });

  assert.ok(url.startsWith("https://m.me/drewAdventures?text="));
  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get("ref"), "baguio_quote");
  const textParam = parsed.searchParams.get("text");
  assert.ok(textParam);
  assert.match(textParam, /Baguio/);
});

test("copyToClipboard function is exported", () => {
  assert.equal(typeof copyToClipboard, "function");
});
