"use client";

import { X, Landmark, Sparkles, Calendar, Trees, Compass, Check, Building2, MapPin, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../../components/shared";
import { QuoteButton } from "../../../components/QuoteButton";

const tour = {
  name: "Taiwan",
  tagline: "Night Markets, Lantern Villages & Mountain Tea",
  tag: "FOOD & HERITAGE",
  duration: "4D / 3N",
  location: "Taipei, Jiufen & Sun Moon Lake",
  image: "/pkg-village.jpg",
  intro: "Taiwan is an island of vibrant night markets, mist-shrouded mountain villages, and rich cultural traditions. Stroll down lantern-lit cobblestone streets in Jiufen, release a sky lantern with your wishes in Shifen, marvel at Taipei 101, and cruise the tranquil alpine waters of Sun Moon Lake.",
  highlights: [
    { icon: "Building2", title: "Taipei 101 Observatory", desc: "Ascend one of the world's tallest skyscrapers for 360-degree panoramic views of Taipei city." },
    { icon: "Sparkles", title: "Jiufen Old Street & Shifen Lanterns", desc: "Wander nostalgic teahouse lanes in Jiufen and release your written wishes on a flying sky lantern in Shifen." },
    { icon: "Utensils", title: "Shilin Night Market Food Tour", desc: "Savor famous Taiwanese bubble tea, boba, fried chicken cutlets, stinky tofu, and beef noodle soup." },
    { icon: "Trees", title: "Sun Moon Lake Scenic Cruise", desc: "Take a serene boat cruise on Taiwan's largest alpine lake surrounded by emerald mountains." },
    { icon: "Landmark", title: "National Palace Museum", desc: "Discover thousands of years of Chinese imperial artifacts and treasures in a world-class museum." },
    { icon: "Compass", title: "Yehliu Geopark Rock Formations", desc: "Marvel at natural coastal rock sculptures carved by sea erosion, including the famous Queen's Head." }
  ],
  inclusions: ["Round-trip flight coordination", "3 nights hotel accommodation", "Daily breakfast", "Taipei 101 observatory ticket", "Jiufen & Shifen day tour with sky lantern", "Sun Moon Lake cruise ticket"],
  exclusions: ["Taiwan Visa (if applicable)", "Personal expenses & shopping", "Meals not specified", "Travel insurance", "Tips"],
  priceNote: "Customizable for families and groups. Request your personalized itinerary.",
};

const IconComponents: Record<string, any> = {
  "Building2": Building2,
  "Sparkles": Sparkles,
  "Utensils": Utensils,
  "Trees": Trees,
  "Landmark": Landmark,
  "Compass": Compass
};

function Wave() {
  return (
    <div style={{ width: 120, margin: "0 0 16px" }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 16 }} preserveAspectRatio="none">
        {[0,60,120,180,240,300,360,420,480,540].map((x, i) => (
          <path key={i} d={`M${x},10 C${x+15},2 ${x+30},18 ${x+45},10 S${x+60},2 ${x+60},10`} stroke="#003366" strokeWidth="1.5" fill="none" opacity={0.4} />
        ))}
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", height: "42vh", minHeight: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src={tour.image} alt={tour.name} fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.68)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <Link href="/packages/asia" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, color: "#FF9900", textDecoration: "none", display: "inline-block", marginBottom: 12 }}>
          ← ASIA TOURS
        </Link>
        <h1 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(32px, 6vw, 60px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: 3, margin: "0 0 10px", lineHeight: 1 }}>
          {tour.name}
        </h1>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(13px, 2vw, 17px)", color: "#BACCDF", margin: "0 0 20px", fontStyle: "italic" }}>{tour.tagline}</p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ background: "#FF9900", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 20, fontFamily: "var(--font-figtree), sans-serif", letterSpacing: 0.5 }}>{tour.tag}</span>
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
            { label: "Tour Type", value: tour.tag },
            { label: "Pricing Note", value: tour.priceNote },
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

function Highlights() {
  return (
    <section style={{ padding: "72px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#003366", margin: "0 0 6px" }}>WHAT YOU&apos;LL EXPERIENCE</p>
      <Wave />
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 40px" }}>TOUR HIGHLIGHTS</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
        {tour.highlights.map((h, i) => {
          const IconComponent = IconComponents[h.icon] || MapPin;
          return (
            <div key={i} style={{ background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,51,102,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <IconComponent size={22} color="#003366" />
              </div>
              <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, fontWeight: 800, color: "#003366", margin: "0 0 10px", textTransform: "uppercase" }}>{h.title}</h3>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function InclusionsExclusions() {
  return (
    <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 280px", background: "#003366", borderRadius: 14, padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#FF9900", margin: "0 0 20px" }}>✓ INCLUSIONS</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {tour.inclusions.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", lineHeight: 1.5 }}>
                <Check size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 280px", background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#003366", margin: "0 0 20px" }}>✗ EXCLUSIONS</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {tour.exclusions.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section style={{ background: "#FFFDF0", borderTop: "2px solid #BACCDF", padding: "60px 24px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 12px" }}>READY TO BOOK YOUR {tour.name.toUpperCase()} TRIP?</h2>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#555", margin: "0 auto 32px", maxWidth: 480, lineHeight: 1.7 }}>
        Contact our travel specialists today to get a personalized quote and start planning your {tour.name} journey.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <QuoteButton
          tourName={tour.name}
          duration={tour.duration}
          label="REQUEST A QUOTE"
          style={{ background: "#FF9900", color: "#fff", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}
        />
        <Link href="/packages/asia" style={{ background: "transparent", color: "#003366", border: "2px solid #003366", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}>
          VIEW ALL ASIA TOURS
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
        <Highlights />
        <InclusionsExclusions />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
