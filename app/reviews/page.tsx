"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Star, 
  Sparkles, 
  CheckCircle, 
  MessageCircle, 
  FileText, 
  Compass, 
  ShieldCheck, 
  Heart,
  Video
} from "lucide-react";
import { Navbar, Footer, WhatsApp } from "../components/shared";
import { videoReviews, VideoReviewItem } from "./data";
import VideoReelModal from "./VideoReelModal";

/* ─── Hero Section ────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Image with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pkg-beach.jpg"
          alt="BND Travel and Tours Reviews Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0, 24, 48, 0.82) 0%, rgba(0, 18, 25, 0.92) 100%)"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Floating pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#FFD166] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 shadow-lg">
          <Sparkles size={15} /> Authentic Guest Stories
        </div>

        <h1 
          className="font-extrabold uppercase text-white tracking-wide text-3xl sm:text-5xl lg:text-6xl mb-4 leading-tight drop-shadow-md"
          style={{ fontFamily: "var(--font-figtree), sans-serif" }}
        >
          Traveler Video Reviews
        </h1>

        <p 
          className="text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-normal"
          style={{ fontFamily: "var(--font-figtree), sans-serif" }}
        >
          Don&apos;t just take our word for it—watch real, unfiltered stories and unforgettable moments captured directly by our happy guests across their dream getaways.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 border-t border-white/15 text-white/90 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#FFD166]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#FFD166" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 Star Rating</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-[#06D6A0]" />
            <span>100% Authentic Guests</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <Heart size={15} className="text-[#FF6B6B]" />
            <span>1,200+ Cherished Travelers</span>
          </div>
        </div>
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
      className="group relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/80 bg-slate-900"
    >
      {/* Background Video (Muted for smooth preview on hover) */}
      <video
        ref={videoRef}
        src={review.videoSrc}
        preload="metadata"
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subtle Dark Gradient Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 transition-opacity group-hover:opacity-90 pointer-events-none" />

      {/* Top Bar: Badges */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
          <CheckCircle size={13} className="text-[#06D6A0]" />
          <span>{review.traveler}</span>
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90">
          <Video size={12} className="text-[#FFD166]" />
          <span>{review.duration}</span>
        </div>
      </div>

      {/* Center Play Button Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/25 group-hover:bg-[#FF9900] border-2 border-white/50 backdrop-blur-md flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform group-hover:scale-115">
          <Play size={28} className="translate-x-0.5" fill="currentColor" />
        </div>
        <span className="mt-3 text-xs uppercase tracking-wider font-bold text-white/90 group-hover:text-[#FFD166] transition-colors drop-shadow-md">
          Watch Video
        </span>
      </div>

      {/* Bottom Content: Rating, Title & Highlight */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 flex flex-col gap-2 pointer-events-none">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-[#FFD166]">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={14} fill="#FFD166" />
          ))}
          <span className="text-xs font-bold text-white ml-1">5.0</span>
        </div>

        {/* Title & Tour Name */}
        <div>
          <h3 
            className="text-white font-bold text-lg sm:text-xl leading-snug drop-shadow-md group-hover:text-[#FFD166] transition-colors"
            style={{ fontFamily: "var(--font-figtree), sans-serif" }}
          >
            {review.title}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm font-medium drop-shadow-sm mt-0.5">
            {review.tourName}
          </p>
        </div>

        {/* Quote Snippet */}
        <p className="text-white/90 text-xs sm:text-sm italic line-clamp-2 bg-white/10 p-2.5 rounded-xl border border-white/15 backdrop-blur-sm">
          &ldquo;{review.highlight}&rdquo;
        </p>
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 text-[#003366] font-bold text-xs tracking-wider uppercase mb-1">
            <Compass size={14} className="text-[#FF9900]" /> Real Guest Moments
          </div>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-[#001219] uppercase tracking-wide"
            style={{ fontFamily: "var(--font-figtree), sans-serif" }}
          >
            Explore Video Stories
          </h2>
        </div>

        <div className="text-sm font-medium text-slate-500">
          Showing <span className="font-bold text-[#003366]">{reviews.length}</span> Verified Video Testimonials
        </div>
      </div>

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

/* ─── Trust Highlights Section ────────────────────────────── */
function TrustHighlights() {
  const highlights = [
    {
      icon: <ShieldCheck size={28} className="text-[#003366]" />,
      title: "Hassle-Free Organization",
      desc: "From smooth airport transfers to premium hotel accommodations, we arrange every single detail for you.",
    },
    {
      icon: <Heart size={28} className="text-[#FF9900]" />,
      title: "Caring Local Guides",
      desc: "Our passionate local guides ensure you learn authentic culture, discover hidden gems, and feel right at home.",
    },
    {
      icon: <Sparkles size={28} className="text-[#06D6A0]" />,
      title: "Unforgettable Itineraries",
      desc: "Carefully designed schedules crafted to balance exciting landmarks with peaceful, leisurely sightseeing.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-[#003366] uppercase tracking-wide mb-3"
            style={{ fontFamily: "var(--font-figtree), sans-serif" }}
          >
            Why Travelers Choose BND
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We are dedicated to crafting stress-free, meaningful travel experiences that turn your vacation dreams into lifelong cherished memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 
                className="text-lg font-bold text-[#001219] mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-figtree), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom Conversion CTA ───────────────────────────────── */
function BottomCTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background with Dark Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/IMG_1294.webp"
          alt="Book Your Dream Tour"
          fill
          className="object-cover object-center"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0, 32, 64, 0.9) 0%, rgba(0, 18, 25, 0.94) 100%)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FFD166] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Start Your Journey Today
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-4 leading-tight"
            style={{ fontFamily: "var(--font-figtree), sans-serif" }}
          >
            Ready to Create Your Own Travel Story?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Let our travel specialists help you design the perfect getaway for your family, friends, or company group.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
          <Link href="/request-a-quote" className="w-full sm:w-auto">
            <button 
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#FF8000] hover:from-[#FF8000] hover:to-[#e67300] text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              <FileText size={18} />
              <span>Request A Free Quote</span>
            </button>
          </Link>

          <a 
            href="https://m.me/bndtravelandtours" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button 
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003366] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-white"
            >
              <MessageCircle size={18} />
              <span>Chat on Messenger</span>
            </button>
          </a>
        </div>
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
        <TrustHighlights />
        <BottomCTA />
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
