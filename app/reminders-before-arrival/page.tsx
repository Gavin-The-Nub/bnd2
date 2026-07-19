"use client";

import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  CTABanner,
  PageHero,
} from "@/app/components/shared";
import WeatherWidget from "@/app/components/WeatherWidget";

export default function RemindersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Reminders Before Arrival" image="/pkg-village.jpg" />

        <section style={{ background: "#FFFDF0", padding: "70px 24px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <WeatherWidget />

            <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "40px" }} className="layout-grid">
              
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px 20px", background: "#FF9900", color: "#fff", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-figtree), sans-serif", borderBottom: "2px solid #fff" }}>
                  REMINDERS
                </div>
                <div style={{ padding: "16px 20px", background: "#BACCDF", color: "#003366", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-figtree), sans-serif", borderBottom: "2px solid #fff" }}>
                  WHAT TO BRING
                </div>
                <div style={{ padding: "16px 20px", background: "#BACCDF", color: "#003366", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-figtree), sans-serif" }}>
                  OTHER INFORMATION
                </div>
              </div>

              {/* Main Content */}
              <div style={{ background: "#fff", padding: "40px", borderRadius: "8px", border: "1px solid #e1d8cd" }}>
                <h2 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 18, fontWeight: 800, color: "#003366", marginBottom: 20, textTransform: "uppercase" }}>
                  Reminders
                </h2>
                
                <ul style={{ margin: 0, paddingLeft: "20px", fontFamily: "var(--font-figtree), sans-serif", fontSize: 14, color: "#001219", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>It is very important to send us your flight itinerary for us to properly pick you up at the airport on your arrival and bring you back to the airport for your departure.</li>
                  <li>Please do not forget to bring your e-ticket from the airline.</li>
                  <li>Do not be late, please arrive 2 hrs before your flight to avoid inconvenience.</li>
                  <li>Please check in anything liquid in your baggage, never hand-carry them. Otherwise, this will be confiscated at the airport.</li>
                  <li>It is highly recommended to hand carry good for one day clothes. Airline may off load your luggage without your knowledge and they send it the following day. This happen during peak seasons, December to May.</li>
                  <li>Our assigned tour guide, driver and tour coordinator will be standing by at the airport to fetch you upon your arrival. They will be the one to assist you during the entire tour. Our tour coordinator will be the one to look over you with all your immediate needs or request while in Batanes. Our tour coordinator contact number is <strong>Ms. Dha Castillejos: Globe 09778063040 | Smart 09694468109</strong></li>
                  <li>Meals (breakfast, lunches, dinners) are provided by BND Travel and Tours along with your tours, this is for the complete hotel plus eco-tour package. While for Eco-Tours only you have your lunch during the tour.</li>
                  <li>The itinerary that came with this package will be followed during the entire tour.</li>
                  <li>All municipal fees and boat fees (for Sabtang island tour) are covered in the package.</li>
                  <li>Land transportation and boat transfers (this is for Sabtang island tour) will be provided by BND Travel & Tours.</li>
                  <li>At the end of your tour, our tour guide and driver will assist you back to the airport. Please make sure to give at least 2 hrs allowance before the scheduled flight back to Manila.</li>
                  <li>We have our feed back form. We would highly appreciate if you can fill it up for our services improvement in the future or any good experience you may share.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />

      <style>{`
        @media (max-width: 768px) {
          .layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
