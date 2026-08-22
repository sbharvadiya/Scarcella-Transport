import Link from "next/link";
import { Container } from "@/components/ui/container";
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
  breadcrumb,
  title,
  description,
  image,
  imageAlt,
  video,
}: {
  breadcrumb: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  imageAlt: string;
  video?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full lg:h-[672px]">
        {video ? (
          <VideoBackground src={video} cropLetterbox />
        ) : image ? (
          <SiteImage src={image} alt={imageAlt} eager />
        ) : null}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(257.43deg, rgba(24,28,26,0.1152) 35.08%, rgba(24,28,26,0.72) 74.29%)",
          }}
        />
        <div className="relative flex h-full flex-col">
          <Container className="pt-[92px] lg:pt-[112px]">
            <nav
              className="type-body-sm flex items-center gap-1"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-neutral-400 hover:text-white">
                Home
              </Link>
              <span className="text-white" aria-hidden>
                /
              </span>
              <span className="text-white">{breadcrumb}</span>
            </nav>
          </Container>
          <div className="flex flex-1 items-end pb-8 lg:pb-[48px]">
            <Container className="flex flex-col gap-4">
              <h1 className="type-h1 max-w-[343px] text-white lg:max-w-[801px]">
                {title}
              </h1>
              <p className="type-body-lg max-w-[343px] text-white lg:max-w-[801px]">
                {description}
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
