import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function ExperienceBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl sm:h-[300px]">
          <SiteImage
            {...images.fleetRoadTrainFull}
            sizes="100vw"
            className="object-cover"
          />
          {/* Mobile stacks the copy, so the scrim runs top-to-bottom there and
              left-to-right once the layout goes side-by-side. */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/80 sm:bg-gradient-to-r sm:from-ink/85 sm:via-ink/40 sm:to-ink/70" />

          <div className="relative flex h-full flex-col justify-center gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-14">
            <h2 className="text-4xl font-medium text-white sm:text-6xl">
              Experience
            </h2>
            <div className="max-w-md">
              <p className="text-sm text-white/70">
                These accreditation schemes above are externally audited by a
                third party.
              </p>
              <p className="mt-4 border-l-4 border-white pl-4 text-lg font-medium text-white">
                Our experience is our advantage.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                We have a reliable and dedicated drivers who enjoy what they
                do. They take pride in attention to detail and delivery on
                time.
              </p>
            </div>

            {/* Design surfaces the ops address as a tap target on mobile only;
                on desktop the footer already carries it. */}
            <Button
              href="mailto:ops@scarcellatransport.com.au"
              variant="primary"
              className="mt-2 w-full sm:hidden"
            >
              <Image
                src="/img/icon-mail-02.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
                aria-hidden
              />
              ops@scarcellatransport.com.au
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
