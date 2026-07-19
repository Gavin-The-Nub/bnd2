"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  Wave,
  CTABanner,
  PageHero,
} from "@/app/components/shared";

/* ─── Data ────────────────────────────────────────────────── */
interface ScheduleItem {
  time: string;
  activities: string[];
}

interface DayItinerary {
  day: string;
  title: string;
  schedule: ScheduleItem[];
}

interface TourItinerary {
  id: string;
  label: string;
  days: DayItinerary[];
  note?: string;
}

const itineraries: TourItinerary[] = [
  {
    id: "3d2n",
    label: "3 Days and 2 Nights",
    days: [
      {
        day: "Day 1",
        title: "Batan North Tour",
        schedule: [
          {
            time: "Upon arrival",
            activities: ["Airport Check-in"],
          },
          {
            time: "9:00 AM",
            activities: ["Hotel Check-In", "Breakfast and orientation"],
          },
          {
            time: "12:00 PM",
            activities: ["Lunch"],
          },
          {
            time: "1:00 PM",
            activities: [
              "Mt. Carino Chapel / Nakar Tukon",
              "Igang Viewing",
              "Japanese Tunnel",
              "Nakalte Beach / Malugan",
              "Valuong",
              "Tukon Hills & Lighthouse",
              "Sto. Domingo Church",
            ],
          },
          {
            time: "7:00 PM",
            activities: ["Dinner"],
          },
        ],
      },
      {
        day: "Day 2",
        title: "Batan South Tour",
        schedule: [
          {
            time: "7:00 AM",
            activities: [
              "Breakfast",
              "Mahatao Town Tour",
              "Chavez Viewdeck & Mahatao Pier",
              "San Carlos Borromeo Church",
              "Jkan (Tuning Village)",
              "Watch a Panatari (Marlboro Country)",
            ],
          },
          {
            time: "12:00 PM",
            activities: ["Lunch"],
          },
          {
            time: "1:00 PM",
            activities: [
              "Imnajbu Old Naval Base",
              "Alapad",
              "Hong Kong Ruins (Batanes Movie House Scene)",
              "Ivachong",
              "Uyugan Town Tour",
              "Vahu Town Tour",
              "Nuestra Señora Church",
              "Honesty Coffee Shop",
              "House of Dakay",
            ],
          },
          {
            time: "7:00 PM",
            activities: ["Dinner"],
          },
        ],
      },
      {
        day: "Day 3",
        title: "Departure Day",
        schedule: [
          {
            time: "5:00 AM",
            activities: ["Breakfast", "Airport Check-In"],
          },
        ],
      },
    ],
  },
  {
    id: "4d3n",
    label: "4 Days and 3 Nights",
    days: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        schedule: [
          { time: "Upon arrival", activities: ["Airport pick-up"] },
          { time: "9:00 AM", activities: ["Hotel Check-In", "Breakfast and orientation"] },
          { time: "1:00 PM", activities: [
            "Igang Viewing",
            "Mt. Carino Chapel / Nakar Tukon",
            "Japanese Tunnel",
            "Nakalte Beach / Malugan",
            "Valuong",
          ]},
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 2",
        title: "Batan North Full Tour",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: [
            "Tukon Hills & Lighthouse",
            "Sto. Domingo Church",
            "Basco Town Tour",
            "Marlboro Country Viewpoint",
          ]},
          { time: "12:00 PM", activities: ["Lunch"] },
          { time: "1:00 PM", activities: [
            "Imnajbu Old Naval Base",
            "Alapad",
            "Hong Kong Ruins",
            "Ivachong",
            "Uyugan Town Tour",
          ]},
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 3",
        title: "Batan South Tour",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: [
            "Mahatao Town Tour",
            "Chavez Viewdeck & Mahatao Pier",
            "San Carlos Borromeo Church",
            "Jkan (Tuning Village)",
          ]},
          { time: "12:00 PM", activities: ["Lunch"] },
          { time: "1:00 PM", activities: [
            "Vahu Town Tour",
            "Nuestra Señora Church",
            "Honesty Coffee Shop",
            "House of Dakay",
          ]},
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 4",
        title: "Departure Day",
        schedule: [
          { time: "5:00 AM", activities: ["Breakfast", "Airport Check-In"] },
        ],
      },
    ],
  },
  {
    id: "5d4n",
    label: "5 Days and 4 Nights",
    days: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        schedule: [
          { time: "Upon arrival", activities: ["Airport pick-up"] },
          { time: "9:00 AM", activities: ["Hotel Check-In", "Breakfast and orientation"] },
          { time: "1:00 PM", activities: ["Igang Viewing", "Mt. Carino Chapel", "Japanese Tunnel", "Nakalte Beach"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 2",
        title: "Batan North Tour",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: ["Tukon Hills & Lighthouse", "Sto. Domingo Church", "Basco Town Tour", "Marlboro Country Viewpoint"] },
          { time: "12:00 PM", activities: ["Lunch"] },
          { time: "1:00 PM", activities: ["Imnajbu Old Naval Base", "Alapad", "Hong Kong Ruins", "Ivachong"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 3",
        title: "Batan South Tour",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: ["Mahatao Town Tour", "Chavez Viewdeck & Mahatao Pier", "San Carlos Borromeo Church", "Jkan (Tuning Village)"] },
          { time: "12:00 PM", activities: ["Lunch"] },
          { time: "1:00 PM", activities: ["Vahu Town Tour", "Nuestra Señora Church", "Honesty Coffee Shop", "House of Dakay"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 4",
        title: "Sabtang Island Tour",
        schedule: [
          { time: "5:00 AM", activities: ["Early breakfast"] },
          { time: "6:00 AM", activities: ["Boat transfer to Sabtang Island"] },
          { time: "8:00 AM", activities: ["Chavayan Village", "Nakabuang Arch Beach", "Morong Beach", "Savidug Stone Houses", "Sinakan Village"] },
          { time: "12:00 PM", activities: ["Lunch on the island"] },
          { time: "3:00 PM", activities: ["Boat back to Batan Island"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 5",
        title: "Departure Day",
        schedule: [
          { time: "5:00 AM", activities: ["Breakfast", "Airport Check-In"] },
        ],
      },
    ],
  },
  {
    id: "5d4n-sabtang",
    label: "5 Days and 4 Nights with Overnight in Sabtang",
    days: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        schedule: [
          { time: "Upon arrival", activities: ["Airport pick-up"] },
          { time: "9:00 AM", activities: ["Hotel Check-In", "Breakfast and orientation"] },
          { time: "1:00 PM", activities: ["Igang Viewing", "Mt. Carino Chapel", "Japanese Tunnel", "Nakalte Beach"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 2",
        title: "Batan North & South Tour",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: ["Tukon Hills & Lighthouse", "Sto. Domingo Church", "Basco Town Tour"] },
          { time: "12:00 PM", activities: ["Lunch"] },
          { time: "1:00 PM", activities: ["Mahatao Town Tour", "Chavez Viewdeck", "San Carlos Borromeo Church", "House of Dakay"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 3",
        title: "Sabtang Island – Day 1",
        schedule: [
          { time: "5:00 AM", activities: ["Early breakfast", "Boat transfer to Sabtang"] },
          { time: "8:00 AM", activities: ["Chavayan Village", "Nakabuang Arch Beach", "Morong Beach"] },
          { time: "12:00 PM", activities: ["Lunch on the island"] },
          { time: "2:00 PM", activities: ["Savidug Stone Houses", "Sinakan Village"] },
          { time: "7:00 PM", activities: ["Dinner and overnight in Sabtang"] },
        ],
      },
      {
        day: "Day 4",
        title: "Sabtang Island – Day 2",
        schedule: [
          { time: "7:00 AM", activities: ["Breakfast"] },
          { time: "8:00 AM", activities: ["Free time / additional island exploration"] },
          { time: "11:00 AM", activities: ["Boat back to Batan Island"] },
          { time: "7:00 PM", activities: ["Dinner"] },
        ],
      },
      {
        day: "Day 5",
        title: "Departure Day",
        schedule: [
          { time: "5:00 AM", activities: ["Breakfast", "Airport Check-In"] },
        ],
      },
    ],
  },
  {
    id: "optional",
    label: "Optional Activities",
    days: [
      {
        day: "Optional",
        title: "Optional Add-On Activities",
        schedule: [
          {
            time: "Any Day",
            activities: [
              "Kayaking at Diura Fishing Village",
              "Horseback Riding",
              "Fishing with Local Fishermen",
              "Weaving Demonstration at Vayang Village",
              "Night Market at Basco Town",
              "Sunrise Trek to Mt. Iraya Base",
              "Snorkeling at Sabtang Waters",
              "Ivatan Cooking Class",
              "Photography Tour with Local Photographer",
            ],
          },
        ],
      },
    ],
    note: "Optional activities are available at an extra cost. Please coordinate with your tour guide at least one day in advance.",
  },
];

/* ─── Itinerary Content ───────────────────────────────────── */
function ItineraryContent({ tour }: { tour: TourItinerary }) {
  return (
    <div style={{ padding: "40px 48px", flex: 1 }}>
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 22,
          fontWeight: 900,
          color: "#003366",
          textTransform: "uppercase",
          marginBottom: 32,
          letterSpacing: 1,
        }}
      >
        {tour.label}
      </h2>

      {tour.note && (
        <div
          style={{
            background: "#FFF3CD",
            border: "1px solid #FFD966",
            borderRadius: 8,
            padding: "14px 18px",
            marginBottom: 28,
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "#856404",
            lineHeight: 1.6,
          }}
        >
          <strong>Note:</strong> {tour.note}
        </div>
      )}

      {tour.days.map((day, di) => (
        <div key={di} style={{ marginBottom: 36 }}>
          <h3
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 15,
              fontWeight: 800,
              color: "#003366",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 4,
            }}
          >
            {day.day}: {day.title}
          </h3>
          <Wave color="#003366" opacity={0.3} />

          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
            {day.schedule.map((slot, si) => (
              <div key={si} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 16, alignItems: "start" }}>
                <span
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#FF9900",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    paddingTop: 2,
                  }}
                >
                  {slot.time}
                </span>
                <ul style={{ margin: 0, padding: "0 0 0 18px", listStyle: "disc" }}>
                  {slot.activities.map((act, ai) => (
                    <li
                      key={ai}
                      style={{
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 14,
                        color: "#001219",
                        lineHeight: 1.7,
                      }}
                    >
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function TourItinerariesPage() {
  const [activeId, setActiveId] = useState<string>(itineraries[0].id);
  const activeTour = itineraries.find((t) => t.id === activeId)!;

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Tour Itineraries" image="/pkg-lighthouse.jpg" />

        {/* Breadcrumb */}
        <div style={{ background: "#FFFDF0", padding: "14px 24px", borderBottom: "1px solid #BACCDF40" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <nav aria-label="Breadcrumb">
              <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#0054A8" }}>
                <Link href="/" style={{ color: "#0054A8", textDecoration: "none" }}>Home</Link>
                {" "}&rsaquo;{" "}
                <Link href="/packages" style={{ color: "#0054A8", textDecoration: "none" }}>BND Packages</Link>
                {" "}&rsaquo;{" "}
                <span style={{ color: "#003366", fontWeight: 600 }}>Tour Itineraries</span>
              </span>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <section style={{ background: "#FFFDF0", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: 24,
                alignItems: "start",
                background: "#fff",
                border: "1px solid #BACCDF",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,51,102,0.08)",
              }}
              className="itinerary-layout"
            >
              {/* Sidebar */}
              <aside
                style={{
                  background: "#f5f8fb",
                  borderRight: "1px solid #BACCDF",
                  minHeight: 500,
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {itineraries.map((tour) => (
                    <li key={tour.id}>
                      <button
                        onClick={() => setActiveId(tour.id)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "16px 20px",
                          background: activeId === tour.id ? "#FF9900" : "transparent",
                          color: activeId === tour.id ? "#fff" : "#003366",
                          border: "none",
                          borderBottom: "1px solid #BACCDF40",
                          fontSize: 13,
                          fontWeight: activeId === tour.id ? 700 : 500,
                          fontFamily: "var(--font-figtree), sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          cursor: "pointer",
                          transition: "background 0.2s, color 0.2s",
                        }}
                      >
                        {tour.label}
                      </button>
                    </li>
                  ))}

                  {/* Download PDF button */}
                  <li style={{ padding: "20px 16px" }}>
                    <a
                      href="#"
                      style={{
                        display: "block",
                        background: "#003366",
                        color: "#fff",
                        padding: "12px 16px",
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                        textDecoration: "none",
                        fontFamily: "var(--font-figtree), sans-serif",
                        textAlign: "center",
                      }}
                    >
                      ⬇ Download Itinerary (PDF)
                    </a>
                  </li>
                </ul>
              </aside>

              {/* Content area */}
              <ItineraryContent tour={activeTour} />
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 700px) {
          .itinerary-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
