"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Check, Copy } from "lucide-react";
import {
  getMessengerQuoteUrl,
  buildQuoteMessage,
  copyToClipboard,
} from "@/app/lib/messenger";

export interface QuoteButtonProps {
  tourName?: string;
  duration?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
}

export function QuoteButton({
  tourName,
  duration,
  label = "GET A QUOTE",
  className,
  style,
  showIcon = true,
}: QuoteButtonProps) {
  const [url, setUrl] = useState(() =>
    getMessengerQuoteUrl({ tourName, duration })
  );
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(
        getMessengerQuoteUrl({
          tourName,
          duration,
          pageUrl: window.location.href,
        })
      );
    }
  }, [tourName, duration]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href;
      const finalMessengerUrl = getMessengerQuoteUrl({
        tourName,
        duration,
        pageUrl: fullUrl,
      });
      e.currentTarget.href = finalMessengerUrl;

      // Auto-copy pre-filled message so the user can easily paste into Messenger
      const message = buildQuoteMessage({
        tourName,
        duration,
        pageUrl: fullUrl,
      });
      copyToClipboard(message);

      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          cursor: "pointer",
          ...style,
        }}
      >
        {showIcon && <MessageCircle size={16} style={{ flexShrink: 0 }} />}
        <span>{label}</span>
      </a>

      {/* Toast Notification */}
      {showToast && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "#003366",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: 8,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            fontFamily: "var(--font-figtree), sans-serif",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid #FF9900",
            maxWidth: "90vw",
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#FF9900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Check size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Inquiry Copied to Clipboard!</div>
            <div style={{ fontSize: 12, opacity: 0.9 }}>
              Opening Messenger... Press <strong>Paste</strong> (Cmd+V / Ctrl+V) to send your inquiry.
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#BACCDF",
              fontSize: 18,
              cursor: "pointer",
              marginLeft: 8,
              padding: 4,
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default QuoteButton;
