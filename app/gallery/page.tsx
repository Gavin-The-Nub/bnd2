"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, SectionHeader, WhatsApp } from "../components/shared";
import { 
  MapPin, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Sparkles,
  ArrowRight
} from "lucide-react";

/* ─── Gallery Data ────────────────────────────────────────── */
interface GalleryItem {
  id: number;
  file: string;
  title: string;
  destination: "Baguio" | "Ilocos" | "La Union" | "Bicol" | "Bohol" | "Sagada & Cordillera";
  tagline?: string;
}

const galleryItems: GalleryItem[] = [
  // Baguio
  {
    id: 1,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 47.webp",
    title: "Burnham Park",
    destination: "Baguio",
    tagline: "Row boating & leisurely strolls through Baguio's iconic green heart"
  },
  {
    id: 2,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 48.webp",
    title: "Mines View Park",
    destination: "Baguio",
    tagline: "Panoramic vistas over Benguet's mining valleys and mountain ridges"
  },
  {
    id: 3,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 49.webp",
    title: "Igorot Stone Kingdom",
    destination: "Baguio",
    tagline: "A majestic modern fortress honoring rich Cordilleran folklore"
  },
  {
    id: 4,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 51.webp",
    title: "Mirador Hill & Eco Park",
    destination: "Baguio",
    tagline: "Peaceful torii gate sunrise & peaceful bamboo grove sanctuary"
  },
  {
    id: 5,
    file: "IMG_1290.webp",
    title: "Baguio Botanical Garden",
    destination: "Baguio",
    tagline: "Vibrant flora, pine trees, and cultural native pavilions"
  },
  {
    id: 6,
    file: "IMG_1292.webp",
    title: "Stobosa Colorful Houses",
    destination: "Baguio",
    tagline: "The famous hillside giant mural celebrating local artistry"
  },
  {
    id: 7,
    file: "IMG_1293.webp",
    title: "La Trinidad Strawberry Farm",
    destination: "Baguio",
    tagline: "Fresh strawberry picking amidst lush highland farm fields"
  },
  {
    id: 8,
    file: "IMG_1294.webp",
    title: "The Mansion & Wright Park",
    destination: "Baguio",
    tagline: "Stately presidential summer residence & pine-lined reflecting pool"
  },

  // Ilocos
  {
    id: 9,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 58.webp",
    title: "Paoay Sand Dunes",
    destination: "Ilocos",
    tagline: "Adrenaline-fueled 4x4 off-road rides and coastal sandboarding"
  },
  {
    id: 10,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 59.webp",
    title: "Bangui Windmills",
    destination: "Ilocos",
    tagline: "Towering white wind turbines sweeping along Bangui Bay"
  },
  {
    id: 11,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 60.webp",
    title: "Calle Crisologo, Vigan",
    destination: "Ilocos",
    tagline: "Cobblestone streets and heritage Spanish colonial mansions"
  },
  {
    id: 12,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 61.webp",
    title: "Cape Bojeador Lighthouse",
    destination: "Ilocos",
    tagline: "Historic clifftop beacon overlooking the wild West Philippine Sea"
  },
  {
    id: 13,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 62.webp",
    title: "Kapurpurawan Rock Formation",
    destination: "Ilocos",
    tagline: "Dazzling white limestone sculptures sculpted by oceanic waves"
  },
  {
    id: 14,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 63_1.webp",
    title: "Malacañang of the North",
    destination: "Ilocos",
    tagline: "Gracious historical mansion overlooking picturesque Paoay Lake"
  },
  {
    id: 15,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 64_1.webp",
    title: "Dancing Fountain, Vigan",
    destination: "Ilocos",
    tagline: "Enchanting nighttime laser, music, and water choreography"
  },
  {
    id: 16,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 65_2.webp",
    title: "Historic Paoay Church",
    destination: "Ilocos",
    tagline: "UNESCO World Heritage Baroque earthquake church with massive buttresses"
  },

  // La Union
  {
    id: 17,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 58_1.webp",
    title: "Urbiztondo Beach",
    destination: "La Union",
    tagline: "The Surfing Capital of the North with vibrant beach vibes and sunset chill"
  },
  {
    id: 18,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 59_1.webp",
    title: "San Juan Surfing Coast",
    destination: "La Union",
    tagline: "Catch the world-class swell and learn with local surf instructors"
  },
  {
    id: 19,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 60_1.webp",
    title: "Tangadan Falls",
    destination: "La Union",
    tagline: "Twin cascades plunging into emerald freshwater pools in San Gabriel"
  },
  {
    id: 20,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 61_1.webp",
    title: "San Fernando Cathedral",
    destination: "La Union",
    tagline: "Historic diocesan shrine standing proudly in the provincial capital"
  },
  {
    id: 21,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 62_1.webp",
    title: "Cabongaoan Beach",
    destination: "La Union",
    tagline: "Pristine shores and unique natural depth pool formations"
  },

  // Bicol
  {
    id: 22,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 63(1).webp",
    title: "Cagsawa Ruins",
    destination: "Bicol",
    tagline: "Historic belfry silhouette framing majestic Mount Mayon"
  },
  {
    id: 23,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 63(2).webp",
    title: "Mayon Skyline Viewdeck",
    destination: "Bicol",
    tagline: "Breathtaking high-altitude perspective of the world's most perfect cone"
  },
  {
    id: 24,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 63.webp",
    title: "Quitinday / Quituinan Ranch",
    destination: "Bicol",
    tagline: "Rolling grassy meadows and grazing horses beneath the volcano"
  },
  {
    id: 25,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 64(1).webp",
    title: "Sumlang Lake",
    destination: "Bicol",
    tagline: "Bamboo raft cruising on serene waters with iconic Mayon reflections"
  },
  {
    id: 26,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 64(2).webp",
    title: "Camalig Heritage Town",
    destination: "Bicol",
    tagline: "Authentic culinary heritage, spicy delicacies, and colonial churches"
  },
  {
    id: 27,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 64.webp",
    title: "Farm Plate Albay",
    destination: "Bicol",
    tagline: "Picturesque rustic barn, windmill, and countryside relaxation"
  },
  {
    id: 28,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 65.webp",
    title: "Nuestra Señora de Salvacion",
    destination: "Bicol",
    tagline: "Colossal hillside patroness statue overlooking Tiwi coast"
  },
  {
    id: 29,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 66.webp",
    title: "Legazpi City Boulevard",
    destination: "Bicol",
    tagline: "Breezy seaside promenade taking in Albay Gulf and Mayon Volcano"
  },
  {
    id: 30,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 67.webp",
    title: "Daraga Church & Mt. Mayon",
    destination: "Bicol",
    tagline: "18th-century baroque churrigueresque church perched on a scenic hill"
  },
  {
    id: 31,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post.webp",
    title: "Ligñon Hill Nature Park",
    destination: "Bicol",
    tagline: "360-degree viewing deck with ziplining and volcano observation views"
  },

  // Bohol
  {
    id: 32,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 65_1.webp",
    title: "Chocolate Hills",
    destination: "Bohol",
    tagline: "Over a thousand geological conical mounds turning chocolate brown"
  },
  {
    id: 33,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 66_1.webp",
    title: "Panglao Island White Beach",
    destination: "Bohol",
    tagline: "Powdery white coral sands, dolphin watching, and azure island reefs"
  },
  {
    id: 34,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 67_1.webp",
    title: "Loboc River Cruise",
    destination: "Bohol",
    tagline: "Floating buffet dining accompanied by traditional folk songs and dances"
  },
  {
    id: 35,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 68.webp",
    title: "Philippine Tarsier Sanctuary",
    destination: "Bohol",
    tagline: "Meet the world's smallest nocturnal primates in their native forest"
  },
  {
    id: 36,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 69.webp",
    title: "Baclayon Heritage Sites",
    destination: "Bohol",
    tagline: "Ancient coral stone church and historical museum treasures"
  },

  // Sagada & Cordillera
  {
    id: 37,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 70.webp",
    title: "Northern Blossom Flower Farm",
    destination: "Sagada & Cordillera",
    tagline: "Expansive terraced flower gardens blooming high above Atok clouds"
  },
  {
    id: 38,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 71.webp",
    title: "Highest Highway Point (Atok)",
    destination: "Sagada & Cordillera",
    tagline: "Highest point of the Philippine Highway System at 7,400 feet above sea level"
  },
  {
    id: 39,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 72.webp",
    title: "Banaue Rice Terraces Viewdeck",
    destination: "Sagada & Cordillera",
    tagline: "The 2,000-year-old hand-carved agricultural wonder of the world"
  },
  {
    id: 40,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 73.webp",
    title: "Marlboro Hills Sea of Clouds",
    destination: "Sagada & Cordillera",
    tagline: "Ethereal sunrise trek hovering over rolling blankets of morning mist"
  },
  {
    id: 41,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 74.webp",
    title: "Sagada Inverted House",
    destination: "Sagada & Cordillera",
    tagline: "Fun and whimsical upside-down attraction showcasing quirky local architecture"
  },
  {
    id: 42,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 75.webp",
    title: "Banaue Landmark Viewpoint",
    destination: "Sagada & Cordillera",
    tagline: "Historic commemorative marker overlooking sprawling emerald stairways"
  },
  {
    id: 43,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 76.webp",
    title: "Sagada Traditional Weaving",
    destination: "Sagada & Cordillera",
    tagline: "Intricate handwoven tribal textiles and authentic heirloom crafts"
  },
  {
    id: 44,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 77.webp",
    title: "Kiltepan Peak Sunrise",
    destination: "Sagada & Cordillera",
    tagline: "Celebrated golden sunrise vista emerging from the mountain cloud sea"
  },
  {
    id: 45,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 78.webp",
    title: "Sagada Hanging Coffins",
    destination: "Sagada & Cordillera",
    tagline: "Sacred ancestral burial tradition hanging high on Echo Valley limestone cliffs"
  },
  {
    id: 46,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 79.webp",
    title: "Blue Soil Hills",
    destination: "Sagada & Cordillera",
    tagline: "Striking blue-green mineral-rich clay formations hidden in pine forests"
  },
  {
    id: 47,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 80.webp",
    title: "Bomod-ok Big Falls",
    destination: "Sagada & Cordillera",
    tagline: "Thunderous 200-foot waterfall framed by ancient stone rice terrace walks"
  },
  {
    id: 48,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post - 81.webp",
    title: "Welcome to Banaue Arc",
    destination: "Sagada & Cordillera",
    tagline: "The monumental cultural gateway ushering travelers into Ifugao heritage"
  },
  {
    id: 49,
    file: "Blue Sky Aesthetic Adventure Quote Instagram Post_1.webp",
    title: "Apo Whang-Od (Buscalan)",
    destination: "Sagada & Cordillera",
    tagline: "The legendary centenarian master of traditional hand-tapped batok tattoos"
  }
];

const CATEGORIES = [
  "All",
  "Baguio",
  "Sagada & Cordillera",
  "Bicol",
  "Ilocos",
  "La Union",
  "Bohol",
] as const;

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "45vh",
        minHeight: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/gallery/IMG_1294.webp"
          alt="BND Travel & Tours Gallery"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(180deg, rgba(0,30,60,0.75) 0%, rgba(0,18,25,0.85) 100%)" 
          }} 
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 800 }}>
        <div 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#FFD166",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            marginBottom: 16,
          }}
        >
          <Sparkles size={14} /> Official Tour Moments
        </div>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(34px, 5vw, 52px)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 1,
            margin: "0 0 12px",
            lineHeight: 1.15,
          }}
        >
          Tour Gallery
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Explore authentic moments and iconic sights across our featured travel destinations in the Philippines.
        </p>
      </div>
    </section>
  );
}

/* ─── Gallery Section ─────────────────────────────────────── */
function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.destination === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        (item.tagline && item.tagline.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          return prev > 0 ? prev - 1 : filteredItems.length - 1;
        });
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          return prev < filteredItems.length - 1 ? prev + 1 : 0;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section style={{ padding: "70px 24px", maxWidth: 1280, margin: "0 auto" }}>
      {/* Intro Header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <SectionHeader label="DISCOVER THE PHILIPPINES THROUGH OUR LENS" title="" />
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "#4A5568",
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          From the misty peaks of Baguio and Sagada, the historic streets and shores of Ilocos and La Union,
          to the breathtaking landscapes of Bicol and Bohol — browse through our real tour highlights.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 36,
          alignItems: "center",
        }}
      >
        {/* Category Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
          }}
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? galleryItems.length
                : galleryItems.filter((it) => it.destination === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: isActive ? "1px solid #003366" : "1px solid #E2E8F0",
                  backgroundColor: isActive ? "#003366" : "#fff",
                  color: isActive ? "#fff" : "#4A5568",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s ease",
                  boxShadow: isActive
                    ? "0 4px 12px rgba(0, 51, 102, 0.2)"
                    : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "2px 7px",
                    borderRadius: 12,
                    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "#EDF2F7",
                    color: isActive ? "#fff" : "#718096",
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search Input */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 420,
          }}
        >
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#A0AEC0",
            }}
          />
          <input
            type="text"
            placeholder="Search attractions (e.g. Burnham, Mayon, Falls, Beach)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setLightboxIndex(null);
            }}
            style={{
              width: "100%",
              padding: "10px 16px 10px 42px",
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 14,
              color: "#1A202C",
              backgroundColor: "#F7FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 24,
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#003366")}
            onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                color: "#A0AEC0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 24px",
            backgroundColor: "#F8FAFC",
            borderRadius: 16,
            border: "1px dashed #CBD5E1",
          }}
        >
          <p style={{ fontSize: 16, color: "#64748B", margin: "0 0 12px" }}>
            No gallery photos found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              backgroundColor: "#003366",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Show All Photos
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%", // 1:1 Aspect Ratio
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#001219",
                boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 51, 102, 0.16)";
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1.06)";
                const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
                const imgEl = e.currentTarget.querySelector("img");
                if (imgEl) imgEl.style.transform = "scale(1)";
                const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0.9";
              }}
            >
              <Image
                src={`/gallery/${item.file}`}
                alt={`${item.title} - ${item.destination}`}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
              />

              {/* Destination Pill Badge on top-right */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  borderRadius: 20,
                  backgroundColor: "rgba(0, 24, 48, 0.8)",
                  backdropFilter: "blur(6px)",
                  color: "#FFD166",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                <MapPin size={11} /> {item.destination}
              </div>

              {/* Bottom Gradient Overlay & Title Info */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,18,25,0.85) 85%, rgba(0,18,25,0.95) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px 18px",
                  zIndex: 1,
                  opacity: 0.9,
                  transition: "opacity 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      flexShrink: 0,
                      marginLeft: 8,
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── Lightbox Modal ─────────────────────────────────── */}
      {currentItem && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "rgba(0, 14, 25, 0.92)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Top Bar: Counter & Close */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 20,
              left: 24,
              right: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.85)",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  padding: "4px 10px",
                  borderRadius: 20,
                }}
              >
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span style={{ color: "#FFD166" }}>{currentItem.destination}</span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
              title="Close (Esc)"
            >
              <X size={22} />
            </button>
          </div>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex > 0 ? lightboxIndex - 1 : filteredItems.length - 1
              );
            }}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < filteredItems.length - 1 ? lightboxIndex + 1 : 0
              );
            }}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            title="Next (Right Arrow)"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Center Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 720,
              width: "100%",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                width: "min(80vw, 560px)",
                height: "min(80vw, 560px)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                backgroundColor: "#000",
              }}
            >
              <Image
                src={`/gallery/${currentItem.file}`}
                alt={`${currentItem.title} - ${currentItem.destination}`}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Caption & Actions */}
            <div
              style={{
                textAlign: "center",
                maxWidth: 580,
                color: "#fff",
                fontFamily: "var(--font-figtree), sans-serif",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FFD166",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                <MapPin size={13} /> {currentItem.destination}
              </div>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  fontWeight: 800,
                  margin: "0 0 6px",
                  letterSpacing: -0.2,
                }}
              >
                {currentItem.title}
              </h2>
              {currentItem.tagline && (
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.75)",
                    margin: "0 0 16px",
                    lineHeight: 1.5,
                  }}
                >
                  {currentItem.tagline}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={
                    currentItem.destination === "Baguio"
                      ? "/packages/local/baguio"
                      : currentItem.destination === "Bicol"
                      ? "/packages/local/bicol"
                      : currentItem.destination === "Ilocos"
                      ? "/packages/local/ilocos"
                      : currentItem.destination === "La Union"
                      ? "/packages/local/la-union"
                      : currentItem.destination === "Sagada & Cordillera"
                      ? "/packages/local/sagada"
                      : "/packages"
                  }
                >
                  <button
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 20px",
                      borderRadius: 8,
                      backgroundColor: "#FFD166",
                      color: "#002B49",
                      fontWeight: 700,
                      fontSize: 14,
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    View Tour Packages <ArrowRight size={15} />
                  </button>
                </Link>

                <Link href="/request-a-quote">
                  <button
                    style={{
                      padding: "8px 20px",
                      borderRadius: 8,
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: 14,
                      border: "1px solid rgba(255,255,255,0.4)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.borderColor = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                    }}
                  >
                    Inquire This Trip
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Bottom Banner ───────────────────────────────────────── */
function BottomBanner() {
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/gallery/Blue Sky Aesthetic Adventure Quote Instagram Post - 77.webp"
          alt="Philippine Travel Adventure"
          fill
          style={{ objectFit: "cover", objectPosition: "center 50%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,24,40,0.82) 0%, rgba(0,18,25,0.88) 100%)",
          }}
        />
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
          READY FOR YOUR NEXT ADVENTURE?
        </h2>
        <div style={{ margin: "0 auto 24px", width: 100 }}>
          <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
            {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
              <path
                key={i}
                d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
                stroke="#FFD166"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
            ))}
          </svg>
        </div>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#E2E8F0",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}
        >
          Experience stunning landscapes, vibrant local culture, and memorable moments.
          Our personalized tour packages across the Philippines are ready to welcome you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/packages">
            <button className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Tour Packages
            </button>
          </Link>
          <Link href="/request-a-quote">
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
        <GallerySection />
        <BottomBanner />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
