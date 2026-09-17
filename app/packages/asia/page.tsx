"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../components/shared";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const asiaTours = [
  {
    slug: "japan",
    name: "Japan",
    tagline: "Cherry Blossoms, Temples & Modern Wonders",
    desc: "Experience the perfect harmony of ancient traditions and futuristic innovation — from Tokyo's neon streets to Kyoto's serene shrines and majestic Mount Fuji.",
    image: "/pkg-lighthouse.jpg",
    tag: "POPULAR DESTINATION",
    duration: "5D / 4N",
    location: "Tokyo, Kyoto & Mt. Fuji",
  },
  {
    slug: "thailand",
    name: "Thailand",
    tagline: "Land of Smiles, Golden Temples & Street Food",
    desc: "Explore vibrant Bangkok street markets, majestic royal palaces, tranquil Chiang Mai temples, and idyllic tropical islands with crystal-clear waters.",
    image: "/pkg-beach.jpg",
    tag: "TROPICAL ESCAPE",
    duration: "4D / 3N",
    location: "Bangkok & Pattaya",
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    tagline: "Night Markets, Lantern Villages & Mountain Tea",
    desc: "Immerse yourself in legendary night markets, lantern-filled Jiufen cobblestone lanes, iconic Taipei 101, and breathtaking Sun Moon Lake.",
    image: "/pkg-village.jpg",
    tag: "FOOD & HERITAGE",
    duration: "4D / 3N",
    location: "Taipei, Jiufen & Sun Moon Lake",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline: "Emerald Bays, Lantern Towns & Rich Flavors",
    desc: "Cruise through majestic limestone karsts of Ha Long Bay, stroll the romantic lantern-lit streets of Hoi An, and savor authentic world-famous pho.",
    image: "/pkg-honeymoon.jpg",
    tag: "SCENIC ADVENTURE",
    duration: "5D / 4N",
    location: "Hanoi, Ha Long Bay & Hoi An",
  },
];

function Hero() {
  return (
    <section style={{ position: "relative", height: "38vh", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src="/pkg-honeymoon.jpg" alt="Asia Tours" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.65)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#FF9900", margin: "0 0 12px" }}>
          BND TRAVEL &amp; TOURS
        </p>
        <h1 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: 3, margin: "0 0 12px", lineHeight: 1.1 }}>
          ASIA TOURS
        </h1>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(12px, 2vw, 15px)", color: "#BACCDF", letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>
          Discover the Magic, Wonders &amp; Cultures of Asia
        </p>
      </div>
    </section>
  );
}

function DestinationsGrid() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#003366", margin: "0 0 10px" }}>
          INTERNATIONAL DESTINATIONS
        </p>
        <div style={{ width: 160, margin: "0 auto 16px" }}>
          <svg viewBox="0 0 600 20" style={{ width: "100%", height: 18 }} preserveAspectRatio="none">
            {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
              <path key={i} d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`} stroke="#003366" strokeWidth="1.5" fill="none" opacity={0.4} />
            ))}
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 16px" }}>
          EXPLORE ASIA WITH US
        </h2>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#444", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
          Unforgettable international journeys crafted with seamless travel arrangements, curated itineraries, and top-tier local guides.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
        {asiaTours.map((tour) => (
          <Link key={tour.slug} href={`/packages/asia/${tour.slug}`} style={{ textDecoration: "none", display: "flex" }}>
            <div
              style={{ border: "2px solid #BACCDF", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff", width: "100%", transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,51,102,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              <div style={{ position: "relative", width: "100%", height: 220, flexShrink: 0 }}>
                <Image src={tour.image} alt={tour.name} fill style={{ objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: "#FF9900", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.5, fontFamily: "var(--font-figtree), sans-serif" }}>
                  {tour.tag}
                </span>
              </div>
              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#0054A8", fontWeight: 600, fontFamily: "var(--font-figtree), sans-serif", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5, flexWrap: "wrap" }}>
                  <span><Calendar size={13} style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }} />{tour.duration}</span>
                  <span><MapPin size={13} style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }} />{tour.location}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 22, fontWeight: 900, color: "#003366", margin: "0 0 4px", textTransform: "uppercase" }}>{tour.name}</h3>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 600, color: "#FF9900", margin: "0 0 12px", fontStyle: "italic" }}>{tour.tagline}</p>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.65, flex: 1, margin: "0 0 24px" }}>{tour.desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#003366", color: "#fff", padding: "10px 22px", borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--font-figtree), sans-serif", alignSelf: "flex-start" }}>
                  VIEW TOUR
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section style={{ background: "#003366", padding: "60px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#FF9900", margin: "0 0 12px" }}>READY TO TRAVEL ASIA?</p>
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, textTransform: "uppercase", color: "#fff", margin: "0 0 16px", letterSpacing: 1 }}>BOOK YOUR INTERNATIONAL ADVENTURE</h2>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#BACCDF", margin: "0 auto 32px", maxWidth: 540, lineHeight: 1.7 }}>Contact our travel specialists today to get a customized quote for your dream Asia tour.</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/request-a-quote" style={{ background: "#FF9900", color: "#fff", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}>REQUEST A QUOTE</Link>
        <Link href="/contact" style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "14px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", fontFamily: "var(--font-figtree), sans-serif" }}>CONTACT US</Link>
      </div>
    </section>
  );
}

export default function AsiaToursPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinationsGrid />
        <CTAStrip />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
