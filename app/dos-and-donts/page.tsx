"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  PageHero,
} from "@/app/components/shared";

interface GuideItem {
  do: {
    title: string;
    description: string;
  };
  dont: {
    title: string;
    description: string;
  };
}

interface Category {
  id: string;
  name: string;
  summary: string;
  items: GuideItem[];
}

function CategoryIcon({ id, size = 20, color = "currentColor" }: { id: string; size?: number; color?: string }) {
  switch (id) {
    case "culture":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "safety":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "ecotourism":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "packing":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "money":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    default:
      return null;
  }
}

const guideCategories: Category[] = [
  {
    id: "culture",
    name: "Culture & Social Etiquette",
    summary:
      "Filipino culture and regional island communities place immense value on warmth, hospitality, respect for elders, and community harmony (pakikisama).",
    items: [
      {
        do: {
          title: "Show Respect with Polite Honorifics",
          description:
            "Address elders and authority figures politely using 'po' and 'opo'. Calling service staff, drivers, and locals 'Kuya' (older brother) or 'Ate' (older sister) builds immediate rapport and mutual respect.",
        },
        dont: {
          title: "Don't Cause Anyone to 'Lose Face'",
          description:
            "Avoid shouting, public confrontation, or berating staff if a delay occurs. In Southeast Asian culture, confrontations cause embarrassment. Remaining calm and smiling gets issues solved much faster.",
        },
      },
      {
        do: {
          title: "Dress Modestly for Religious & Heritage Sites",
          description:
            "Cover shoulders and knees when visiting historic Spanish-era stone churches, cathedrals, mosques, and ancestral villages. Keep beach swimwear strictly at resorts and beaches.",
        },
        dont: {
          title: "Don't Wear Revealing Attire in Sacred Spaces",
          description:
            "Never enter churches, sacred burial grounds, or municipal halls in bikinis, speedos, or shirtless. Pack a lightweight sarong or scarf to drape around yourself when entering sacred grounds.",
        },
      },
      {
        do: {
          title: "Always Ask Permission Before Photographing Locals",
          description:
            "Politely ask consent before capturing portraits of indigenous peoples (like Ivatan elders in Batanes, Aeta tribes, or Cordilleran weavers) or ceremonies and private homes.",
        },
        dont: {
          title: "Don't Treat People Like Tourist Spectacles",
          description:
            "Never shove cameras or drones into residential windows, religious rituals, or schoolyards without permission. Be mindful and present rather than prioritizing social media photos.",
        },
      },
      {
        do: {
          title: "Remove Footwear When Entering Homes",
          description:
            "When invited into a Filipino home, homestay, or traditional Ivatan stone dwelling, leave your shoes or outdoor slippers neatly at the threshold unless explicitly told otherwise.",
        },
        dont: {
          title: "Don't Point Feet at People or Sacred Altars",
          description:
            "Resting your feet on furniture with soles pointing toward someone or toward a religious altar is considered disrespectful. Keep your posture attentive and considerate.",
        },
      },
    ],
  },
  {
    id: "safety",
    name: "Safety, Health & Valuables",
    summary:
      "Traveling is safe and delightful when you practice fundamental situational awareness, safeguard essentials, and protect your physical well-being.",
    items: [
      {
        do: {
          title: "Secure Your 'Holy Trinity' (Passport, Money, Phone)",
          description:
            "Keep your passport, credit cards, and smartphone in a secure cross-body pouch or hotel safety deposit box. Save digital copies of IDs, tickets, and insurance in password-protected cloud storage.",
        },
        dont: {
          title: "Don't Flash Large Sums of Cash or Flaunt Jewelry",
          description:
            "Avoid waving thick rolls of banknotes or wearing flashy gold jewelry and luxury watches in busy public markets, crowded festival crowds, or transit hubs.",
        },
      },
      {
        do: {
          title: "Purchase Comprehensive Travel & Medical Insurance",
          description:
            "Always secure travel insurance that covers emergency medical treatment, hospitalisation, trip cancellation, and medical evacuation—vital when exploring remote archipelagos like Batanes.",
        },
        dont: {
          title: "Don't Travel Without Emergency Health Coverage",
          description:
            "Never assume your domestic health plan covers island transfers or air ambulance evacuations. A medical emergency on an island can be extremely costly without proper travel insurance.",
        },
      },
      {
        do: {
          title: "Drink Bottled or Filtered Water & Stay Hydrated",
          description:
            "In tropical climates, drink plenty of sealed bottled or purified water throughout the day. Carry oral rehydration salts when engaging in heavy trekking or island hopping under the sun.",
        },
        dont: {
          title: "Don't Drink Untreated Tap Water in Remote Areas",
          description:
            "Avoid tap water or roadside drinks with unverified crushed ice in provincial villages. Check that bottle seals are intact before drinking.",
        },
      },
      {
        do: {
          title: "Use Verified Transportation & Official Apps",
          description:
            "Use metered airport taxi booths, hotel-arranged private shuttles, or trusted ride-hailing services like Grab in metropolitan areas. For tours, hire accredited Department of Tourism (DOT) operators.",
        },
        dont: {
          title: "Don't Accept Rides from Unmarked Vehicles or Touts",
          description:
            "Never follow aggressive solicitors outside airports or ferry docks offering 'cheap private rides.' Always verify license plates and driver credentials.",
        },
      },
    ],
  },
  {
    id: "ecotourism",
    name: "Eco-Tourism & Leave No Trace",
    summary:
      "With fragile marine ecosystems, pristine coral reefs, and rolling island hills, sustainable travel ensures these wonders survive for generations.",
    items: [
      {
        do: {
          title: "Follow CLAYGO (Clean As You Go)",
          description:
            "Carry out every piece of trash, food wrapper, plastic water bottle, and cigarette butt you bring in. Keep a small trash pouch in your daypack on beaches and hikes.",
        },
        dont: {
          title: "Don't Leave Any Litter on Beaches or Summits",
          description:
            "Never discard plastics, wipes, or bottle caps in nature. Plastic waste is fatal to sea turtles, dugongs, and birds, and degrades pristine shorelines.",
        },
      },
      {
        do: {
          title: "Apply Certified Reef-Safe Sunscreen",
          description:
            "Use mineral-based sunscreens formulated with non-nano zinc oxide or titanium dioxide. Apply 20 minutes before swimming so it absorbs properly into the skin.",
        },
        dont: {
          title: "Don't Use Sunscreens with Oxybenzone or Octinoxate",
          description:
            "Chemical sunscreens cause severe coral bleaching and toxicity to marine life even in minuscule concentrations. Many protected marine reserves ban non-reef-safe formulas.",
        },
      },
      {
        do: {
          title: "Keep a Safe Distance from Wildlife & Corals",
          description:
            "Maintain at least a 3-meter distance from sea turtles, whale sharks, and dolphins. Swim with gentle kicks to avoid stirring up sand or hitting shallow reef formations.",
        },
        dont: {
          title: "Don't Touch, Chase, Ride, or Feed Marine Life",
          description:
            "Never touch or step on living corals—a single touch can kill organisms that took decades to grow. Never feed bread or processed food to fish, as it destroys natural ecosystem balances.",
        },
      },
      {
        do: {
          title: "Leave Rocks, Sand, and Corals Exactly Where They Are",
          description:
            "Take only memories and photos, and leave only gentle footprints. Support local conservation by paying mandatory environmental fees that fund island rangers.",
        },
        dont: {
          title: "Don't Collect Shells, White Sand, or Stones as Souvenirs",
          description:
            "Collecting beach pebbles, white sand in bottles, or coral fragments is illegal under Philippine environmental laws and airport security will confiscate them with hefty fines.",
        },
      },
    ],
  },
  {
    id: "packing",
    name: "Packing & Island Transit",
    summary:
      "Inter-island travel involves vans, regional aircraft, and open outrigger boats. Packing smart ensures comfort, safety, and zero stress.",
    items: [
      {
        do: {
          title: "Pack in Dry Bags & Waterproof Pouches",
          description:
            "Island-hopping boats (bangkas) frequently encounter sea spray and sudden tropical showers. Protect mobile phones, passports, cameras, and extra cash inside heavy-duty waterproof dry bags.",
        },
        dont: {
          title: "Don't Leave Electronics Vulnerable to Saltwater",
          description:
            "Never leave high-end camera equipment or laptops on open boat floors where bilge water splashes. Saltwater mist corrodes electronics rapidly.",
        },
      },
      {
        do: {
          title: "Wear Fast-Drying Clothes & Sturdy Aqua Shoes",
          description:
            "Pack breathable, quick-drying UV protective rashguards, comfortable walking shoes for hilly stone trails, and aqua shoes with rubber soles for rocky beaches and coral walks.",
        },
        dont: {
          title: "Don't Pack Overweight, Bulky Hard Shell Luggage",
          description:
            "Small regional flights (such as turboprops flying to Batanes) have strict checked luggage limits (often 10kg to 20kg max). Heavy bulky suitcases also do not fit well in small island vans and boats.",
        },
      },
      {
        do: {
          title: "Keep Power Banks & Meds in Carry-On Baggage",
          description:
            "Aviation safety laws mandate that all lithium-ion power banks and spare batteries must be carried in hand luggage, never in checked bags. Keep prescription medications readily accessible.",
        },
        dont: {
          title: "Don't Check In Crucial Daily Medications or Valuables",
          description:
            "If island flights or ferry transfers face weather delays, you need uninterrupted access to essential prescriptions, power banks, and personal hygiene essentials.",
        },
      },
      {
        do: {
          title: "Always Fasten Life Jackets on Sea Transfers",
          description:
            "Coast Guard regulations require all passengers on outrigger boats and ferries to wear properly fitted life vests before leaving port. Follow boat crew instructions at all times.",
        },
        dont: {
          title: "Don't Disregard Boat Safety Protocols",
          description:
            "Never sit on vessel gunwales or stand up abruptly while the boat is moving across swells. If you are prone to seasickness, take motion-sickness tablets 30 minutes before boarding.",
        },
      },
    ],
  },
  {
    id: "money",
    name: "Money, Tipping & Local Commerce",
    summary:
      "Understanding payment methods and trading practices prevents unexpected financial roadblocks during remote countryside adventures.",
    items: [
      {
        do: {
          title: "Always Carry Sufficient Philippine Peso Cash",
          description:
            "Cash is king on remote islands and provinces. Island ATMs can frequently be out of service or run out of banknotes during long weekends. Keep small denominations (20, 50, 100, and 200 pesos).",
        },
        dont: {
          title: "Don't Rely Solely on Credit Cards or Mobile E-Wallets",
          description:
            "Many rural eateries, tricycle drivers, boatmen, and artisan stores do not accept credit cards or experience intermittent cellular signal required for mobile QR payments.",
        },
      },
      {
        do: {
          title: "Bargain Gently, Fairly, and with Good Humor",
          description:
            "Polite haggling is acceptable in open-air markets and souvenir stalls. Smile, keep it friendly, and remember that an extra 50 or 100 pesos supports a local family's livelihood.",
        },
        dont: {
          title: "Don't Aggressively Squeeze Local Vendors",
          description:
            "Never haggle stubbornly over pennies or demand steep discounts on handcrafted goods that took days to weave or carve. Respect the value of authentic artisanal craftsmanship.",
        },
      },
      {
        do: {
          title: "Tip Attentive Guides, Boatmen & Drivers",
          description:
            "While tipping is not legally mandatory in the Philippines, a 10% tip or giving 200 to 500 pesos to hardworking local tour guides, boat crew, and van drivers is warmly appreciated for great service.",
        },
        dont: {
          title: "Don't Exchange Currency with Unlicensed Street Touts",
          description:
            "Avoid changing foreign currency with unofficial sidewalk operators who offer suspiciously high exchange rates. Stick to official banks, major airport counters, or established money changers.",
        },
      },
      {
        do: {
          title: "Notify Your Bank Before Traveling",
          description:
            "Inform your credit and debit card issuers of your travel dates and destination countries to avoid unexpected fraud prevention card blocks while attempting to withdraw cash.",
        },
        dont: {
          title: "Don't Keep All Your Cards in One Place",
          description:
            "Separate your backup ATM card and primary credit card. Store one in your day bag and the other securely in your hotel room safe.",
        },
      },
    ],
  },
];

export default function DosAndDontsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? guideCategories
      : guideCategories.filter((cat) => cat.id === activeTab);

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Travel Do's and Don'ts" image="/pkg-lighthouse.jpg" />

        <section style={{ background: "#FFFDF0", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            
            {/* Introductory Header Banner */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                padding: "36px 40px",
                border: "1px solid #e1d8cd",
                marginBottom: 36,
                boxShadow: "0 4px 20px rgba(0, 51, 102, 0.05)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                <div style={{ maxWidth: 760 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#FF9900",
                    }}
                  >
                    Essential Responsible Travel Guide
                  </span>
                  <h1
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 28,
                      fontWeight: 900,
                      color: "#003366",
                      margin: "6px 0 12px",
                    }}
                  >
                    The Essential Do&apos;s &amp; Don&apos;ts of Traveling
                  </h1>
                  <p
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 14.5,
                      color: "#4A5568",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Traveling to unforgettable destinations like Batanes and the Philippine islands is an enriching privilege. By understanding local customs, upholding safety precautions, and adopting sustainable eco-tourism practices, you ensure your journeys are safe, memorable, and beneficial to the local communities who welcome us.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link
                    href="/calendar-of-events"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#003366",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "12px 20px",
                      borderRadius: 8,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#002244")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#003366")}
                  >
                    <span>Explore Calendar of Events</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#FFF4E5",
                      color: "#C25E00",
                      border: "1px solid #FCD399",
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 18px",
                      borderRadius: 8,
                      textDecoration: "none",
                      justifyContent: "center",
                    }}
                  >
                    <span>Ask Our Concierge</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Category Navigation Tabs */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 36,
              }}
            >
              <button
                onClick={() => setActiveTab("all")}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "var(--font-figtree), sans-serif",
                  cursor: "pointer",
                  background: activeTab === "all" ? "#003366" : "#FFFFFF",
                  color: activeTab === "all" ? "#FFFFFF" : "#003366",
                  boxShadow: activeTab === "all" ? "0 4px 12px rgba(0, 51, 102, 0.2)" : "0 2px 6px rgba(0,0,0,0.04)",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: activeTab === "all" ? "#003366" : "#E2E8F0",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span>View All Categories</span>
              </button>
              {guideCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 8,
                    border: "none",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "var(--font-figtree), sans-serif",
                    cursor: "pointer",
                    background: activeTab === cat.id ? "#003366" : "#FFFFFF",
                    color: activeTab === cat.id ? "#FFFFFF" : "#003366",
                    boxShadow: activeTab === cat.id ? "0 4px 12px rgba(0, 51, 102, 0.2)" : "0 2px 6px rgba(0,0,0,0.04)",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: activeTab === cat.id ? "#003366" : "#E2E8F0",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <CategoryIcon id={cat.id} size={15} color={activeTab === cat.id ? "#FFFFFF" : "#003366"} />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Principles Callout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginBottom: 44,
              }}
            >
              {[
                {
                  id: "culture",
                  title: "Be Kind & Respectful",
                  text: "Treat locals as hosts in their ancestral home. A patient smile bridges any language barrier.",
                },
                {
                  id: "ecotourism",
                  title: "Protect Fragile Nature",
                  text: "Leave reefs, stones, and wildlife undisturbed. Take only pictures, leave only footprints.",
                },
                {
                  id: "safety",
                  title: "Safeguard Essentials",
                  text: "Protect your phone, passport, and funds. Back up critical documents securely in the cloud.",
                },
                {
                  id: "money",
                  title: "Support Local Livelihoods",
                  text: "Directly patronize local family-run eateries, licensed guides, and community artisans.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    padding: "22px 24px",
                    borderRadius: 10,
                    border: "1px solid #e1d8cd",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  }}
                >
                  <div style={{ marginBottom: 12 }}>
                    <CategoryIcon id={card.id} size={24} color="#003366" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#003366",
                      margin: "0 0 6px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      color: "#64748B",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Guide Categories Listing */}
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  marginBottom: 50,
                  background: "#FFFFFF",
                  borderRadius: 12,
                  border: "1px solid #e1d8cd",
                  padding: "36px 40px",
                  boxShadow: "0 4px 20px rgba(0, 51, 102, 0.04)",
                }}
              >
                {/* Section Header */}
                <div
                  style={{
                    borderBottom: "2px solid #FF9900",
                    paddingBottom: 16,
                    marginBottom: 28,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "#F0F7FF",
                        border: "1px solid #BACCDF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CategoryIcon id={category.id} size={22} color="#003366" />
                    </div>
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-figtree), sans-serif",
                          fontSize: 22,
                          fontWeight: 900,
                          color: "#003366",
                          margin: 0,
                        }}
                      >
                        {category.name}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--font-figtree), sans-serif",
                          fontSize: 13.5,
                          color: "#64748B",
                          margin: "4px 0 0",
                        }}
                      >
                        {category.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Items Grid (DO vs DON'T side-by-side) */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 20,
                      }}
                      className="dodont-comparison-grid"
                    >
                      {/* DO CARD (Green Accent) */}
                      <div
                        style={{
                          background: "#F4FBF7",
                          border: "1px solid #C6EED7",
                          borderRadius: 10,
                          padding: "22px 24px",
                          position: "relative",
                          borderLeft: "5px solid #10B981",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 10,
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: "#10B981",
                              color: "#FFFFFF",
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-figtree), sans-serif",
                              fontSize: 12,
                              fontWeight: 900,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                              color: "#065F46",
                            }}
                          >
                            DO THIS
                          </span>
                        </div>
                        <h4
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 15.5,
                            fontWeight: 800,
                            color: "#064E3B",
                            margin: "0 0 8px",
                          }}
                        >
                          {item.do.title}
                        </h4>
                        <p
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 13.5,
                            color: "#1E3A2F",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {item.do.description}
                        </p>
                      </div>

                      {/* DON'T CARD (Coral/Red Accent) */}
                      <div
                        style={{
                          background: "#FFF7F7",
                          border: "1px solid #FED7D7",
                          borderRadius: 10,
                          padding: "22px 24px",
                          position: "relative",
                          borderLeft: "5px solid #EF4444",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 10,
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: "#EF4444",
                              color: "#FFFFFF",
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-figtree), sans-serif",
                              fontSize: 12,
                              fontWeight: 900,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                              color: "#991B1B",
                            }}
                          >
                            AVOID THIS
                          </span>
                        </div>
                        <h4
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 15.5,
                            fontWeight: 800,
                            color: "#7F1D1D",
                            margin: "0 0 8px",
                          }}
                        >
                          {item.dont.title}
                        </h4>
                        <p
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 13.5,
                            color: "#4C1D1D",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {item.dont.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Travel Readiness Quick Checklist */}
            <div
              style={{
                background: "#003366",
                color: "#FFFFFF",
                borderRadius: 12,
                padding: "36px 40px",
                marginBottom: 40,
                boxShadow: "0 8px 30px rgba(0, 51, 102, 0.15)",
              }}
            >
              <div style={{ maxWidth: 840 }}>
                <span
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: "#FF9900",
                  }}
                >
                  Quick Pre-Departure Checklist
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 22,
                    fontWeight: 900,
                    margin: "6px 0 16px",
                  }}
                >
                  Before You Step On The Plane or Boat
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 12,
                  }}
                >
                  {[
                    "Valid passport / Gov ID (at least 6 months validity)",
                    "Printed or offline copies of hotel & tour bookings",
                    "Sufficient cash in small denominations (20, 50, 100 pesos)",
                    "Waterproof dry bags for sea excursions & electronics",
                    "Reef-safe sunscreen & eco-friendly reusable water bottle",
                    "Comfortable walking shoes & quick-dry clothing",
                    "Travel insurance policy details & emergency contact hotline",
                    "Emergency medications and basic travel first-aid kit",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 13.5,
                        color: "#E2E8F0",
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#FF9900",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 800,
                      padding: "12px 24px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    <span>Have Questions? Contact BND Tours</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/packages"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.25)",
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "12px 20px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    <span>View Our Curated Tour Packages</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 768px) {
          .dodont-comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
