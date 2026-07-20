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
        height: "30vh",
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-hotel.jpg"
          alt="Batanes stone house"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.6)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
            padding: "16px 32px",
            background: "rgba(0,18,25,0.8)",
          }}
        >
          BATANES PACKAGES
        </h1>
      </div>
    </section>
  );
}

/* ─── Intro & Premium Feature ─────────────────────────────── */
function PremiumFeature() {
  return (
    <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 60 }}>
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
          HELPING YOU ENJOY A BEAUTIFUL ISLAND
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
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#001219", lineHeight: 1.6, maxWidth: 900, fontWeight: 600 }}>
          Discover the magic of Batanes with our thoughtfully crafted tour packages designed for every traveler and budget. 
          From all-inclusive luxury options featuring ocean-view accommodations to thrilling eco-tours in an authentic tricycle, 
          we offer authentic experiences that immerse you in breathtaking landscapes. 
          Choose your adventure and let us handle the rest.
        </p>
      </div>

      <div style={{ background: "#BACCDF", borderRadius: 16, display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
        {/* Left Content */}
        <div style={{ flex: "1 1 500px", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 24, fontWeight: 800, color: "#003366", margin: "0 0 16px" }}>
            PREMIUM PACKAGES
          </h2>
          <div style={{ display: "flex", gap: 16, marginBottom: 24, fontSize: 14, color: "#001219", fontFamily: "var(--font-figtree), sans-serif" }}>
             <span style={{ display: "flex", alignItems: "center", gap: 6 }}>🛏️ 3 Days & 2 Nights</span>
             <span style={{ display: "flex", alignItems: "center", gap: 6 }}>📍 Batan North, South & Sabtang</span>
          </div>
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 800, color: "#003366", margin: "0 0 8px", textTransform: "uppercase" }}>
            TOUR INCLUSIONS
          </p>
          <div style={{ width: 100, marginBottom: 16 }}>
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
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6, marginBottom: 32 }}>
            Indulge in our finest Batanes escape! Our all-inclusive premium package features luxury accommodations, 
            exclusive private tours covering all major spots, and gourmet dining experiences. 
            Enjoy a romantic dinner with a view, complimentary eco-tours in an authentic tricycle, 
            and a dedicated guide. Relax and let us take care of every detail.
          </p>
          
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
             <div style={{ background: "#fff", padding: "12px 24px", borderRadius: 4, textAlign: "center", minWidth: 100 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#003366" }}>1 PAX</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#001219" }}>₱9,500/pax</div>
             </div>
             <div style={{ background: "#fff", padding: "12px 24px", borderRadius: 4, textAlign: "center", minWidth: 100 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#003366" }}>2 PAX</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#001219" }}>₱7,500/pax</div>
             </div>
             <div style={{ background: "#fff", padding: "12px 24px", borderRadius: 4, textAlign: "center", minWidth: 100 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#003366" }}>3 PAX & ABOVE</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#001219" }}>₱6,500/pax</div>
             </div>
          </div>

          <div>
             <Link href="/request-a-quote">
                <button style={{ background: "#fff", color: "#003366", border: "1px solid #003366", padding: "12px 32px", fontSize: 13, fontWeight: 700, textTransform: "uppercase", cursor: "pointer", letterSpacing: 1, borderRadius: 4 }}>
                   FULL INCLUSIONS
                </button>
             </Link>
          </div>
        </div>

        {/* Right Image */}
        <div style={{ flex: "1 1 400px", minHeight: 400, position: "relative", padding: 32 }}>
           <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 300, borderRadius: 12, overflow: "hidden" }}>
              <Image src="/pkg-honeymoon.jpg" alt="Premium Package" fill style={{ objectFit: "cover" }} />
           </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Grid ───────────────────────────────────────── */
function ServicesGrid() {
  const services = [
    {
       title: "HOTEL + TOUR PACKAGE",
       image: "/team.jpg",
       href: "/packages/hotel",
       desc: "Experience comfort and adventure combined. Our Hotel + Tour package includes premium accommodations and guided tours to iconic spots, ensuring a seamless and memorable Batanes getaway. Enjoy hassle-free travel with daily breakfasts and expert local guides."
    },
    {
       title: "HOMESTAY + TOUR PACKAGE",
       image: "/pkg-village.jpg",
       href: "/packages/homestay",
       desc: "Immerse yourself in authentic Ivatan culture. Stay with welcoming local families and experience the warmth of Batanes hospitality. This package combines cozy homestay lodging with engaging guided tours to historical landmarks and natural wonders."
    },
    {
       title: "ECO-TOURS (PRIVATE) — CAR/VAN",
       image: "/pkg-beach.jpg",
       href: "/packages/tour",
       desc: "Explore Batanes in comfort and style with our private car/van eco-tours. Ideal for families and groups, this package offers flexible itineraries, air-conditioned transport, and personalized attention from our experienced local guides."
    },
    {
       title: "ECO-TOURS (PRIVATE) — TRICYCLE",
       image: "/pkg-lighthouse.jpg",
       href: "/packages/tour",
       desc: "For a more adventurous and intimate experience, hop on our private tricycle eco-tours. Perfect for couples or solo travelers, feel the fresh island breeze as you navigate through scenic coastal roads and rolling hills with a dedicated driver-guide."
    }
  ];

  return (
    <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: 32 }}>
          {services.map((svc, i) => (
             <div key={i} style={{ border: "2px solid #BACCDF", borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff" }}>
                <div style={{ position: "relative", width: "100%", height: 250 }}>
                   <Image src={svc.image} alt={svc.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column" }}>
                   <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 8px" }}>
                      {svc.title}
                   </h3>
                   <div style={{ width: 100, marginBottom: 16 }}>
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
                   <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
                      {svc.desc}
                   </p>
                   <div>
                      <Link href={svc.href}>
                         <button style={{ background: "transparent", color: "#003366", border: "1px solid #003366", padding: "10px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", cursor: "pointer", letterSpacing: 1, borderRadius: 4 }}>
                            LEARN MORE
                         </button>
                      </Link>
                   </div>
                </div>
             </div>
          ))}
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
          src="/pkg-village.jpg"
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
          <Link href="/request-a-quote">
            <button className="btn-primary">Request A Quote</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PremiumFeature />
        <ServicesGrid />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
