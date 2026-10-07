"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../components/shared";

interface LocalTourItem {
  slug: string;
  packageNum: string;
  name: string;
  desc: string;
  image: string;
  duration: string;
  location: string;
  inclusions: string[];
  exclusions: string[];
  placesToVisit?: string[];
}

const localTours: LocalTourItem[] = [
  {
    slug: "buscalan",
    packageNum: "Package 12 & 16",
    name: "Buscalan – Sagada",
    desc: "Van transfer, driver, gas, toll, parking fee, 1 night room sharing in Buscalan with tour guide, and 1 night in Sagada. Visit Banaue Arch, Apo Whang Od Village, Sumaguing Cave, Marlboro Hills & more.",
    image: "/packages/buscalan-sagada.jpg",
    duration: "3D / 2N",
    location: "Kalinga & Mt. Province, Cordillera",
    inclusions: ["Van Transfer", "Driver", "Gas and Toll", "Parking Fee", "1 night room sharing at Buscalan", "Tour guide at Buscalan", "1 night at Sagada"],
    exclusions: ["Tour guide at Sagada", "Shuttle fee at Sagada", "Eco fee", "Meals"],
    placesToVisit: ["Banaue Arch & Rice Terraces", "Buscalan Village", "Apo Whang Od Village", "Sumaguing Cave", "Marlboro Hills", "Sagada Weaving & Potter", "Atok Highest Point"],
  },
  {
    slug: "baguio",
    packageNum: "Package 2 & 17",
    name: "Baguio City Tour",
    desc: "Roundtrip van transfer, accommodation, toll fees, gasoline, driver's meal, and complete city tour covering 14 top attractions across Baguio City and La Trinidad.",
    image: "/packages/baguio-city.jpg",
    duration: "3D / 2N",
    location: "Baguio City, Benguet",
    inclusions: ["Roundtrip Van Transfer", "Accommodation", "City Tour", "Places to Visit itinerary", "Toll fees", "Gasoline", "Driver's Meal"],
    exclusions: ["Entrance fee in all tourist spots", "Food / Meals"],
    placesToVisit: ["Lions Head", "Camp John Hay", "Burnham Park", "Botanical Garden", "The Mansion", "Mines View", "Igorot Stone Kingdom", "Strawberry Farm"],
  },
  {
    slug: "ilocos",
    packageNum: "Package 5, 15 & 18",
    name: "Vigan – Paoay – Pagudpud",
    desc: "High-roof RT van transfer, fully air-conditioned accommodations (beach & city), complimentary breakfasts, tour coordinator, and guided visits to 21 top Ilocos attractions.",
    image: "/packages/vigan-ilocos.jpg",
    duration: "3D / 2N",
    location: "Ilocos Norte & Sur, Northern Luzon",
    inclusions: ["Highroof RT Van Transfer", "Aircon Accommodation", "Tour Coordinator Assistance", "Professional Driver", "Diesel, Toll & Parking", "Free Breakfast"],
    exclusions: ["Personal meals", "Eco & Entrance fees", "Sand Dunes 4x4"],
    placesToVisit: ["Calle Crisologo", "Paoay Church", "Paoay Sand Dunes", "Malacañang of the North", "Cape Bojeador", "Kapurpurawan", "Bangui Windmills", "Patapat Viaduct"],
  },
  {
    slug: "bicol",
    packageNum: "Package 6, 13, 14 & 19",
    name: "Bicol Tricity & Sorsogon",
    desc: "Van transfer, gas & toll, complete guided itinerary, and 2 nights accommodation. Visit Cagsawa Ruins, Sumlang Lake, Mayon Skyline, Subic Pink Beach island hopping, and Irosin hot springs.",
    image: "/packages/mayon-bicol.jpg",
    duration: "3D / 2N",
    location: "Albay & Sorsogon, Bicol",
    inclusions: ["Van Transfer", "Gas and Toll fees", "Guided Itinerary", "2 Nights Accommodation"],
    exclusions: ["Personal meals", "Cottage rentals", "Eco & Entrance fees", "Boat ride to Subic Pink Beach"],
    placesToVisit: ["Cagsawa Ruins", "Sumlang Lake", "Legazpi Boulevard", "Daraga Church", "Mayon Skyline", "Subic Pink Beach", "Irosin Hot Spring"],
  },
  {
    slug: "sagada",
    packageNum: "Package 3",
    name: "Sagada",
    desc: "2 nights accommodation with free use of utensils and kitchen, plus roundtrip van transfer. Experience the cool pine-scented mountain air and limestone wonders.",
    image: "/packages/sagada.jpg",
    duration: "3D / 2N",
    location: "Mountain Province, Cordillera",
    inclusions: ["2 Night Accommodation", "Free use of utensils and kitchen", "Van Transfer"],
    exclusions: ["Meals", "Eco Fee", "Tour Guide", "Shuttle"],
    placesToVisit: ["Sumaguing Cave", "Echo Valley", "Hanging Coffins", "Marlboro Hills", "Sagada Weaving", "Sagada Pottery"],
  },
  {
    slug: "mt-pinatubo",
    packageNum: "Package 11",
    name: "Mt. Pinatubo 4x4",
    desc: "Complete all-inclusive day trip package: roundtrip van transfer, registration fees, toll fees, tour guide, 4x4 ride across the lahar valleys, gas, and meals all included.",
    image: "/packages/mt-pinatubo.jpg",
    duration: "1D",
    location: "Capas, Tarlac & Zambales",
    inclusions: ["Roundtrip Van Transfer", "Registration Fee", "Toll Fee", "Tour Guide", "4x4 Ride", "Gas", "Meals"],
    exclusions: ["Personal expenses"],
    placesToVisit: ["Pinatubo Crater Lake", "Crow Valley Lahar Canyon", "Off-road 4x4 Trail"],
  },
  {
    slug: "la-union",
    packageNum: "Package 4",
    name: "La Union",
    desc: "2 nights accommodation, guided land tour, and high-roof van transfer. Relax along the northern surf coast and explore local sights with ease.",
    image: "/packages/la-union.jpg",
    duration: "3D / 2N",
    location: "La Union, Northern Luzon",
    inclusions: ["2 Night Accommodation", "Land Tour", "Van Transfer (high roof)"],
    exclusions: ["Meals", "Eco Fee"],
    placesToVisit: ["San Juan Surf Beach", "San Fernando Coastal Sights", "Grapes Farm Side Trip"],
  },
  {
    slug: "bacolod",
    packageNum: "Package 1",
    name: "Bacolod",
    desc: "Accommodation, private van transfer, and guided tourist spots. Experience the warmth of the City of Smiles with full ground touring support.",
    image: "/packages/bacolod.jpg",
    duration: "3D / 2N",
    location: "Negros Occidental, Visayas",
    inclusions: ["Accommodation", "Van Transfer", "Guided Tourist Spots"],
    exclusions: ["Meals", "Air Fare", "Shuttle"],
    placesToVisit: ["Guided Bacolod Tourist Spots", "City Heritage Sites", "Cultural Landmarks"],
  },
  {
    slug: "cebu",
    packageNum: "Package 8",
    name: "Cebu",
    desc: "Accommodation, van transfer, and guided tourist spots across Cebu. Arrange your flights and let BND take care of all your ground travel arrangements.",
    image: "/packages/cebu.jpg",
    duration: "4D / 3N",
    location: "Cebu, Visayas",
    inclusions: ["Accommodation", "Van Transfer", "Guided Tourist Spots"],
    exclusions: ["Meals", "Air Fare", "Shuttle"],
    placesToVisit: ["Cebu Heritage Landmarks", "Top Tourist Attractions", "Coastal Sightseeing"],
  },
  {
    slug: "siargao",
    packageNum: "Package 10",
    name: "Siargao",
    desc: "Comfortable accommodation, van transfer, and guided tourist spots across Siargao. Book your flight and enjoy worry-free island sightseeing.",
    image: "/packages/siargao.jpg",
    duration: "4D / 3N",
    location: "Surigao del Norte, Mindanao",
    inclusions: ["Accommodation", "Van Transfer", "Guided Tourist Spots"],
    exclusions: ["Meals", "Air Fare", "Shuttle"],
    placesToVisit: ["Top Island Viewpoints", "Coastal Sightseeing", "Guided Tourist Spots"],
  },
  {
    slug: "iloilo",
    packageNum: "Package 7",
    name: "Iloilo",
    desc: "Accommodation, van transfer, and guided tourist spots. Explore the rich architectural history and local attractions of Iloilo Province.",
    image: "/packages/iloilo.jpg",
    duration: "3D / 2N",
    location: "Iloilo, Western Visayas",
    inclusions: ["Accommodation", "Van Transfer", "Guided Tourist Spots"],
    exclusions: ["Meals", "Air Fare", "Shuttle"],
    placesToVisit: ["Guided Iloilo Tourist Spots", "Historic Churches & Plazas", "City Highlights"],
  },
  {
    slug: "palawan",
    packageNum: "Package 9",
    name: "Palawan",
    desc: "Accommodation, van transfer, and guided tourist spots across Palawan. Experience world-famous natural wonders with dedicated ground touring service.",
    image: "/packages/el-nido-palawan.jpg",
    duration: "4D / 3N",
    location: "Palawan, MIMAROPA",
    inclusions: ["Accommodation", "Van Transfer", "Guided Tourist Spots"],
    exclusions: ["Meals", "Air Fare", "Shuttle"],
    placesToVisit: ["Top Palawan Sights", "Guided Island Tourist Spots", "Scenic Coastal Viewpoints"],
  },
  {
    slug: "hundred-islands",
    packageNum: "Package 20",
    name: "Hundred Islands",
    desc: "Roundtrip high-roof van transfer, fully air-conditioned accommodation, tour coordinator, diesel, tolls, free breakfasts, and full island tour across 14 islands. ₱3,600 per head.",
    image: "/packages/hundred-islands.jpg",
    duration: "3D / 2N",
    location: "Alaminos, Pangasinan",
    inclusions: ["Highroof RT Van Transfer", "Fully Airconditioned Accommodation", "Tour Coordinator Assistance", "Diesel, Toll & Parking Fees", "Free Breakfast", "Boat Tour to 14 Islands"],
    exclusions: ["Meals", "Eco Fee", "Optional Activity Fees"],
    placesToVisit: ["Governor's Island (Zip Line)", "Pilgrimage Island (Statue of Jesus)", "Marcos Island (Imelda Cave)", "Quezon Island", "Cuenco Island"],
  },
  {
    slug: "kaparkan-abra",
    packageNum: "Package 21",
    name: "Kaparkan Falls & Abra",
    desc: "Dedicated roundtrip AC van transfer Manila-Abra-Manila, rugged 6x6 monster truck ride to Kaparkan Falls, Abra AC room sharing, 2nd day breakfast, permits, and tolls all included.",
    image: "/packages/kaparkan-abra.jpg",
    duration: "2D / 1N",
    location: "Tineg & Bangued, Abra Province",
    inclusions: ["RT AC Van Transfer", "6x6 Monster Truck to Kaparkan Falls", "Abra AC Room Accommodation", "2nd Day Breakfast", "Tourism & Environmental Fees", "Fuel & Toll Fees"],
    exclusions: ["Other Meals", "River Tubing at Ar-arbis Falls", "Apao Hills Entrance"],
    placesToVisit: ["Kaparkan Terraced Waterfall", "Lusuac Spring", "Ar-arbis Falls", "Don Mariano Marcos Bridge", "Calaba Bridge", "Tangadan Tunnel"],
  },
];

function Hero() {
  return (
    <section style={{ position: "relative", height: "38vh", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image src="/packages/local-hero.jpg" alt="Philippines Local Land Tours - Banaue Rice Terraces" fill style={{ objectFit: "cover", objectPosition: "center 50%" }} priority />
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
          Official Philippines Tour Packages — Van Transfers, Guided Spots &amp; Accommodations
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
          PHILIPPINES TOUR PACKAGES
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
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#444", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
          All packages are based on BND Travel &amp; Tours official travel itineraries. From the mountain ridges of the Cordilleras to the islands of the Visayas, explore with dedicated vans, coordinators, and accommodations.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
        {localTours.map((tour) => (
          <Link key={tour.slug} href={`/packages/local/${tour.slug}`} style={{ textDecoration: "none", display: "flex" }}>
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
