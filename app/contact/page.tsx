"use client";

import React from "react";
import Image from "next/image";
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

/* ─── Clean Compact Hero ───────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "54px 24px 44px",
        textAlign: "center",
        background: "linear-gradient(180deg, #002244 0%, #001219 100%)",
        color: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#FF9900",
            marginBottom: 8,
            fontFamily: "var(--font-figtree), sans-serif",
          }}
        >
          {contactData.tagline}
        </span>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(30px, 5vw, 42px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: 2,
            margin: "0 0 8px",
            color: "#FFFFFF",
          }}
        >
          {contactData.header}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "#BACCDF",
            margin: 0,
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          {contactData.motto}
        </p>
      </div>
    </section>
  );
}

/* ─── Contact Cards Section ────────────────────────────────── */
function ContactSection() {
  return (
    <section style={{ padding: "50px 24px 70px", maxWidth: 960, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 28,
        }}
      >
        {/* Column 1: Direct Contact & Business Details */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "32px 28px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(0, 51, 102, 0.05)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* Phone Lines */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(0, 51, 102, 0.08)",
                  color: "#003366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone size={18} />
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
                Phone Contacts
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactData.phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.tel}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#003366";
                    e.currentTarget.style.background = "#F1F5F9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.background = "#F8FAFC";
                  }}
                >
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "#64748B" }}>{p.label}</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#003366" }}>{p.number}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Email Contacts */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(255, 153, 0, 0.12)",
                  color: "#FF9900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail size={18} />
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
                Email Contacts
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactData.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  style={{
                    display: "block",
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: "#003366",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#FF9900";
                    e.currentTarget.style.background = "#F1F5F9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.background = "#F8FAFC";
                  }}
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Business Details */}
          <div
            style={{
              paddingTop: 20,
              borderTop: "1px solid #F1F5F9",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <div style={{ color: "#FF9900", marginTop: 2 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#64748B", letterSpacing: 0.8, display: "block" }}>
                Business Details
              </span>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#003366", margin: "2px 0" }}>
                {contactData.businessDetails.enterprise}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>
                DOT Accreditation: <strong style={{ color: "#003366" }}>{contactData.businessDetails.dotAccreditation}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Social Media Hub */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "32px 28px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(0, 51, 102, 0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#FF9900", letterSpacing: 1, display: "block", marginBottom: 6 }}>
              Social Media
            </span>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#003366", margin: "0 0 16px", lineHeight: 1.3 }}>
              {contactData.callout}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Facebook */}
              <a
                href={SKWITCHI_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: "#F8FAFC",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1877F2";
                  e.currentTarget.style.background = "#EFF6FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.background = "#F8FAFC";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FacebookIcon size={22} />
                  <div>
                    <span style={{ fontSize: 11, color: "#64748B", fontWeight: 700, textTransform: "uppercase", display: "block" }}>
                      Facebook
                    </span>
                    <span style={{ fontSize: 14.5, fontWeight: 800, color: "#003366" }}>
                      BND Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} color="#64748B" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/byahe_ni_drew_travel_and_tours"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: "#F8FAFC",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E1306C";
                  e.currentTarget.style.background = "#FDF2F8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.background = "#F8FAFC";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <InstagramIcon size={22} />
                  <div>
                    <span style={{ fontSize: 11, color: "#64748B", fontWeight: 700, textTransform: "uppercase", display: "block" }}>
                      Instagram
                    </span>
                    <span style={{ fontSize: 14.5, fontWeight: 800, color: "#003366" }}>
                      BND Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} color="#64748B" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@byahe_ni_drew_travel_and_tours"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: "#F8FAFC",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#000000";
                  e.currentTarget.style.background = "#F1F5F9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.background = "#F8FAFC";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <TikTokIcon size={22} />
                  <div>
                    <span style={{ fontSize: 11, color: "#64748B", fontWeight: 700, textTransform: "uppercase", display: "block" }}>
                      TikTok
                    </span>
                    <span style={{ fontSize: 14.5, fontWeight: 800, color: "#003366" }}>
                      Byahe_ni_Drew Travel and Tours
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} color="#64748B" />
              </a>
            </div>
          </div>

          {/* Direct Messenger Chat Button */}
          <div style={{ paddingTop: 8 }}>
            <a
              href={SKWITCHI_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#0084FF",
                color: "#FFFFFF",
                padding: "13px 20px",
                borderRadius: 8,
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 14,
                fontWeight: 800,
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0073E6")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0084FF")}
            >
              <MessageCircle size={18} />
              <span>Chat on Facebook Messenger</span>
            </a>
          </div>
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
      <main style={{ background: "#F8FAFC", minHeight: "80vh" }}>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
