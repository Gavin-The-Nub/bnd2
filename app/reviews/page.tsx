"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Navbar, Footer, WhatsApp } from "../components/shared";
import { videoReviews, VideoReviewItem } from "./data";
import VideoReelModal from "./VideoReelModal";

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "38vh",
        minHeight: 280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src="/pkg-beach.jpg"
          alt="Reviews Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(180deg, rgba(0, 24, 48, 0.72) 0%, rgba(0, 18, 25, 0.88) 100%)" 
          }} 
        />
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
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
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
        maxWidth: 340,
        aspectRatio: "9 / 16",
        borderRadius: 24,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#000",
        boxShadow: isHovered 
          ? "0 20px 35px -5px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.2)"
          : "0 10px 20px -3px rgba(0, 0, 0, 0.15)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        margin: "0 auto",
        border: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Background Video Preview */}
      <video
        ref={videoRef}
        src={review.videoSrc}
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

      {/* Subtle overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: isHovered ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.15)",
          transition: "background-color 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Center Play Button Overlay */}
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
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: isHovered ? "#FF9900" : "rgba(0, 0, 0, 0.55)",
            border: "2px solid rgba(255, 255, 255, 0.8)",
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
          <Play size={28} style={{ transform: "translateX(2px)" }} fill="#fff" />
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
        padding: "60px 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 340px))",
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
          width: "100%",
          maxWidth: 1140,
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

/* ─── Main Reviews Page ───────────────────────────────────── */
export default function ReviewsPage() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handleSelectIndex = (index: number) => {
    setActiveModalIndex(index);
  };

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
        <VideoWall 
          reviews={videoReviews} 
          onOpenModal={handleOpenModal} 
        />
      </main>

      <Footer />
      <WhatsApp />

      {/* Reel Modal Player */}
      <VideoReelModal
        reviews={videoReviews}
        currentIndex={activeModalIndex}
        onClose={handleCloseModal}
        onSelectIndex={handleSelectIndex}
      />
    </div>
  );
}
