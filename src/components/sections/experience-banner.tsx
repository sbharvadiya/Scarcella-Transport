import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function ExperienceBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative h-[450px] overflow-hidden rounded-3xl border border-neutral-800 lg:h-[288px] lg:border-neutral-200">
          <SiteImage
            {...images.fleetRoadTrainFull}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/56" />
          <div className="relative flex h-full flex-col justify-between gap-16 px-6 py-8 lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:p-14">
            <div className="flex flex-col gap-4 lg:contents">
              <h2 className="type-h2 text-white lg:w-[742px]">Experience</h2>
              <div className="flex flex-col gap-2 lg:gap-6 lg:w-[509px]">
                <p className="text-base leading-6 text-neutral-300 lg:text-lg lg:tracking-[-0.24px]">
                  These accreditation schemes above are externally audited by a
                  third party.
                </p>
                <div className="border-l-4 border-white pl-6">
                  <p className="type-h5 text-white">
                    Our experience is our advantage.
                  </p>
                </div>
                <p className="text-base leading-6 text-neutral-300 lg:text-lg lg:tracking-[-0.24px]">
                  We have a reliable and dedicated drivers who enjoy what they
                  do. They take pride in attention to detail and delivery on
                  time.
                </p>
              </div>
            </div>
            <Button
              href="mailto:ops@scarcellatransport.com.au"
              variant="primary"
              className="w-full lg:hidden"
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
