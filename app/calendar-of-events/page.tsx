"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Footer,
  WhatsApp,
  PageHero,
} from "@/app/components/shared";

interface FestivalEvent {
  event: string;
  date: string;
  type: string;
  venue: string;
  desc: string;
  highlight?: string;
}

// 12 Months Calendar of Events in the Philippines (sourced from authentic Philippine festival calendars & DOT)
const eventsData: Record<string, FestivalEvent[]> = {
  JANUARY: [
    {
      event: "Sinulog Festival",
      date: "3rd Sunday of January",
      type: "Religious / Cultural",
      venue: "Cebu City, Cebu",
      desc: "One of the grandest and most attended festivals in the Philippines honoring the Santo Niño. Famous for vibrant street parades, drumbeats, and the rhythmic two-steps-forward-one-step-backward dance mimicking the water current (sulog).",
      highlight: "Grand Street Parade, Fluvial Procession along the Mactan Channel",
    },
    {
      event: "Ati-Atihan Festival",
      date: "3rd Sunday of January",
      type: "Indigenous / Religious",
      venue: "Kalibo, Aklan",
      desc: "Hailed as the 'Mother of All Philippine Festivals.' Celebrants paint their faces and bodies in black soot, donning elaborate feathered indigenous costumes while dancing to lively tribal drum cadences chanting 'Hala Bira! Viva Santo Niño!'.",
      highlight: "Sadsad (street dancing) where spectators and locals dance together",
    },
    {
      event: "Dinagyang Festival",
      date: "4th Sunday of January",
      type: "Cultural / Religious",
      venue: "Iloilo City, Iloilo",
      desc: "Renowned for its world-class choreography, energetic warriors painted in dark tones, and thunderous drumbeats celebrating the conversion of early settlers and devotion to the Santo Niño.",
      highlight: "Ati Tribe Competition and Kasadyahan Regional Cultural Festival",
    },
    {
      event: "Feast of the Black Nazarene (Traslacion)",
      date: "January 9",
      type: "Religious",
      venue: "Quiapo, Manila",
      desc: "Millions of barefoot devotees clad in maroon and yellow join the massive procession moving the miraculous centuries-old image of the Black Nazarene from Quirino Grandstand back to Quiapo Church.",
      highlight: "Solemn yet impassioned day-long sacred procession through historic Manila",
    },
    {
      event: "Sto. Niño Festival / Kapangianan du Sto. Niño",
      date: "January 1 & 6",
      type: "Traditional Ivatan / Religious",
      venue: "Mahatao, Ivana, & Uyugan, Batanes",
      desc: "Led by church lay leaders, the sacred Santo Niño image is paraded to Ivatan ancestral stone houses accompanied by the church choir, followed by the traditional 'KUMEDIA' theatrical folk performance.",
      highlight: "Ivatan community fellowship and ancestral village blessings",
    },
  ],
  FEBRUARY: [
    {
      event: "Panagbenga Festival (Baguio Flower Festival)",
      date: "Month-long (Grand parades late February)",
      type: "Floral / Cultural",
      venue: "Baguio City, Benguet",
      desc: "A month-long tribute to the blooming flowers and resilient spirit of the Cordilleras. The festival features mammoth floral floats completely blanketed in natural mountain blossoms and energetic street dancers in flower-inspired attire.",
      highlight: "Grand Floral Float Parade along Session Road & Burnham Park",
    },
    {
      event: "Batanes Day (Provincial Foundation Anniversary)",
      date: "February 28",
      type: "Historical / Cultural",
      venue: "Basco & all Batanes Municipalities",
      desc: "Commemorates the founding of Batanes province with provincial sports fests, cultural concerts, traditional Ivatan folk songs (Laji), and artisan agri-tourism exhibits.",
      highlight: "Ivatan culinary exhibits and native artisan showcases in Basco",
    },
    {
      event: "Pamulinawen Festival",
      date: "February 10",
      type: "Heritage / Folk",
      venue: "Laoag City, Ilocos Norte",
      desc: "A celebration of Laoag's patron saint, St. William the Hermit, highlighting Ilocano hospitality, traditional courtship dances, horse parades, and heritage cuisine.",
      highlight: "Dulang Food Festival and Street Pageantry along Rizal Street",
    },
    {
      event: "Tawo-Tawo Festival",
      date: "February 17",
      type: "Agricultural / Cultural",
      venue: "Bayawan City, Negros Oriental",
      desc: "Celebrates the giant scarecrows ('tawo-tawo') that guard the city's fertile rice granaries against pest birds, depicted through massive scarecrow street puppets and lively choreography.",
      highlight: "Giant scarecrow parade and harvest thanksgiving dances",
    },
  ],
  MARCH: [
    {
      event: "Kaamulan Festival",
      date: "Throughout March",
      type: "Indigenous / Tribal",
      venue: "Malaybalay City, Bukidnon",
      desc: "The only authentic ethnic festival in the Philippines gathering the seven indigenous tribes of Bukidnon (Bukidnon, Higaonon, Talaandig, Manobo, Matigsalug, Tigwahanon, and Umayamnon). Features sacred ritual enactments, traditional games, and timeless epic chants.",
      highlight: "Authentic indigenous tribal street dancing and traditional peace pact rituals",
    },
    {
      event: "Arya Abra Festival",
      date: "March 5 – 10",
      type: "Eco-Sports / Cultural",
      venue: "Bangued, Abra",
      desc: "Commemorates the creation of Abra province while honoring the indigenous Tingguian cultural heritage. Signature events include the thrilling Karambola (bamboo raft races along the mighty Abra River).",
      highlight: "Abra River bamboo raft races and traditional Tingguian woven fashion",
    },
    {
      event: "Alimango Festival",
      date: "March 22",
      type: "Gastronomic / Harvest",
      venue: "Lala, Lanao del Norte",
      desc: "Thanksgiving for the municipality's flourishing mud crab industry, featuring giant crab displays, crab cooking contests, and festive dance presentations mimicking crab movements.",
      highlight: "Grand crab culinary cook-off and giant mud crab display",
    },
    {
      event: "Guling-Guling Festival",
      date: "Eve of Ash Wednesday (Variable March)",
      type: "Folk Religious / Traditional",
      venue: "Paoay, Ilocos Norte",
      desc: "A centuries-old pre-Lenten tradition initiated by Spanish friars where villagers dance the traditional 'Dud-duma' in woven Abel Iloko clothing and have white rice flour crosses marked on their foreheads.",
      highlight: "Traditional street dancing in front of UNESCO World Heritage Paoay Church",
    },
  ],
  APRIL: [
    {
      event: "Moriones Festival",
      date: "Holy Week (Lenten Season)",
      type: "Religious / Theatrical",
      venue: "Boac, Gasan, & Mogpog, Marinduque",
      desc: "Penitents wear hand-carved wooden masks depicting ferocious Roman centurions and painted wooden armor, reenacting the story of Longinus, the blind centurion who pierced the side of Jesus and was healed.",
      highlight: "The Pugutan (beheading reenactment) of Saint Longinus on Easter Sunday",
    },
    {
      event: "Bangus Festival",
      date: "Mid to late April",
      type: "Culinary / Coastal",
      venue: "Dagupan City, Pangasinan",
      desc: "A world-famous culinary celebration of Dagupan's delicious milkfish (bangus). Features the 'Kalye Kris-Kros' where thousands of barbecue grills stretch along city avenues roasting tons of fresh bangus.",
      highlight: "Guinness-recognized street-long bangus grilling and 101 bangus recipe cook-offs",
    },
    {
      event: "Aliwan Fiesta",
      date: "Late April / Early May",
      type: "National Championship",
      venue: "CCP Complex, Pasay City, Metro Manila",
      desc: "Known as the 'Grand Battle of the Champions,' bringing the top winning cultural festival contingents from all regions of Luzon, Visayas, and Mindanao together for a grand parade and competition.",
      highlight: "Nationwide showdown of premier festival dancers and grand illuminated floats",
    },
    {
      event: "Boracay International Dragon Boat Festival",
      date: "Late April",
      type: "Eco-Sports / Tourism",
      venue: "White Beach, Boracay Island, Aklan",
      desc: "International and local dragon boat teams race along Boracay's sparkling turquoise waters with synchronous rowing set to the beat of drums, followed by island beach parties.",
      highlight: "High-octane sprint races right off Boracay's world-famous powdery white sands",
    },
  ],
  MAY: [
    {
      event: "Pahiyas Festival",
      date: "May 15",
      type: "Agricultural / Religious",
      venue: "Lucban, Quezon",
      desc: "A breathtaking thanksgiving feast in honor of San Isidro Labrador, patron saint of farmers. Local houses are completely adorned with kaleidoscopic rice wafers (kiping) shaped into chandeliers, fruits, vegetables, and grain handicrafts.",
      highlight: "Walking tour of colorfully decorated houses and tasting authentic Pancit Habhab",
    },
    {
      event: "Flores de Mayo & Grand Santacruzan",
      date: "Month-long (Culminates last weekend of May)",
      type: "Religious / Pageantry",
      venue: "Nationwide (Notable in Bulacan, Manila, & Cebu)",
      desc: "A cherished Catholic tradition of floral offerings to the Blessed Virgin Mary, concluding with the glamorous Santacruzan evening procession commemorating Queen Helena and Emperor Constantine's quest for the Holy Cross.",
      highlight: "Stunning evening candlelight processions featuring community muses in designer ternos",
    },
    {
      event: "Pulilan Carabao Kneeling Festival",
      date: "May 14 – 15",
      type: "Folk Agricultural",
      venue: "Pulilan, Bulacan",
      desc: "Hundreds of farmers shave, oil, and garland their hard-working water buffaloes (carabaos), marching them to the front of the church where the animals are trained to genuflect and kneel in thanksgiving.",
      highlight: "Carabaos kneeling gracefully before San Isidro Labrador Parish Church",
    },
    {
      event: "Manggahan Festival",
      date: "May 11 – 22",
      type: "Gastronomic / Harvest",
      venue: "Jordan, Guimaras",
      desc: "Celebrates Guimaras province's world-renowned sweetest mangoes with the popular 'Eat-All-You-Can Mango' challenge, agri-trade expos, and dynamic street dance competitions.",
      highlight: "Uncapped fresh sweet mango tasting booths and cultural street performances",
    },
  ],
  JUNE: [
    {
      event: "Payuhwan Festival (Batanes Day)",
      date: "June 21 – 26",
      type: "Ivatan Cultural / Heritage",
      venue: "Basco, Batanes",
      desc: "The quintessential celebration of Ivatan heritage centered around 'Payuhwan'—the historic Ivatan communal spirit of mutual cooperation and solidarity. Highlights stone masonry traditions, traditional fishing rituals (Mataw), and indigenous music.",
      highlight: "Traditional Ivatan sports, culinary cook-offs with Uvud balls, and coastal chants",
    },
    {
      event: "Pintados-Kasadyaan Festival",
      date: "June 27 – 29",
      type: "Historical / Religious",
      venue: "Tacloban City, Leyte",
      desc: "Commemorates the pre-Hispanic warrior culture of the tattooed Visayan natives ('Pintados') combined with religious veneration of Señor Santo Niño de Tacloban through body-painted dancers and rhythmic drumming.",
      highlight: "Dancers adorned in full-body tattoo patterns depicting ancient warrior epics",
    },
    {
      event: "Parada ng Lechon",
      date: "June 24",
      type: "Culinary / Folk Fiesta",
      venue: "Balayan, Batangas",
      desc: "On the feast day of St. John the Baptist, dozens of golden roasted pigs (lechon) are dressed in comical costumes (firefighters, motorcyclists, beauty queens) and paraded around town before being shared with visitors amid friendly water splashes.",
      highlight: "Creative costumed lechon parade and town-wide water dousing festivities",
    },
    {
      event: "Baragatan sa Palawan",
      date: "Mid to late June",
      type: "Cultural / Biodiversity",
      venue: "Puerto Princesa City, Palawan",
      desc: "Derived from Cuyonon word 'bagat' (to meet), bringing together the diverse municipalities of Palawan to showcase indigenous crafts, eco-tourism initiatives, and tribal performances.",
      highlight: "Trade fairs featuring Palawan pearls, cashew delicacies, and ethnic dances",
    },
  ],
  JULY: [
    {
      event: "Sandugo Festival",
      date: "Month-long (Grand Parade mid-July)",
      type: "Historical / Cultural",
      venue: "Tagbilaran City, Bohol",
      desc: "Commemorates the historic 1565 Blood Compact between Boholano chieftain Datu Sikatuna and Spanish explorer Miguel López de Legazpi as a treaty of friendship. Features grand street parades, drum corps, and cultural revues.",
      highlight: "Reenactment of the Blood Compact and street dancing along Bohol's coastline",
    },
    {
      event: "T'nalak Festival",
      date: "July 11 – 18",
      type: "Indigenous / Heritage",
      venue: "Koronadal City, South Cotabato",
      desc: "Celebrates the sacred handwoven abaca cloth crafted by T'boli dreamweavers. The festival unites Christians, Muslims, and Lumad peoples in vibrant peace celebrations showcasing Mindanao's intricate artistic traditions.",
      highlight: "Showcase of authentic T'nalak master weaves and Tri-People cultural pageant",
    },
    {
      event: "Pagoda Festival (Feast of the Holy Cross of Wawa)",
      date: "First Sunday of July",
      type: "Religious / Fluvial",
      venue: "Bocaue, Bulacan",
      desc: "A massive, multi-tiered floating shrine (pagoda) decorated with festive banners cruises along the Bocaue River, carrying devotees and relics of the Holy Cross in prayer and hymns.",
      highlight: "Magnificent floating river pagoda accompanied by hundreds of decorated banca escorts",
    },
    {
      event: "Cordillera Day Celebration",
      date: "July 15",
      type: "Regional / Cultural",
      venue: "Baguio City & Mountain Province",
      desc: "Commemorates the creation of the Cordillera Administrative Region with traditional gong-playing ('gangsa'), ethnic fashion shows, and indigenous assemblies.",
      highlight: "Gangsa ensemble performances and Cordilleran indigenous craft fairs",
    },
  ],
  AUGUST: [
    {
      event: "Kadayawan Festival",
      date: "3rd Week of August",
      type: "Thanksgiving / Indigenous",
      venue: "Davao City, Davao del Sur",
      desc: "Davao's largest thanksgiving festival celebrating life, nature's gifts, and bountiful harvest. Features the 11 recognized ethnolinguistic tribes of Davao displaying authentic tribal dwellings, martial rituals, and colorful fruit floats laden with Durian and Mangosteen.",
      highlight: "Indak-Indak sa Kadalanan (street dancing) and Pamulak sa Kadayawan (floral floats)",
    },
    {
      event: "Higalaay Festival (Kagay-an Festival)",
      date: "August 28",
      type: "Cultural / Friendship",
      venue: "Cagayan de Oro City, Misamis Oriental",
      desc: "The City of Golden Friendship honors patron Saint Augustine with festive carnival parades, river flotillas, and the Kumbira culinary competition—Mindanao's premier culinary expo.",
      highlight: "Kagay-an River flotilla parade and Kumbira culinary showcase",
    },
    {
      event: "Pav-vurulun Afi Festival",
      date: "August 10 – 17",
      type: "Folk / Sports",
      venue: "Tuguegarao City, Cagayan",
      desc: "Derived from the Ibanag word for 'gathering' and 'fire' (afi). Commemorates the patronal feast of San Jacinto with horse racing, street parades, and Pancit Batil Patong cook-offs.",
      highlight: "Cagayan horse races and town-wide Pancit Batil Patong food competitions",
    },
    {
      event: "Buyogan Festival",
      date: "August 29",
      type: "Ecological / Dance",
      venue: "Abuyog, Leyte",
      desc: "Depicts the mystical origins of the town named after 'buyog' (bees). Dancers wear vivid honeybee costumes mimicking bee flights with energetic tribal steps and musical accompaniments.",
      highlight: "Vibrant honeybee costume choreographies and hive-themed floats",
    },
  ],
  SEPTEMBER: [
    {
      event: "Peñafrancia Festival",
      date: "3rd Saturday & Sunday of September",
      type: "Religious / Marian",
      venue: "Naga City, Camarines Sur",
      desc: "The largest Marian celebration in Asia. Millions of devotees ('voyadores') gather to escort the revered image of 'Ina' (Our Lady of Peñafrancia) in a majestic evening fluvial procession along the Bicol River.",
      highlight: "Emotional Fluvial Procession with thousands of floating candles and chants of 'Viva la Virgen!'",
    },
    {
      event: "Bonok-Bonok Maradjaw Karadjaw Festival",
      date: "September 9",
      type: "Indigenous / Thanksgiving",
      venue: "Surigao City, Surigao del Norte",
      desc: "A cultural thanksgiving ritual of the indigenous Mamanwa tribe honoring San Nicolas de Tolentino. Dancers perform energetic stomping steps accompanied by fast brass gongs and indigenous drums.",
      highlight: "Authentic Mamanwa tribal rhythm competitions and street dancing",
    },
    {
      event: "Diyandi Festival",
      date: "September 29",
      type: "Tri-People / Cultural",
      venue: "Iligan City, Lanao del Norte",
      desc: "Honors Saint Michael the Archangel while showcasing harmony among Christians, Muslims, and Higaonon Lumads. Key highlight is the 'Sayaw Eskrima' simulating the triumph of Saint Michael.",
      highlight: "Sayaw Eskrima ceremonial warrior dance and traditional street pageants",
    },
    {
      event: "World Tourism Month Observance",
      date: "Month-long in September",
      type: "Eco-Tourism / Nationwide",
      venue: "Batanes, Palawan, Siargao & Nationwide",
      desc: "Special discounted domestic tour promos, heritage conservation workshops, community trail cleanups, and eco-travel seminars spearheaded by the Department of Tourism.",
      highlight: "Special travel expo discounts and coastal eco-preservation tours",
    },
  ],
  OCTOBER: [
    {
      event: "MassKara Festival",
      date: "4th Sunday of October",
      type: "Cultural / Carnival",
      venue: "Bacolod City, Negros Occidental",
      desc: "Born during an economic crisis in the 1980s, the 'Festival of Smiles' features dancers wearing smiling masks richly adorned with bright paint, sequins, feathers, and beads, proving the resilient optimism of the Negrense spirit.",
      highlight: "Electric MassKara illuminated night parade and street dance competition along Lacson Street",
    },
    {
      event: "Lanzones Festival",
      date: "3rd Week of October",
      type: "Harvest / Agricultural",
      venue: "Mambajao, Camiguin Island",
      desc: "A four-day vibrant thanksgiving celebration for Camiguin's sweetest lanzones harvest. Homes, street lamps, and carts are draped in golden lanzones fruit, while dancers reenact local folklore.",
      highlight: "Sweet lanzones tasting, fruit-bedecked floats, and volcanic island dance parades",
    },
    {
      event: "Zamboanga Hermosa Festival (Fiesta Pilar)",
      date: "October 1 – 12",
      type: "Heritage / Coastal",
      venue: "Zamboanga City",
      desc: "One of the oldest festivals in Mindanao honoring Nuestra Señora del Pilar. Its most iconic event is the Regatta de Zamboanga, where hundreds of traditional outrigger boats ('vintas') hoist their rainbow sails across the bay.",
      highlight: "Regatta de Zamboanga with hundreds of colorful vinta sails along RT Lim Boulevard",
    },
    {
      event: "Inug-og Festival",
      date: "October 14",
      type: "Indigenous Heritage",
      venue: "Oroquieta City, Misamis Occidental",
      desc: "Celebrates the rich cultural heritage and peace traditions of the Subanen indigenous people with ethnic music, woven crafts, and ritual dances.",
      highlight: "Subanen ethnic dances and traditional bamboo percussion performances",
    },
  ],
  NOVEMBER: [
    {
      event: "Higantes Festival",
      date: "November 22 – 23",
      type: "Folk Arts / Cultural",
      venue: "Angono, Rizal",
      desc: "Celebrated in the Art Capital of the Philippines in honor of Saint Clement. Dancers parade towering 12-to-15 foot papier-mâché giants ('higantes') dressed in vibrant clothes, depicting local characters, humor, and folk heritage.",
      highlight: "Parade of dozens of colorful giant papier-mâché puppets along Angono's art streets",
    },
    {
      event: "Pintaflores Festival",
      date: "November 3 – 5",
      type: "Folk / Floral Dance",
      venue: "San Carlos City, Negros Occidental",
      desc: "Combines two concepts: 'Pinta' (tattoo tradition) and 'Flores' (flowers). Dancers paint intricate floral patterns on their faces and bodies, performing fast-paced synchronized choreography.",
      highlight: "Mesmerizing floral body painting and theatrical street performances",
    },
    {
      event: "All Saints' & All Souls' Day Traditions (Undas)",
      date: "November 1 – 2",
      type: "Solemn / Family Heritage",
      venue: "Batanes, Ilocos & Nationwide",
      desc: "Filipino families gather in cemeteries for joyful reunions, prayer vigils, and candlelight offerings honoring ancestors. In Batanes, Ivatans prepare traditional home-cooked offerings and clean ancestral stone cemetery tombs.",
      highlight: "Evening candlelight vigils and tight-knit family gatherings across ancestral towns",
    },
    {
      event: "Bontoc Foundation Day & Guinzadan Festival",
      date: "Late November",
      type: "Mountain Heritage",
      venue: "Bontoc & Bauko, Mountain Province",
      desc: "Celebrates Cordilleran indigenous wisdom, traditional textile weaving, rice terrace farming rituals, and ancient warrior dances.",
      highlight: "Authentic Cordilleran nose flute music and woven textile displays",
    },
  ],
  DECEMBER: [
    {
      event: "Giant Lantern Festival (Ligligan Parul)",
      date: "Mid-December through January",
      type: "Folk Arts / Light Spectacular",
      venue: "San Fernando, Pampanga",
      desc: "Known as the 'Christmas Capital of the Philippines.' Barangays construct colossal 20-foot lanterns equipped with up to 10,000 kaleidoscopic light bulbs mechanically synchronised to holiday brass band music.",
      highlight: "Spectacular nocturnal light-and-sound exhibition of 20-foot handcrafted giant lanterns",
    },
    {
      event: "Shariff Kabunsuan Festival",
      date: "December 15 – 19",
      type: "Islamic / Historical",
      venue: "Cotabato City, Bangsamoro (BARMM)",
      desc: "Commemorates the arrival of 16th-century Arab missionary Shariff Kabunsuan who introduced Islamic faith to Mindanao. Highlights include the Guinakit fluvial parade with lavishly decorated outrigger boats cruising along the Rio Grande de Mindanao.",
      highlight: "Guinakit Fluvial Parade of traditional colorful royal Bangsamoro vessels",
    },
    {
      event: "Tangub Christmas Symbols Festival",
      date: "Month-long in December",
      type: "Illuminated Holiday",
      venue: "Tangub City, Misamis Occidental",
      desc: "Tangub transforms into a magical wonderland, featuring illuminated giant replicas of famous world architectural landmarks made from recycled materials and hundreds of thousands of fairy lights.",
      highlight: "Walkthrough illumination park of international monuments and Christmas displays",
    },
    {
      event: "Paskong Pinoy & Simbang Gabi",
      date: "December 16 – 25",
      type: "Traditional / Holiday",
      venue: "Nationwide (Including Ivana & Mahatao, Batanes)",
      desc: "The nine-day dawn mass tradition leading up to Christmas Day. Streets and church courtyards come alive before sunrise with aromas of warm puto bumbong and bibingka, glowing star lanterns (parol), and village caroling.",
      highlight: "Dawn mass traditions, freshly cooked bibingka, and Ivatan Christmas feasts",
    },
  ],
};

const monthKeys = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

export default function CalendarPage() {
  const [activeMonth, setActiveMonth] = useState("JANUARY");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");

  const currentEvents = eventsData[activeMonth] || [];

  // Filtered events based on search and type filter
  const filteredEvents = currentEvents.filter((evt) => {
    const matchesSearch =
      evt.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "ALL" ||
      evt.type.toLowerCase().includes(selectedType.toLowerCase());
    return matchesSearch && matchesType;
  });

  return (
    <>
      <Navbar />
      <main>
        <PageHero title="Calendar of Events" image="/pkg-village.jpg" />

        <section style={{ background: "#FFFDF0", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            
            {/* Introductory Header Banner */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                padding: "32px 36px",
                border: "1px solid #e1d8cd",
                marginBottom: 32,
                boxShadow: "0 4px 20px rgba(0, 51, 102, 0.05)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#FF9900",
                    }}
                  >
                    Philippine Tourism &amp; Cultural Guide
                  </span>
                  <h1
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 28,
                      fontWeight: 900,
                      color: "#003366",
                      margin: "6px 0 10px",
                    }}
                  >
                    12 Months of Festivals &amp; Cultural Events
                  </h1>
                  <p
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 14,
                      color: "#4A5568",
                      lineHeight: 1.6,
                      maxWidth: 720,
                      margin: 0,
                    }}
                  >
                    Experience the Philippines at its most vibrant. From world-renowned street pageants like Sinulog and MassKara to Batanes’ historic Ivatan Payuhwan celebrations, plan your tour around our country&apos;s rich cultural calendar.
                  </p>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Link
                    href="/dos-and-donts"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#003366",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "12px 20px",
                      borderRadius: 8,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#002244")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#003366")}
                  >
                    <span>Read Travel Do&apos;s &amp; Don&apos;ts</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Search & Category Filter Bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 28,
              }}
            >
              <div style={{ display: "flex", flex: 1, minWidth: 280, maxWidth: 450, position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search events, city, or venue..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 42px",
                    borderRadius: 8,
                    border: "1px solid #D1D5DB",
                    fontSize: 14,
                    fontFamily: "var(--font-figtree), sans-serif",
                    background: "#FFFFFF",
                    color: "#001219",
                    outline: "none",
                  }}
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              {/* Type Filter Buttons */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { id: "ALL", label: "All Types" },
                  { id: "Cultural", label: "Cultural" },
                  { id: "Religious", label: "Religious" },
                  { id: "Indigenous", label: "Indigenous / Heritage" },
                  { id: "Gastronomic", label: "Culinary / Harvest" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 6,
                      border: "none",
                      fontSize: 12.5,
                      fontWeight: 700,
                      fontFamily: "var(--font-figtree), sans-serif",
                      cursor: "pointer",
                      background: selectedType === t.id ? "#003366" : "#E2E8F0",
                      color: selectedType === t.id ? "#FFFFFF" : "#334155",
                      transition: "all 0.2s",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout: Month Navigation Sidebar + Events Listing */}
            <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "32px" }} className="layout-grid">
              
              {/* Sidebar: 12 Months */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  height: "fit-content",
                }}
              >
                <div
                  style={{
                    background: "#003366",
                    color: "#FFFFFF",
                    padding: "16px 20px",
                    fontWeight: 800,
                    fontSize: 13,
                    fontFamily: "var(--font-figtree), sans-serif",
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                  }}
                >
                  Select Month
                </div>
                {monthKeys.map((m, idx) => {
                  const isActive = activeMonth === m;
                  const count = eventsData[m]?.length || 0;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveMonth(m)}
                      style={{
                        padding: "15px 20px",
                        background: isActive ? "#FF9900" : "#FFFFFF",
                        color: isActive ? "#FFFFFF" : "#003366",
                        fontWeight: isActive ? 800 : 700,
                        fontSize: "13.5px",
                        fontFamily: "var(--font-figtree), sans-serif",
                        borderBottom: idx === monthKeys.length - 1 ? "none" : "1px solid #EDF2F7",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{m}</span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 12,
                          background: isActive ? "rgba(0,0,0,0.15)" : "#EDF2F7",
                          color: isActive ? "#FFFFFF" : "#4A5568",
                        }}
                      >
                        {count} {count === 1 ? "event" : "events"}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Main Content Area */}
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "36px 40px",
                  borderRadius: 10,
                  border: "1px solid #e1d8cd",
                  minHeight: "550px",
                  boxShadow: "0 4px 20px rgba(0, 51, 102, 0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid #FF9900",
                    paddingBottom: 16,
                    marginBottom: 30,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#FF9900",
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                      }}
                    >
                      Monthly Highlights
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-figtree), sans-serif",
                        fontSize: 24,
                        fontWeight: 900,
                        color: "#003366",
                        margin: "4px 0 0",
                      }}
                    >
                      {activeMonth} IN THE PHILIPPINES
                    </h2>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#64748B",
                    }}
                  >
                    Showing {filteredEvents.length} of {currentEvents.length} events
                  </span>
                </div>

                {filteredEvents.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "60px 20px" }}>
                    <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 16, color: "#64748B", margin: "0 0 10px" }}>
                      No events match your search for <strong>{activeMonth}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedType("ALL");
                      }}
                      style={{
                        background: "#003366",
                        color: "#fff",
                        border: "none",
                        padding: "8px 18px",
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  filteredEvents.map((evt, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 32,
                        paddingBottom: 32,
                        borderBottom: index === filteredEvents.length - 1 ? "none" : "1px solid #E2E8F0",
                      }}
                    >
                      {/* Festival Title & Type Badge */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 12,
                          marginBottom: 16,
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-figtree), sans-serif",
                            fontSize: 20,
                            fontWeight: 800,
                            color: "#003366",
                            margin: 0,
                          }}
                        >
                          {evt.event}
                        </h3>
                        <span
                          style={{
                            display: "inline-block",
                            background: "#FFF4E5",
                            color: "#C25E00",
                            border: "1px solid #FCD399",
                            fontSize: 11.5,
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: 20,
                            fontFamily: "var(--font-figtree), sans-serif",
                          }}
                        >
                          {evt.type}
                        </span>
                      </div>

                      {/* Detail Grid */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "130px 1fr",
                          gap: "8px 16px",
                          fontFamily: "var(--font-figtree), sans-serif",
                          fontSize: "13.5px",
                          marginBottom: 16,
                          background: "#F8FAFC",
                          padding: "16px 20px",
                          borderRadius: 8,
                          border: "1px solid #EDF2F7",
                        }}
                      >
                        <div style={{ fontWeight: 800, color: "#003366" }}>DATE / TIMING:</div>
                        <div style={{ color: "#334155", fontWeight: 600 }}>{evt.date}</div>

                        <div style={{ fontWeight: 800, color: "#003366" }}>LOCATION / VENUE:</div>
                        <div style={{ color: "#334155", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{evt.venue}</span>
                        </div>

                        {evt.highlight && (
                          <>
                            <div style={{ fontWeight: 800, color: "#003366" }}>TOP HIGHLIGHT:</div>
                            <div style={{ color: "#003366", fontWeight: 700 }}>
                              {evt.highlight}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: "var(--font-figtree), sans-serif",
                          fontSize: 14,
                          color: "#334155",
                          lineHeight: 1.7,
                          margin: "0 0 16px",
                        }}
                      >
                        {evt.desc}
                      </p>
                    </div>
                  ))
                )}

                {/* Practical Traveler Tip Box */}
                <div
                  style={{
                    marginTop: 36,
                    padding: "20px 24px",
                    background: "#F0F7FF",
                    borderLeft: "4px solid #003366",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#003366",
                      margin: "0 0 6px",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>BND Travel Tip for Festival Travelers</span>
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 13,
                      color: "#334155",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Major festivals (such as Sinulog, Ati-Atihan, Panagbenga, and MassKara) attract huge influxes of domestic and international visitors. Accommodations and flight tickets generally sell out 2 to 4 months in advance. Coordinate with BND Travel &amp; Tours early to secure your seamless hotel reservations, private transfers, and experienced local guides.
                  </p>
                </div>
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
