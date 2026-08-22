"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  const wordSuffix = /[a-z]/i.test(suffix);

  return (
    <p
      ref={ref}
      className="type-h2 w-full text-center text-neutral-950 max-lg:text-[40px] max-lg:font-medium max-lg:leading-[48px] max-lg:tracking-[-1.56px]"
    >
      {display}
      {wordSuffix ? <span className="text-neutral-600">{suffix}</span> : suffix}
    </p>
  );
}
