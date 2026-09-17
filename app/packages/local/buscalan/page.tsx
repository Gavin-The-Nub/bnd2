"use client";
import { Mountain, Users, Feather, Moon, Music, Camera, Calendar, MapPin, Check, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../../components/shared";
import { QuoteButton } from "../../../components/QuoteButton";

const tour = {
  name: "Buscalan",
  tagline: "Trek to Apo Whang-Od & the Kalinga Tattoo",
  tag: "CULTURAL TREK",
  duration: "3D / 2N",
  location: "Kalinga, Luzon",
  image: "/pkg-village.jpg",
  intro: "Buscalan is a remote Butbut village in the mountains of Kalinga province that has become world-famous as home to Apo Whang-Od — the oldest living traditional mambabatok (tattoo artist) in the Philippines, now in her 100s. Our 3-day, 2-night package takes you from Manila all the way to Buscalan and Sagada, covering your van transfer, driver, a night in Buscalan, a night in Sagada, and a dedicated tour guide in Buscalan. A journey of a lifetime.",
  highlights: [
      {icon: "Feather", title: "Kalinga Tattoo by Whang-Od", desc: "Receive a traditional batok tattoo using a hand-tapped technique with pomelo thorn and charcoal — a living cultural heritage practice."},
      {icon: "Mountain", title: "Banaue Rice Terraces View Deck", desc: "Marvel at the legendary Banaue rice terraces, a UNESCO World Heritage Site carved into the Cordillera mountains over 2,000 years ago."},
      {icon: "Users", title: "Butbut Village Immersion", desc: "Spend time in the traditional Butbut Kalinga village, learning about their warrior culture, rituals, and daily life."},
      {icon: "Camera", title: "Sumaguing Cave in Sagada", desc: "Explore the breathtaking limestone formations deep inside Sagada's most famous cave on Day 2 of your journey."},
      {icon: "Music", title: "Marlboro Hills & Sagada", desc: "Hike to Sagada's famous rolling hills with sweeping mountain views, and explore the Sagada weaving and pottery workshops."},
      {icon: "Moon", title: "Overnight Homestay in Buscalan", desc: "Stay the night in the village in room sharing accommodation for an authentic and deeply moving cultural experience."},
  ],
  itinerary: [
      {day: "Day 1", title: "Manila to Buscalan via Banaue", activities: ["Depart Manila via van transfer", "Stop at Banaue Arch & rice terraces view deck", "Continue to Buscalan Village", "Village orientation with tour guide", "Tattoo session with Whang-Od or her apprentices (queue-based)", "Explore Apo Whang Od Village & Hanging Village", "Overnight room sharing at Buscalan"]},
      {day: "Day 2", title: "Buscalan to Sagada", activities: ["Morning tattoo session (if desired)", "Farewell with the Butbut community", "Travel to Sagada", "Check-in at Sagada accommodation", "Sumaguing Cave tour (hire local guide on-site)", "Free time to explore Marlboro Hills, Sagada Weaving, Sagada Potter", "Sakura Park & Atok highest point"]},
      {day: "Day 3", title: "Sagada to Manila", activities: ["Morning free time in Sagada", "Pick up souvenirs & pasalubong", "Van transfer back to Manila"]},
  ],
  inclusions: ["Van Transfer", "Driver", "Gas and Toll", "Parking Fee", "1 night room sharing at Buscalan", "Tour guide at Buscalan", "1 night at Sagada"],
  exclusions: ["Tour guide at Sagada", "Shuttle fee at Sagada", "Eco fee", "Meals"],
  priceNote: "Tattoo fees are paid directly to Whang-Od or her apprentices. Contact us for tour package rates.",
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
          <span style={{ background: "#FF9900", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 20, fontFamily: "var(--font-figtree), sans-serif", letterSpacing: 0.5 }}>{tour.tag}</span>
          <span style={{ color: "#BACCDF", fontSize: 13, fontFamily: "var(--font-figtree), sans-serif" }}><Calendar size={14} style={{marginRight: 4, display: "inline-block", verticalAlign: "middle"}} />{tour.duration}</span>
          <span style={{ color: "#BACCDF", fontSize: 13, fontFamily: "var(--font-figtree), sans-serif" }}><MapPin size={14} style={{marginRight: 4, display: "inline-block", verticalAlign: "middle"}} />{tour.location}</span>
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

const IconComponents: Record<string, any> = {
  "Mountain": Mountain,
  "Users": Users,
  "Feather": Feather,
  "Moon": Moon,
  "Music": Music,
  "Camera": Camera,
};

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

function Itinerary() {
  return (
    <section style={{ padding: "0 24px 72px", maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#003366", margin: "0 0 6px" }}>YOUR JOURNEY</p>
      <Wave />
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 40px" }}>SAMPLE ITINERARY</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {tour.itinerary.map((day, i) => (
          <div key={i} style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0, width: 90, textAlign: "center" }}>
              <div style={{ background: "#003366", color: "#fff", borderRadius: 10, padding: "14px 8px", fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>{day.day}</div>
            </div>
            <div style={{ flex: 1, background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "24px 28px", minWidth: 280 }}>
              <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 16px", textTransform: "uppercase" }}>{day.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {day.activities.map((act, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.5 }}>
                    <span style={{ color: "#FF9900", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {act}
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

function InclusionsExclusions() {
  return (
    <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 280px", background: "#003366", borderRadius: 14, padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#FF9900", margin: "0 0 20px" }}>✓ INCLUSIONS</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {tour.inclusions.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", lineHeight: 1.5 }}>
                <Check size={16} color="#4ade80" style={{flexShrink: 0, marginTop: 2}} />{item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 280px", background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#003366", margin: "0 0 20px" }}>✗ EXCLUSIONS</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {tour.exclusions.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                <X size={16} color="#ef4444" style={{flexShrink: 0, marginTop: 2}} />{item}
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
        <Highlights />
        <InclusionsExclusions />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
