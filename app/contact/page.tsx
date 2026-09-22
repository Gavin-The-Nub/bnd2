"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Navbar, Footer, SectionHeader, WhatsApp } from "../components/shared";
import {
  SKWITCHI_MESSENGER_URL,
  SKWITCHI_FACEBOOK_URL,
} from "../lib/messenger";

const INQUIRY_TOPICS = [
  "Tour Package Inquiry",
  "Hotel & Accommodation Booking",
  "Flight & Ferry Ticketing",
  "Van Rental",
  "Educational or Team Building Tour",
  "Custom Travel Itinerary",
];

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "35vh",
        minHeight: 240,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-village.jpg"
          alt="Batanes stone house"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.65)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(30px, 5vw, 44px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.85)",
            margin: "8px 0 0",
            letterSpacing: 0.5,
          }}
        >
          We&apos;re here to help you plan your dream journey
        </p>
      </div>
    </section>
  );
}

/* ─── Contact Content ─────────────────────────────────────── */
function ContactContent() {
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0]);
  const [customMessage, setCustomMessage] = useState("");

  const buildMessengerLink = () => {
    const textParts = [
      `Hi BND Travel and Tours!`,
      `I'd like to inquire about: ${selectedTopic}.`,
    ];
    if (customMessage.trim()) {
      textParts.push(`\nMessage: ${customMessage.trim()}`);
    }
    textParts.push(`\nCould you please share details, rates, and availability? Thank you!`);
    
    const fullText = textParts.join("\n");
    return `${SKWITCHI_MESSENGER_URL}?text=${encodeURIComponent(fullText)}&ref=contact_page`;
  };

  return (
    <section style={{ padding: "70px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 40 }}>
        <SectionHeader label="GET IN TOUCH" title="LET'S PLAN YOUR ADVENTURE" />
      </div>

      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 15,
          color: "#475569",
          textAlign: "center",
          maxWidth: 680,
          margin: "0 auto 50px",
          lineHeight: 1.6,
        }}
      >
        Have questions about our travel packages, accommodations, or personalized itineraries? Connect directly with our team on Facebook Messenger for fast, personalized responses.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: 40,
          marginBottom: 70,
        }}
      >
        {/* Messenger Direct Card */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "36px 30px",
            borderRadius: 16,
            border: "1.5px solid #BACCDF",
            boxShadow: "0 10px 30px rgba(0, 51, 102, 0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(0, 132, 255, 0.1)",
                  color: "#0084FF",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "var(--font-figtree), sans-serif",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                <Sparkles size={13} />
                Instant Chat
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#003366",
                margin: "0 0 8px",
              }}
            >
              Chat on Facebook Messenger
            </h2>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 14,
                color: "#64748B",
                margin: "0 0 20px",
                lineHeight: 1.5,
              }}
            >
              Skip waiting for email replies. Select your topic below and message us directly on Messenger.
            </p>

            {/* Topic Chips */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#003366",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  marginBottom: 10,
                }}
              >
                What are you inquiring about?
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {INQUIRY_TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: 20,
                        border: isSelected ? "1.5px solid #0084FF" : "1.5px solid #E2E8F0",
                        background: isSelected ? "#0084FF" : "#F8FAFC",
                        color: isSelected ? "#FFFFFF" : "#334155",
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 12.5,
                        fontWeight: isSelected ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Notes Area */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="custom-notes"
                style={{
                  display: "block",
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#003366",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  marginBottom: 8,
                }}
              >
                Additional Details (Optional)
              </label>
              <textarea
                id="custom-notes"
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="E.g., preferred travel dates, number of guests, destination..."
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #CBD5E1",
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13.5,
                  color: "#1E293B",
                  boxSizing: "border-box",
                  resize: "vertical",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Action Trigger */}
          <div>
            <a
              href={buildMessengerLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#0084FF",
                color: "#FFFFFF",
                padding: "14px 24px",
                borderRadius: 10,
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: 0.5,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0, 132, 255, 0.35)",
                transition: "background 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0073E6";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0084FF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={18} />
              <span>Chat on Facebook Messenger</span>
            </a>

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <a
                href={SKWITCHI_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12,
                  color: "#64748B",
                  textDecoration: "underline",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                <span>Or visit our Facebook Page</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Column */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "36px 30px",
            borderRadius: 16,
            border: "1.5px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: "#003366",
                margin: "0 0 20px",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              How to Reach Us
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Address */}
              <li style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#FF9900", marginTop: 2 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Office Address
                  </span>
                  <p style={{ margin: "3px 0 0", fontSize: 14, color: "#001219", lineHeight: 1.5, fontFamily: "var(--font-figtree), sans-serif" }}>
                    Amboy Street, Kayhuvokan<br />
                    Basco, Batanes, 3900 Philippines
                  </p>
                </div>
              </li>

              {/* Landline */}
              <li style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#FF9900", marginTop: 2 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Landline
                  </span>
                  <a
                    href="tel:0437028516"
                    style={{ fontSize: 14, color: "#003366", fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}
                  >
                    043 702 8516
                  </a>
                </div>
              </li>

              {/* Mobile */}
              <li style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#FF9900", marginTop: 2 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Mobile Contacts
                  </span>
                  <div style={{ fontSize: 14, color: "#001219", lineHeight: 1.6, fontFamily: "var(--font-figtree), sans-serif" }}>
                    <div>Globe: <a href="tel:09560422368" style={{ color: "#003366", fontWeight: 700, textDecoration: "none" }}>0956 042 2368</a></div>
                    <div>Smart: <a href="tel:09702065826" style={{ color: "#003366", fontWeight: 700, textDecoration: "none" }}>0970 206 5826</a></div>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#FF9900", marginTop: 2 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Official Email
                  </span>
                  <a
                    href="mailto:Bndtravels01@gmail.com"
                    style={{ fontSize: 14, color: "#003366", textDecoration: "none", fontWeight: 700, fontFamily: "var(--font-figtree), sans-serif" }}
                  >
                    Bndtravels01@gmail.com
                  </a>
                </div>
              </li>

              {/* Social Channels */}
              <li style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#FF9900", marginTop: 2 }}>
                  <Send size={18} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Social Accounts
                  </span>
                  <div style={{ fontSize: 13.5, color: "#001219", lineHeight: 1.6, fontFamily: "var(--font-figtree), sans-serif" }}>
                    <div>Facebook: <a href={SKWITCHI_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#003366", fontWeight: 700, textDecoration: "underline" }}>BND Travel and Tours</a></div>
                    <div>Instagram: <a href="https://www.instagram.com/byahe_ni_drew_travel_and_tours" target="_blank" rel="noopener noreferrer" style={{ color: "#003366", fontWeight: 700, textDecoration: "underline" }}>@byahe_ni_drew_travel_and_tours</a></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ width: "100%", height: 380, background: "#e0e0e0", borderRadius: 16, overflow: "hidden", position: "relative", border: "1px solid #E2E8F0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4265439589886!2d121.96860017585039!3d20.448557510196232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1e3260c6d7a5b%3A0x673ed17b8f9e2b10!2sBasco%2C%20Batanes!5e0!3m2!1sen!2sph!4v1714578161528!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F8FAFC" }}>
        <Hero />
        <ContactContent />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
