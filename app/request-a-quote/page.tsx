"use client";

import Image from "next/image";
import { Navbar, Footer, WhatsApp } from "../components/shared";

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "30vh",
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-honeymoon.jpg"
          alt="Batanes landscape"
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
          REQUEST A QUOTE
        </h1>
      </div>
    </section>
  );
}

/* ─── Quote Section ───────────────────────────────────────── */
function QuoteForm() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64 }}>
        
        {/* Left: Info & Image */}
        <div>
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
             PLAN YOUR PERFECT TRIP
          </p>
          <div style={{ width: 100, marginBottom: 20 }}>
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
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#001219", lineHeight: 1.6, marginBottom: 32, fontWeight: 600 }}>
             Tell us about your dream Batanes adventure! Fill out the form below with your travel dates, group size, and preferences, and we'll craft a customized itinerary and quote that matches your needs and budget perfectly.
          </p>

          <div style={{ position: "relative", width: "100%", height: 400, borderRadius: 12, overflow: "hidden" }}>
             <Image src="/pkg-beach.jpg" alt="Batanes view" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Right: Form */}
        <div style={{ background: "#fff", border: "2px solid #BACCDF", borderRadius: 12, padding: 32 }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Full Name <span style={{ color: "red" }}>*</span></label>
              <input type="text" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} required />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Email <span style={{ color: "red" }}>*</span></label>
              <input type="email" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} required />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Phone <span style={{ color: "red" }}>*</span></label>
              <input type="tel" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} required />
            </div>

            <div style={{ display: "flex", gap: 16 }}>
               <div style={{ flex: 1 }}>
                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Arrival Date</label>
                 <input type="date" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#555" }} />
               </div>
               <div style={{ flex: 1 }}>
                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Departure Date</label>
                 <input type="date" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#555" }} />
               </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Total Number of Guests <span style={{ color: "red" }}>*</span></label>
              <input type="number" min="1" defaultValue="1" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} required />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Seniors (60yo and above)</label>
              <input type="number" min="0" defaultValue="0" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} />
              <div style={{ fontSize: 10, color: "#666", marginTop: 4 }}>How many seniors included in the total number of guests</div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Children (12yo and below)</label>
              <input type="number" min="0" defaultValue="0" style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14 }} />
              <div style={{ fontSize: 10, color: "#666", marginTop: 4 }}>How many children included in the total number of guests</div>
            </div>

            <div style={{ display: "flex", gap: 16 }}>
               <div style={{ flex: 1 }}>
                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Airline Ticket <span style={{ color: "red" }}>*</span></label>
                 <select style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#555" }}>
                    <option>Please select one</option>
                    <option>Yes</option>
                    <option>No</option>
                 </select>
               </div>
               <div style={{ flex: 1 }}>
                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Hotel Accommodation</label>
                 <select style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#555" }}>
                    <option>Please select one</option>
                    <option>Yes</option>
                    <option>No</option>
                 </select>
               </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Message</label>
              <textarea rows={4} style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, resize: "vertical" }}></textarea>
            </div>

            {/* Cloudflare turnstile mock */}
            <div style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", padding: "12px", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 300, marginTop: 8 }}>
               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#2ecc71", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                     </svg>
                  </div>
                  <span style={{ fontSize: 13, color: "#333", fontFamily: "var(--font-figtree), sans-serif" }}>Success!</span>
               </div>
               <div style={{ fontSize: 9, color: "#999", textAlign: "right", fontFamily: "var(--font-figtree), sans-serif" }}>
                 CLOUDFLARE<br/>Privacy - Terms
               </div>
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: 16 }}>
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function RequestQuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
