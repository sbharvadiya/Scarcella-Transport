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
    <div className="flex flex-wrap items-center gap-5 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm sm:gap-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
          Launch date
        </p>
        <p className="mt-1 text-sm font-medium text-white">Launching {monthLabel}</p>
      </div>
      <div className="flex gap-3">
        <CountBox value={remaining.days} label="Days" />
        <CountBox value={remaining.hrs} label="Hrs" />
        <CountBox value={remaining.min} label="Min" />
      </div>
    </div>
  );
}

function CountBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-white/20 bg-white/5">
      <span className="text-xl font-semibold text-white">{String(value).padStart(2, "0")}</span>
      <span className="text-[10px] text-white/60">{label}</span>
    </div>
  );
}
