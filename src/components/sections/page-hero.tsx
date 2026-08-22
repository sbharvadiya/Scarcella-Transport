import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { VideoBackground } from "@/components/ui/video-background";
import { cn } from "@/lib/utils";

export function ScriptWord({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  /**
   * `default` keeps the shared hero sizing. Pass `custom` when the caller
   * pins its own font-size — `cn` only joins classes, so leaving the preset
   * on would make the winner depend on stylesheet order rather than intent.
   */
  size?: "default" | "custom";
}) {
  return (
    <span
      className={cn(
        "font-script italic",
        size === "default" && "text-5xl sm:text-6xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  video,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  imageAlt: string;
  video?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[420px] w-full sm:h-[560px]">
        {video ? (
          <VideoBackground src={video} cropLetterbox />
        ) : image ? (
          <SiteImage src={image} alt={imageAlt} eager />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20" />

        <div className="relative flex h-full flex-col justify-end pb-16 pt-32">
          <Container>
            <Eyebrow className="text-white/50">{eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[32px] font-medium leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80">{description}</p>
          </Container>
        </div>
      </div>
    </section>
  );
}
