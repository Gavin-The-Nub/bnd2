"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  Stars,
  Wave,
  SectionHeader,
  PackageCard,
  CTABanner,
  PageHero,
  type Package,
} from "@/app/components/shared";

/* ─── Data ────────────────────────────────────────────────── */
const honeymoonPackage: Package & {
  pax?: string;
  nights?: string;
  days?: string;
  inclusions?: string;
} = {
  id: 1,
  image: "/pkg-honeymoon.jpg",
  title: "Honeymoon Package",
  stars: 5,
  desc: "A romantic escape with breathtaking sunsets, island-hopping, and luxury accommodation — perfect for couples seeking an unforgettable Batanes getaway.",
  tag: "MOST POPULAR",
  pax: "2 Pax",
  nights: "3 Nights",
  days: "4 Days",
  inclusions: "All Inclusive",
};

const featuredPackages: Package[] = [
  {
    id: 2,
    image: "/pkg-hotel.jpg",
    title: "Hotel + Tour Package",
    stars: 5,
    desc: "Enjoy comfortable hotel stays combined with guided tours covering all major scenic spots and landmarks across Batanes.",
    tag: "BEST VALUE",
  },
  {
    id: 3,
    image: "/pkg-lighthouse.jpg",
    title: "E-Chopper + Tour Package",
    stars: 5,
    desc: "Explore iconic Batanes landscapes aboard a classic e-chopper with a seasoned local guide leading the way through every scenic route.",
  },
  {
    id: 4,
    image: "/pkg-village.jpg",
    title: "Backpacking Tour",
    stars: 5,
    desc: "Budget-friendly adventure through Batanes with a knowledgeable guide, perfect for solo and group backpackers exploring on a shoestring.",
  },
  {
    id: 5,
    image: "/pkg-beach.jpg",
    title: "Daily Joiner Tours",
    stars: 5,
    desc: "Join a small group of fellow travelers for a fun, budget-friendly daily sightseeing adventure covering Batan North and South Tours.",
  },
];

const morePackages: Package[] = [
  {
    id: 6,
    image: "/pkg-beach.jpg",
    title: "Para Dito Daw Si Yayas",
    stars: 5,
    desc: "A famous filming location package that takes you to iconic spots featured in popular Filipino media — a must for TV lovers.",
    tag: "NEW",
  },
  {
    id: 7,
    image: "/pkg-lighthouse.jpg",
    title: "Private Tour Package",
    stars: 5,
    desc: "Enjoy a fully customized private tour of Batanes at your own pace, with a dedicated vehicle and personal guide throughout.",
  },
  {
    id: 8,
    image: "/pkg-hotel.jpg",
    title: "OTOP Masaya",
    stars: 5,
    desc: "Experience Batanes' One Town One Product highlights — local crafts, cuisine, and unique cultural traditions you can only find here.",
  },
];

/* ─── Honeymoon Feature Card ──────────────────────────────── */
function HoneymoonFeature() {
  return (
    <section style={{ background: "#EEF3F8", padding: "60px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            boxShadow: "0 8px 40px rgba(0,51,102,0.12)",
            gap: 0,
          }}
          className="honeymoon-grid"
        >
          {/* Left — Image */}
          <div style={{ position: "relative", minHeight: 340 }}>
            <Image
              src={honeymoonPackage.image}
              alt={honeymoonPackage.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width:768px) 100vw, 50vw"
            />
            {honeymoonPackage.tag && (
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "#FF9900",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: 20,
                  letterSpacing: 0.5,
                  zIndex: 2,
                }}
              >
                {honeymoonPackage.tag}
              </span>
            )}
          </div>

          {/* Right — Content */}
          <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#003366",
                margin: "0 0 6px",
              }}
            >
              FEATURED PACKAGE
            </p>
            <Wave color="#003366" opacity={0.4} />
            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#003366",
                margin: "12px 0 8px",
              }}
            >
              {honeymoonPackage.title}
            </h2>
            <Stars count={honeymoonPackage.stars} />

            {/* Stats row */}
            <div style={{ display: "flex", gap: 24, margin: "16px 0", flexWrap: "wrap" }}>
              {[
                { label: "Pax", val: honeymoonPackage.pax! },
                { label: "Nights", val: honeymoonPackage.nights! },
                { label: "Days", val: honeymoonPackage.days! },
                { label: "Package", val: honeymoonPackage.inclusions! },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#FF9900",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 11,
                      color: "#003366",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#001219",
                margin: "0 0 24px",
              }}
            >
              {honeymoonPackage.desc}
            </p>
            <div>
              <Link
                href="/#contact"
                style={{
                  display: "inline-block",
                  background: "#FF9900",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textDecoration: "none",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .honeymoon-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Breadcrumb ──────────────────────────────────────────── */
function Breadcrumb() {
  return (
    <div style={{ background: "#FFFDF0", padding: "14px 24px", borderBottom: "1px solid #BACCDF40" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb">
          <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#0054A8" }}>
            <Link href="/" style={{ color: "#0054A8", textDecoration: "none" }}>Home</Link>
            {" "}&rsaquo;{" "}
            <span style={{ color: "#003366", fontWeight: 600 }}>BND Packages</span>
          </span>
        </nav>
        <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", margin: "10px 0 0", lineHeight: 1.7, maxWidth: 700 }}>
          Discover the magic of Batanes with thoughtfully crafted tour packages for every
          type of traveler. Whether you&apos;re a couple seeking romance, a family looking for
          adventure, or a solo backpacker exploring the Philippines — Batanes has something
          perfect for you.{" "}
          <Link href="/tour-itineraries" style={{ color: "#0054A8" }}>
            View our itineraries
          </Link>{" "}
          and{" "}
          <Link href="/tour-inclusions" style={{ color: "#0054A8" }}>
            tour inclusions
          </Link>{" "}
          for full details.
        </p>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Batanes Packages" />
        <Breadcrumb />
        <HoneymoonFeature />

        {/* Featured packages */}
        <section style={{ background: "#FFFDF0", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeader label="OUR BEST DEALS" title="FEATURED TOUR PACKAGES" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* More packages */}
        <section style={{ background: "#F5F8FB", padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ height: 80 }} />
            <SectionHeader label="EXPLORE MORE" title="MORE BATANES PACKAGES" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {morePackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
