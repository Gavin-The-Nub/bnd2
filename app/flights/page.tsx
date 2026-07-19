"use client";

import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  CTABanner,
  PageHero,
} from "@/app/components/shared";

export default function FlightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Flights" image="/pkg-village.jpg" />

        {/* Breadcrumb */}
        <div style={{ background: "#FFFDF0", padding: "14px 24px", borderBottom: "1px solid #BACCDF40" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <nav aria-label="Breadcrumb">
              <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#0054A8" }}>
                <Link href="/" style={{ color: "#0054A8", textDecoration: "none" }}>Home</Link>
                {" "}&rsaquo;{" "}
                <span style={{ color: "#003366", fontWeight: 600 }}>Flights</span>
              </span>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }} className="flights-grid">
            
            {/* Left Column */}
            <div>
              <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 24, fontWeight: 700, color: "#003366", marginBottom: 20 }}>
                How to Get Here
              </h2>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6, marginBottom: 40 }}>
                We can also book your flight for you! The quickest way to get to Batanes from Manila is flying with Philippine Airlines (PAL).
              </p>

              <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 24, fontWeight: 700, color: "#0054A8", marginBottom: 20 }}>
                Best time to Visit
              </h2>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6, marginBottom: 40 }}>
                Summer Season: March – June<br />
                Cool Season: November – February<br />
                Wet Season: July – September<br />
                “Little Summer”: October
              </p>

              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6 }}>
                To know the lowest airfare from PAL Express, visit their website at <a href="https://www.philippineairlines.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#0054A8", textDecoration: "none" }}>PAL</a> or <a href="#" style={{ color: "#0054A8", textDecoration: "none" }}>Skypasada</a>.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 24, fontWeight: 700, color: "#003366", marginBottom: 20 }}>
                About PAL Express
              </h2>

              <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 18, fontWeight: 600, color: "#0054A8", marginBottom: 10, textTransform: "uppercase" }}>
                AIRPORT TERMINAL
              </h3>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6, marginBottom: 30 }}>
                Clark Airport, Pampanga
              </p>

              <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 18, fontWeight: 600, color: "#0054A8", marginBottom: 10, textTransform: "uppercase" }}>
                AIRCRAFT
              </h3>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6, marginBottom: 30 }}>
                76-seater Bombardier Q400 Turboprop Aircraft<br />
                Travel time: 1 hour 30 mins<br />
                Passenger Seating Capacity: 76 seats
              </p>

              <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 18, fontWeight: 600, color: "#0054A8", marginBottom: 10, textTransform: "uppercase" }}>
                ROUTES
              </h3>
              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6, marginBottom: 20 }}>
                Clark – Basco / Basco – Clark / Daily flight
              </p>

              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, fontWeight: 700, color: "#001219", lineHeight: 1.6, marginBottom: 20 }}>
                PR2688/PR2689
              </p>

              <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 15, color: "#001219", lineHeight: 1.6 }}>
                Clark – Basco 09:45 (AM) – 11:15 (AM)<br />
                Basco – Clark 11:45 (AM) – 01:15 (PM)
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 768px) {
          .flights-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
