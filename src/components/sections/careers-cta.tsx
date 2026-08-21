import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function CareersCta() {
  return (
    <section className="bg-ink p-14 text-white sm:pb-14">
      <Container>
        <div className="text-left sm:text-center">
          <Eyebrow className="text-white/50">Join the team</Eyebrow>
          <h2 className="mt-4 text-[28px] font-medium sm:text-4xl lg:text-5xl">
            Join the green and white.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:mx-auto">
            We&apos;re a family-run operation that looks after the people who
            keep the wheels turning. If that sounds like you, we&apos;d like
            to hear from you.
          </p>
        </div>

        <div className="relative mt-8 h-[340px] overflow-hidden rounded-3xl sm:h-[240px]">
          <SiteImage {...images.mechanicCummins} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent sm:bg-gradient-to-r sm:from-ink/85 sm:via-ink/40 sm:to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <p className="text-xs font-medium uppercase tracking-wider text-white/60">
              Now hiring · Syd Depot
            </p>
            <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg">
                <h3 className="text-2xl font-medium sm:text-3xl">
                  Qualified Diesel Mechanic
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Positions available at our Sydney depot in Campbelltown NSW.
                  Work on a modern, well-maintained fleet of Kenworth and Mack
                  prime movers with a crew that takes pride in the gear.
                </p>
              </div>
              <a
                href="mailto:ops@scarcellatransport.com.au"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-bright px-5 py-3 text-sm font-medium text-white hover:bg-brand"
              >
                <Image src="/img/mail-02.svg" alt="" width={16} height={14} /> Email to apply
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          To apply for any role, email{" "}
          <a href="mailto:ops@scarcellatransport.com.au" className="font-medium text-white underline">
            ops@scarcellatransport.com.au
          </a>{" "}
          with your details and experience.
        </p>
      </Container>
    </section>
  );
}
