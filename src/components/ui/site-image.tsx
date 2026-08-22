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
  fit = "cover",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  /**
   * `cn` only joins classes, so passing `object-contain` through `className`
   * would leave both object-fit utilities on the element and let stylesheet
   * order pick the winner. Choose the fit here instead.
   */
  fit?: "cover" | "contain";
  /**
   * Merged onto the inline style `fill` generates, so it can override the
   * inset it hardcodes (e.g. offsetting a decorative graphic down the card).
   */
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      style={style}
      className={cn(fit === "cover" ? "object-cover" : "object-contain", className)}
    />
  );
}
