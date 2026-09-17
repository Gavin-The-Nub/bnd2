"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Send,
  ExternalLink,
  Check,
} from "lucide-react";
import { Navbar, Footer, WhatsApp } from "../components/shared";
import {
  getMessengerQuoteUrl,
  buildQuoteMessage,
  SKWITCHI_FACEBOOK_URL,
} from "../lib/messenger";

const POPULAR_DESTINATIONS = [
  { id: "bataan", name: "Bataan", duration: "2D / 1N", region: "Local" },
  { id: "batanes", name: "Batanes", duration: "3D / 2N", region: "Local" },
  { id: "sagada", name: "Sagada", duration: "3D / 2N", region: "Local" },
  { id: "siargao", name: "Siargao", duration: "4D / 3N", region: "Local" },
  { id: "cebu", name: "Cebu", duration: "3D / 2N", region: "Local" },
  { id: "buscalan", name: "Buscalan", duration: "2D / 1N", region: "Local" },
  { id: "siquijor", name: "Siquijor", duration: "3D / 2N", region: "Local" },
  { id: "bacolod", name: "Bacolod", duration: "3D / 2N", region: "Local" },
  { id: "vietnam", name: "Vietnam", duration: "5D / 4N", region: "Asia" },
  { id: "japan", name: "Japan", duration: "5D / 4N", region: "Asia" },
  { id: "thailand", name: "Thailand", duration: "4D / 3N", region: "Asia" },
  { id: "taiwan", name: "Taiwan", duration: "4D / 3N", region: "Asia" },
  { id: "custom", name: "Custom Destination", duration: "Custom", region: "Custom" },
];

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "30vh",
        minHeight: 220,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-honeymoon.jpg"
          alt="Batanes landscape"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.65)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#FF9900",
            margin: "0 0 8px",
          }}
        >
          Fast Quotes via Messenger
        </p>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          REQUEST A QUOTE
        </h1>
      </div>
    </section>
  );
}

/* ─── Messenger Quote Hub Content ─────────────────────────── */
function MessengerHubContent() {
  const searchParams = useSearchParams();
  const initialTourParam = searchParams.get("tour");

  const matchingDest = POPULAR_DESTINATIONS.find(
    (d) =>
      initialTourParam &&
      (d.name.toLowerCase() === initialTourParam.toLowerCase() ||
        d.id.toLowerCase() === initialTourParam.toLowerCase())
  );

  const [selectedTour, setSelectedTour] = useState<string>(
    matchingDest ? matchingDest.name : "Bataan"
  );
  const [dates, setDates] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [notes, setNotes] = useState<string>("");

  const activeDestination = POPULAR_DESTINATIONS.find((d) => d.name === selectedTour);

  const previewMessage = useMemo(() => {
    return buildQuoteMessage({
      tourName: selectedTour === "Custom Destination" ? undefined : selectedTour,
      duration: activeDestination?.duration !== "Custom" ? activeDestination?.duration : undefined,
      dates: dates || undefined,
      guests: guests || undefined,
      customNotes: notes || undefined,
    });
  }, [selectedTour, activeDestination, dates, guests, notes]);

  const messengerUrl = useMemo(() => {
    return getMessengerQuoteUrl({
      tourName: selectedTour === "Custom Destination" ? undefined : selectedTour,
      duration: activeDestination?.duration !== "Custom" ? activeDestination?.duration : undefined,
      dates: dates || undefined,
      guests: guests || undefined,
      customNotes: notes || undefined,
    });
  }, [selectedTour, activeDestination, dates, guests, notes]);

  return (
    <section style={{ padding: "64px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
        
        {/* Left Column: Interactive Selector */}
        <div>
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(0,51,102,0.08)",
                color: "#003366",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontFamily: "var(--font-figtree), sans-serif",
                marginBottom: 12,
              }}
            >
              <Sparkles size={14} color="#FF9900" />
              Direct Coordination
            </span>
            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontWeight: 800,
                color: "#003366",
                textTransform: "uppercase",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              Skip The Contact Form
            </h2>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 15,
                color: "#444",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We coordinate quotes and customized itineraries directly with our travel specialists on{" "}
              <strong>Facebook Messenger</strong>. Select your preferred tour below to pre-populate your inquiry!
            </p>
          </div>

          {/* 1. Destination Selection */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 800,
                color: "#003366",
                textTransform: "uppercase",
                letterSpacing: 1,
                fontFamily: "var(--font-figtree), sans-serif",
                marginBottom: 10,
              }}
            >
              <MapPin size={15} color="#FF9900" /> 1. Select Tour Package
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {POPULAR_DESTINATIONS.map((dest) => {
                const isSelected = selectedTour === dest.name;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedTour(dest.name)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 20,
                      border: isSelected ? "2px solid #003366" : "1px solid #BACCDF",
                      background: isSelected ? "#003366" : "#fff",
                      color: isSelected ? "#fff" : "#003366",
                      fontSize: 13,
                      fontWeight: isSelected ? 700 : 500,
                      cursor: "pointer",
                      fontFamily: "var(--font-figtree), sans-serif",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {dest.name}
                    {dest.duration !== "Custom" && (
                      <span
                        style={{
                          fontSize: 11,
                          opacity: isSelected ? 0.9 : 0.6,
                          background: isSelected ? "rgba(255,255,255,0.2)" : "rgba(0,51,102,0.06)",
                          padding: "2px 6px",
                          borderRadius: 10,
                        }}
                      >
                        {dest.duration}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Optional Quick Details */}
          <div
            style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 12,
              padding: 20,
              marginBottom: 24,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#003366",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    marginBottom: 6,
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  <Calendar size={13} color="#FF9900" /> Target Dates
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nov 2026 or Dec 15-18"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1px solid #CBD5E1",
                    borderRadius: 6,
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 13,
                    background: "#fff",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#003366",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    marginBottom: 6,
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  <Users size={13} color="#FF9900" /> Guests / Pax
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 adults, 1 child"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1px solid #CBD5E1",
                    borderRadius: 6,
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 13,
                    background: "#fff",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#003366",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  marginBottom: 6,
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need airport transfer, traveling with seniors, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1px solid #CBD5E1",
                  borderRadius: 6,
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13,
                  background: "#fff",
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {/* Value Props / Why Messenger */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { icon: Clock, title: "Fast Replies", desc: "Our team typically answers in minutes" },
              { icon: Check, title: "Custom Itineraries", desc: "Tailored to your budget & group size" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: 12,
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid #BACCDF",
                }}
              >
                <item.icon size={18} color="#FF9900" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 700, color: "#003366" }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, color: "#666" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Message Preview & Direct Action */}
        <div
          style={{
            background: "#fff",
            border: "2px solid #BACCDF",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 10px 30px rgba(0,51,102,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#0084FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <MessageCircle size={20} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, fontWeight: 800, color: "#003366" }}>
                  Skwitchi Travels Messenger
                </div>
                <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, color: "#16a34a", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
                  Online & Active
                </div>
              </div>
            </div>
            <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-figtree), sans-serif" }}>
              Message Preview
            </span>
          </div>

          {/* Chat Bubble Preview */}
          <div
            style={{
              background: "#F0F4F9",
              border: "1px solid #CBD5E1",
              borderRadius: "14px 14px 4px 14px",
              padding: "16px 18px",
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontFamily: "monospace, var(--font-figtree), sans-serif",
                fontSize: 13,
                color: "#1E293B",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >
              {previewMessage}
            </p>
          </div>

          {/* Primary Messenger Button */}
          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "linear-gradient(135deg, #0084FF 0%, #0066CC 100%)",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: 8,
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 15,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0, 132, 255, 0.35)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            <Send size={18} />
            Chat on Messenger
          </a>

          <p
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 12,
              color: "#64748B",
              textAlign: "center",
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            Clicking opens <strong>m.me/SkwitchiTravels</strong> with your pre-filled inquiry.
          </p>

          <hr style={{ margin: "24px 0", border: 0, borderTop: "1px solid #E2E8F0" }} />

          {/* Alternative direct Facebook Page Link */}
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 12, color: "#64748B", fontFamily: "var(--font-figtree), sans-serif" }}>
              Prefer to visit our official Facebook page first?{" "}
            </span>
            <a
              href={SKWITCHI_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#003366",
                textDecoration: "underline",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              facebook.com/SkwitchiTravels <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function RequestQuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: 400, padding: "80px 24px", textAlign: "center" }}>Loading Quote Hub...</div>}>
          <MessengerHubContent />
        </Suspense>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
