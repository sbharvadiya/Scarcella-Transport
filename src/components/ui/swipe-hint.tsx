import { cn } from "@/lib/utils";

export function SwipeHint({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-neutral-600",
        className
      )}
    >
      <span className="text-[11px] leading-4 font-normal uppercase tracking-[3px]">
        Swipe
      </span>
      <ChevronRightDuo />
    </span>
  );
}

function ChevronRightDuo() {
  return (
    <svg
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      {[4, 10.67, 17.33].map((x, i) => (
        <path
          key={x}
          d={`M${x} 5.5 L${x + 2.33} 8 L${x} 10.5`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="swipe-chevron"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </svg>
  );
}
