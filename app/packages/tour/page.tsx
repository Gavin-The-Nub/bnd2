"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WhatsApp } from "../../components/shared";

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
          src="/pkg-beach.jpg"
          alt="Batanes Tour"
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
          TOUR
        </h1>
      </div>
    </section>
  );
}

/* ─── Grid Section ────────────────────────────────────────── */
function ToursGrid() {
  const tours = [
    {
       name: "Batanes Daily Joiner Tours — Car/Van",
       price: "₱3,900.00 - ₱17,600.00",
       desc: "Discover Batanes' most spectacular sights alongside like-minded adventurers with our popular daily joiner tours featuring comfortable car or van transport.",
       image: "/packages/batanes-car-van-tour.jpg"
    },
    {
       name: "Batanes Daily Joiner Tours — Cogon Tour Tricycle",
       price: "₱5,100.00 - ₱13,250.00",
       desc: "Discover Batanes' pristine natural beauty at your own pace with our budget-friendly private eco-tours featuring authentic tricycle transport.",
       image: "/packages/batanes-tricycle-tour.jpg"
    },
    {
       name: "Private Eco-Tours — Car/Van",
       price: "₱5,250.00 - ₱23,500.00",
       desc: "Discover Batanes' pristine natural beauty at your own pace with our private eco-tours featuring comfortable car or van transport.",
       image: "/packages/batanes-car-van-tour.jpg"
    },
    {
       name: "Private Eco-Tours — Tricycle",
       price: "₱7,500.00 - ₱15,500.00",
       desc: "Discover Batanes' pristine natural beauty at your own pace with our budget-friendly private eco-tours featuring authentic tricycle transport.",
       image: "/packages/batanes-tricycle-tour.jpg"
    }
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
         {tours.map((tour, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ position: "relative", width: "100%", height: 260, marginBottom: 16 }}>
                  <Image src={tour.image} alt={tour.name} fill style={{ objectFit: "cover" }} />
                  {tour.name.includes("Tricycle") && (
                     <div style={{ position: "absolute", bottom: 12, left: 12, display: "flex", alignItems: "center", gap: 6, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                        <span>💡</span>
                        <div>
                           <span style={{ fontSize: 10, fontWeight: 700, display: "block", lineHeight: 1 }}>Did You Know?</span>
                           <span style={{ fontSize: 11 }}>Batanes has its own tricycle.</span>
                        </div>
                     </div>
                  )}
               </div>
               <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 8px" }}>
                  {tour.name}
               </h3>
               <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 700, color: "#0054A8", marginBottom: 12 }}>
                  {tour.price}
               </div>
               <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", lineHeight: 1.6, flexGrow: 1, marginBottom: 20 }}>
                  {tour.desc}
               </p>
               <div>
                  <Link href="/request-a-quote">
                     <button className="btn-primary" style={{ padding: "8px 20px", fontSize: 12, borderRadius: 2 }}>
                        PACKAGE DETAILS
                     </button>
                  </Link>
               </div>
            </div>
         ))}
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function TourPackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToursGrid />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
