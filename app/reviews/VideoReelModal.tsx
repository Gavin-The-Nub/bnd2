"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from "lucide-react";
import { VideoReviewItem } from "./data";

interface VideoReelModalProps {
  reviews: VideoReviewItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function VideoReelModal({
  reviews,
  currentIndex,
  onClose,
  onSelectIndex,
}: VideoReelModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [showCenterIcon, setShowCenterIcon] = useState<"play" | "pause" | null>(null);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < reviews.length;
  const currentReview = isOpen ? reviews[currentIndex] : null;

  // Previous & Next navigation
  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + reviews.length) % reviews.length;
    onSelectIndex(prev);
  }, [currentIndex, reviews.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % reviews.length;
    onSelectIndex(next);
  }, [currentIndex, reviews.length, onSelectIndex]);

  // Toggle Play / Pause
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowCenterIcon("play");
        setTimeout(() => setShowCenterIcon(null), 600);
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
      setShowCenterIcon("pause");
      setTimeout(() => setShowCenterIcon(null), 600);
    }
  }, []);

  // Toggle Mute
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Keyboard navigation & controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext, togglePlay, toggleMute]);

  // Reset & load video when index changes
  useEffect(() => {
    if (!isOpen || !currentReview) return;
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(0);
    setIsPlaying(true);

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser blocks unmuted autoplay, mute and retry
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    }
  }, [isOpen, currentIndex, currentReview]);

  // Handle auto fade-out of controls after inactivity
  const handleUserActivity = () => {
    setControlsVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setControlsVisible(false);
      }
    }, 3000);
  };

  // Video time updates
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration || 0);
  };

  // Seeking via progress bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentReview) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-0 sm:p-4 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Left Arrow (Desktop) */}
      <button
        type="button"
        aria-label="Previous Video"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="hidden md:flex absolute left-4 lg:left-12 z-50 items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Floating Right Arrow (Desktop) */}
      <button
        type="button"
        aria-label="Next Video"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="hidden md:flex absolute right-4 lg:right-12 z-50 items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
      >
        <ChevronRight size={30} />
      </button>

      {/* 9:16 Vertical Reel Player Container */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleUserActivity}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-full sm:h-[88vh] sm:max-h-[820px] sm:max-w-[420px] sm:rounded-3xl overflow-hidden bg-black shadow-2xl flex flex-col justify-between border-0 sm:border sm:border-white/20"
      >
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          key={currentReview.videoSrc}
          src={currentReview.videoSrc}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          playsInline
          autoPlay
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleNext}
          onClick={togglePlay}
        />

        {/* Dynamic Vignette / Gradient overlays */}
        <div 
          onClick={togglePlay} 
          className="absolute inset-0 pointer-events-auto cursor-pointer bg-gradient-to-b from-black/60 via-transparent to-black/80" 
        />

        {/* Center Play / Pause Animated Feedback Icon */}
        {showCenterIcon && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 animate-out zoom-out-50 duration-500">
            <div className="w-20 h-20 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
              {showCenterIcon === "play" ? (
                <Play size={36} className="translate-x-0.5 text-white" fill="white" />
              ) : (
                <Pause size={36} className="text-white" fill="white" />
              )}
            </div>
          </div>
        )}

        {/* Top Header Overlay */}
        <div 
          className={`relative z-20 flex items-center justify-between p-4 sm:p-5 transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
            <span>Video {currentIndex + 1} of {reviews.length}</span>
          </div>

          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Bottom Interactive Video Controls */}
        <div 
          className={`relative z-20 p-4 sm:p-5 flex flex-col gap-3 transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Scrubber Progress Bar */}
          <div className="flex flex-col gap-1">
            <div className="relative w-full h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden group">
              <div 
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Video scrubber"
              />
            </div>

            {/* Time stamps */}
            <div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Action Control Buttons */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              {/* Play / Pause button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="translate-x-0.5" />}
              </button>

              {/* Mute / Unmute button */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {/* Mobile swipe navigation buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <Maximize2 size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
