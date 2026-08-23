"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
};

const DRAG_THRESHOLD = 5;

export function ImageSlider({
  slides,
  className,
  sizes = "(max-width: 640px) 85vw, 50vw",
  railClassName = "gap-2",
  slideClassName = "h-[420px] w-[85%] rounded-lg sm:h-[560px] sm:w-[72%]",
}: {
  slides: readonly Slide[];
  className?: string;
  sizes?: string;
  railClassName?: string;
  slideClassName?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  const syncEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    syncEdges();
    const el = railRef.current;
    if (!el) return;
    const observer = new ResizeObserver(syncEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [syncEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.55, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    const el = railRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: 0,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta));
    el.style.scrollSnapType = "none";
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    const el = railRef.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    el.style.scrollSnapType = "";
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={railRef}
        onScroll={syncEdges}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className={cn(
          "no-scrollbar -mr-4 flex snap-x snap-mandatory overflow-x-auto pb-2 sm:mr-0",
          dragging ? "cursor-grabbing select-none" : "cursor-grab",
          railClassName
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "relative shrink-0 snap-start overflow-hidden",
              slideClassName
            )}
          >
            <SiteImage
              src={slide.src}
              alt={slide.alt}
              sizes={sizes}
              eager={i === 0}
              lazy={false}
              className="pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
      <SliderButton side="left" onClick={() => scrollByCard(-1)} disabled={atStart} />
      <SliderButton side="right" onClick={() => scrollByCard(1)} disabled={atEnd} />
    </div>
  );
}

function SliderButton({
  side,
  onClick,
  disabled,
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Previous image" : "Next image"}
      className={cn(
        "absolute top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center sm:flex",
        "rounded-full border bg-white/8 backdrop-blur-[6px] transition hover:bg-white/16",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
        disabled
          ? "pointer-events-none border-neutral-200 text-neutral-300"
          : "border-white text-white",
        side === "left" ? "sm:-left-4 lg:-left-8" : "sm:-right-4 lg:-right-8"
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d={side === "left" ? "M15 5 L8 12 L15 19" : "M9 5 L16 12 L9 19"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
