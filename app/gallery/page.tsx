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
          src="/hero.png"
          alt="Batanes landscape"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,25,0.4)" }} />
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
          Gallery
        </h1>
      </div>
    </section>
  );
}

/* ─── Gallery Grid ────────────────────────────────────────── */
function GalleryGrid() {
  // Using public images as a placeholder for the gallery
  const images = [
    "/pkg-beach.jpg",
    "/pkg-lighthouse.jpg",
    "/pkg-village.jpg",
    "/pkg-hotel.jpg",
    "/pkg-honeymoon.jpg",
    "/team.jpg",
    "/pkg-beach.jpg",
    "/pkg-village.jpg",
    "/pkg-lighthouse.jpg",
    "/pkg-honeymoon.jpg",
    "/pkg-hotel.jpg",
    "/pkg-beach.jpg",
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader label="DISCOVER BATANES THROUGH OUR LENS" title="" />
      <p style={{ 
        fontFamily: "var(--font-figtree), sans-serif", 
        fontSize: 15, 
        color: "#001219", 
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto 40px",
        lineHeight: 1.6
      }}>
        Experience the breathtaking beauty of Batanes before you even arrive. Browse through our collection of stunning photographs showcasing dramatic coastlines, rolling green hills, traditional stone houses, and unforgettable sunsets that await you in this island paradise.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 16,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: 250,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              style={{ objectFit: "cover", transition: "transform 0.4s" }}
              sizes="(max-width:768px) 100vw, 33vw"
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
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
          Experience stunning landscapes and vibrant cultures. Our travel packages to Batanes offer unforgettable experiences just waiting for you.
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

/* ─── Page ────────────────────────────────────────────────── */
export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GalleryGrid />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
