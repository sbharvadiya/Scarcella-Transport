import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Fills its nearest positioned ancestor with a cropped photo.
 *
 * The parent must be `relative` (or otherwise positioned) and have a height —
 * the same contract the placeholder it replaced relied on.
 */
export function SiteImage({
  src,
  alt,
  className,
  sizes = "100vw",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={cn("object-cover", className)}
    />
  );
}
