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
    <section className="relative min-h-[260px] sm:min-h-[320px] flex items-center justify-center py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pkg-beach.jpg"
          alt="Reviews Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0, 24, 48, 0.75) 0%, rgba(0, 18, 25, 0.88) 100%)"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h1 
          className="font-extrabold uppercase text-white tracking-wider text-3xl sm:text-5xl drop-shadow-md m-0"
          style={{ fontFamily: "var(--font-figtree), sans-serif" }}
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

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
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
      className="group relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 bg-black border border-slate-200"
    >
      {/* Background Video Preview */}
      <video
        ref={videoRef}
        src={review.videoSrc}
        preload="metadata"
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subtle vignette overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors pointer-events-none" />

      {/* Center Play Button Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black/50 group-hover:bg-[#FF9900] border-2 border-white/70 backdrop-blur-md flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <Play size={28} className="translate-x-0.5 text-white" fill="white" />
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
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow">
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
