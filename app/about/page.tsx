"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../components/shared";

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
          BND Travel and Tours OPC
        </p>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          About Us
        </h1>
      </div>
    </section>
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

/* ─── About the Company Section ───────────────────────────── */
function AboutCompany() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "left", marginBottom: 32 }}>
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
          ABOUT THE COMPANY
        </p>
        <WaveDivider color="#003366" width={120} />
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 3.5vw, 32px)",
            fontWeight: 800,
            color: "#001219",
            margin: "0 0 24px",
            lineHeight: 1.3,
          }}
        >
          BND Travel and Tours OPC
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 16,
          color: "#001219",
          lineHeight: 1.8,
          maxWidth: 960,
        }}
      >
        <p style={{ margin: 0 }}>
          BND Travel and Tours OPC is a dynamic travel service provider based in Batangas, Philippines, committed to delivering exceptional travel experiences through carefully curated packages and reliable travel solutions.
        </p>
        <p style={{ margin: 0 }}>
          Founded with a vision to make travel more accessible, convenient, and memorable, the company specializes in organizing both local and international trips for individuals, families, corporate clients, and groups.
        </p>
        <p style={{ margin: 0 }}>
          We pride ourselves on professionalism, strong industry partnerships, and a customer-first approach in every transaction.
        </p>
      </div>
    </section>
  );
}

/* ─── Mission & Vision Section ────────────────────────────── */
function MissionVision() {
  return (
    <section style={{ background: "#BACCDF", padding: "80px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {/* Mission */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: "40px 32px",
            boxShadow: "0 4px 20px rgba(0,18,25,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#F0F4F8",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              fontSize: 26,
            }}
          >
            🎯
          </div>
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "#003366",
              textTransform: "uppercase",
              letterSpacing: 1,
              margin: "0 0 16px",
            }}
          >
            Mission
          </h3>
          <p
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 15,
              color: "#001219",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            BND Travel and Tours is committed to providing comfortable, safe, and hassle-free travel experiences. We aim to deliver well-planned and detailed itineraries while ensuring every client enjoys a smooth and relaxing journey. Your comfort and satisfaction are our priority, and your smile is the energy that drives us to make every trip memorable.
          </p>
        </div>

        {/* Vision */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: "40px 32px",
            boxShadow: "0 4px 20px rgba(0,18,25,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#F0F4F8",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              fontSize: 26,
            }}
          >
            🔭
          </div>
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "#003366",
              textTransform: "uppercase",
              letterSpacing: 1,
              margin: "0 0 16px",
            }}
          >
            Vision
          </h3>
          <p
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 15,
              color: "#001219",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            To become a reputable and trusted travel and tours company recognized for excellence in service, operational efficiency, and customer-focused travel solutions, while continuously enhancing comfort, safety, and overall travel experience.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Core Services Section ───────────────────────────────── */
function CoreServices() {
  const services = [
    {
      title: "Local & International Tour Packages",
      description: "Customized and carefully curated travel itineraries across top domestic and international destinations.",
      icon: "✈️",
      href: "/packages",
      linkText: "View Packages",
    },
    {
      title: "Hotel and Resort Reservations",
      description: "Reliable accommodation bookings tailored to your preferences, comfort, and budget.",
      icon: "🏨",
      href: "/services",
      linkText: "Learn More",
    },
    {
      title: "Flight Booking Assistance",
      description: "Convenient flight ticketing support to ensure seamless schedules for your entire journey.",
      icon: "🎫",
      href: "/services",
      linkText: "Learn More",
    },
    {
      title: "Visa Processing Assistance",
      description: "Guided documentation and advisory services to simplify international visa applications.",
      icon: "🛂",
      href: "/services",
      linkText: "Learn More",
    },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
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
          OUR EXPERTISE
        </p>
        <div style={{ margin: "0 auto 16px", width: 120 }}>
          <WaveDivider color="#003366" width={120} />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800,
            color: "#001219",
            margin: 0,
          }}
        >
          Core Services
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            }}
          >
            <div>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{service.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#003366",
                  margin: "0 0 12px",
                  lineHeight: 1.4,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.6,
                  margin: "0 0 20px",
                }}
              >
                {service.description}
              </p>
            </div>
            <Link
              href={service.href}
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#003366",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {service.linkText} →
            </Link>
          </div>
        ))}
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
          Plan Your Journey With BND Travel & Tours
        </h2>
        <div style={{ margin: "0 auto 20px", width: 120 }}>
          <WaveDivider color="#ffffff" width={120} />
        </div>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#fff", margin: "0 0 32px", opacity: 0.9 }}>
          From curated local getaways to international adventures, we make every trip smooth, comfortable, and memorable.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/packages">
            <button className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Tour Packages
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn-primary">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCompany />
        <MissionVision />
        <CoreServices />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
