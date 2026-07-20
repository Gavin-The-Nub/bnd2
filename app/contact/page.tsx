"use client";

import Image from "next/image";
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
          src="/pkg-village.jpg"
          alt="Batanes stone house"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.5)" }} />
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
          Contact Us
        </h1>
      </div>
    </section>
  );
}

/* ─── Contact Content ─────────────────────────────────────── */
function ContactContent() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <SectionHeader label="LET'S PLAN YOUR BATANES ADVENTURE!" title="" />
      
      <p style={{ 
        fontFamily: "var(--font-figtree), sans-serif", 
        fontSize: 15, 
        color: "#001219", 
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto 60px",
        lineHeight: 1.6
      }}>
        We're excited to help you create an unforgettable journey to Batanes. Whether you have questions about our tours, need help with bookings, or just want travel tips, feel free to reach out. Let's explore Batanes together!
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, marginBottom: 80 }}>
        
        {/* Form Column */}
        <div style={{ background: "#fff", padding: 32, borderRadius: 12, border: "1px solid #BACCDF", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: 1 }}>
            Drop Us a Line
          </h3>
          
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
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#003366", textTransform: "uppercase", marginBottom: 6 }}>Message <span style={{ color: "red" }}>*</span></label>
              <textarea rows={5} style={{ width: "100%", padding: "10px 12px", border: "1px solid #BACCDF", borderRadius: 4, fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, resize: "vertical" }} required></textarea>
            </div>

            {/* Cloudflare turnstile mock */}
            <div style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", padding: "12px", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 300, marginTop: 8 }}>
               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="checkbox" style={{ width: 24, height: 24, cursor: "pointer" }} />
                  <span style={{ fontSize: 13, color: "#333", fontFamily: "var(--font-figtree), sans-serif" }}>Verify you are human</span>
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

        {/* Contact Info Column */}
        <div>
          <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: 1 }}>
            How to Reach Us
          </h3>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
             <li style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ color: "#003366", marginTop: 2 }}>📍</div>
                <div>
                  <p style={{ margin: 0, fontSize: 14, color: "#001219", lineHeight: 1.5 }}>
                    Amboy Street, Kayhuvokan<br/>
                    Basco, Batanes, 3900
                  </p>
                </div>
             </li>
             <li style={{ borderTop: "1px solid #e5edf5", paddingTop: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ color: "#003366" }}>📧</div>
                <div>
                  <a href="mailto:info@batanestravelandtours.com" style={{ fontSize: 14, color: "#003366", textDecoration: "none", fontWeight: 600 }}>info@batanestravelandtours.com</a>
                </div>
             </li>
             <li style={{ borderTop: "1px solid #e5edf5", paddingTop: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ color: "#003366" }}>📞</div>
                <div>
                  <span style={{ fontSize: 14, color: "#001219" }}>(+632) 8633 0859</span>
                </div>
             </li>
             <li style={{ borderTop: "1px solid #e5edf5", paddingTop: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ color: "#003366" }}>📱</div>
                <div>
                  <span style={{ fontSize: 14, color: "#001219" }}>Smart: 0969 446 8109</span>
                </div>
             </li>
             <li style={{ borderTop: "1px solid #e5edf5", paddingTop: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ color: "#003366" }}>📱</div>
                <div>
                  <span style={{ fontSize: 14, color: "#001219" }}>Globe: 0977 806 3040</span>
                </div>
             </li>
          </ul>

          <div style={{ marginTop: 32 }}>
            <div style={{ width: 100 }}>
               <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
                 {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
                   <path
                     key={i}
                     d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
                     stroke="#003366"
                     strokeWidth="1.5"
                     fill="none"
                     opacity="0.3"
                   />
                 ))}
               </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Map Section */}
      <div style={{ width: "100%", height: 400, background: "#e0e0e0", borderRadius: 12, overflow: "hidden", position: "relative" }}>
         {/* Since we don't have a map image, we use an iframe or a styled div as a placeholder */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4265439589886!2d121.96860017585039!3d20.448557510196232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1e3260c6d7a5b%3A0x673ed17b8f9e2b10!2sBasco%2C%20Batanes!5e0!3m2!1sen!2sph!4v1714578161528!5m2!1sen!2sph" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </section>
  );
}


/* ─── Page ────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContactContent />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
