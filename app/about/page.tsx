"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, SectionHeader, WhatsApp } from "../components/shared";

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "40vh",
        minHeight: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-lighthouse.jpg"
          alt="Batanes Lighthouse"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.6)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          About Us
        </h1>
      </div>
    </section>
  );
}

/* ─── Story & Advantage Section ───────────────────────────── */
function StoryAndAdvantage() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 60, textAlign: "left" }}>
         <p
            style={{
               fontFamily: "var(--font-figtree), sans-serif",
               fontSize: 12,
               fontWeight: 400,
               textTransform: "uppercase",
               letterSpacing: 3,
               color: "#003366",
               margin: "0 0 8px",
            }}
         >
            DISCOVER BATANES WITH US
         </p>
         <div style={{ width: 150, marginBottom: 20 }}>
            <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
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
         <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#001219", lineHeight: 1.6, maxWidth: 900 }}>
            Welcome to Batanes Travel and Tours, where your adventure to the stunning Batanes begins! Immerse yourself in breathtaking landscapes, rich culture, and unforgettable experiences. Let us guide you in exploring this beautiful destination with our tailored travel packages and insightful tips.
         </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64 }}>
         {/* Story Column */}
         <div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
               BATANES TRAVEL AND TOURS STORY
            </h3>
            <div style={{ width: 100, marginBottom: 24 }}>
               <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
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
            
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.7, marginBottom: 20 }}>
               Batanes Travel and Tours (BTT) is the pioneer and premier provider of Batanes Tours in Batanes. We hold the distinction of first operating south Batanes tours.
            </p>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.7 }}>
               Its owners are proud Ivatans of the old school and young idealists. During those years, the natives did not call themselves such; they lived in Batanes—with no deep knowledge and personal allocation of what a traveler can have beyond a normal person. This forms the opportunity to share its Batanes from that tradition and culture made Batanes what it truly form its natural state and that began building his vision for Batanes Travel and Tours (BTT). Establishing events string the key difference between our programs and any post discovery. Why? It's exactly reason for you fully directly we coordinate in evaluating terms of unlived values or.
            </p>
         </div>

         {/* Advantage Column */}
         <div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 24 }}>
               BATANES TRAVEL AND TOURS ADVANTAGE
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
               {[
                  {
                     title: "Private Guides and Customized Tours Put You in Control",
                     desc: "Becoming a tourist may seem easy to be accommodated by a group of strangers to set itineraries. At Batanes Travel and Tours (BTT), every adventure is private, flexible and customized to your exact specs — draft and enjoy the vacation of a lifetime, your way. Ensure any itinerary changes your need."
                  },
                  {
                     title: "Experienced, Local Guides and 24/7 Support",
                     desc: "Experienced local guides, Tagalog/English-speaking guide. BTT assigns you the personal support and 24/7 call center to make your visit the truest adventure."
                  },
                  {
                     title: "Peace of Mind",
                     desc: "When you travel with Batanes Travel and Tours (BTT), you benefit from both the on the ground commonwealth service with fully guaranteed Batanes tour company and the 24/7 support and expertise of the local staff and guides."
                  },
                  {
                     title: "Unmatched Value",
                     desc: "With our comprehensive tour itineraries and tour inclusions, we can offer strong real value because our heritage lets the trade go in sizable numbers and long relations commends us and work more effectively towards the hotel venues or local transport restaurants. Batanes Travel and Tours (BTT) assumes you set the best price and as an authentic experience for your Batanes journey. Best managed Batanes you."
                  }
               ].map((item, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #003366", borderRadius: 8, padding: 20 }}>
                     <h4 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, fontWeight: 800, color: "#003366", margin: "0 0 10px" }}>
                        {item.title}
                     </h4>
                     <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

/* ─── Vision & Mission ────────────────────────────────────── */
function VisionMission() {
  return (
    <section style={{ background: "#BACCDF", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
         
         {/* Vision */}
         <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 64, height: 64, background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
               <span style={{ fontSize: 32 }}>🚐</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
               OUR VISION
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6 }}>
               Choosing us means opting for personalized travel experiences and dedicated support. We strive to provide travel packages that cater to your needs while sharing insights that help you explore Batanes like a local. Your satisfaction is our priority, and we aim to nurture loyalty through excellence in service and a vibrant community of fellow travelers.
            </p>
         </div>

         {/* Mission */}
         <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 64, height: 64, background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
               <span style={{ fontSize: 32 }}>🗼</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
               OUR MISSION
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6, marginBottom: 12 }}>
               At our travel agency, we believe in creating unforgettable journeys that enrich your adventures. Our goal is to enhance awareness about the beauty of Batanes while building lasting connections with our customers. We're here to ensure your travel experiences are filled with joy and discovery, reflecting our commitment to excellent service and our core values of integrity and passion.
            </p>
            <ul style={{ paddingLeft: 20, fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#001219", lineHeight: 1.6, margin: 0 }}>
               <li>To maintain a good harmonious relationship with our local service providers—from the crew, owners and staff of local guides, drivers, caterers, boatmen.</li>
               <li>To be attentive to details of how guest needs and wants to experience Batanes.</li>
               <li>To provide our guests the best information and experience that Batanes can offer.</li>
            </ul>
         </div>

         {/* Responsible Tourism */}
         <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 64, height: 64, background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
               <span style={{ fontSize: 32 }}>🐙</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
               RESPONSIBLE TOURISM
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6 }}>
               By employing locals as tour guides and buying other services from other municipalities for our tour needs. We help our fellow Ivatans for our daily living.
            </p>
         </div>

         {/* Guiding Principle */}
         <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 64, height: 64, background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
               <span style={{ fontSize: 32 }}>⭐</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
               GUIDING PRINCIPLE
            </h3>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6 }}>
               To provide best customer service for our guests to feel Batanes their home.
            </p>
         </div>

      </div>
    </section>
  );
}

/* ─── Bottom Banner ───────────────────────────────────────── */
function BottomBanner() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/hero.png"
          alt="Batanes Adventure"
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.7)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: 1,
            margin: "0 0 16px",
          }}
        >
          DISCOVER YOUR BATANES ADVENTURE
        </h2>
        <div style={{ margin: "0 auto 24px", width: 100 }}>
           <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
             {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
               <path
                 key={i}
                 d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
                 stroke="#fff"
                 strokeWidth="1.5"
                 fill="none"
                 opacity="0.5"
               />
             ))}
           </svg>
        </div>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#fff", margin: "0 0 32px" }}>
          Explore stunning landscapes and vibrant cultures. Our travel packages to Batanes offer unforgettable experiences just waiting for you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/packages">
            <button className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Tour Packages
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn-primary">Request A Quote</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Accreditations ──────────────────────────────────────── */
function Accreditations() {
   return (
      <section style={{ padding: "60px 24px", background: "#FFFDF0", borderBottom: "1px solid #e0e0e0" }}>
         <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: 40 }}>
            {/* DOT */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ width: 60, height: 60, background: "#ccc", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#555" }}>DOT</span>
               </div>
               <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#003366", fontWeight: 600 }}>
                  Accredited by: Department of Tourism (DOT)<br/>
                  Accreditation ID: TOP-R02-00003024-1701-2018<br/>
                  Valid until: 30 June 2026
               </div>
            </div>

            {/* PHILTOA */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ width: 120, height: 60, background: "#ccc", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#555" }}>PHILTOA</span>
               </div>
               <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#003366", fontWeight: 600 }}>
                  Member, Philippine Tour Operators Association<br/>
                  (PHILTOA)
               </div>
            </div>
         </div>
      </section>
   );
}


/* ─── Page ────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StoryAndAdvantage />
        <VisionMission />
        <BottomBanner />
        <Accreditations />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
