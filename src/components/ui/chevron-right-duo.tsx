import { cn } from "@/lib/utils";

/**
 * Figma "Button/Arrow/Chevron_Right_Duo" — a 24x24 box holding two chevrons.
 * Percentages from the spec resolve to x 7→11 and 13→17, y 8→16.
 */
export function ChevronRightDuo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M7 8L11 12L7 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8L17 12L13 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
