export function VideoBackground({
  src,
  poster,
  className,
  cropLetterbox = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  /**
   * The brand-film cuts ship with a ~34px letterbox baked into the 1920x1080
   * frame, so `object-cover` alone leaves black bars across the top and bottom
   * of the hero. Scaling to 1080/(1080-68) pushes them just outside the box.
   */
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
