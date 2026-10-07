"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Types ────────────────────────────────────────────────── */
export interface Package {
  id: number;
  image: string;
  title: string;
  stars: number;
  desc: string;
  tag?: string;
}

/* ─── Nav Links ─────────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", href: "/", children: null },
  {
    label: "BND Packages",
    href: "/packages",
    children: [
      { label: "Local Land Tour", href: "/packages/local" },
      { label: "Asia Tour", href: "/packages/asia" },
    ],
  },
  {
    label: "Travel Guides",
    href: "#",
    children: [
      { label: "Calendar of Events", href: "/calendar-of-events" },
      { label: "Do's and Don'ts", href: "/dos-and-donts" },
    ],
  },
  { label: "Gallery", href: "/gallery", children: null },
  { label: "Reviews", href: "/reviews", children: null },
  { label: "Services", href: "/services", children: null },
  { label: "About Us", href: "/about", children: null },
  { label: "Contact Us", href: "/contact", children: null },
];

/* ─── Reusable: Stars ─────────────────────────────────────── */
export function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2, margin: "6px 0" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FF9900">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Reusable: Wave SVG ──────────────────────────────────── */
export function Wave({ color = "#003366", opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <div style={{ width: "100%", lineHeight: 0, margin: "8px 0" }}>
      <svg viewBox="0 0 600 20" style={{ width: "100%", height: 20 }} preserveAspectRatio="none">
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x, i) => (
          <path
            key={i}
            d={`M${x},10 C${x + 15},2 ${x + 30},18 ${x + 45},10 S${x + 60},2 ${x + 60},10`}
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────── */
export function SectionHeader({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 12,
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: 3,
          color: dark ? "#BACCDF" : "#003366",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>
      <Wave color={dark ? "#BACCDF" : "#003366"} opacity={dark ? 0.5 : 0.4} />
      <h2
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 700,
          textTransform: "uppercase",
          color: dark ? "#FFFFFF" : "#003366",
          letterSpacing: 1,
          lineHeight: 1,
          margin: "14px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── Package Card ────────────────────────────────────────── */
export function PackageCard({ pkg }: { pkg: Package }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "2.5px solid #BACCDF",
        borderRadius: 20,
        padding: 20,
        background: hovered ? "#BACCDF" : "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s, box-shadow 0.3s",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,51,102,0.15)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 14,
          flexShrink: 0,
        }}
      >
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s" }}
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {pkg.tag && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#FF9900",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 20,
              letterSpacing: 0.5,
            }}
          >
            {pkg.tag}
          </span>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 17,
          fontWeight: 800,
          textTransform: "uppercase",
          color: "#003366",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {pkg.title}
      </h3>

      <Stars count={pkg.stars} />

      <div
        style={{
          height: 2,
          width: "45%",
          background: "repeating-linear-gradient(90deg,#003366 0,#003366 5px,transparent 5px,transparent 9px)",
          borderRadius: 2,
          marginBottom: 10,
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#001219",
          flex: 1,
          margin: "0 0 16px",
        }}
      >
        {pkg.desc}
      </p>

      <div>
        <button
          style={{
            background: "#FF9900",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "10px 22px",
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            cursor: "pointer",
            transition: "background 0.2s",
            fontFamily: "var(--font-figtree), sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e68800")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FF9900")}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

/* ─── Page Hero Banner ────────────────────────────────────── */
export function PageHero({ title, image = "/hero.png" }: { title: string; image?: string }) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 280,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(28px, 6vw, 52px)",
            fontWeight: 900,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "4px",
            textShadow: "2px 4px 16px rgba(0,0,0,0.55)",
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}

/* ─── CTA Banner ──────────────────────────────────────────── */
export function CTABanner() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px",
        backgroundImage: "url('/pkg-beach.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,10,30,0.72)" }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 900,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          DISCOVER YOUR BATANES ADVENTURE
        </h2>
        <Wave color="#BACCDF" opacity={0.5} />
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 16,
            color: "#BACCDF",
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          Explore stunning landscapes and vibrant cultures. Our travel packages to Batanes
          offer unforgettable experiences just waiting for you.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
          <Link
            href="/packages"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
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
            EXPLORE TOUR PACKAGES
          </Link>
          <Link
            href="/request-a-quote"
            style={{
              display: "inline-block",
              background: "#FF9900",
              color: "#fff",
              border: "none",
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
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Navbar ──────────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Lock body scroll when off-canvas drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      {/* ── Top Header Bar ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(0, 51, 102, 0.08)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.3s, background 0.3s",
          width: "100%",
        }}
      >
        <div
          className="header-nav-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1360,
            margin: "0 auto",
            padding: "14px 32px",
          }}
        >
          {/* LEFT — Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}
          >
            <span
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 28,
                fontWeight: 900,
                color: "#003366",
                letterSpacing: -0.5,
                lineHeight: 1,
              }}
            >
              BND<span style={{ color: "#FF9900" }}>.</span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#003366",
                lineHeight: 1.2,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                borderLeft: "1.5px solid #BACCDF",
                paddingLeft: 10,
              }}
            >
              Travel
              <br />
              <span style={{ color: "#FF9900" }}>&amp;</span> Tours
            </span>
          </Link>

          {/* CENTER — Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            {navLinks.map((link) => {
              const isLinkActive = link.href === "/"
                ? pathname === "/"
                : pathname === link.href || (link.children && link.children.some(c => c.href === pathname));

              return (
                <div
                  key={link.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => link.children && setHoveredDropdown(link.label)}
                  onMouseLeave={() => link.children && setHoveredDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "#") {
                        e.preventDefault();
                        setHoveredDropdown(hoveredDropdown === link.label ? null : link.label);
                      }
                    }}
                    style={{
                      fontFamily: "var(--font-figtree), sans-serif",
                      fontSize: 12.5,
                      fontWeight: isLinkActive ? 800 : 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      color: isLinkActive ? "#FF9900" : "#003366",
                      textDecoration: "none",
                      padding: "8px 2px",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      transition: "color 0.2s",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (!isLinkActive) e.currentTarget.style.color = "#FF9900";
                    }}
                    onMouseLeave={(e) => {
                      if (!isLinkActive) e.currentTarget.style.color = "#003366";
                    }}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        style={{
                          transform: hoveredDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          color: isLinkActive ? "#FF9900" : "#003366",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                    {isLinkActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 2.5,
                          background: "#FF9900",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && hoveredDropdown === link.label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: 220,
                        background: "#FFFFFF",
                        borderRadius: 12,
                        boxShadow: "0 12px 32px rgba(0, 51, 102, 0.12)",
                        border: "1px solid rgba(0, 51, 102, 0.08)",
                        padding: "8px 0",
                        zIndex: 110,
                      }}
                    >
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setHoveredDropdown(null)}
                            style={{
                              display: "block",
                              padding: "10px 18px",
                              fontFamily: "var(--font-figtree), sans-serif",
                              fontSize: 13,
                              fontWeight: isChildActive ? 700 : 600,
                              color: isChildActive ? "#FF9900" : "#003366",
                              background: isChildActive ? "#FFFDF0" : "transparent",
                              textDecoration: "none",
                              transition: "background 0.2s, color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#FFFDF0";
                              e.currentTarget.style.color = "#FF9900";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = isChildActive ? "#FFFDF0" : "transparent";
                              e.currentTarget.style.color = isChildActive ? "#FF9900" : "#003366";
                            }}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT — Action Controls (Book Now CTA & Hamburger) */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link
              href="/request-a-quote"
              className="desktop-quote-btn"
              style={{
                background: "#FF9900",
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1,
                padding: "9px 18px",
                borderRadius: 6,
                textDecoration: "none",
                fontFamily: "var(--font-figtree), sans-serif",
                transition: "background 0.2s, transform 0.15s",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E68800";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FF9900";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Request Quote
            </Link>

            <button
              id="hamburger-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: 6,
                padding: 8,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 26,
                  height: 2.2,
                  background: "#003366",
                  borderRadius: 1,
                  transition: "transform 0.2s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 2.2,
                  background: "#003366",
                  borderRadius: 1,
                  transition: "transform 0.2s",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Off-Canvas Right Side Drawer Menu ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 300,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,18,25,0.45)",
            backdropFilter: "blur(4px)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* Right Side Overlay Panel */}
        <nav
          id="side-drawer"
          aria-label="Off-canvas menu"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            maxWidth: "90vw",
            height: "100%",
            background: "#FFFFFF",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
            display: "flex",
            flexDirection: "column",
            padding: "36px 36px 40px",
            overflowY: "auto",
            boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header Row: Logo & Close Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-figtree), sans-serif",
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#003366",
                  lineHeight: 1,
                }}
              >
                BND<span style={{ color: "#FF9900" }}>.</span>
              </span>
            </div>

            <button
              id="close-nav-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 24,
                color: "#003366",
                cursor: "pointer",
                padding: 4,
                lineHeight: 1,
                fontWeight: 300,
              }}
            >
              ✕
            </button>
          </div>

          {/* Headline & Subtitle */}
          <div style={{ marginBottom: 24 }}>
            <h2
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 32,
                fontWeight: 900,
                color: "#003366",
                margin: "0 0 10px",
                lineHeight: 1.15,
                letterSpacing: -0.5,
              }}
            >
              Hello There!
            </h2>
            <p
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 14,
                color: "#4A5568",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Discover unforgettable journeys with BND Travel &amp; Tours. Your trusted local guide for curated travel experiences across the Philippines and Asia.
            </p>
          </div>

          {/* 4 Thumbnail Image Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {[
              { src: "/pkg-beach.jpg", alt: "Batanes Beach" },
              { src: "/pkg-lighthouse.jpg", alt: "Batanes Lighthouse" },
              { src: "/pkg-hotel.jpg", alt: "Batanes Hotel" },
              { src: "/pkg-village.jpg", alt: "Batanes Village" },
            ].map((img, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  width: "100%",
                  height: 72,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100px"
                />
              </div>
            ))}
          </div>

          {/* Navigation Links Accordion for Drawer */}
          <div style={{ marginBottom: 32, borderTop: "1px solid #E2E8F0", paddingTop: 16 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 0",
                          background: "none",
                          border: "none",
                          borderBottom: "1px solid #F1F5F9",
                          fontSize: 13,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: 1.2,
                          color: "#003366",
                          cursor: "pointer",
                          fontFamily: "var(--font-figtree), sans-serif",
                        }}
                      >
                        <span>{link.label}</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#003366"
                          strokeWidth="2.5"
                          style={{
                            transform: openDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <ul style={{ listStyle: "none", padding: "6px 0 6px 14px", margin: 0 }}>
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                  display: "block",
                                  padding: "8px 0",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#FF9900",
                                  textDecoration: "none",
                                  fontFamily: "var(--font-figtree), sans-serif",
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 0",
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid #F1F5F9",
                        fontSize: 13,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        color: "#003366",
                        cursor: "pointer",
                        fontFamily: "var(--font-figtree), sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* INFORMATION Section */}
          <div style={{ marginBottom: 28 }}>
            <h3
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2.5,
                color: "#003366",
                margin: "0 0 12px",
              }}
            >
              INFORMATION
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 13,
                color: "#4A5568",
                fontFamily: "var(--font-figtree), sans-serif",
                lineHeight: 1.5,
              }}
            >
              <a href="tel:09702065826" style={{ color: "#003366", textDecoration: "none", fontWeight: 700 }}>0970 206 5826</a>
              <a href="tel:0437028516" style={{ color: "#003366", textDecoration: "none", fontWeight: 700 }}>043 702 8516</a>
              <a href="mailto:Bndtravelsales@gmail.com" style={{ color: "#4A5568", textDecoration: "none" }}>Bndtravelsales@gmail.com</a>
              <a href="mailto:Bndtravels01@gmail.com" style={{ color: "#4A5568", textDecoration: "none" }}>Bndtravels01@gmail.com</a>
              <div style={{ fontSize: 11.5, color: "#FF9900", fontWeight: 700, marginTop: 4 }}>DOT Accreditation: DOT- R4A- TTA- 03110-2026</div>
            </div>
          </div>

          {/* FOLLOW US Section */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-figtree), sans-serif",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2.5,
                color: "#003366",
                margin: "0 0 14px",
              }}
            >
              FOLLOW US
            </h3>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/drewAdventures",
                  bg: "#1877F2",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/bndtravelandtours/?utm_source=qr",
                  bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@byahe_ni_drew",
                  bg: "#000000",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3.14 15.7 6.34 6.34 0 0 0 9.48 22a6.33 6.33 0 0 0 6.34-6.33V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: social.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

/* ─── Footer ──────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/drewAdventures",
      bg: "#1877F2",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/bndtravelandtours/?utm_source=qr",
      bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@byahe_ni_drew",
      bg: "#000000",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3.14 15.7 6.34 6.34 0 0 0 9.48 22a6.33 6.33 0 0 0 6.34-6.33V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ background: "#001219", padding: "60px 24px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 30, fontWeight: 900, color: "#FF9900", lineHeight: 1 }}>BND</span>
              <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 11, fontWeight: 600, color: "#BACCDF", lineHeight: 1.3 }}>
                Travel<br /><span style={{ color: "#FF9900" }}>&amp;</span> Tours
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", lineHeight: 1.7, margin: 0 }}>
              Your trusted local guide for unforgettable travel experiences in the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "FAQs", href: "/faqs" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Contracted Rates", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", textDecoration: "none" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Hotel + Tour Package", href: "/packages/hotel" },
                { label: "Homestay + Tour Package", href: "/packages/homestay" },
                { label: "Eco-Tours (Private Tour)", href: "/packages/tour" },
                { label: "Daily Joiner Tours", href: "/packages/tour" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", textDecoration: "none" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Contact Info</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              <li style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12.5, color: "#FF9900", fontWeight: 700 }}>
                BND TRAVEL AND TOURS OPC
              </li>
              <li>
                <a href="tel:09702065826" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", textDecoration: "none" }}>0970 206 5826</a>
              </li>
              <li>
                <a href="tel:0437028516" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 13, color: "#BACCDF", textDecoration: "none" }}>043 702 8516</a>
              </li>
              <li>
                <a href="mailto:Bndtravelsales@gmail.com" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12.5, color: "#BACCDF", textDecoration: "none" }}>Bndtravelsales@gmail.com</a>
              </li>
              <li>
                <a href="mailto:Bndtravels01@gmail.com" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12.5, color: "#BACCDF", textDecoration: "none" }}>Bndtravels01@gmail.com</a>
              </li>
            </ul>
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1a2e40",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#BACCDF" }}>
            © {year} BND Travel &amp; Tours. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Your Privacy Matters", "Terms and Conditions"].map((l) => (
              <a key={l} href="#" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12, color: "#BACCDF", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Float ──────────────────────────────────────── */
export function WhatsApp() {
  return (
    <a
      href="https://wa.me/639778063040"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 90,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.28)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.28)";
      }}
    >
      <svg width="30" height="30" viewBox="0 0 448 512" fill="white">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    </a>
  );
}
