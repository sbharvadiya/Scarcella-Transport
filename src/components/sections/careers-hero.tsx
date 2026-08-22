import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[560px] w-full sm:h-[640px] lg:h-[700px]">
        <VideoBackground
          src="/videos/careers-page_loop.mp4"
          poster={images.depotGateSign.src}
          cropLetterbox
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            <nav className="flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">Careers</span>
            </nav>
          </Container>

          <div className="flex flex-1 flex-col justify-end pb-14 sm:pb-16">
            <Container>
              <h1 className="type-h1 max-w-2xl text-white">
                Join the Team that makes work a great place to come to
              </h1>
              <p className="mt-5 text-base text-white/90 sm:text-lg">
                We Are Hiring a Range of Positions
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
