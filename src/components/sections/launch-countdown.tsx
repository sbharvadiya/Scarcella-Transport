"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-09-15T00:00:00+10:00");

function getRemaining() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hrs: Math.floor((diff % 86_400_000) / 3_600_000),
    min: Math.floor((diff % 3_600_000) / 60_000),
  };
}

export function LaunchCountdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 30_000);
    return () => clearInterval(id);
  }, []);

  const monthLabel = LAUNCH_DATE.toLocaleDateString("en-AU", { month: "long" });

  return (
    <div className="flex w-full items-center gap-2 rounded-xl border border-white/8 bg-white/8 p-3 backdrop-blur-[6px] sm:w-fit sm:gap-8 sm:px-4 sm:py-3">
      <div className="type-h5 flex flex-1 flex-col items-start gap-2 text-white">
        <p className="text-[13px] leading-4 font-normal uppercase">Launch date</p>
        <p>Launching {monthLabel}</p>
      </div>
      <div className="flex items-start gap-1 sm:gap-2">
        <CountBox value={remaining.days} label="Days" />
        <CountBox value={remaining.hrs} label="Hrs" />
        <CountBox value={remaining.min} label="Min" />
      </div>
    </div>
  );
}

function CountBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex h-18.5 w-14 flex-col items-center justify-center gap-0 rounded-xl border border-[#C9CBC2] p-3 sm:h-20.5 sm:w-16">
      <span className="text-2xl leading-8 font-medium tracking-[-0.72px] text-white sm:text-[32px] sm:leading-10 sm:tracking-[-1px]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] leading-4 text-white">{label}</span>
    </div>
  );
}
