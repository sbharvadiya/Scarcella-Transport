import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-surface-2 text-muted",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-50">
          <rect x="3" y="6" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 22l7-6 5 4 6-6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        {label && <span className="text-xs font-medium">{label}</span>}
      </div>
    </div>
  );
}
