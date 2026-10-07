"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ZoomIn, Camera, Video, Sparkles, ArrowRight } from "lucide-react";
import { Navbar, Footer, WhatsApp, SectionHeader } from "../components/shared";
import { videoReviews, VideoReviewItem } from "./data";
import { clientPhotos, ClientPhotoItem } from "./clientPhotosData";
import VideoReelModal from "./VideoReelModal";
import PhotoLightboxModal from "./PhotoLightboxModal";

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: 220,
        minHeight: 190,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/pkg-beach.jpg"
          alt="Reviews & Guest Moments Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(180deg, rgba(0, 24, 48, 0.82) 0%, rgba(0, 18, 25, 0.92) 100%)" 
          }} 
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 14px",
            borderRadius: 999,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            color: "#FFD166",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          <Sparkles size={13} /> Real Guest Stories & Moments
        </div>
        <h1
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
          }}
        >
          Reviews & Guest Gallery
        </h1>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.88)",
            margin: "6px 0 0",
            letterSpacing: 0.5,
          }}
        >
          Authentic Video Stories & 70+ Cherished Tour Memories From Our Happy Travelers
        </p>
      </div>
    </section>
  );
}

/* ─── Individual Video Card with Hover Preview ─────────────── */
function VideoCard({
  review,
  index,
  onOpenModal,
}: {
  review: VideoReviewItem;
  index: number;
  onOpenModal: (index: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      if (video.currentTime < 1.0) {
        video.currentTime = 1.0;
      }
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  };

  return (
    <div
      onClick={() => onOpenModal(index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        aspectRatio: "9 / 16",
        borderRadius: 24,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#001219",
        boxShadow: isHovered 
          ? "0 22px 40px -5px rgba(0, 0, 0, 0.3), 0 12px 18px -5px rgba(0, 0, 0, 0.18)"
          : "0 10px 24px -3px rgba(0, 0, 0, 0.12)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        margin: "0 auto",
        border: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <video
        ref={videoRef}
        src={review.videoSrc}
        poster={review.poster}
        preload="metadata"
        muted
        playsInline
        loop
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />

      <Image
        src={review.poster}
        alt="Traveler video review placeholder"
        fill
        sizes="(max-width: 768px) 100vw, 380px"
        style={{
          objectFit: "cover",
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.4s ease, opacity 0.3s ease",
          opacity: isHovered ? 0 : 1,
          pointerEvents: "none",
        }}
        priority={index < 3}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.05)" : "transparent",
          transition: "background-color 0.3s ease",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: "50%",
            backgroundColor: isHovered ? "#FF9900" : "rgba(0, 0, 0, 0.6)",
            border: "2px solid rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            transform: isHovered ? "scale(1.12)" : "scale(1)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Play size={30} style={{ transform: "translateX(2px)" }} fill="#fff" />
        </div>
      </div>
    </div>
  );
}

/* ─── Video Wall Grid ─────────────────────────────────────── */
function VideoWall({
  reviews,
  onOpenModal,
}: {
  reviews: VideoReviewItem[];
  onOpenModal: (index: number) => void;
}) {
  return (
    <section
      style={{
        padding: "48px 20px 40px",
        maxWidth: 1320,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#003366",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          <Video size={14} /> Video Testimonials
        </div>
        <h2
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 3vw, 34px)",
            fontWeight: 800,
            color: "#001830",
            margin: "0 0 8px",
          }}
        >
          Watch Our Guests in Action
        </h2>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "#64748B",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Tap any reel to hear firsthand stories and experience genuine smiles from our tour groups.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 360px))",
          justifyContent: "center",
          alignItems: "center",
          gap: 28,
          width: "100%",
          maxWidth: 1260,
          margin: "0 auto",
        }}
      >
        {reviews.map((review, index) => (
          <VideoCard
            key={review.id}
            review={review}
            index={index}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Client Photo Card ───────────────────────────────────── */
function PhotoCard({
  photo,
  index,
  onOpenModal,
}: {
  photo: ClientPhotoItem;
  index: number;
  onOpenModal: (index: number) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onOpenModal(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        breakInside: "avoid",
        marginBottom: 20,
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#F1F5F9",
        boxShadow: isHovered
          ? "0 16px 32px -4px rgba(0, 24, 48, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.08)"
          : "0 4px 12px rgba(0, 0, 0, 0.06)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          transform: isHovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Hover Overlay with Zoom Icon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: isHovered ? "rgba(0, 24, 48, 0.35)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#003366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1)" : "scale(0.8)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ZoomIn size={22} />
        </div>
      </div>
    </div>
  );
}

/* ─── Client Photo Wall Section ───────────────────────────── */
function ClientPhotoWall({
  photos,
  onOpenModal,
}: {
  photos: ClientPhotoItem[];
  onOpenModal: (index: number) => void;
}) {
  return (
    <section
      style={{
        backgroundColor: "#FAF9F6",
        borderTop: "1px solid #E2E8F0",
        padding: "70px 20px 80px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#003366",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            <Camera size={14} /> Guest Moments & Memories
          </div>
          <h2
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 800,
              color: "#001830",
              margin: "0 0 10px",
            }}
          >
            Real Memories With Our Travelers
          </h2>
          <p
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              fontSize: 15,
              color: "#4A5568",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Over 70 unedited snapshots from our valued guests exploring dream destinations across the Philippines and beyond. Click any photo to enlarge.
          </p>
        </div>

        {/* Responsive CSS Column Masonry */}
        <div className="client-photos-masonry">
          {photos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .client-photos-masonry {
          column-count: 1;
          column-gap: 16px;
          width: 100%;
        }
        @media (min-width: 540px) {
          .client-photos-masonry {
            column-count: 2;
            column-gap: 18px;
          }
        }
        @media (min-width: 900px) {
          .client-photos-masonry {
            column-count: 3;
            column-gap: 22px;
          }
        }
        @media (min-width: 1200px) {
          .client-photos-masonry {
            column-count: 4;
            column-gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Bottom Call-to-Action ───────────────────────────────── */
function BottomCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #002244 0%, #001219 100%)",
        color: "#fff",
        padding: "60px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h3
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          Ready to Create Your Own Unforgettable Memories?
        </h3>
        <p
          style={{
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.85)",
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          Join thousands of satisfied travelers. Contact our friendly travel specialists today for customized packages and exclusive promos.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/request-a-quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 30,
              backgroundColor: "#FF9900",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(255, 153, 0, 0.4)",
              transition: "transform 0.2s",
            }}
          >
            <span>Request a Custom Quote</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/packages/local"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 30,
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(6px)",
            }}
          >
            Browse Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Reviews Page ───────────────────────────────────── */
export default function ReviewsPage() {
  const [activeVideoModalIndex, setActiveVideoModalIndex] = useState<number | null>(null);
  const [activePhotoModalIndex, setActivePhotoModalIndex] = useState<number | null>(null);

  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        backgroundColor: "#fff", 
        width: "100%" 
      }}
    >
      <Navbar />

      <main style={{ flexGrow: 1, width: "100%" }}>
        <Hero />

        {/* Section 1: Video Stories */}
        <VideoWall 
          reviews={videoReviews} 
          onOpenModal={(index) => setActiveVideoModalIndex(index)} 
        />

        {/* Section 2: All 71 Client Photos Wall */}
        <ClientPhotoWall
          photos={clientPhotos}
          onOpenModal={(index) => setActivePhotoModalIndex(index)}
        />

        {/* Section 3: Bottom Call to Action */}
        <BottomCTA />
      </main>

      <Footer />
      <WhatsApp />

      {/* Video Reel Modal */}
      <VideoReelModal
        reviews={videoReviews}
        currentIndex={activeVideoModalIndex}
        onClose={() => setActiveVideoModalIndex(null)}
        onSelectIndex={(index) => setActiveVideoModalIndex(index)}
      />

      {/* Photo Lightbox Modal */}
      <PhotoLightboxModal
        photos={clientPhotos}
        currentIndex={activePhotoModalIndex}
        onClose={() => setActivePhotoModalIndex(null)}
        onSelectIndex={(index) => setActivePhotoModalIndex(index)}
      />
    </div>
  );
}
