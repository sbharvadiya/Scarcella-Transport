import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { Button } from "@/components/ui/button";
import { LaunchCountdown } from "@/components/sections/launch-countdown";
import { images } from "@/lib/images";

export function AdelaideHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[560px] w-full sm:h-[640px] lg:h-[700px]">
        <SiteImage
          src={images.depotGateSign.src}
          alt={images.depotGateSign.alt}
          eager
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            <nav className="flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">Adelaide branch</span>
            </nav>
          </Container>

          <div className="flex flex-1 flex-col justify-end pb-14 sm:pb-16">
            <Container>
              <h1 className="max-w-2xl text-[40px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Adelaide to
                <br />
                Darwin Freight
              </h1>
              <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">
                New Adelaide branch. Two Adelaide ↔ Darwin services per week.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href="/quote" variant="primary" size="lg">
                  Enquire About Adelaide Freight <span aria-hidden>»</span>
                </Button>
                <LaunchCountdown />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
