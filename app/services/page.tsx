"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Compass,
  Ticket,
  Car,
  GraduationCap,
  Users,
  ShieldCheck,
  FileCheck,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ArrowRight,
  Quote as QuoteIcon,
  Sparkles,
} from "lucide-react";
import { Navbar, Footer, WhatsApp } from "../components/shared";
import { servicesData, servicesContactInfo, ServiceItem } from "./data";
import { SKWITCHI_MESSENGER_URL } from "../lib/messenger";

/* ─── Icon Mapping ─────────────────────────────────────────── */
const iconComponents = {
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
        height: 240,
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
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
            background:
              "linear-gradient(180deg, rgba(0, 24, 48, 0.82) 0%, rgba(0, 18, 25, 0.92) 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255, 153, 0, 0.2)",
            border: "1px solid rgba(255, 153, 0, 0.4)",
            padding: "4px 14px",
            borderRadius: 20,
            color: "#FFB84D",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontFamily: "var(--font-figtree), sans-serif",
            marginBottom: 10,
          }}
        >
          <Sparkles size={13} />
          <span>BND Travel &amp; Tours</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(30px, 4.5vw, 44px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.88)",
            margin: "8px 0 0",
            letterSpacing: 0.5,
          }}
        >
          Tailored Travel &amp; Tourism Solutions For Every Journey
        </p>
      </div>
    </section>
  );
}

/* ─── Contact Information Bar ──────────────────────────────── */
function ContactBar() {
  return (
    <section
      style={{
        background: "#002244",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "18px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 12,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: "#FF9900",
          }}
        >
          Direct Contact Information:
        </span>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Phone */}
          <a
            href={`tel:${servicesContactInfo.phoneTel}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-figtree), sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <Phone size={15} color="#FF9900" />
            <span>{servicesContactInfo.phone}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${servicesContactInfo.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-figtree), sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <Mail size={15} color="#FF9900" />
            <span>{servicesContactInfo.email}</span>
          </a>

          {/* Facebook */}
          <a
            href={servicesContactInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-figtree), sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#1877F2",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 900,
              }}
            >
              f
            </span>
            <span>{servicesContactInfo.facebook}</span>
          </a>

          {/* Instagram */}
          <a
            href={servicesContactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-figtree), sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 900,
              }}
            >
              IG
            </span>
            <span>@{servicesContactInfo.instagram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Individual Service Card ──────────────────────────────── */
function ServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconComponents[service.icon] || Compass;

  const messengerQuery = `Hi BND Travel and Tours! I would like to inquire about your ${service.title} service.`;
  const messengerUrl = `${SKWITCHI_MESSENGER_URL}?text=${encodeURIComponent(messengerQuery)}&ref=${encodeURIComponent(service.id)}`;
  const quoteUrl = `/request-a-quote?service=${encodeURIComponent(service.title)}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 14,
        border: hovered ? "1.5px solid #FF9900" : "1.5px solid #E2E8F0",
        padding: "30px 26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: hovered
          ? "0 14px 30px -8px rgba(0, 51, 102, 0.16)"
          : "0 2px 10px rgba(0, 0, 0, 0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.25s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.25s cubic-bezier(0.2, 0, 0, 1), border-color 0.25s ease",
      }}
    >
      <div>
        {/* Top Header: Index & Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color: "#FF9900",
              letterSpacing: 1,
              background: "rgba(255, 153, 0, 0.1)",
              padding: "4px 10px",
              borderRadius: 6,
            }}
          >
            {service.index}
          </span>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: hovered ? "#003366" : "rgba(0, 51, 102, 0.07)",
              color: hovered ? "#FFFFFF" : "#003366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.25s ease, color 0.25s ease",
            }}
          >
            <IconComponent size={22} />
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: "#003366",
            margin: "0 0 10px",
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h2>

        {/* Exact Description */}
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "#334155",
            lineHeight: 1.6,
            margin: "0 0 18px",
          }}
        >
          {service.description}
        </p>

        {/* Promotional Quote Callout */}
        <div
          style={{
            background: "#FFFDF0",
            borderLeft: "3.5px solid #FF9900",
            padding: "12px 14px",
            borderRadius: "0 8px 8px 0",
            marginBottom: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
            }}
          >
            <QuoteIcon
              size={16}
              style={{
                color: "#FF9900",
                flexShrink: 0,
                marginTop: 2,
                opacity: 0.85,
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 13,
                fontStyle: "italic",
                fontWeight: 600,
                color: "#002244",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              &ldquo;{service.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: "auto" }}>
        {/* Messenger Action */}
        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#0084FF",
            color: "#FFFFFF",
            padding: "10px 16px",
            borderRadius: 8,
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: 0.3,
            transition: "background 0.2s ease, transform 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0073E6";
            e.currentTarget.style.transform = "scale(1.01)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0084FF";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Send size={14} />
          <span>Chat on Messenger</span>
        </a>

        {/* Request Quote Action */}
        <Link
          href={quoteUrl}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            background: "#F8FAFC",
            border: "1px solid #CBD5E1",
            color: "#003366",
            padding: "9px 16px",
            borderRadius: 8,
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 12.5,
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: 0.3,
            transition: "background 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EFF6FF";
            e.currentTarget.style.borderColor = "#93C5FD";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#F8FAFC";
            e.currentTarget.style.borderColor = "#CBD5E1";
          }}
        >
          <span>Request Quote</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

/* ─── Bottom CTA Banner ────────────────────────────────────── */
function BottomCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #001E3D 0%, #003366 100%)",
        padding: "70px 24px",
        color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#FFFFFF",
            letterSpacing: 1,
            margin: "0 0 14px",
          }}
        >
          Need a Custom Travel Arrangement?
        </h2>
        <div style={{ width: 80, height: 3, background: "#FF9900", margin: "0 auto 20px" }} />
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#BACCDF",
            lineHeight: 1.6,
            margin: "0 0 32px",
          }}
        >
          From family holidays and corporate retreats to student excursions and visa requirements, our travel specialists are ready to make your journey seamless and unforgettable.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/request-a-quote"
            style={{
              background: "#FF9900",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 8,
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 14,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(255, 153, 0, 0.4)",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "#E68A00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#FF9900";
            }}
          >
            Request A Quote
          </Link>
          <Link
            href="/contact"
            style={{
              background: "transparent",
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
              padding: "13px 26px",
              borderRadius: 8,
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 14,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#003366";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Services Page ───────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#F4F7FA", minHeight: "80vh" }}>
        <Hero />
        <ContactBar />

        {/* Section Header & Cards Grid */}
        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 24px 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2.5,
                color: "#FF9900",
                margin: "0 0 8px",
              }}
            >
              Complete Travel Solutions
            </p>
            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#003366",
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: "0 0 14px",
              }}
            >
              Services Offered
            </h2>
            <div
              style={{
                width: 70,
                height: 3,
                background: "#FF9900",
                margin: "0 auto 16px",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 15,
                color: "#475569",
                maxWidth: 680,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Explore our wide range of professional travel and hospitality services tailored for individual travelers, families, corporate teams, and institutions.
            </p>
          </div>

          {/* 8-Card Responsive Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
