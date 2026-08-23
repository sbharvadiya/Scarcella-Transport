"use client";

import { useEffect, useRef } from "react";

export function VideoBackground({
  src,
  poster,
  className,
  style,
  cropLetterbox = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  cropLetterbox?: boolean;
}) {
  const ref = useVideoAutoplay();

  return (
    <video
      ref={ref}
      className={className ?? "absolute inset-0 h-full w-full object-cover"}
      style={cropLetterbox ? { ...style, transform: "scale(1.0672)" } : style}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      // iOS only honours autoplay once it has data, and it never preloads on
      // cellular with preload="metadata".
      preload="auto"
      disableRemotePlayback
    />
  );
}

/**
 * iOS blocks autoplay unless the element is genuinely muted. React sets `muted`
 * as a property rather than an attribute, and on hydration that can land after
 * Safari has already evaluated (and rejected) the autoplay attempt — so force
 * the attribute on and retry play() once the element is ready.
 */
export function useVideoAutoplay() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");

    const play = () => {
      const attempt = el.play();
      if (attempt) attempt.catch(() => {});
    };

    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);

    // Safari suspends background video when the tab or app is backgrounded.
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return ref;
}
