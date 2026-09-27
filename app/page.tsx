"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "./components/shared";


/* ─── Types ────────────────────────────────────────────────── */
interface Package {
  id: number;
  image: string;
  title: string;
  stars: number;
  desc: string;
  tag?: string;
}

/* ─── Data ────────────────────────────────────────────────── */
const featuredPackages: Package[] = [
  {
    id: 1,
    image: "/pkg-honeymoon.jpg",
    title: "Honeymoon Package",
    stars: 5,
    desc: "A romantic escape with breathtaking sunsets, island-hopping, and luxury accommodation — perfect for couples.",
    tag: "MOST POPULAR",
  },
  {
    id: 2,
    image: "/pkg-village.jpg",
    title: "Cultural Heritage Tour",
    stars: 5,
    desc: "Immerse yourself in centuries-old traditions, stone houses, and local festivals with an expert local guide.",
    tag: "BEST VALUE",
  },
  {
    id: 3,
    image: "/pkg-hotel.jpg",
    title: "Hotel + Tour Package",
    stars: 5,
    desc: "Enjoy comfortable hotel stays combined with guided tours covering all major scenic spots and landmarks.",
    tag: "ALL INCLUSIVE",
  },
];

const morePackages: Package[] = [
  {
    id: 4,
    image: "/pkg-beach.jpg",
    title: "Island Beach Tour",
    stars: 5,
    desc: "Explore pristine white-sand beaches with crystal-clear waters and stunning coastal landscapes.",
  },
  {
    id: 5,
    image: "/pkg-lighthouse.jpg",
    title: "Lighthouse Trek",
    stars: 5,
    desc: "Hike to dramatic clifftop lighthouses overlooking the open Pacific Ocean — an iconic experience.",
  },
  {
    id: 6,
    image: "/pkg-village.jpg",
    title: "Eco-Tour (Private)",
    stars: 5,
    desc: "A private eco-friendly tour through lush natural landscapes, local farms, and hidden waterfalls.",
  },
  {
    id: 7,
    image: "/pkg-hotel.jpg",
    title: "Homestay + Tour",
    stars: 5,
    desc: "Experience authentic local life staying with welcoming host families while exploring the region.",
  },
  {
    id: 8,
    image: "/pkg-beach.jpg",
    title: "Daily Joiner Tour",
    stars: 5,
    desc: "Join a small group of fellow travelers for a fun, budget-friendly daily sightseeing adventure.",
  },
  {
    id: 9,
    image: "/pkg-honeymoon.jpg",
    title: "Sunset Photography",
    stars: 5,
    desc: "Capture world-class sunsets at the most scenic viewpoints with a professional photography guide.",
  },
];

const highlights = [
  {
    image: "/pkg-beach.jpg",
    title: "Unspoiled Nature",
    desc: "Experience some of the Philippines' most pristine landscapes, untouched beaches, and rolling green hills far from the tourist crowds.",
  },
  {
    image: "/pkg-village.jpg",
    title: "Rich Local Culture",
    desc: "Discover unique local heritage — from traditional stone houses and handwoven hats to centuries-old churches and festivals.",
  },
  {
    image: "/pkg-lighthouse.jpg",
    title: "Scenic Viewpoints",
    desc: "Stand atop dramatic cliffs, historic lighthouses, and grassy hilltops for panoramic views of the Pacific Ocean.",
  },
];

const testimonials = [
  {
    name: "Maria Santos",
    location: "Manila, Philippines",
    stars: 5,
    review:
      "Absolutely the best travel experience of my life! The team at BND was so professional and attentive. Every detail was perfect. I can't wait to go back!",
  },
  {
    name: "James Chen",
    location: "Singapore",
    stars: 5,
    review:
      "BND Travel & Tours exceeded all our expectations. The guides were knowledgeable, friendly, and passionate about sharing the beauty of the island. Highly recommended!",
  },
  {
    name: "Ana Reyes",
    location: "Cebu, Philippines",
    stars: 5,
    review:
      "We booked the honeymoon package and it was magical. Everything was arranged so thoughtfully. The sunset views were breathtaking. Thank you BND!",
  },
];

/* ─── Reusable: Stars ─────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2, margin: "6px 0" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FF9900">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Reusable: Wave SVG ──────────────────────────────────── */
function Wave({ color = "#003366", opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <div style={{ width: "100%", lineHeight: 0, margin: "8px 0" }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
          <path
            key={i}
            d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── Reusable: Package Card ──────────────────────────────── */
function PackageCard({ pkg }: { pkg: Package }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "2.5px solid #BACCDF",
        borderRadius: 20,
        padding: 20,
        background: hovered ? "#BACCDF" : "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s, box-shadow 0.3s",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,51,102,0.15)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        cursor: "default",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 14,
          flexShrink: 0,
        }}
      >
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s" }}
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {pkg.tag && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#FF9900",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 20,
              letterSpacing: 0.5,
            }}
          >
            {pkg.tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 17,
          fontWeight: 800,
          textTransform: "uppercase",
          color: "#003366",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {pkg.title}
      </h3>

      {/* Stars */}
      <Stars count={pkg.stars} />

      {/* Wavy rule */}
      <div
        style={{
          height: 2,
          width: "45%",
          background: "repeating-linear-gradient(90deg,#003366 0,#003366 5px,transparent 5px,transparent 9px)",
          borderRadius: 2,
          marginBottom: 10,
        }}
      />

      {/* Desc */}
      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#001219",
          flex: 1,
          margin: "0 0 16px",
        }}
      >
        {pkg.desc}
      </p>

      {/* CTA */}
      <div>
        <button
          style={{
            background: "#FF9900",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "10px 22px",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            cursor: "pointer",
            transition: "background 0.2s",
            fontFamily: "var(--font-figtree), sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e68800")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FF9900")}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}



/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 66px)",
        minHeight: 480,
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.32)",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(38px, 8vw, 72px)",
            fontWeight: 900,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "4px",
            textShadow: "2px 4px 16px rgba(0,0,0,0.55)",
            lineHeight: 1.05,
            margin: "0 0 18px",
          }}
        >
          EXPLORE WITH BND
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(13px, 2.5vw, 19px)",
            fontWeight: 400,
            color: "#FFFDF0",
            textTransform: "uppercase",
            letterSpacing: "3px",
            textShadow: "1px 2px 8px rgba(0,0,0,0.55)",
            margin: 0,
          }}
        >
          UNFORGETTABLE ADVENTURE AWAITS FOR YOU
        </p>
      </div>
    </section>
  );
}

/* ─── Section Header Helper ───────────────────────────────── */
function SectionHeader({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 12,
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: 3,
          color: dark ? "#BACCDF" : "#003366",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>
      <Wave color={dark ? "#BACCDF" : "#003366"} opacity={dark ? 0.5 : 0.4} />
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 700,
          textTransform: "uppercase",
          color: dark ? "#FFFFFF" : "#003366",
          letterSpacing: 1,
          lineHeight: 1,
          margin: "14px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── Featured Packages ───────────────────────────────────── */
function FeaturedPackages() {
  return (
    <section
      id="packages"
      style={{ background: "#FFFDF0", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader label="OUR BEST DEALS" title="FEATURED TOUR PACKAGES" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── All Packages ────────────────────────────────────────── */
function AllPackages() {
  return (
    <section style={{ background: "#FFFDF0", padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader label="EXPLORE MORE" title="ALL TOUR PACKAGES" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {morePackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button
            style={{
              background: "#FF9900",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "14px 44px",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              cursor: "pointer",
              fontFamily: "var(--font-figtree), sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e68800")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF9900")}
          >
            VIEW ALL PACKAGES
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Highlights (dark bg) ────────────────────────────────── */
function Highlights() {
  return (
    <section style={{ background: "#003366", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader
          label="WHY CHOOSE US"
          title="WHAT MAKES BND THE PHILIPPINES' BEST-KEPT SECRET?"
          dark
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 48,
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #FF9900",
                  flexShrink: 0,
                }}
              >
                <Image src={h.image} alt={h.title} fill style={{ objectFit: "cover" }} sizes="180px" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#FF9900",
                    margin: "0 0 10px",
                  }}
                >
                  {h.title}
                </h3>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, lineHeight: 1.7, color: "#BACCDF", margin: 0 }}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────── */
function Testimonials() {
  return (
    <section id="reviews" style={{ background: "#FFFDF0", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader label="GUEST REVIEWS" title="FEEDBACK FROM OUR GUESTS" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "2px solid #BACCDF",
                borderRadius: 16,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Stars count={t.stars} />
              <p
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#001219",
                  fontStyle: "italic",
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.review}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid #BACCDF", paddingTop: 12, marginTop: 4 }}>
                <p
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#003366",
                    margin: "0 0 2px",
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#0054A8", margin: 0 }}>
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stay in the Loop ────────────────────────────────────── */
function StayInTheLoop() {
  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      bg: "#1877F2",
      icon: (
        <svg width="20" height="20" viewBox="0 0 320 512" fill="white">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 448 512" fill="white">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      bg: "#FF0000",
      icon: (
        <svg width="20" height="20" viewBox="0 0 576 512" fill="white">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,10,30,0.72)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 400, textTransform: "uppercase", letterSpacing: 3, color: "#BACCDF", margin: 0 }}>
          CONNECT WITH US
        </p>
        <Wave color="#BACCDF" opacity={0.5} />
        <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, textTransform: "uppercase", color: "#FFFFFF", letterSpacing: 1, margin: "8px 0 0" }}>
          STAY IN THE LOOP!
        </h2>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#BACCDF", margin: 0 }}>
          Join our community for travel tips, updates, and special offers!
        </p>
        <div style={{ display: "flex", gap: 18, marginTop: 8 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: s.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{ background: "#FFFDF0", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader label="REACH OUT" title="HOW TO CONTACT US" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Get in Touch */}
          <div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#BACCDF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 512 512" fill="#003366">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 17, fontWeight: 700, color: "#003366", margin: "0 0 8px" }}>
              Get in Touch
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", margin: "0 0 14px", lineHeight: 1.6 }}>
              We&apos;re here to answer your questions and help with your travel needs.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "📧", text: "info@bndtravelandtours.com" },
                { icon: "📞", text: "(+632) 8633 0859" },
                { icon: "📱", text: "Smart: 0969 446 8109" },
                { icon: "📱", text: "Globe: 0977 806 3040" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#001219", fontFamily: "var(--font-figtree), sans-serif" }}>
                  <span>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Team photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 300,
                height: 260,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,51,102,0.18)",
              }}
            >
              <Image src="/team.jpg" alt="BND Travel & Tours team" fill style={{ objectFit: "cover" }} sizes="300px" />
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#BACCDF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 384 512" fill="#003366">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 17, fontWeight: 700, color: "#003366", margin: "0 0 8px" }}>
              Visit Us
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", margin: "0 0 18px", lineHeight: 1.8 }}>
              Amboy Street, Kayhuvokan,<br />
              Basco Batanes, 3900
            </p>
            <a
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#FF9900",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                textDecoration: "none",
                letterSpacing: 0.8,
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              Google Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedPackages />
        <AllPackages />
        <Highlights />
        <Testimonials />
        <StayInTheLoop />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
