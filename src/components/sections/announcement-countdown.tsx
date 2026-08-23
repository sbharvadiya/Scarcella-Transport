"use client";

import { useEffect, useState } from "react";

export const ADELAIDE_LAUNCH = new Date("2026-09-01T00:00:00+10:00");

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function getRemaining() {
  const diff = Math.max(0, ADELAIDE_LAUNCH.getTime() - Date.now());
  return [
    { l: "Days", v: Math.floor(diff / DAY) },
    { l: "Hrs", v: Math.floor((diff % DAY) / HOUR) },
    { l: "Min", v: Math.floor((diff % HOUR) / MINUTE) },
  ];
}

const box =
  "flex h-[130px] flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.24] bg-white/[0.08] p-6 text-white backdrop-blur-[6px] lg:h-[146px] lg:w-[111px] lg:flex-none";

export function AnnouncementCountdown({ className }: { className?: string }) {
  const [units, setUnits] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setUnits(getRemaining()), 1_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={className}>
      {units.map((u) => (
        <div key={u.l} className={box}>
          <span
            suppressHydrationWarning
            className="text-[40px] font-semibold leading-[48px] tracking-[-1px] lg:text-[56px] lg:font-medium lg:leading-[64px] lg:tracking-[-2px]"
          >
            {String(u.v).padStart(2, "0")}
          </span>
          <span className="text-center text-[13px] leading-4 text-neutral-300">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}
