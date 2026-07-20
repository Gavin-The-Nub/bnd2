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
          src="/pkg-beach.jpg"
          alt="Batanes landscape"
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
          Reviews
        </h1>
      </div>
    </section>
  );
}

/* ─── Reviews Grid ────────────────────────────────────────── */
const reviewsData = [
  {
    id: 1,
    quote: "We commend BND as our tour coordinator for being very knowledgeable, friendly, and accommodating to us. Very good travel guide.",
    author: "Teresa Santos",
    date: "March 9-11, 2023",
  },
  {
    id: 2,
    quote: "Mel and Kuya Richard were accommodating, courteous, friendly, and fun to be with. They respond promptly to our requests. They were great in doing their job. Thumbs up for a job well done. The hotel is clean and comfortable. The staff were courteous and attentive to our requests. The itinerary was great and worth it for the cost including the van service. No more hassle on our part as guests. Will surely want to come back and also refer to our colleagues who plan to visit Batanes. Dream come true for this trip.",
    author: "Juana Lyn Valenzuela",
    date: "February 7-10, 2023",
  },
  {
    id: 3,
    quote: "We're happy with the quality of service Batanes Travel and Tours has offered and showed. We're eager to come back for more jam-packed adventures and we will surely choose your service again. Will let our friends know about BTT. Thank you so much for being part of our unforgettable experience. We will miss Batanes soooo much! Dios mamajes!",
    author: "Abigail Corpuz and John Carell Fanerir",
    date: "February 12-15, 2023",
  },
  {
    id: 4,
    quote: "We highly recommend your guide who guided us very well, he is very resourceful, respectful, kind, and considerate. Our tour guide is Jeff Vizcay. Thank you very much!",
    author: "Mr. and Mrs. Reynaldo R. Baguisa and Mr. and Mrs. Rolando Sima",
    date: "February 23-25, 2023",
  },
  {
    id: 5,
    quote: "Batanes is love. I would surely come back here in Batanes. Spectacular view — New Zealand of the Philippines!",
    author: "Jane Yu",
    date: "February 25-28, 2023",
  },
  {
    id: 6,
    quote: "Brian was a great guide — appreciate his help very much! Kudos to the team who organized the trip.",
    author: "Marcello Papuli",
    date: "March 6-9, 2023",
  },
  {
    id: 7,
    quote: "We commend Mr. Dick and Jeff for being a very good driver and tour guide. We felt very comfortable in all their services and I thank Mr. Nelson for all the assistance he extended to me and my group in arranging our hotel accommodations and tour itineraries. Thank you and God bless you all. Rest assured we will highly recommend BTT to our friends in Manila.",
    author: "Peggy H. Velando",
    date: "March 8-11, 2023",
  },
];

function ReviewCard({ review }: { review: any }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #BACCDF",
      borderRadius: 16,
      padding: 32,
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      width: "100%"
    }}>
      <div style={{ color: "#BACCDF", marginBottom: 20 }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6, flexGrow: 1, marginBottom: 24 }}>
        {review.quote}
      </p>
      <div style={{ borderLeft: "3px solid #FF9900", paddingLeft: 16 }}>
        <h4 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 700, color: "#003366", margin: "0 0 4px", textTransform: "uppercase" }}>
          {review.author}
        </h4>
        <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, color: "#555", fontWeight: 700, textTransform: "uppercase" }}>
          ({review.date})
        </span>
      </div>
    </div>
  );
}

function ReviewsGrid() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader label="HEAR IT FROM OUR HAPPY TRAVELERS" title="" />
      
      <p style={{ 
        fontFamily: "var(--font-figtree), sans-serif", 
        fontSize: 15, 
        color: "#001219", 
        textAlign: "center",
        maxWidth: 700,
        margin: "0 auto 40px",
        lineHeight: 1.6
      }}>
        Don't just take our word for it—discover what makes Batanes Travel and Tours special through the voices of our cherished guests. From unforgettable sunsets to warm local hospitality, heartfelt family moments to romantic adventures, these authentic stories from fellow travelers showcase the magic we help create in beautiful Batanes.
      </p>

      {/* Top Row: Image + Highlight Review */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 32, alignItems: "stretch" }}>
        {/* Main image */}
        <div style={{ flex: "1 1 400px", minWidth: 300 }}>
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 400, borderRadius: 16, overflow: "hidden" }}>
             <Image
              src="/pkg-hotel.jpg"
              alt="Happy travelers dining"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>
        {/* Highlight Review */}
        <div style={{ flex: "1 1 400px", display: "flex" }}>
          {reviewsData.length > 0 && (
             <ReviewCard review={reviewsData[0]} />
          )}
        </div>
      </div>

      {/* Bottom Rows: Masonry */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 40, alignItems: "flex-start" }}>
        {/* Left Column */}
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 32 }}>
          {reviewsData.slice(1).filter((_, i) => i % 2 === 0).map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Right Column */}
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 32 }}>
          {reviewsData.slice(1).filter((_, i) => i % 2 !== 0).map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginTop: 60, fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
        <span style={{ cursor: "pointer", color: "#001219" }}>Previous</span>
        <span style={{ cursor: "pointer", color: "#001219" }}>1</span>
        <span style={{ cursor: "pointer", color: "#888" }}>2</span>
        <span style={{ cursor: "pointer", color: "#001219" }}>Next</span>
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
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-beach.jpg"
          alt="Share your experience"
          fill
          style={{ objectFit: "cover", objectPosition: "center 80%" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32, width: "100%" }}>
        <div style={{ 
          maxWidth: 600, 
          background: "rgba(255, 255, 255, 0.7)", 
          backdropFilter: "blur(4px)",
          padding: "40px",
          borderRadius: 8
        }}>
          <h2
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 800,
              color: "#003366",
              textTransform: "uppercase",
              letterSpacing: 1,
              margin: "0 0 16px",
            }}
          >
            SHARE YOUR TRAVEL EXPERIENCE
          </h2>
          <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#001219", margin: "0 0 0", lineHeight: 1.6 }}>
            We'd love to hear about your adventures in Batanes! Share your thoughts with us so we can keep improving and provide the best experiences for fellow travelers.
          </p>
        </div>
        
        <div style={{ textAlign: "center" }}>
           <Link href="/contact">
            <button style={{ 
              background: "#fff", 
              color: "#003366", 
              fontWeight: 700, 
              padding: "16px 32px", 
              borderRadius: 4, 
              border: "none",
              textTransform: "uppercase",
              letterSpacing: 1,
              cursor: "pointer",
              fontSize: 14,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              Send A Testimonial
            </button>
          </Link>
          <div style={{ marginTop: 16, fontSize: 11, color: "#fff", textAlign: "center", fontFamily: "var(--font-figtree), sans-serif", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
             By submitting a testimonial, you agree to our <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>Privacy Policy</a>.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ReviewsGrid />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
