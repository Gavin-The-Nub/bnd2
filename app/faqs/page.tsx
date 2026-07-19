"use client";

import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  CTABanner,
  PageHero,
} from "@/app/components/shared";
import WeatherWidget from "@/app/components/WeatherWidget";

export default function FaqsPage() {
  const tabs = [
    "GOING TO BATANES",
    "ABOUT THE TOUR PACKAGES",
    "HOTEL AND ACCOMMODATIONS",
    "TOUR PACKAGE RECOMMENDATION",
    "MODE OF PAYMENT"
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="FAQs" image="/pkg-village.jpg" />

        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <WeatherWidget />

            <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "40px" }} className="layout-grid">
              
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {tabs.map((tab, idx) => (
                  <div key={idx} style={{ 
                    padding: "16px 20px", 
                    background: idx === 0 ? "#FF9900" : "#BACCDF", 
                    color: idx === 0 ? "#fff" : "#003366", 
                    fontWeight: 700, 
                    fontSize: "12px", 
                    fontFamily: "var(--font-figtree), sans-serif",
                    borderBottom: idx === tabs.length - 1 ? "none" : "2px solid #fff",
                    cursor: "pointer",
                    textTransform: "uppercase"
                  }}>
                    {tab}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid #e1d8cd", overflow: "hidden" }}>
                
                {/* Header */}
                <div style={{ padding: "20px 30px", borderBottom: "1px solid #e1d8cd", color: "#003366", fontWeight: 700, fontSize: "16px", fontFamily: "var(--font-figtree), sans-serif" }}>
                  GOING TO BATANES
                </div>
                
                {/* FAQ Items */}
                <div style={{ padding: "0" }}>
                  
                  {/* Item 1 - Open */}
                  <div style={{ borderBottom: "1px solid #e1d8cd" }}>
                    <div style={{ padding: "20px 30px", fontFamily: "var(--font-figtree), sans-serif", fontSize: "14px", color: "#333", display: "flex", gap: "10px", alignItems: "center" }}>
                      <span style={{ fontWeight: "bold" }}>–</span>
                      <span>How do we go to Batanes?</span>
                    </div>
                    
                    <div style={{ padding: "0 30px 20px 50px", fontFamily: "var(--font-figtree), sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
                      <p style={{ marginBottom: "15px" }}>
                        You can go to Batanes by airplane from Manila to Basco and from Tuguegarao to Basco.
                      </p>
                      
                      <p style={{ fontWeight: 700, color: "#333", marginBottom: "10px" }}>Best time to Visit</p>
                      
                      <p style={{ margin: 0 }}>
                        Peak Season: March – June for summer<br />
                        Cool Season: November – February<br />
                        Wet Season: July – September<br />
                        October: Little Summer
                      </p>
                    </div>
                  </div>

                  {/* Other Items - Closed */}
                  {[
                    "What are the airlines that fly to Batanes and their schedule and rates?",
                    "How can I get promo airfare?",
                    "Can you book our airline tickets?"
                  ].map((q, idx) => (
                    <div key={idx} style={{ padding: "20px 30px", borderBottom: idx === 2 ? "none" : "1px solid #e1d8cd", fontFamily: "var(--font-figtree), sans-serif", fontSize: "14px", color: "#333", display: "flex", gap: "10px", alignItems: "center" }}>
                      <span style={{ fontWeight: "bold" }}>+</span>
                      <span>{q}</span>
                    </div>
                  ))}

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
          .layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
