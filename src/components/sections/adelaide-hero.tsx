import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { Button } from "@/components/ui/button";
import { LaunchCountdown } from "@/components/sections/launch-countdown";
import { images } from "@/lib/images";

export function AdelaideHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[840px] w-full sm:h-[640px] lg:h-[700px]">
        <div className="absolute inset-0 sm:hidden">
          <SiteImage
            src={images.adelaideHeroBannerMobile.src}
            alt={images.adelaideHeroBannerMobile.alt}
            sizes="100vw"
            eager
          />
        </div>
        <div className="absolute inset-0 hidden sm:block">
          <SiteImage
            src={images.adelaideHeroBanner.src}
            alt={images.adelaideHeroBanner.alt}
            sizes="100vw"
            eager
          />
        </div>
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
        <div className="relative flex h-full flex-col pt-28 pb-4 sm:pt-32 sm:pb-16">
          <Container>
            <nav
              className="flex items-center gap-1 text-[11px] leading-4 text-white/60 sm:gap-2 sm:text-sm"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">Adelaide branch</span>
            </nav>
          </Container>
          <Container className="mt-4 sm:mt-0 sm:flex sm:flex-1 sm:flex-col sm:justify-end">
            <h1 className="type-h1 max-w-2xl text-white">
              Adelaide to
              <br />
              Darwin Freight
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-6 font-medium tracking-[-0.24px] text-white sm:mt-5 sm:font-normal sm:text-white/80">
              New Adelaide branch. Two Adelaide ↔ Darwin services per week.
            </p>
          </Container>
          <Container className="mt-auto sm:mt-0">
            <div className="flex flex-col items-stretch gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-5">
              <LaunchCountdown />
              <Button
                href="/#quote"
                variant="primary"
                size="lg"
                className="order-last w-full sm:order-first sm:w-auto"
              >
                Enquire About Adelaide Freight <span aria-hidden>»</span>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
