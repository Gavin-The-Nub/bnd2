"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  CTABanner,
  PageHero,
} from "@/app/components/shared";
import WeatherWidget from "@/app/components/WeatherWidget";

// Mock data for the calendar events
const mockEvents: Record<string, { event: string; date: string; type: string; venue: string; desc: string }[]> = {
  JANUARY: [
    {
      event: "New Year's Day",
      date: "January 1",
      type: "Religious",
      venue: "All Municipalities",
      desc: "Yearly, batanes citizens midnight mass to celebrate the start of the new year. Churches like Mahatao & Ivana present the traditional \"KUMEDIA\" as a symbol of the coming new year."
    },
    {
      event: "Sto. Niño Festival / Kapangianan du Sto. Niño",
      date: "January 1 & 6",
      type: "Religious / Cultural",
      venue: "Mahatao, Ivana, Uyugan & other barangays of Batanes",
      desc: "Initiated by the church & lay leaders, the image of Sto. Niño is brought to all Ivatan homes accompanied by the church choir."
    }
  ],
  FEBRUARY: [
    {
      event: "Batanes Foundation Day",
      date: "February 28",
      type: "Cultural / Historical",
      venue: "Basco",
      desc: "A celebration of the province's founding anniversary with parades, cultural shows, and sports events."
    }
  ],
  MARCH: [],
  APRIL: [
    {
      event: "Holy Week (Semana Santa)",
      date: "Varies",
      type: "Religious",
      venue: "All Municipalities",
      desc: "Solemn observances and processions are held throughout the province, reflecting the deep faith of the Ivatans."
    }
  ],
  MAY: [],
  JUNE: [
    {
      event: "Payuhwan Festival (Batanes Day)",
      date: "June 26",
      type: "Cultural",
      venue: "Basco",
      desc: "A major festival celebrating the spirit of cooperative labor ('Payuhwan') among the Ivatans."
    }
  ],
  JULY: [],
  AUGUST: [],
  SEPTEMBER: [],
  OCTOBER: [],
  NOVEMBER: [
    {
      event: "All Saints' Day & All Souls' Day",
      date: "November 1 & 2",
      type: "Religious",
      venue: "All Municipalities",
      desc: "Ivatans honor their departed loved ones by visiting cemeteries and offering prayers."
    }
  ],
  DECEMBER: [
    {
      event: "Christmas Day",
      date: "December 25",
      type: "Religious",
      venue: "All Municipalities",
      desc: "Joyous celebrations with family gatherings, feasts, and church services."
    }
  ]
};

export default function CalendarPage() {
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const [activeMonth, setActiveMonth] = useState("JANUARY");

  const currentEvents = mockEvents[activeMonth] || [];

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Calendar of Events" image="/pkg-village.jpg" />

        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <WeatherWidget />

            <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "40px" }} className="layout-grid">
              
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {months.map((m, idx) => {
                  const isActive = activeMonth === m;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveMonth(m)}
                      style={{ 
                        padding: "16px 20px", 
                        background: isActive ? "#FF9900" : "#BACCDF", 
                        color: isActive ? "#fff" : "#003366", 
                        fontWeight: 700, 
                        fontSize: "14px", 
                        fontFamily: "var(--font-figtree), sans-serif",
                        borderBottom: idx === months.length - 1 ? "none" : "2px solid #fff",
                        cursor: "pointer",
                        transition: "background 0.2s"
                      }}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>

              {/* Main Content */}
              <div style={{ background: "#fff", padding: "40px", borderRadius: "8px", border: "1px solid #e1d8cd", minHeight: "500px" }}>
                <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 18, fontWeight: 800, color: "#003366", marginBottom: 30, textTransform: "uppercase" }}>
                  {activeMonth}
                </h2>
                
                {currentEvents.length === 0 ? (
                  <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#666", fontStyle: "italic" }}>
                    No major events scheduled for this month.
                  </p>
                ) : (
                  currentEvents.map((evt, index) => (
                    <div key={index} style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: index === currentEvents.length - 1 ? "none" : "1px solid #e1d8cd" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "10px", fontFamily: "var(--font-figtree), sans-serif", fontSize: "14px", marginBottom: "15px" }}>
                        <div style={{ fontWeight: 700, color: "#001219" }}>FESTIVAL EVENT</div>
                        <div style={{ color: "#333" }}>{evt.event}</div>
                        
                        <div style={{ fontWeight: 700, color: "#001219" }}>DATE</div>
                        <div style={{ color: "#333" }}>{evt.date}</div>
                        
                        <div style={{ fontWeight: 700, color: "#001219" }}>TYPE</div>
                        <div style={{ color: "#333" }}>{evt.type}</div>
                        
                        <div style={{ fontWeight: 700, color: "#001219" }}>VENUE</div>
                        <div style={{ color: "#333" }}>{evt.venue}</div>
                      </div>
                      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6 }}>
                        {evt.desc}
                      </p>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 768px) {
          .layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
