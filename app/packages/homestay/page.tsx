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
          src="/pkg-village.jpg"
          alt="Batanes Homestay"
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
          HOMESTAY
        </h1>
      </div>
    </section>
  );
}

/* ─── Grid Section ────────────────────────────────────────── */
function HomestaysGrid() {
  const homestays = [
    {
       name: "Casa Domingo",
       price: "₱9,900 - ₱19,800",
       desc: "Come and experience the warm Ivatan hospitality at Casa Domingo.",
       image: "/pkg-beach.jpg"
    },
    {
       name: "Providence Inn",
       price: "₱9,900 - ₱19,800",
       desc: "Welcome to Providence Inn — Your DOT-Accredited Home in Basco.",
       image: "/pkg-lighthouse.jpg"
    },
    {
       name: "Savatan Homestay",
       price: "₱9,900 - ₱19,800",
       desc: "Experience the heart of Batanes with the Delfin family, providing authentic Ivatan hospitality since 2015.",
       image: "/packages/batanes-homestay-ivatan.jpg"
    }
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
         {homestays.map((homestay, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ position: "relative", width: "100%", height: 260, marginBottom: 16 }}>
                  <Image src={homestay.image} alt={homestay.name} fill style={{ objectFit: "cover" }} />
               </div>
               <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 800, color: "#003366", margin: "0 0 8px" }}>
                  {homestay.name}
               </h3>
               <div style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 700, color: "#0054A8", marginBottom: 12 }}>
                  {homestay.price}
               </div>
               <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#001219", lineHeight: 1.6, flexGrow: 1, marginBottom: 20 }}>
                  <span dangerouslySetInnerHTML={{ __html: homestay.desc.replace('Delfin family', '<strong>Delfin family</strong>') }} />
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
export default function HomestayPackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomestaysGrid />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
