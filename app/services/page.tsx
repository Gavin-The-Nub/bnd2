"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Hotel,
  Compass,
  Ticket,
  Car,
  GraduationCap,
  Users,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Navbar, Footer, SectionHeader, WhatsApp } from "../components/shared";
import { servicesData, ServiceItem } from "./data";
import { SKWITCHI_MESSENGER_URL } from "../lib/messenger";

/* ─── Icon Mapping ─────────────────────────────────────────── */
const iconMap = {
  hotel: Hotel,
  compass: Compass,
  ticket: Ticket,
  car: Car,
  "graduation-cap": GraduationCap,
  users: Users,
  "shield-check": ShieldCheck,
  "file-check": FileCheck,
};

/* ─── Hero Section ─────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: 200,
        minHeight: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/pkg-lighthouse.jpg"
          alt="BND Travel and Tours Services"
          fill
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 18, 25, 0.7)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.85)",
            margin: "6px 0 0",
            letterSpacing: 0.5,
          }}
        >
          BND Travel &amp; Tours
        </p>
      </div>
    </section>
  );
}

/* ─── Service Card Component ───────────────────────────────── */
function ServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconMap[service.icon] || Compass;

  const messengerQuery = `Hi BND Travel and Tours! I would like to inquire about your ${service.title} service.`;
  const messengerUrl = `${SKWITCHI_MESSENGER_URL}?text=${encodeURIComponent(messengerQuery)}&ref=${encodeURIComponent(service.id)}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 16,
        border: hovered ? "1.5px solid #BACCDF" : "1.5px solid #E2E8F0",
        padding: "38px 34px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: hovered
          ? "0 12px 30px rgba(0, 51, 102, 0.09)"
          : "0 2px 8px rgba(0, 0, 0, 0.02)",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div>
        {/* Icon & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: hovered ? "#003366" : "#F1F5F9",
              color: hovered ? "#FFFFFF" : "#003366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            <IconComponent size={26} strokeWidth={2} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "#003366",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {service.title}
          </h2>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#334155",
            lineHeight: 1.7,
            margin: "0 0 14px",
          }}
        >
          {service.description}
        </p>

        {/* Quote */}
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            fontStyle: "italic",
            color: "#64748B",
            lineHeight: 1.6,
            margin: "0 0 18px",
          }}
        >
          &ldquo;{service.quote}&rdquo;
        </p>
      </div>

      {/* Single Clean Action Link */}
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 18, marginTop: 10 }}>
        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14.5,
            fontWeight: 700,
            color: hovered ? "#FF9900" : "#003366",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          <span>Inquire on Messenger</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ─── Main Services Page ───────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F8FAFC", minHeight: "80vh" }}>
        <Hero />

        {/* Services Section */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 70px" }}>
          <div style={{ marginBottom: 44 }}>
            <SectionHeader label="SERVICES OFFERED" title="WHAT WE DO" />
          </div>

          {/* Spacious 2-Column Responsive Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: 28,
            }}
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Simple Messenger CTA Box */}
          <div
            style={{
              marginTop: 56,
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              padding: "44px 32px",
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0, 51, 102, 0.04)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#003366",
                margin: "0 0 10px",
              }}
            >
              Have Questions or Need a Custom Arrangement?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 15,
                color: "#64748B",
                maxWidth: 620,
                margin: "0 auto 26px",
                lineHeight: 1.6,
              }}
            >
              Chat directly with our travel specialists on Facebook Messenger for quick answers, customized tour itineraries, and group inquiries.
            </p>

            {/* Direct Messenger Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={SKWITCHI_MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#0084FF",
                  color: "#FFFFFF",
                  padding: "14px 32px",
                  borderRadius: 10,
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0, 132, 255, 0.3)",
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
                <MessageCircle size={20} />
                <span>Chat on Messenger</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
