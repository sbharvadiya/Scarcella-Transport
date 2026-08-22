import Image from "next/image";
import { cn } from "@/lib/utils";

export function SiteImage({
  src,
  alt,
  className,
  sizes = "100vw",
  eager = false,
  lazy = true,
  fit = "cover",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  lazy?: boolean;
  fit?: "cover" | "contain";
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager || !lazy ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      style={style}
      className={cn(fit === "cover" ? "object-cover" : "object-contain", className)}
    />
  );
}
