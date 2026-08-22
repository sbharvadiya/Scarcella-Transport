import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function ExperienceBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[300px]">
          <SiteImage
            {...images.fleetRoadTrainFull}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/70" />

          <div className="relative flex h-full flex-col justify-center gap-8 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <h2 className="text-4xl font-medium text-white sm:text-6xl">
              Experience
            </h2>
            <div className="max-w-md">
              <p className="text-sm text-white/70">
                These accreditation schemes above are externally audited by a
                third party.
              </p>
              <p className="mt-4 border-l-2 border-brand-bright pl-4 text-lg font-medium text-white">
                Our experience is our advantage.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                We have a reliable and dedicated drivers who enjoy what they
                do. They take pride in attention to detail and delivery on
                time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
