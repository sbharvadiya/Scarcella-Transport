import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function AccreditationHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full sm:h-[520px] lg:h-[560px]">
        <VideoBackground
          src="/videos/safety-page_workshop-mechanics-loop.mp4"
          poster={images.safetyHero.src}
          cropLetterbox
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/[0.1728] to-ink/[0.72] sm:hidden" />
        <div className="absolute inset-0 hidden bg-ink/45 sm:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink via-ink/10 to-ink/30 sm:block" />
        <div className="relative flex h-full flex-col">
          <Container className="hidden pt-28 sm:block sm:pt-32">
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
              <h1 className="max-w-2xl text-[40px] font-semibold leading-12 tracking-[-1px] text-white sm:text-6xl sm:font-bold sm:leading-[1.05] sm:tracking-[-2px] lg:text-7xl">
                We don&apos;t cut corners
              </h1>
              <p className="mt-4 max-w-[684px] text-sm leading-6 tracking-[-0.24px] text-white sm:max-w-[720px] sm:text-lg sm:text-white/80">
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
