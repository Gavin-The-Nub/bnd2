"use client";
import { Mountain, MapPin, Check, X, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../../components/shared";
import { QuoteButton } from "../../../components/QuoteButton";

const tour = {
  name: "Baguio",
  tagline: "City of Pines & Highland City Tour",
  duration: "2D/1N & 3D/2N",
  location: "Baguio City, Benguet",
  image: "/packages/baguio-city.jpg",
  intro:
    "Escape to the Summer Capital of the Philippines with BND Travel and Tours. Based on our official Baguio tour packages, enjoy roundtrip van transfer, comfortable accommodation, and a complete city tour covering Baguio's iconic parks, gardens, shrines, and strawberry farms.",
  placesToVisit: [
    "Lions Head",
    "Camp John Hay",
    "Burnham Park",
    "Botanical Garden",
    "Bamboo Sanctuary",
    "Wright Park",
    "The Mansion",
    "Mines View Park",
    "Good Shepherd Convent",
    "Baguio Cathedral",
    "SM City Baguio",
    "Bell Church",
    "Igorot Stone Kingdom",
    "Strawberry Farm (La Trinidad)",
  ],
  packages: [
    {
      title: "Package 2: Baguio Standard Tour",
      inclusions: [
        "Accommodation",
        "Van Transfer",
        "Land Tour",
      ],
      exclusions: [
        "Meals",
        "Entrance Fee & Eco Fee",
      ],
    },
    {
      title: "Package 17: Baguio (3 Days 2 Nights)",
      inclusions: [
        "Roundtrip Van Transfer",
        "Accommodation",
        "City Tour",
        "Places to Visit itinerary",
        "Toll fees",
        "Gasoline",
        "Driver's Meal",
      ],
      exclusions: [
        "Entrance fee in all tourist spots",
        "Food / Personal Meals",
      ],
    },
  ],
  priceNote: "Contact us for custom schedules, barkada packages, and group rates.",
};

function Wave() {
  return (
    <div style={{ width: 120, margin: "0 0 16px" }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 16 }} preserveAspectRatio="none">
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
          <path key={i} d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`} stroke="#003366" strokeWidth="1.5" fill="none" opacity={0.4} />
        ))}
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", height: "42vh", minHeight: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src={tour.image} alt={tour.name} fill style={{ objectFit: "cover", objectPosition: "center 50%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.68)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <Link href="/packages/local" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, color: "#FF9900", textDecoration: "none", display: "inline-block", marginBottom: 12 }}>
          ← LOCAL LAND TOURS
        </Link>
        <h1 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(32px, 6vw, 60px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: 3, margin: "0 0 10px", lineHeight: 1 }}>
          {tour.name}
        </h1>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(13px, 2vw, 17px)", color: "#BACCDF", margin: "0 0 20px", fontStyle: "italic" }}>{tour.tagline}</p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ color: "#BACCDF", fontSize: 13, fontFamily: "var(--font-figtree), sans-serif" }}><Calendar size={14} style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }} />{tour.duration}</span>
          <span style={{ color: "#BACCDF", fontSize: 13, fontFamily: "var(--font-figtree), sans-serif" }}><MapPin size={14} style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }} />{tour.location}</span>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section style={{ padding: "72px 24px 0", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 480px" }}>
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#003366", margin: "0 0 6px" }}>ABOUT THIS TOUR</p>
          <Wave />
          <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 20px" }}>DISCOVER {tour.name.toUpperCase()}</h2>
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#333", lineHeight: 1.8 }}>{tour.intro}</p>
        </div>
        <div style={{ flex: "1 1 300px", background: "#003366", borderRadius: 16, padding: 32, color: "#fff" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#FF9900", margin: "0 0 20px" }}>TOUR AT A GLANCE</h3>
          {[
            { label: "Duration", value: tour.duration },
            { label: "Location", value: tour.location },
            { label: "Pricing", value: tour.priceNote },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 16 }}>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#BACCDF", marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, fontWeight: 600, color: "#fff" }}>{item.value}</div>
            </div>
          ))}
          <QuoteButton
            tourName={tour.name}
            duration={tour.duration}
            label="GET A QUOTE"
            style={{ display: "flex", width: "100%", background: "#FF9900", color: "#fff", padding: "14px 24px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif", textAlign: "center", marginTop: 8 }}
          />
        </div>
      </div>
    </section>
  );
}

function PlacesToVisitSection() {
  return (
    <section style={{ padding: "72px 24px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#003366", margin: "0 0 6px" }}>CITY TOUR ATTRACTIONS</p>
      <Wave />
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 32px" }}>PLACES TO VISIT</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {tour.placesToVisit.map((place, i) => (
          <div key={i} style={{ background: "#fff", border: "1.5px solid #BACCDF", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,51,102,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <MapPin size={18} color="#003366" />
            </div>
            <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, fontWeight: 700, color: "#003366" }}>{place}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PackagesComparison() {
  return (
    <section style={{ padding: "40px 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#003366", margin: "0 0 6px" }}>OFFICIAL PACKAGE OPTIONS</p>
      <Wave />
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 36px" }}>INCLUSIONS &amp; EXCLUSIONS</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
        {tour.packages.map((pkg, idx) => (
          <div key={idx} style={{ background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", margin: 0 }}>{pkg.title}</h3>
            <div>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#0054A8", marginBottom: 10 }}>Inclusions</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {pkg.inclusions.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#333", lineHeight: 1.4 }}>
                    <Check size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#ef4444", marginBottom: 10 }}>Exclusions</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {pkg.exclusions.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#666", lineHeight: 1.4 }}>
                    <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section style={{ background: "#FFFDF0", borderTop: "2px solid #BACCDF", padding: "60px 24px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 12px" }}>READY TO BOOK?</h2>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#555", margin: "0 auto 32px", maxWidth: 480, lineHeight: 1.7 }}>
        Contact our team today to get a personalized quote and start planning your {tour.name} adventure.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <QuoteButton
          tourName={tour.name}
          duration={tour.duration}
          label="REQUEST A QUOTE"
          style={{ background: "#FF9900", color: "#fff", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}
        />
        <Link href="/packages/local" style={{ background: "transparent", color: "#003366", border: "2px solid #003366", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}>
          VIEW ALL TOURS
        </Link>
      </div>
    </section>
  );
}

export default function TourPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <PlacesToVisitSection />
        <PackagesComparison />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
