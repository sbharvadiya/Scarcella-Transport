import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function AccreditationHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full lg:h-[672px]">
        <VideoBackground
          src="/videos/safety-page_workshop-mechanics-loop.mp4"
          poster={images.safetyHero.src}
          cropLetterbox
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,28,26,0.1728)_0%,rgba(24,28,26,0.72)_100%)] lg:bg-[linear-gradient(251.7deg,rgba(24,28,26,0.1152)_13.43%,rgba(24,28,26,0.72)_88.16%)]" />
        <div className="relative flex h-full flex-col">
          <Container className="pt-28 lg:pt-32">
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
              <span className="text-white">Accreditation and Safety</span>
            </nav>
          </Container>
          <div className="flex flex-1 flex-col justify-end pb-14 lg:pb-16">
            <Container>
              <h1 className="type-h1 max-w-[343px] text-white lg:max-w-[597px]">
                We don&apos;t cut corners
              </h1>
              <p className="type-body-lg mt-4 max-w-[684px] text-white">
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
