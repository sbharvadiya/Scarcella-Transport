import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function AccreditationHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
        <VideoBackground
          src="/videos/safety-page_workshop-mechanics-loop.mp4"
          poster={images.safetyHero.src}
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            <nav className="flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">Accreditation and Safety</span>
            </nav>
          </Container>

          <div className="flex flex-1 flex-col justify-end pb-14 sm:pb-16">
            <Container>
              <h1 className="max-w-2xl text-[40px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                We don&apos;t cut corners
              </h1>
              <p className="mt-5 max-w-lg text-base text-white/80">
                Our people and our roads matter. We take our safety, training
                and accreditation seriously.
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
