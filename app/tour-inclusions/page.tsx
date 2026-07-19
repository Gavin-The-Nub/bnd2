"use client";

import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  Wave,
  CTABanner,
  PageHero,
} from "@/app/components/shared";

/* ─── Data ────────────────────────────────────────────────── */
const privateInclusions = [
  "Hotel Accommodation (Private Bathroom with Hot & Cold Shower)",
  "Batan North Tour",
  "Batan South Tour",
  "Sabtang Island Tour (included in the 4D/3N or 5D/4N package only)",
  "All Meals (Breakfast, Lunch, Dinner)",
  "Airport Transfers",
  "Car or Van Service",
  "Tour Guide",
  "Boat Transfers (for Sabtang Island Tour only)",
  "Tax Inclusive",
  "Government Fees (Eco-Tourism Fee, Municipal, DENR)",
];

const termsAndConditions = [
  "Only 20% downpayment is required to book the package, the balance is due two weeks before arrival in Batanes.",
  "Promo Period: February 6-8, 2026. Travel Validity: February 7 – December 31, 2026.",
  "Packages are non-refundable but rebookable within one year from date of purchase, fees may apply.",
  "Packages are transferable within one year from date of purchase.",
];

const exclusions = [
  "Airfare (Manila to Batanes and back)",
  "Travel Insurance",
  "Personal Expenses (shopping, laundry, phone calls, etc.)",
  "Optional Activities not included in the package",
  "Tips and gratuities for guides and drivers",
];

const paymentOptions = [
  {
    label: "Bank Transfer",
    details: [
      "BDO Savings: Account Number – 0XXXX XXXXX",
      "Metrobank: Account Number – XXXXX XXXXX XXXXX",
    ],
  },
  {
    label: "Online Payment",
    details: [
      "GCash: 0977 806 3040 (account name: BND Travel & Tours)",
      "Maya: 0969 446 8109",
    ],
  },
  {
    label: "Credit Card",
    details: ["Available upon request — please contact us for details."],
  },
];

/* ─── Section Box ─────────────────────────────────────────── */
function SectionBox({
  title,
  accent = false,
  children,
}: {
  title: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: `2px solid ${accent ? "#FF9900" : "#BACCDF"}`,
        borderRadius: 16,
        padding: "36px 40px",
        boxShadow: "0 2px 16px rgba(0,51,102,0.06)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 20,
          fontWeight: 900,
          color: accent ? "#FF9900" : "#003366",
          textTransform: "uppercase",
          margin: "0 0 12px",
          letterSpacing: 0.5,
        }}
      >
        {title}
      </h2>
      <Wave color={accent ? "#FF9900" : "#003366"} opacity={0.35} />
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
}

/* ─── Bullet List ─────────────────────────────────────────── */
function BulletList({ items, check = false }: { items: string[]; check?: boolean }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "#001219",
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              flexShrink: 0,
              marginTop: 3,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: check ? "#003366" : "#FF9900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
              {check ? (
                <polyline points="1,5 4,8 11,1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <circle cx="6" cy="5" r="3" fill="#fff" />
              )}
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function TourInclusionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Tour Inclusions" image="/pkg-village.jpg" />

        {/* Breadcrumb */}
        <div style={{ background: "#FFFDF0", padding: "14px 24px", borderBottom: "1px solid #BACCDF40" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <nav aria-label="Breadcrumb">
              <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#0054A8" }}>
                <Link href="/" style={{ color: "#0054A8", textDecoration: "none" }}>Home</Link>
                {" "}&rsaquo;{" "}
                <Link href="/packages" style={{ color: "#0054A8", textDecoration: "none" }}>BND Packages</Link>
                {" "}&rsaquo;{" "}
                <span style={{ color: "#003366", fontWeight: 600 }}>Tour Inclusions</span>
              </span>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Top two-column row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
                marginBottom: 28,
              }}
              className="inclusions-grid"
            >
              {/* Package Inclusions */}
              <SectionBox title="Package Inclusions (Private Tour)" accent={false}>
                <BulletList items={privateInclusions} check />
              </SectionBox>

              {/* Terms & Conditions */}
              <SectionBox title="Terms &amp; Conditions" accent={false}>
                <BulletList items={termsAndConditions} check />

                <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid #BACCDF40" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#003366",
                      margin: "0 0 12px",
                      textTransform: "uppercase",
                    }}
                  >
                    Not Included
                  </h3>
                  <BulletList items={exclusions} />
                </div>
              </SectionBox>
            </div>

            {/* Payment Options */}
            <SectionBox title="Payment Options" accent>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 28,
                }}
              >
                {paymentOptions.map((opt, i) => (
                  <div key={i}>
                    <h3
                      style={{
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#003366",
                        textTransform: "uppercase",
                        margin: "0 0 10px",
                        letterSpacing: 0.5,
                      }}
                    >
                      {opt.label}
                    </h3>
                    <ul style={{ margin: 0, padding: "0 0 0 16px", listStyle: "disc" }}>
                      {opt.details.map((d, j) => (
                        <li
                          key={j}
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 13,
                            color: "#001219",
                            lineHeight: 1.7,
                          }}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionBox>

            {/* Important reminder */}
            <div
              style={{
                marginTop: 28,
                background: "#EEF3F8",
                border: "1px solid #BACCDF",
                borderRadius: 12,
                padding: "24px 32px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#003366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#003366",
                    margin: "0 0 6px",
                    textTransform: "uppercase",
                  }}
                >
                  Important Reminders
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-figtree), sans-serif",
                    fontSize: 14,
                    color: "#001219",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Batanes is a remote island destination. Flight schedules are subject to weather conditions and
                  airline policies. We highly recommend purchasing comprehensive travel insurance. All guests are
                  encouraged to bring sufficient cash as ATM availability is limited. Please contact us at{" "}
                  <a href="mailto:info@bndtravelandtours.com" style={{ color: "#0054A8" }}>
                    info@bndtravelandtours.com
                  </a>{" "}
                  for any queries.
                </p>
              </div>
            </div>

            {/* CTA links */}
            <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link
                href="/tour-itineraries"
                style={{
                  display: "inline-block",
                  background: "#003366",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textDecoration: "none",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                VIEW ITINERARIES
              </Link>
              <Link
                href="/#contact"
                style={{
                  display: "inline-block",
                  background: "#FF9900",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textDecoration: "none",
                  fontFamily: "var(--font-figtree), sans-serif",
                }}
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 700px) {
          .inclusions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
