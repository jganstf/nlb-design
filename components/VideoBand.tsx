"use client";

import { useRef, useState } from "react";

type VideoBandProps = {
  posterSrc: string;
  posterAlt?: string;
  videoSrc: string;
  className?: string;
};

export default function VideoBand({
  posterSrc,
  videoSrc,
  className,
}: VideoBandProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <div
      className={`video-band relative aspect-[1440/800] w-full overflow-clip ${className ?? ""}`}
    >
      <video
        ref={videoRef}
        className="video-band-video absolute inset-0 size-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted={muted}
        playsInline
      />
      <button
        type="button"
        onClick={() => setMuted((isMuted) => !isMuted)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
        className="video-band-mute absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-on-background opacity-0 shadow-lg transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </div>
  );
}
