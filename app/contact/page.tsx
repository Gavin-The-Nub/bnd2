"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Navbar, Footer, WhatsApp } from "../components/shared";
import {
  SKWITCHI_MESSENGER_URL,
  SKWITCHI_FACEBOOK_URL,
} from "../lib/messenger";
import { contactData } from "./data";

/* ─── Social SVG Icons ────────────────────────────────────── */
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id="ig-clean-grad" cx="20%" cy="110%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-clean-grad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#fff" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#000000">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3.14 15.7 6.34 6.34 0 0 0 9.48 22a6.33 6.33 0 0 0 6.34-6.33V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z" />
    </svg>
  );
}

/* ─── Wave Divider ────────────────────────────────────────── */
function WaveDivider({ color = "#003366", width = 140 }: { color?: string; width?: number }) {
  return (
    <div style={{ width, marginBottom: 20 }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
          <path
            key={i}
            d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity={0.5}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "40vh",
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/hero.png"
          alt="BND Travel and Tours"
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
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#BACCDF",
            margin: "0 0 12px",
          }}
        >
          BND Travel and Tours
        </p>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: "0 0 8px",
          }}
        >
          {contactData.header}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            margin: 0,
            letterSpacing: 0.5,
          }}
        >
          {contactData.tagline}
        </p>
      </div>
    </section>
  );
}

/* ─── Contact Cards Section ────────────────────────────────── */
function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Intro Header */}
      <div style={{ textAlign: "center", marginBottom: 54 }}>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#003366",
            margin: "0 0 8px",
          }}
        >
          GET IN TOUCH
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WaveDivider color="#003366" width={120} />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800,
            color: "#001219",
            margin: "0 0 14px",
            lineHeight: 1.25,
          }}
        >
          Reach Out To Us
        </h2>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#555",
            maxWidth: 620,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Have questions about our travel packages or need a personalized tour itinerary?
          Connect with our friendly travel specialists through any of our official channels below.
        </p>
      </div>

      {/* Two Column Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: 32,
        }}
      >
        {/* Card 1: Direct Inquiries & Business Accreditation */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: "40px 32px",
            boxShadow: "0 4px 20px rgba(0,18,25,0.06)",
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Phone Lines */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#EEF4F9",
                  border: "1px solid #D1DFEC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#003366",
                  flexShrink: 0,
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#003366",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    margin: "0 0 2px",
                  }}
                >
                  Phone Inquiries
                </h3>
                <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
                  Call our team directly for immediate assistance
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactData.phones.map((p) => {
                const isHovered = hoveredLink === p.number;
                return (
                  <a
                    key={p.number}
                    href={`tel:${p.tel}`}
                    onMouseEnter={() => setHoveredLink(p.number)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: isHovered ? "#F1F5F9" : "#F8FAFC",
                      border: isHovered ? "1px solid #003366" : "1px solid #E2E8F0",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#64748B" }}>
                      {p.label}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#003366" }}>
                      {p.number}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email Contacts */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#EEF4F9",
                  border: "1px solid #D1DFEC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#003366",
                  flexShrink: 0,
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#003366",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    margin: "0 0 2px",
                  }}
                >
                  Email Inquiries
                </h3>
                <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
                  Send us your inquiries, itineraries, and requests
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactData.emails.map((email) => {
                const isHovered = hoveredLink === email;
                return (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    onMouseEnter={() => setHoveredLink(email)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: isHovered ? "#F1F5F9" : "#F8FAFC",
                      border: isHovered ? "1px solid #FF9900" : "1px solid #E2E8F0",
                      textDecoration: "none",
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: "#003366",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{email}</span>
                    <ExternalLink size={14} color="#64748B" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Business & DOT Accreditation Details */}
          <div
            style={{
              paddingTop: 24,
              borderTop: "1px solid #F1F5F9",
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255, 153, 0, 0.12)",
                color: "#FF9900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#64748B",
                  letterSpacing: 1,
                  display: "block",
                  marginBottom: 2,
                }}
              >
                Official Business Details
              </span>
              <div
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#003366",
                  margin: "2px 0 4px",
                }}
              >
                {contactData.businessDetails.enterprise}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", lineHeight: 1.5 }}>
                DOT Accreditation:{" "}
                <strong style={{ color: "#003366" }}>
                  {contactData.businessDetails.dotAccreditation}
                </strong>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "#64748B", marginTop: 2 }}>
                {contactData.businessDetails.region}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Social Media Hub & Instant Messenger */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: "40px 32px",
            boxShadow: "0 4px 20px rgba(0,18,25,0.06)",
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#003366",
                letterSpacing: 2,
                display: "block",
                marginBottom: 8,
              }}
            >
              SOCIAL MEDIA
            </span>
            <h3
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: "#003366",
                margin: "0 0 12px",
                lineHeight: 1.35,
              }}
            >
              {contactData.callout}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 14,
                color: "#555",
                margin: "0 0 24px",
                lineHeight: 1.6,
              }}
            >
              Stay up-to-date with our latest tour packages, seasonal promos, travel advisories, and real guest experiences across our official social profiles.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Facebook */}
              <a
                href={SKWITCHI_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink("fb")}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: hoveredLink === "fb" ? "1px solid #1877F2" : "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: hoveredLink === "fb" ? "#EFF6FF" : "#F8FAFC",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FacebookIcon size={24} />
                  <div>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748B",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "block",
                        letterSpacing: 0.5,
                      }}
                    >
                      Facebook Page
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#003366" }}>
                      BND Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={15} color="#64748B" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/byahe_ni_drew_travel_and_tours"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink("ig")}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: hoveredLink === "ig" ? "1px solid #E1306C" : "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: hoveredLink === "ig" ? "#FDF2F8" : "#F8FAFC",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <InstagramIcon size={24} />
                  <div>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748B",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "block",
                        letterSpacing: 0.5,
                      }}
                    >
                      Instagram Profile
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#003366" }}>
                      BND Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={15} color="#64748B" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@byahe_ni_drew_travel_and_tours"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink("tiktok")}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: hoveredLink === "tiktok" ? "1px solid #000000" : "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: hoveredLink === "tiktok" ? "#F1F5F9" : "#F8FAFC",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <TikTokIcon size={24} />
                  <div>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748B",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "block",
                        letterSpacing: 0.5,
                      }}
                    >
                      TikTok Channel
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#003366" }}>
                      Byahe_ni_Drew Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={15} color="#64748B" />
              </a>
            </div>
          </div>

          {/* Direct Messenger Chat Button */}
          <div style={{ paddingTop: 10 }}>
            <a
              href={SKWITCHI_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#0084FF",
                color: "#FFFFFF",
                padding: "14px 20px",
                borderRadius: 8,
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.2s ease",
                boxShadow: "0 4px 14px rgba(0, 132, 255, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0073E6";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0084FF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={20} />
              <span>Chat on Facebook Messenger</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom Banner ───────────────────────────────────────── */
function BottomBanner() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/hero.png"
          alt="BND Travel and Tours"
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.72)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#BACCDF",
            margin: "0 0 12px",
          }}
        >
          BND Travel and Tours
        </p>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: 1,
            margin: "0 0 16px",
          }}
        >
          {contactData.motto}
        </h2>
        <div style={{ margin: "0 auto 20px", width: 120 }}>
          <WaveDivider color="#ffffff" width={120} />
        </div>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#fff",
            margin: "0 0 32px",
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          From curated local getaways to international adventures, we make every trip smooth, comfortable, and memorable.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/packages">
            <button className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Tour Packages
            </button>
          </Link>
          <Link href="/request-a-quote">
            <button className="btn-primary">Request A Quote</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Hero />
        <ContactSection />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
