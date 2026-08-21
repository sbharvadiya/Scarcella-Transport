import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function PeopleSection() {
  return (
    <section className="bg-ink py-14 text-white sm:py-14">
      <Container>
        <div className="text-left sm:text-center">
          <Eyebrow className="text-white/50">The people in the green and white</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[28px] font-medium leading-tight sm:mx-auto sm:text-4xl lg:text-5xl">
            Driven by family. Carried by the best crews on the lane.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="relative h-[280px] sm:h-[320px]">
              <SiteImage {...images.liveryDetail} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium">The family</h3>
              <p className="mt-3 text-sm text-white/60">
                Family-run since the late 1960s, with a Scarcella still
                steering the business today. Decisions get made by people
                whose surname is on the door — not a boardroom three states
                away.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-5">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-stretch">
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="text-2xl font-medium">The drivers</h3>
                <p className="mt-3 text-sm text-white/60">
                  The two-up teams that run Sydney–Darwin non-stop are the
                  backbone of this company — professional, fatigue-compliant,
                  and proud of the gear they drive.
                </p>
              </div>
              <div className="relative h-[160px] overflow-hidden rounded-xl sm:h-auto sm:w-[42%]">
                <SiteImage {...images.fleetLineup} sizes="(max-width: 640px) 100vw, 25vw" />
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-stretch">
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="text-2xl font-medium">The workshop</h3>
                <p className="mt-3 text-sm text-white/60">
                  Behind every on-time delivery is a crew that pulls each
                  truck in weekly, and an approved repairer network that
                  covers the fleet anywhere in the country.
                </p>
              </div>
              <div className="relative h-[160px] overflow-hidden rounded-xl sm:h-auto sm:w-[42%]">
                <SiteImage {...images.workshopMechanic} sizes="(max-width: 640px) 100vw, 25vw" />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg font-medium sm:text-xl">
          Supporting the Northern Territory&apos;s remote communities isn&apos;t
          a market segment to us — it&apos;s the run we&apos;ve built our
          lives around.
        </p>
      </Container>
    </section>
  );
}
