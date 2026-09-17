"use client";

import { useState, useEffect } from "react";
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
  const [url, setUrl] = useState(() =>
    getMessengerQuoteUrl({ tourName, duration })
  );

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
      e.currentTarget.href = getMessengerQuoteUrl({
        tourName,
        duration,
        pageUrl: window.location.href,
      });
    }
  };

  return (
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
        ...style,
      }}
    >
      {showIcon && <MessageCircle size={16} style={{ flexShrink: 0 }} />}
      <span>{label}</span>
    </a>
  );
}

export default QuoteButton;
