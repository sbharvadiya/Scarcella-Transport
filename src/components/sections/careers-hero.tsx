import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full sm:h-[640px] lg:h-[700px]">
        <VideoBackground
          src="/videos/careers-page_loop.mp4"
          poster={images.depotGateSign.src}
          cropLetterbox
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(24,28,26,0.1152) -12.66%, rgba(24,28,26,0.72) 100%)",
          }}
        />
        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            <nav
              className="type-body-sm flex items-center gap-1"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-[#A3A3A3] transition-colors hover:text-white">
                Home
              </Link>
              <span className="text-white" aria-hidden>
                /
              </span>
              <span className="text-white">Careers</span>
            </nav>
          </Container>
          <div className="flex flex-1 flex-col justify-end pb-8 sm:pb-16">
            <Container>
              <h1 className="type-h1 max-w-[684px] text-white">
                Join the Team that makes work a great place to come to
              </h1>
              <p className="type-body-lg mt-4 text-white">
                We Are Hiring a Range of Positions
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
