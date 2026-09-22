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
  ArrowRight,
} from "lucide-react";
import { Navbar, Footer, SectionHeader, WhatsApp } from "../components/shared";
import { servicesData, servicesContactInfo, ServiceItem } from "./data";
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
        borderRadius: 12,
        border: hovered ? "1px solid #BACCDF" : "1px solid #E2E8F0",
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: hovered ? "0 8px 24px rgba(0, 51, 102, 0.08)" : "none",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div>
        {/* Icon & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: "#F1F5F9",
              color: "#003366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <IconComponent size={20} strokeWidth={2} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 18,
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
            fontSize: 14,
            color: "#334155",
            lineHeight: 1.6,
            margin: "0 0 10px",
          }}
        >
          {service.description}
        </p>

        {/* Quote */}
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 13,
            fontStyle: "italic",
            color: "#64748B",
            lineHeight: 1.5,
            margin: "0 0 16px",
          }}
        >
          &ldquo;{service.quote}&rdquo;
        </p>
      </div>

      {/* Single Clean Action Link */}
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 14, marginTop: 8 }}>
        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: hovered ? "#FF9900" : "#003366",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          <span>Inquire on Messenger</span>
          <ArrowRight size={14} />
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
        <section style={{ maxWidth: 1160, margin: "0 auto", padding: "60px 24px 70px" }}>
          <div style={{ marginBottom: 40 }}>
            <SectionHeader label="SERVICES OFFERED" title="WHAT WE DO" />
          </div>

          {/* Clean 8-Card Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Simple Contact & Quote Box */}
          <div
            style={{
              marginTop: 50,
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 12,
              padding: "36px 28px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 20,
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
                fontSize: 14,
                color: "#64748B",
                maxWidth: 600,
                margin: "0 auto 20px",
                lineHeight: 1.6,
              }}
            >
              Contact our team directly for customized itineraries, group bookings, or assistance.
            </p>

            {/* Direct Contact Links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                marginBottom: 24,
                fontSize: 14,
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              <a
                href={`tel:${servicesContactInfo.phoneTel}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#003366",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Phone size={15} color="#FF9900" />
                <span>{servicesContactInfo.phone}</span>
              </a>

              <a
                href={`mailto:${servicesContactInfo.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#003366",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Mail size={15} color="#FF9900" />
                <span>{servicesContactInfo.email}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/request-a-quote">
                <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>
                  Request A Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-outline" style={{ padding: "10px 22px", fontSize: 13 }}>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
