"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { sliderArrows } from "@/lib/images";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
};

/** Pointer travel (px) after which a drag stops counting as a click. */
const DRAG_THRESHOLD = 5;

/**
 * Horizontally scrolling image rail with arrow controls and drag-to-scroll.
 *
 * Scrolling stays native (snap points + touch), so the arrows and dragging
 * only nudge `scrollLeft` rather than owning slide state — that keeps swipe,
 * keyboard and arrow navigation in agreement.
 */
export function ImageSlider({
  slides,
  className,
  sizes = "(max-width: 640px) 85vw, 50vw",
}: {
  slides: readonly Slide[];
  className?: string;
  sizes?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Kept in a ref, not state: these change on every pointer move and must not
  // re-render the rail mid-drag.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  const syncEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    // 1px tolerance — fractional scroll offsets never land exactly on the edge.
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
    // Advance by roughly one card so the rail lands on the next snap point.
    el.scrollBy({ left: direction * el.clientWidth * 0.55, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    // Let touch devices keep their native momentum scrolling.
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
    // Snapping fights a drag in progress; it is restored on pointer up.
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

  // A drag that travelled far enough must not also fire the child's click.
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
          "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2",
          "[scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden",
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        )}
      >
        {slides.map((slide) => (
          <div
            key={slide.src}
            className="relative h-[420px] w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl sm:h-[560px] sm:w-[calc(50%-0.5rem)]"
          >
            <SiteImage
              src={slide.src}
              alt={slide.alt}
              sizes={sizes}
              // Without this the browser's native image drag hijacks the gesture.
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
        "absolute top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full transition",
        "hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
        "disabled:pointer-events-none disabled:opacity-0",
        side === "left" ? "left-2 sm:-left-5" : "right-2 sm:-right-5"
      )}
    >
      <Image
        src={side === "left" ? sliderArrows.left : sliderArrows.right}
        alt=""
        width={48}
        height={48}
        className="h-full w-full drop-shadow-lg"
      />
    </button>
  );
}
