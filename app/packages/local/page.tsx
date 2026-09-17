"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../components/shared";

const localTours = [
  // Packages with dedicated detail pages
  { slug: "sagada",  name: "Sagada",              tagline: "Caves, Coffins & Cool Mountain Air",         desc: "2 nights accommodation with free kitchen use, plus van transfer. Explore hanging coffins, Sumaguing Cave, Kiltepan sunrise, and more in the Cordillera highlands.",                               image: "/pkg-lighthouse.jpg", tag: "HIGHLAND ESCAPE",   duration: "3D / 2N", location: "Mountain Province, Luzon",     hasPage: true },
  { slug: "buscalan",name: "Buscalan – Sagada",   tagline: "Trek to Apo Whang-Od & the Kalinga Tattoo", desc: "Van transfer, driver, gas & toll, parking fee, 1 night in Buscalan with tour guide, and 1 night in Sagada. Visit Banaue, Apo Whang-Od Village, Sumaguing Cave, Marlboro Hills & more.",         image: "/pkg-village.jpg",    tag: "CULTURAL TREK",     duration: "3D / 2N", location: "Kalinga & Mountain Province",  hasPage: true },
  { slug: "bacolod", name: "Bacolod",             tagline: "City of Smiles & Sweet Surprises",           desc: "Accommodation, van transfer, and guided tourist spots included. Discover the Ruins of Lacson, world-famous chicken inasal, Masskara culture, and Silay's heritage houses.",                     image: "/pkg-beach.jpg",      tag: "FOOD & CULTURE",    duration: "3D / 2N", location: "Negros Occidental, Visayas",   hasPage: true },
  { slug: "cebu",    name: "Cebu",                tagline: "Whale Sharks, Waterfalls & Island Life",     desc: "Accommodation, van transfer, and guided tourist spots. Swim with whale sharks in Oslob, plunge into Kawasan Falls, and explore vibrant Cebu City's culture and cuisine.",                       image: "/pkg-beach.jpg",      tag: "ISLAND ADVENTURE",  duration: "4D / 3N", location: "Cebu, Visayas",                hasPage: true },
  { slug: "siargao", name: "Siargao",             tagline: "Surf, Lagoons & Island Bliss",               desc: "Accommodation, van transfer, and guided tourist spots included. Ride Cloud 9, explore mangrove lagoons, island-hop to Naked Island, and soak in the laid-back surfer lifestyle.",               image: "/pkg-honeymoon.jpg",  tag: "SURF & SUN",        duration: "4D / 3N", location: "Surigao del Norte, Mindanao",  hasPage: true },
  { slug: "bataan",  name: "Bataan",              tagline: "History, Heritage & Natural Wonders",        desc: "Walk through historic WWII battlegrounds, lush national parks, pristine beaches, and century-old churches in this historically rich province.",                                                   image: "/pkg-village.jpg",    tag: "HERITAGE TOUR",     duration: "2D / 1N", location: "Bataan, Luzon",                hasPage: true },
  { slug: "batanes", name: "Batanes",             tagline: "The Last Frontier of the North",             desc: "Discover rolling hills, stone-walled Ivatan houses, dramatic cliffs, and a serene pace of life in the northernmost islands of the Philippines.",                                                   image: "/pkg-hotel.jpg",      tag: "MOST POPULAR",      duration: "4D / 3N", location: "Batanes, Luzon",               hasPage: true },
  { slug: "siquijor",name: "Siquijor",            tagline: "Mystical Island of Fire & Falls",            desc: "Explore enchanted balete trees, crystal-clear coves, stunning waterfalls, and centuries-old stone churches on this mystical island.",                                                             image: "/pkg-lighthouse.jpg", tag: "MYSTIC ISLAND",     duration: "3D / 2N", location: "Siquijor, Visayas",            hasPage: true },
  // Packages from BND travel_packages.md — inquire for details
  { slug: "baguio-2d1n",    name: "Baguio (2D/1N)",      tagline: "City of Pines & Cool Mountain Air",   desc: "Accommodation, van transfer, and land tour. Inclusions cover your stay and transport — entrance fees and meals are your own.",                                                                    image: "/pkg-hotel.jpg",      tag: "HIGHLAND ESCAPE",   duration: "2D / 1N", location: "Baguio City, Luzon",           hasPage: false },
  { slug: "baguio-3d2n",    name: "Baguio (3D/2N)",      tagline: "Deep Dive into the Summer Capital",   desc: "Roundtrip van, accommodation, city tour, toll & gas included. Visit Lions Head, Camp John Hay, Burnham Park, Strawberry Farm, Mines View & more.",                                              image: "/pkg-hotel.jpg",      tag: "BEST VALUE",        duration: "3D / 2N", location: "Baguio City, Luzon",           hasPage: false },
  { slug: "la-union",       name: "La Union",            tagline: "Surf, Sand & Sunsets Up North",       desc: "2 nights accommodation, land tour, and high-roof van transfer. Eco fee not included. Perfect for beach lovers and surf beginners.",                                                              image: "/pkg-beach.jpg",      tag: "BEACH GETAWAY",     duration: "3D / 2N", location: "La Union, Luzon",              hasPage: false },
  { slug: "ilocos-2d1n",    name: "Ilocos (2D/1N)",      tagline: "History, Sand Dunes & Bagnet",        desc: "1 night near the beach + 1 night in Ilocos Sur, 2 complimentary breakfasts, van transfer, and guided itinerary. Entrance & eco fees not included.",                                            image: "/pkg-lighthouse.jpg", tag: "HERITAGE TOUR",     duration: "2D / 1N", location: "Ilocos Norte & Sur, Luzon",    hasPage: false },
  { slug: "ilocos-3d2n",    name: "Ilocos (3D/2N)",      tagline: "Full Ilocos Experience",              desc: "2 nights accommodation, 2 complimentary breakfasts, van transfer, and guided itinerary. Visit Paoay Church, Sand Dunes, Patapat Viaduct, Bangui Windmill, Vigan's Calle Crisologo & more.",    image: "/pkg-lighthouse.jpg", tag: "ILOCOS TOUR",       duration: "3D / 2N", location: "Ilocos Norte & Sur, Luzon",    hasPage: false },
  { slug: "vigan-paoay",    name: "Vigan – Paoay – Pagudpud", tagline: "The Ultimate Ilocos Grand Tour",  desc: "High-roof roundtrip van, fully aircon accommodation, tour coordinator, diesel/toll/parking, and free breakfast. Pick-up from MOA, Greenfield, Fishermall, SM Pampanga & more!",              image: "/pkg-lighthouse.jpg", tag: "JOINERS WELCOME",   duration: "3D / 2N", location: "Ilocos Norte & Sur, Luzon",    hasPage: false },
  { slug: "bicol",          name: "Bicol",               tagline: "Mayon Volcano & Adventure Awaits",    desc: "2 nights accommodation and high-roof van transfer. Tour around Bicol included — food, entrance fees, and eco fees are separate.",                                                                 image: "/pkg-village.jpg",    tag: "VOLCANO TOUR",      duration: "3D / 2N", location: "Bicol Region, Luzon",          hasPage: false },
  { slug: "bicol-tricity",  name: "Bicol Tricity",       tagline: "Subic Pink Beach, Mayon & More",      desc: "Van, gas & toll, itinerary, and 2 nights accommodation. Visit Subic Pink Beach, Matnog Port, Cagsawa Ruins, Sumlang Lake, Mayon Skyline, Lingnon Hill & more.",                              image: "/pkg-village.jpg",    tag: "ADVENTURE TOUR",    duration: "3D / 2N", location: "Bicol Region, Luzon",          hasPage: false },
  { slug: "albay-sorsogon", name: "Albay – Sorsogon",    tagline: "Ruins, Beaches & Island Hopping",     desc: "High-roof van service and 2 nights fully aircon accommodation. Visit Cagsawa Ruins, Sumlang Lake, Matnog Sorsogon, Subic Pink Beach, and more. Meals and boat ride excluded.",                  image: "/pkg-beach.jpg",      tag: "COMBO PACKAGE",     duration: "3D / 2N", location: "Albay & Sorsogon, Luzon",      hasPage: false },
  { slug: "iloilo",         name: "Iloilo",              tagline: "Heart of the Visayas Heritage",       desc: "Accommodation, van transfer, and guided tourist spots. Meals, airfare, and shuttle are not included. Explore Iloilo's stunning churches, heritage houses, and local cuisine.",                   image: "/pkg-hotel.jpg",      tag: "FOOD & HERITAGE",   duration: "3D / 2N", location: "Iloilo, Visayas",              hasPage: false },
  { slug: "palawan",        name: "Palawan",             tagline: "The Last Frontier of the Philippines", desc: "Accommodation, van transfer, and guided tourist spots. Meals, airfare, and shuttle are not included. Discover the world's best island with its underground rivers and pristine beaches.",      image: "/pkg-beach.jpg",      tag: "PARADISE ISLAND",   duration: "4D / 3N", location: "Palawan, Luzon",               hasPage: false },
  { slug: "mt-pinatubo",    name: "Mt. Pinatubo",        tagline: "4x4 Adventure to the Crater Lake",    desc: "Roundtrip van, registration fee, toll, tour guide, 4x4 ride, gas, and meals all included! One of the most complete BND packages for an unforgettable day trip adventure.",                     image: "/pkg-village.jpg",    tag: "DAY TRIP",          duration: "1D",      location: "Pampanga / Zambales, Luzon",   hasPage: false },
  { slug: "banaue-sagada",  name: "Banaue – Buscalan – Sagada", tagline: "The Great Cordillera Journey", desc: "Van transfer from Lipa to Buscalan/Baguio and back, 1 night in Buscalan with tour guide, and 1 night in Sagada. Visit Banaue Arc, Apo Whang Od Tribe, Sagada Hub, Sumaguing Cave & more.",  image: "/pkg-village.jpg",    tag: "GRAND TREK",        duration: "3D / 2N", location: "Cordillera Region, Luzon",     hasPage: false },
];

function Hero() {
  return (
    <section style={{ position: "relative", height: "38vh", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src="/pkg-beach.jpg" alt="Philippines Local Tours" fill style={{ objectFit: "cover", objectPosition: "center 50%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.65)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, color: "#FF9900", margin: "0 0 12px" }}>
          BND TRAVEL &amp; TOURS
        </p>
        <h1 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: 3, margin: "0 0 12px", lineHeight: 1.1 }}>
          LOCAL LAND TOURS
        </h1>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(12px, 2vw, 15px)", color: "#BACCDF", letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>
          Explore the Philippines — Discover its Islands &amp; Highlands
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
          PHILIPPINES DESTINATIONS
        </p>
        <div style={{ width: 160, margin: "0 auto 16px" }}>
          <svg viewBox="0 0 600 20" style={{ width: "100%", height: 18 }} preserveAspectRatio="none">
            {[0,60,120,180,240,300,360,420,480,540].map((x, i) => (
              <path key={i} d={`M${x},10 C${x+15},2 ${x+30},18 ${x+45},10 S${x+60},2 ${x+60},10`} stroke="#003366" strokeWidth="1.5" fill="none" opacity={0.4} />
            ))}
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, textTransform: "uppercase", color: "#003366", margin: "0 0 16px" }}>
          CHOOSE YOUR ADVENTURE
        </h2>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#444", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
          From the rugged highlands of the Cordilleras to the turquoise waters of the Visayas, BND Travel &amp; Tours brings the beauty of the Philippines to your fingertips.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 32 }}>
        {localTours.map((tour) => (
          <Link key={tour.slug} href={tour.hasPage ? `/packages/local/${tour.slug}` : `/request-a-quote`} style={{ textDecoration: "none", display: "flex" }}>
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
                {!tour.hasPage && (
                  <span style={{ position: "absolute", top: 12, right: 12, background: "#003366", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 20, letterSpacing: 0.5, fontFamily: "var(--font-figtree), sans-serif" }}>
                    INQUIRE
                  </span>
                )}
              </div>
              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#0054A8", fontWeight: 600, fontFamily: "var(--font-figtree), sans-serif", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5, flexWrap: "wrap" }}>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: 4, transform: "translateY(1px)"}}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>{tour.duration}</span>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: 4, transform: "translateY(1px)"}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{tour.location}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 22, fontWeight: 900, color: "#003366", margin: "0 0 4px", textTransform: "uppercase" }}>{tour.name}</h3>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 600, color: "#FF9900", margin: "0 0 12px", fontStyle: "italic" }}>{tour.tagline}</p>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.65, flex: 1, margin: "0 0 24px" }}>{tour.desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: tour.hasPage ? "#003366" : "#FF9900", color: "#fff", padding: "10px 22px", borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--font-figtree), sans-serif", alignSelf: "flex-start" }}>
                  {tour.hasPage ? "VIEW TOUR" : "INQUIRE NOW"}
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

export default function LocalToursPage() {
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
