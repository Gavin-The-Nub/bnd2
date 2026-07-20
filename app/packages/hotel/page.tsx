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
          src="/pkg-hotel.jpg"
          alt="Batanes Hotel"
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
          HOTEL
        </h1>
      </div>
    </section>
  );
}

/* ─── Grid Section ────────────────────────────────────────── */
function HotelsGrid() {
  const hotels = [
    {
       name: "Amboy Hometel",
       price: "₱17,100 - ₱26,100",
       desc: "Amboy's Hometel is known for its relaxing ambiance with a total of 18 room accommodations, five different room categories and a maximum property capacity of twenty one guests.",
       image: "/pkg-hotel.jpg"
    },
    {
       name: "Batanes Seaside",
       price: "₱10,700 - ₱17,600",
       desc: "Batanes Seaside Lodge is a family-friendly property offering comfortable accommodations, tours, and catering services.",
       image: "/pkg-village.jpg"
    },
    {
       name: "Bernardo's Hotel",
       price: "₱11,900 - ₱22,800",
       desc: "Bernardo's Hotel is one of the newest hotels in Batanes with 7 AC rooms with Hot and Cold shower.",
       image: "/pkg-beach.jpg"
    },
    {
       name: "Boulder Bay Residences",
       price: "₱11,900 - ₱22,800",
       desc: "Boulder Bay Residences offers 3 star comfort and an excellent base for exploring Basco, the Philippines.",
       image: "/pkg-lighthouse.jpg"
    },
    {
       name: "Dive Batanes",
       price: "₱11,200.00 - ₱41,500.00",
       desc: "Dive Batanes Lodge and Restaurant is conveniently situated a few steps away from Chanarian beach, providing a breathtaking view of the sunset.",
       image: "/pkg-hotel.jpg"
    },
    {
       name: "Fundacion Pacita",
       price: "₱24,800 - ₱54,000",
       desc: "Nestled atop rolling hills, Fundacion Pacita invites you to bask in the exalting beauty of Basco, Batanes.",
       image: "/team.jpg"
    },
    {
       name: "Midtown Inn",
       price: "₱10,550.00 - ₱19,600.00",
       desc: "Located at the heart of Basco, this accommodation is in the center of the capital town proper.",
       image: "/pkg-honeymoon.jpg"
    },
    {
       name: "Pension Ivatan",
       price: "₱11,900 - ₱22,800",
       desc: "Experience the North with the grace and comfort you deserve. Welcome home to Pension Ivatan.",
       image: "/pkg-hotel.jpg"
    },
    {
       name: "Residencia Du Basco",
       price: "₱17,100 - ₱26,100",
       desc: "Residencia Du Basco offers the best and most modern comfortable accommodation in Batanes.",
       image: "/pkg-village.jpg"
    },
    {
       name: "Shanedel's Inn",
       price: "₱11,200.00 - ₱39,250.00",
       desc: "Shanedel's Inn is a small family-run Inn with excellent views of the Batanes Port and surrounding area can be seen from Shanedel's dining area and terrace.",
       image: "/pkg-beach.jpg"
    }
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
         {hotels.map((hotel, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ position: "relative", width: "100%", height: 260, marginBottom: 16 }}>
                  <Image src={hotel.image} alt={hotel.name} fill style={{ objectFit: "cover" }} />
               </div>
               <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 8px" }}>
                  {hotel.name}
               </h3>
               <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 700, color: "#0054A8", marginBottom: 12 }}>
                  {hotel.price}
               </div>
               <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", lineHeight: 1.6, flexGrow: 1, marginBottom: 20 }}>
                  {hotel.desc}
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
export default function HotelPackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HotelsGrid />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
