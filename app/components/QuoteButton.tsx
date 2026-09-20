"use client";

import { MessageCircle } from "lucide-react";
import { getMessengerQuoteUrl } from "@/app/lib/messenger";

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
  const defaultUrl = getMessengerQuoteUrl({ tourName, duration });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href;
      const finalMessengerUrl = getMessengerQuoteUrl({
        tourName,
        duration,
        pageUrl: fullUrl,
      });
      e.currentTarget.href = finalMessengerUrl;
    }
  };

  return (
    <a
      href={defaultUrl}
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
  );
}

export default QuoteButton;
