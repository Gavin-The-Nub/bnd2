"use client";

import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  CTABanner,
  PageHero,
} from "@/app/components/shared";

export default function PaymentOptionPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Payment Option" image="/pkg-village.jpg" />

        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }} className="payment-grid">
            
            {/* Left Column */}
            <div>
              <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 20, fontWeight: 700, color: "#003366", marginBottom: 20 }}>
                Payment Details
              </h2>
              
              <ol style={{ margin: 0, paddingLeft: "20px", fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Accommodation and airline booking must be reserved first before our company accepts payment.</li>
                <li>Airline ticket is on a book and buy basis and must be paid in full to confirm the seat. The airline only gives maximum of 12-24 hours to purchase the reserved tickets but can be reinstated upon request.</li>
                <li>Upon receiving your sales invoice, you are required to make the down payment within 48 hours or before the indicated due date. Should you need more time to settle, please contact us so that we can extend the payment option.</li>
                <li>At least 20% of non-refundable deposit to secure the land arrangement and 80% balance to pay at least 2 weeks before arrival. Full payment for those reservations made less than 2 weeks prior to arrival. This is to ensure your hotel accommodation and land arrangement.</li>
                <li>You can deposit in any BDO branch. Online transfer is also acceptable.</li>
                <li>Please secure deposit slip and scan or take a photo of it then send to our email info@bndtravelandtours.com to validate your payment and confirm your booking.</li>
                <li>Kindly read the terms and conditions for your reference: Terms and Conditions</li>
              </ol>
            </div>

            {/* Right Column */}
            <div>
              <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 20, fontWeight: 700, color: "#003366", marginBottom: 20 }}>
                Bank Payment Details
              </h2>

              <div style={{ background: "#fff", border: "1px solid #BACCDF", borderRadius: "8px", padding: "30px" }}>
                <h3 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, fontWeight: 700, color: "#001219", marginBottom: 15 }}>
                  Banco De Oro (Any Branch)
                </h3>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6, marginBottom: 5 }}>
                  Account Name: BND Travel and Tours
                </p>
                <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.6, margin: 0 }}>
                  Account Number: 001520241737
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 768px) {
          .payment-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
