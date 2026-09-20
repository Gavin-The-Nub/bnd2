"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../components/shared";

interface AsiaTourItem {
  slug: string;
  href: string;
  packageNum: string;
  category: "destination" | "day-tour";
  name: string;
  desc: string;
  image: string;
  duration: string;
  location: string;
  inclusions: string[];
  exclusions: string[];
  placesToVisit?: string[];
}

const asiaTours: AsiaTourItem[] = [
  {
    slug: "japan",
    href: "/packages/asia/japan",
    packageNum: "Package 1",
    category: "destination",
    name: "Japan",
    desc: "Experience ancient traditions and futuristic innovation — from Tokyo's neon streets and Mount Fuji to Kyoto's serene shrines, bullet trains, and world-class culinary art.",
    image: "/pkg-lighthouse.jpg",
    duration: "5D / 4N",
    location: "Tokyo, Kyoto & Mt. Fuji, Japan",
    inclusions: [
      "Round-trip Flight Coordination",
      "Hotel Accommodation (3-4 Star)",
      "Daily Hotel Breakfast",
      "Shinkansen Bullet Train Ticket",
      "Guided City Tours with English Guide",
      "Entrance Fees for Specified Sights",
    ],
    exclusions: ["Japan Visa Fee", "Personal Shopping & Expenses", "Meals Not Specified", "Travel Insurance"],
    placesToVisit: ["Shibuya Crossing", "Mount Fuji 5th Station", "Fushimi Inari Taisha", "Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove"],
  },
  {
    slug: "thailand",
    href: "/packages/asia/thailand",
    packageNum: "Package 2",
    category: "destination",
    name: "Thailand",
    desc: "Golden temples, floating canal markets, and 5 exclusive private VIP van day tours across Bangkok, Pattaya, Khao Yai, Ayutthaya, and Kanchanaburi starting at ₱14,499.",
    image: "/pkg-beach.jpg",
    duration: "Day Tours & 4D / 3N",
    location: "Bangkok, Pattaya & Khao Yai, Thailand",
    inclusions: [
      "Private VIP Van (3-10 Pax)",
      "Professional Driver & Fuel",
      "12-15 Hours Day Tour Service",
      "Hotel Pick-up & Drop-off",
      "Toll Fees & Parking",
      "Curated Itinerary Stops",
    ],
    exclusions: ["Attraction Entrance Fees", "Personal Food & Drinks", "Optional Activities", "Driver Gratuity"],
    placesToVisit: ["Grand Palace & Wat Arun", "Maeklong Railway Market", "Damnoen Saduak Floating Market", "Sanctuary of Truth", "Ayutthaya Historical Park"],
  },
  {
    slug: "taiwan",
    href: "/packages/asia/taiwan",
    packageNum: "Package 3",
    category: "destination",
    name: "Taiwan",
    desc: "Legendary night markets, lantern-filled Jiufen cobblestone lanes, iconic Taipei 101 observatory, and breathtaking alpine mountain scenery at Sun Moon Lake.",
    image: "/pkg-village.jpg",
    duration: "4D / 3N",
    location: "Taipei, Jiufen & Sun Moon Lake, Taiwan",
    inclusions: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Round-trip Airport Transfers",
      "Taipei 101 Observatory Ticket",
      "Jiufen & Shifen Day Tour with Sky Lantern",
      "Sun Moon Lake Cruise Ticket",
    ],
    exclusions: ["Taiwan Visa (if applicable)", "Personal Expenses & Shopping", "Meals Not Specified", "Tips for Driver & Guide"],
    placesToVisit: ["Taipei 101 Observatory", "Jiufen Old Street", "Shifen Waterfall & Sky Lanterns", "Sun Moon Lake", "Shilin Night Market"],
  },
  {
    slug: "vietnam",
    href: "/packages/asia/vietnam",
    packageNum: "Package 4",
    category: "destination",
    name: "Vietnam",
    desc: "Cruise through emerald limestone karsts of UNESCO-listed Ha Long Bay, stroll romantic silk lantern-lit streets in Hoi An Ancient Town, and savor authentic world-famous pho.",
    image: "/pkg-honeymoon.jpg",
    duration: "5D / 4N",
    location: "Hanoi, Ha Long Bay & Hoi An, Vietnam",
    inclusions: [
      "Hotel Accommodation (3-4 Star)",
      "Ha Long Bay Cruise Experience",
      "Daily Buffet Breakfasts",
      "Airport Round-trip Transfers",
      "Guided City Touring & Van Transport",
      "Sightseeing Entrance Tickets",
    ],
    exclusions: ["Vietnam Visa (if applicable)", "Personal Expenses & Shopping", "Meals Not Specified", "Travel Insurance"],
    placesToVisit: ["Ha Long Bay Cruise", "Hoi An Ancient Town", "Hanoi Old Quarter", "Temple of Literature", "Ba Na Hills Golden Bridge"],
  },
  {
    slug: "khao-yai",
    href: "/packages/asia/thailand#khao-yai",
    packageNum: "Package 5",
    category: "day-tour",
    name: "Thailand – Khao Yai Tour",
    desc: "Picturesque European escape into Thailand's premier highland destination: Italian-style piazzas, rolling vineyards, Hokkaido flower fields, and scenic designer mountain cafes. Flat rate ₱14,499.",
    image: "/pkg-village.jpg",
    duration: "12 - 15 Hours",
    location: "Khao Yai, Thailand",
    inclusions: [
      "1 Dedicated VIP Van (3 to 10 Persons)",
      "Professional Local Driver",
      "Fuel, Gas & Highway Tolls Included",
      "12 to 15 Hours Service",
      "Hotel Pick-up & Drop-off Coordination",
    ],
    exclusions: ["Entrance Fees to Parks & Farms", "Food & Cafe Drinks", "Personal Expenses", "Driver Tip"],
    placesToVisit: ["PB Valley Winery", "Primo Piazza", "Hokkaido Flower Park", "Bucolic Cafe", "Toscana Valley", "Flory Day Cafe", "Trot Cafe", "Pirom Cafe"],
  },
  {
    slug: "pattaya-city",
    href: "/packages/asia/thailand#pattaya-city",
    packageNum: "Package 6",
    category: "day-tour",
    name: "Thailand – Pattaya City Tour",
    desc: "Complete Pattaya adventure featuring the majestic hand-carved wooden Sanctuary of Truth, tropical botanical gardens, Buddha Mountain, and fairytale cafe estates. Flat rate ₱14,499.",
    image: "/pkg-beach.jpg",
    duration: "12 - 15 Hours",
    location: "Pattaya, Chonburi, Thailand",
    inclusions: [
      "1 Dedicated VIP Van (3 to 10 Persons)",
      "Professional Local Driver",
      "Fuel, Gas & Highway Tolls Included",
      "12 to 15 Hours Service",
      "Hotel Pick-up & Drop-off Coordination",
    ],
    exclusions: ["Entrance Fees (Sanctuary of Truth, Nong Nooch)", "Food & Cafe Drinks", "Personal Expenses", "Driver Tip"],
    placesToVisit: ["Sanctuary of Truth", "Nong Nooch Tropical Garden", "Khao Chi Chan (Buddha Mountain)", "Castello di Bellagio", "Great and Grand Sweet Destination", "Chang Thai Thappraya", "House of Benedict", "Paboon Cafe"],
  },
  {
    slug: "bangkok-ratchaburi",
    href: "/packages/asia/thailand#bangkok-ratchaburi",
    packageNum: "Package 7",
    category: "day-tour",
    name: "Thailand – Bangkok & Ratchaburi",
    desc: "Quintessential Thai culture tour combining the thrilling Maeklong Railway train pass, Damnoen Saduak floating market canal boats, Grand Palace, sacred wats, and riverside dinner cruise. Flat rate ₱14,499.",
    image: "/pkg-hotel.jpg",
    duration: "12 - 15 Hours",
    location: "Bangkok & Ratchaburi, Thailand",
    inclusions: [
      "1 Dedicated VIP Van (3 to 10 Persons)",
      "Professional Local Driver",
      "Fuel, Gas & Highway Tolls Included",
      "12 to 15 Hours Service",
      "Hotel Pick-up & Drop-off Coordination",
    ],
    exclusions: ["Boat Ride & Market Fees", "Grand Palace & Wat Entrance Fees", "Elephant Rides", "Food & Meals", "Driver Tip"],
    placesToVisit: ["Maeklong Railway Market", "Damnoen Saduak Floating Market", "Chang Puak Elephant Rides", "Ancient City (Muang Boran)", "Grand Palace", "Wat Pho", "Wat Arun", "Asiatique Riverfront"],
  },
  {
    slug: "ayutthaya",
    href: "/packages/asia/thailand#ayutthaya",
    packageNum: "Package 8",
    category: "day-tour",
    name: "Thailand – Ayutthaya Tour",
    desc: "Step back in time to the ancient UNESCO-listed Siamese capital. Marvel at monumental temple ruins, sacred Buddha head in banyan roots, floating markets, and Bang Pa-In summer palace. Flat rate ₱14,499.",
    image: "/pkg-lighthouse.jpg",
    duration: "12 - 15 Hours",
    location: "Ayutthaya, Central Thailand",
    inclusions: [
      "1 Dedicated VIP Van (3 to 10 Persons)",
      "Professional Local Driver",
      "Fuel, Gas & Highway Tolls Included",
      "12 to 15 Hours Service",
      "Hotel Pick-up & Drop-off Coordination",
    ],
    exclusions: ["Historical Park Entrance Fees", "Ayutthaya Floating Market Entrance", "Elephant Rides", "Meals & Drinks", "Driver Tip"],
    placesToVisit: ["Ayutthaya Historical Park", "Wat Mahathat", "Wat Yai Chai Mongkhon", "Wat Phra Si Sanphet", "Wat Ratchaburana", "Ayutthaya Floating Market", "Bang Pa-In Royal Palace"],
  },
  {
    slug: "kanchanaburi",
    href: "/packages/asia/thailand#kanchanaburi",
    packageNum: "Package 9",
    category: "day-tour",
    name: "Thailand – Kanchanaburi Tour",
    desc: "Historic and nature immersion featuring the famous River Kwai Bridge, WWII Death Railway train ride, safari open zoo, elephant encounters, and iconic floating rainforest cafes. Flat rate ₱14,499.",
    image: "/pkg-village.jpg",
    duration: "12 - 15 Hours",
    location: "Kanchanaburi, Western Thailand",
    inclusions: [
      "1 Dedicated VIP Van (3 to 10 Persons)",
      "Professional Local Driver",
      "Fuel, Gas & Highway Tolls Included",
      "12 to 15 Hours Service",
      "Hotel Pick-up & Drop-off Coordination",
    ],
    exclusions: ["Safari Park & Elephant World Entrance", "JEATH Museum & Train Tickets", "Food, Meals & Drinks", "Driver Tip"],
    placesToVisit: ["Safari Park Kanchanaburi", "River Kwai Bridge", "JEATH War Museum", "Elephant World", "Death Railway Train Ride", "Bubble in the Forest Cafe", "After the Rain Coffee"],
  },
];

function Hero() {
  return (
    <section style={{ position: "relative", height: "38vh", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src="/pkg-honeymoon.jpg" alt="Asia Tour Packages" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.65)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#FF9900", margin: "0 0 12px" }}>
          BND TRAVEL &amp; TOURS
        </p>
        <h1 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: 3, margin: "0 0 12px", lineHeight: 1.1 }}>
          ASIA TOUR PACKAGES
        </h1>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(12px, 2vw, 15px)", color: "#BACCDF", letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>
          Explore the best of Asia with our curated international itineraries
        </p>
      </div>
    </section>
  );
}

function DestinationsGrid() {
  const [activeTab, setActiveTab] = useState<"all" | "destination" | "day-tour">("all");

  const filteredTours = activeTab === "all"
    ? asiaTours
    : asiaTours.filter((t) => t.category === activeTab);

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#003366", margin: "0 0 10px" }}>
          INTERNATIONAL TOUR PACKAGES
        </p>
        <div style={{ width: 160, margin: "0 auto 16px" }}>
          <svg viewBox="0 0 600 20" style={{ width: "100%", height: 18 }} preserveAspectRatio="none">
            {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
              <path key={i} d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`} stroke="#003366" strokeWidth="1.5" fill="none" opacity={0.4} />
            ))}
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 16px" }}>
          CHOOSE YOUR TOUR PACKAGE
        </h2>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#444", maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}>
          All packages are based on BND Travel &amp; Tours official travel itineraries. From the cultural wonders of Japan and Taiwan to the vibrant floating markets and private VIP day tours of Thailand and Vietnam, explore with dedicated guides and accommodations.
        </p>

        {/* Filter Pills */}
        <div style={{ display: "inline-flex", gap: 10, background: "#f1f5f9", padding: "6px 8px", borderRadius: 30, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => setActiveTab("all")}
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              padding: "8px 20px",
              borderRadius: 24,
              border: "none",
              cursor: "pointer",
              background: activeTab === "all" ? "#003366" : "transparent",
              color: activeTab === "all" ? "#fff" : "#003366",
              transition: "all 0.2s ease",
            }}
          >
            All Packages ({asiaTours.length})
          </button>
          <button
            onClick={() => setActiveTab("destination")}
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              padding: "8px 20px",
              borderRadius: 24,
              border: "none",
              cursor: "pointer",
              background: activeTab === "destination" ? "#003366" : "transparent",
              color: activeTab === "destination" ? "#fff" : "#003366",
              transition: "all 0.2s ease",
            }}
          >
            Country Packages (4)
          </button>
          <button
            onClick={() => setActiveTab("day-tour")}
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              padding: "8px 20px",
              borderRadius: 24,
              border: "none",
              cursor: "pointer",
              background: activeTab === "day-tour" ? "#003366" : "transparent",
              color: activeTab === "day-tour" ? "#fff" : "#003366",
              transition: "all 0.2s ease",
            }}
          >
            Thailand VIP Day Tours (5)
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
        {filteredTours.map((tour) => (
          <Link key={tour.slug} href={tour.href} style={{ textDecoration: "none", display: "flex" }}>
            <div
              style={{ border: "2px solid #BACCDF", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff", width: "100%", transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,51,102,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              <div style={{ position: "relative", width: "100%", height: 220, flexShrink: 0 }}>
                <Image src={tour.image} alt={tour.name} fill style={{ objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,51,102,0.85)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.5, fontFamily: "var(--font-figtree), sans-serif" }}>
                  {tour.packageNum}
                </span>
              </div>
              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#0054A8", fontWeight: 600, fontFamily: "var(--font-figtree), sans-serif", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5, flexWrap: "wrap" }}>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4, transform: "translateY(1px)" }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>{tour.duration}</span>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4, transform: "translateY(1px)" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>{tour.location}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 22, fontWeight: 900, color: "#003366", margin: "0 0 10px", textTransform: "uppercase" }}>{tour.name}</h3>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.65, flex: 1, margin: "0 0 20px" }}>{tour.desc}</p>
                
                <div style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 12px", marginBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#0054A8", letterSpacing: 1, marginBottom: 4 }}>Key Inclusions</div>
                  <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#555", lineHeight: 1.4 }}>
                    {tour.inclusions.slice(0, 3).join(" • ")}{tour.inclusions.length > 3 ? " • ..." : ""}
                  </div>
                </div>

                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#003366", color: "#fff", padding: "10px 22px", borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--font-figtree), sans-serif", alignSelf: "flex-start" }}>
                  VIEW TOUR
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#FF9900", margin: "0 0 12px" }}>READY TO EXPLORE?</p>
      <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, textTransform: "uppercase", color: "#fff", margin: "0 0 16px", letterSpacing: 1 }}>LET US PLAN YOUR PERFECT TRIP</h2>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#BACCDF", margin: "0 auto 32px", maxWidth: 540, lineHeight: 1.7 }}>Contact our team today and we&apos;ll craft a personalized itinerary tailored just for you.</p>
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
