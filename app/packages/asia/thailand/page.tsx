"use client";

import {
  X,
  Landmark,
  Palmtree,
  Sparkles,
  Calendar,
  Waves,
  Check,
  MapPin,
  ShoppingBag,
  Utensils,
  Clock,
  Users,
  Car,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../../components/shared";
import { QuoteButton } from "../../../components/QuoteButton";

const tour = {
  name: "Thailand",
  tagline: "Land of Smiles, Golden Temples & VIP Day Tours",
  tag: "TROPICAL ESCAPE & DAY TOURS",
  duration: "Day Tours & 4D/3N",
  location: "Bangkok, Pattaya, Khao Yai & more",
  image: "/packages/asia-thailand.jpg",
  intro:
    "Thailand enchants every visitor with its shimmering golden spires, vibrant floating markets, warm hospitality, and world-renowned street food scene. In addition to custom multi-day holidays, BND Travel and Tours offers 5 exclusive Private VIP Van Day Tours (₱14,499 each for 3–10 persons) taking you across Khao Yai, Pattaya, Bangkok, Ayutthaya, and Kanchanaburi with dedicated comfort and convenience.",
  highlights: [
    {
      icon: "Car",
      title: "Exclusive VIP Van Fleet",
      desc: "Travel in spacious comfort with dedicated high-roof VIP vans accommodating 3 to 10 guests with air-conditioned luxury and professional drivers.",
    },
    {
      icon: "Landmark",
      title: "Grand Palace & Ancient Temples",
      desc: "Marvel at Bangkok's royal heritage, sacred Buddha shrines, and the majestic UNESCO ruins of Ayutthaya Historical Park.",
    },
    {
      icon: "Utensils",
      title: "Famous Markets & Riverside Dining",
      desc: "Experience the adrenaline of Maeklong Railway Market, boat noodles at Damnoen Saduak floating market, and scenic dinner cruises.",
    },
    {
      icon: "Waves",
      title: "Pattaya Coast & Ocean Attractions",
      desc: "Discover Pattaya's Sanctuary of Truth, tropical botanical gardens, and whimsical seaside cafes like Castello di Bellagio.",
    },
    {
      icon: "Sparkles",
      title: "Khao Yai European Escape",
      desc: "Breathe fresh mountain air amidst Italian-styled piazzas, rolling vineyards, Hokkaido flower fields, and picturesque themed cafes.",
    },
    {
      icon: "Compass",
      title: "Kanchanaburi & River Kwai",
      desc: "Stand on the historic Bridge over the River Kwai, visit elephant sanctuaries, and relax in renowned riverside forest cafes.",
    },
  ],
  inclusions: [
    "Dedicated Private VIP Van service (12 – 15 Hours)",
    "Professional local driver, fuel, gas & highway tolls",
    "Tailored itinerary stops across top tourist destinations",
    "Pick-up and drop-off coordination within service area",
    "BND Travel & Tours trip coordination and assistance",
  ],
  exclusions: [
    "Entrance fees to parks, museums & attractions (unless specified)",
    "Food, café drinks & personal meals",
    "Optional activities (elephant rides, speedboat rentals, etc.)",
    "Personal travel insurance",
    "Driver gratuity / tips",
  ],
  priceNote: "VIP Day Tours are ₱14,499 flat rate for 3 to 10 persons per van. Multi-day packages also available.",
};

const thailandDayTours = [
  {
    id: "khao-yai",
    name: "Khao Yai Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "European Vineyards, Flower Gardens & Scenic Mountain Cafes",
    summary:
      "A picturesque countryside escape into Thailand's premier highland destination, known for Italian architecture, floral valleys, and charming designer cafes.",
    itinerary: [
      "PB Valley Winery",
      "Primo Piazza",
      "Hokkaido Flower Park",
      "Bucolic Cafe",
      "Toscana Valley",
      "Flory Day Cafe",
      "Trot Cafe",
      "Pirom Cafe",
    ],
  },
  {
    id: "pattaya-city",
    name: "Pattaya City Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Coastal Wonders, All-Wood Sanctuaries & Whimsical Attractions",
    summary:
      "Experience the best of Pattaya from the breathtaking wooden Sanctuary of Truth to lush tropical gardens, golden Buddha cliffs, and fairytale cafe estates.",
    itinerary: [
      "Chang Thai Thappraya",
      "Train Ride - Gems Gallery",
      "Sanctuary of Truth",
      "Great and Grand Sweet Destination",
      "La Galeria",
      "Nong Nooch Tropical Garden",
      "Khao Chi Chan (Buddha Mountain)",
      "Castello di Bellagio",
      "House of Benedict",
      "Paboon Cafe",
    ],
  },
  {
    id: "bangkok-ratchaburi",
    name: "Bangkok & Ratchaburi Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Railway & Floating Markets, Royal Palaces & Riverfront Magic",
    summary:
      "A quintessential Thailand culture tour combining iconic railway train market passings, lively canal boats, sacred royal wats, and evening river breezes.",
    itinerary: [
      "Maeklong Railway Market",
      "Chang Puak Elephant Rides",
      "Damnoen Saduak Floating Market",
      "Ancient City (Muang Boran)",
      "Grand Palace",
      "Wat Pho (Reclining Buddha)",
      "Wat Arun (Temple of Dawn)",
      "Asiatique Riverfront Dinner Cruise",
    ],
  },
  {
    id: "ayutthaya",
    name: "Ayutthaya Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "Ancient Siamese Capital, Sacred Relics & Royal Summer Palaces",
    summary:
      "Step back in time through the monumental stone spires, Buddha head entwined in banyan roots, floating markets, and majestic summer residences of Thai royalty.",
    itinerary: [
      "Ayutthaya Historical Park",
      "Wat Yai Chai Mongkhon",
      "Wat Mahathat",
      "Wat Phra Si Sanphet",
      "Wat Na Phra Meru",
      "Wat Ratchaburana",
      "Ayutthaya Floating Market",
      "Elephant Rides",
      "Bang Pa-In Royal Palace",
    ],
  },
  {
    id: "kanchanaburi",
    name: "Kanchanaburi Tour",
    price: "₱14,499",
    duration: "12 - 15 Hours",
    groupSize: "3 to 10 Persons | 1 VIP Van",
    tagline: "River Kwai History, Wildlife Encounters & Iconic Rainforest Cafes",
    summary:
      "Explore the poignant WWII history of the Death Railway, meet elephants and open safari animals, and unwind at Thailand's most famous floating rainforest cafes.",
    itinerary: [
      "Safari Park Kanchanaburi",
      "JEATH War Museum",
      "River Kwai Bridge",
      "Elephant World",
      "Kanchanaburi Death Railway Train Ride",
      "Bubble in the Forest Cafe",
      "After the Rain Coffee & Gallery",
    ],
  },
];

const IconComponents: Record<string, any> = {
  Car,
  Landmark,
  Utensils,
  Waves,
  Sparkles,
  Compass,
  ShoppingBag,
  Palmtree,
};

function Wave() {
  return (
    <div style={{ width: 120, margin: "0 0 16px" }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 16 }} preserveAspectRatio="none">
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
          <path
            key={i}
            d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
            stroke="#003366"
            strokeWidth="1.5"
            fill="none"
            opacity={0.4}
          />
        ))}
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "42vh",
        minHeight: 260,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.68)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <Link
          href="/packages/asia"
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#FF9900",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 12,
          }}
        >
          ← ASIA TOURS
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 3,
            margin: "0 0 10px",
            lineHeight: 1,
          }}
        >
          {tour.name}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(13px, 2vw, 17px)",
            color: "#BACCDF",
            margin: "0 0 20px",
            fontStyle: "italic",
          }}
        >
          {tour.tagline}
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <span
            style={{
              color: "#BACCDF",
              fontSize: 13,
              fontFamily: "var(--font-figtree), sans-serif",
            }}
          >
            <Calendar
              size={14}
              style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }}
            />
            {tour.duration}
          </span>
          <span
            style={{
              color: "#BACCDF",
              fontSize: 13,
              fontFamily: "var(--font-figtree), sans-serif",
            }}
          >
            <MapPin
              size={14}
              style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }}
            />
            {tour.location}
          </span>
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
          <p
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              color: "#003366",
              margin: "0 0 6px",
            }}
          >
            ABOUT THIS DESTINATION
          </p>
          <Wave />
          <h2
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "#003366",
              margin: "0 0 20px",
            }}
          >
            DISCOVER {tour.name.toUpperCase()}
          </h2>
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#333", lineHeight: 1.8 }}>
            {tour.intro}
          </p>
        </div>
        <div
          style={{
            flex: "1 1 300px",
            background: "#003366",
            borderRadius: 16,
            padding: 32,
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,51,102,0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#FF9900",
              margin: "0 0 20px",
            }}
          >
            TOUR AT A GLANCE
          </h3>
          {[
            { label: "Day Tour Price", value: "₱14,499 per VIP Van" },
            { label: "Van Capacity", value: "3 to 10 Persons" },
            { label: "Tour Duration", value: "12 – 15 Hours / Tour" },
            { label: "Regions Covered", value: "Khao Yai, Pattaya, Bangkok, Ayutthaya, Kanchanaburi" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "#BACCDF",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
          <QuoteButton
            tourName="Thailand Private VIP Van Tour"
            duration="12 - 15 Hours"
            label="INQUIRE A VIP TOUR"
            style={{
              display: "flex",
              width: "100%",
              background: "#FF9900",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              fontFamily: "var(--font-figtree), sans-serif",
              textAlign: "center",
              marginTop: 8,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function DayToursSection() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1180, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#FF9900",
            margin: "0 0 8px",
          }}
        >
          EXCLUSIVE PACKAGES · ₱14,499 PER VAN
        </p>
        <div style={{ width: 140, margin: "0 auto 16px" }}>
          <svg viewBox="0 0 600 20" style={{ width: "100%", height: 16 }} preserveAspectRatio="none">
            {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
              <path
                key={i}
                d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
                stroke="#003366"
                strokeWidth="1.5"
                fill="none"
                opacity={0.4}
              />
            ))}
          </svg>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#003366",
            margin: "0 0 16px",
          }}
        >
          PRIVATE VIP VAN DAY TOURS
        </h2>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "#555",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Book an entire VIP Van exclusively for your group (3 to 10 persons). Enjoy 12 to 15 hours of flexible sightseeing,
          private transfers, and driver service across Thailand&apos;s most sought-after destinations.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {thailandDayTours.map((dayTour, index) => (
          <div
            key={dayTour.id}
            id={dayTour.id}
            style={{
              background: "#fff",
              border: "2px solid #BACCDF",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 16px rgba(0,51,102,0.06)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 40px rgba(0,51,102,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,51,102,0.06)";
            }}
          >
            {/* Top Badge & Number */}
            <div
              style={{
                background: "#003366",
                color: "#fff",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    background: "#FF9900",
                    color: "#fff",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 900,
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  {index + 1}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: "#BACCDF",
                  }}
                >
                  VIP VAN DAY TOUR
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#FF9900",
                }}
              >
                {dayTour.price}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#003366",
                  margin: "0 0 6px",
                  textTransform: "uppercase",
                }}
              >
                {dayTour.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#FF9900",
                  margin: "0 0 12px",
                  fontStyle: "italic",
                }}
              >
                {dayTour.tagline}
              </p>

              {/* Specs Pills */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#F1F5F9",
                    color: "#003366",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  <Clock size={13} color="#0054A8" />
                  {dayTour.duration}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#F1F5F9",
                    color: "#003366",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontFamily: "var(--font-figtree), sans-serif",
                  }}
                >
                  <Users size={13} color="#0054A8" />
                  {dayTour.groupSize}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                }}
              >
                {dayTour.summary}
              </p>

              {/* Itinerary List */}
              <div style={{ marginBottom: 24, flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: "#003366",
                    marginBottom: 12,
                  }}
                >
                  <MapPin size={13} color="#FF9900" />
                  PLACES TO VISIT &amp; ITINERARY:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {dayTour.itinerary.map((place, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 13,
                        color: "#333",
                        background: "#F8FAFC",
                        padding: "8px 12px",
                        borderRadius: 8,
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#003366",
                          color: "#fff",
                          fontSize: 10,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span style={{ fontWeight: 600 }}>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Button */}
              <QuoteButton
                tourName={`Thailand - ${dayTour.name}`}
                duration={dayTour.duration}
                label={`BOOK ${dayTour.name.toUpperCase()}`}
                style={{
                  display: "flex",
                  width: "100%",
                  background: "#FF9900",
                  color: "#fff",
                  padding: "14px 20px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textDecoration: "none",
                  fontFamily: "var(--font-figtree), sans-serif",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section style={{ padding: "40px 24px 72px", maxWidth: 1100, margin: "0 auto" }}>
      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 3,
          color: "#003366",
          margin: "0 0 6px",
        }}
      >
        WHAT YOU&apos;LL EXPERIENCE
      </p>
      <Wave />
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: "clamp(20px, 3vw, 30px)",
          fontWeight: 800,
          textTransform: "uppercase",
          color: "#003366",
          margin: "0 0 40px",
        }}
      >
        WHY CHOOSE OUR THAILAND TOURS
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
        {tour.highlights.map((h, i) => {
          const IconComponent = IconComponents[h.icon] || MapPin;
          return (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "2px solid #BACCDF",
                borderRadius: 14,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "rgba(0,51,102,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <IconComponent size={22} color="#003366" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#003366",
                  margin: "0 0 10px",
                  textTransform: "uppercase",
                }}
              >
                {h.title}
              </h3>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0 }}>
                {h.desc}
              </p>
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
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#FF9900",
              margin: "0 0 20px",
            }}
          >
            ✓ VIP DAY TOUR INCLUSIONS
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {tour.inclusions.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13,
                  color: "#BACCDF",
                  lineHeight: 1.5,
                }}
              >
                <Check size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 280px", background: "#fff", border: "2px solid #BACCDF", borderRadius: 14, padding: "32px 28px" }}>
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#003366",
              margin: "0 0 20px",
            }}
          >
            ✗ EXCLUSIONS
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {tour.exclusions.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.5,
                }}
              >
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
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: "clamp(20px, 3vw, 30px)",
          fontWeight: 800,
          textTransform: "uppercase",
          color: "#003366",
          margin: "0 0 12px",
        }}
      >
        READY TO BOOK YOUR THAILAND ADVENTURE?
      </h2>
      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 15,
          color: "#555",
          margin: "0 auto 32px",
          maxWidth: 520,
          lineHeight: 1.7,
        }}
      >
        Contact our travel specialists today to customize your dates, arrange private VIP van bookings, or plan multi-day itineraries.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <QuoteButton
          tourName="Thailand Private VIP Van Tour"
          duration="12 - 15 Hours"
          label="REQUEST A QUOTE"
          style={{
            background: "#FF9900",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: 4,
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            textDecoration: "none",
            fontFamily: "var(--font-figtree), sans-serif",
          }}
        />
        <Link
          href="/packages/asia"
          style={{
            background: "transparent",
            color: "#003366",
            border: "2px solid #003366",
            padding: "14px 36px",
            borderRadius: 4,
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            textDecoration: "none",
            fontFamily: "var(--font-figtree), sans-serif",
          }}
        >
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
        <DayToursSection />
        <Highlights />
        <InclusionsExclusions />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
