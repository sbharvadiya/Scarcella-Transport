import { AnnouncementCountdown } from "@/components/sections/announcement-countdown";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ChevronRightDuo } from "@/components/ui/chevron-right-duo";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function AnnouncementBanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[450px] w-full lg:h-[288px]">
            <SiteImage {...images.outbackDusk} />
          </div>
          <div className="absolute inset-0 bg-[rgba(24,28,26,0.56)]" />
          <div className="absolute inset-0 flex flex-col justify-center gap-16 px-6 py-8 lg:flex-row lg:items-center lg:gap-4 lg:p-14">
            <div className="flex flex-col justify-center gap-4 lg:flex-1">
              <h2 className="type-h2 text-white">
                New Adelaide <br className="lg:hidden" />
                branch
              </h2>
              <p className="type-body-md text-neutral-300 lg:text-[18px] lg:tracking-[-0.24px]">
                Two runs a week, Adelaide to Darwin.
              </p>
              <Button
                href="/adelaide"
                variant="primary"
                size="none"
                className="type-label-lg w-full px-6 py-4 lg:w-40"
              >
                Learn More
                <ChevronRightDuo />
              </Button>
            </div>
            <AnnouncementCountdown className="order-first flex gap-2 lg:order-none lg:gap-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
