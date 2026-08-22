export function VideoBackground({
  src,
  poster,
  className,
  cropLetterbox = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  cropLetterbox?: boolean;
}) {
  return (
    <video
      className={className ?? "absolute inset-0 h-full w-full object-cover"}
      style={cropLetterbox ? { transform: "scale(1.0672)" } : undefined}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
