import { test } from "node:test";
import assert from "node:assert/strict";
import { buildQuoteMessage, getMessengerQuoteUrl } from "../app/lib/messenger.ts";

test("buildQuoteMessage formats message for a specific tour", () => {
  const message = buildQuoteMessage({
    tourName: "Bataan",
    duration: "2D / 1N",
    pageUrl: "http://localhost:3000/packages/local/bataan",
  });

  assert.match(message, /Bataan/);
  assert.match(message, /2D \/ 1N/);
  assert.match(message, /http:\/\/localhost:3000\/packages\/local\/bataan/);
  assert.match(message, /Skwitchi Travels/);
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
  assert.match(message, /Skwitchi Travels/);
  assert.match(message, /quote/i);
});

test("getMessengerQuoteUrl generates valid m.me deep link with encoded text", () => {
  const url = getMessengerQuoteUrl({
    tourName: "Bataan",
    duration: "2D / 1N",
  });

  assert.ok(url.startsWith("https://m.me/SkwitchiTravels?text="));
  const textParam = new URL(url).searchParams.get("text");
  assert.ok(textParam);
  assert.match(textParam, /Bataan/);
});
