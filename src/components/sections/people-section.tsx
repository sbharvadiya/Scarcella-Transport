import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function PeopleSection() {
  return (
    <section className="bg-ink pt-14 pb-18 text-white lg:pt-20">
      <Container>
        <div className="mx-auto max-w-[918px] text-left sm:text-center">
          <p className="type-caption-caps text-neutral-300">
            The people in the green and white
          </p>
          <h2 className="type-h2 mt-4 text-white">
            Driven by family.
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Carried by the best crews on the lane.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900 p-2 pb-4 sm:p-4">
            <div className="relative h-[256px] overflow-hidden rounded-2xl sm:h-[320px] sm:rounded-3xl lg:h-96">
              <SiteImage
                {...images.liveryDetail}
                sizes="(max-width: 1023px) 100vw, 652px"
              />
            </div>
            <div className="mt-4 px-2 sm:mt-8 sm:px-4 sm:pb-4">
              <h3 className="type-h4 text-white">The family</h3>
              <p className="type-body-md mt-4 text-neutral-400">
                Family-run since the late 1960s, with a Scarcella still
                steering the business today. Decisions get made by people
                whose surname is on the door — not a boardroom three states
                away.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 p-2 pb-4 sm:flex-row sm:items-center sm:gap-8 sm:p-4">
              <div className="order-2 px-2 sm:order-none sm:flex-1 sm:px-0 sm:pl-4 lg:w-[279px] lg:flex-none">
                <h3 className="type-h4 text-white">The drivers</h3>
                <p className="type-body-md mt-4 text-neutral-400">
                  The two-up teams that run Sydney–Darwin non-stop are the
                  backbone of this company — professional, fatigue-compliant,
                  and proud of the gear they drive.
                </p>
              </div>
              <div className="relative order-1 h-[256px] shrink-0 overflow-hidden rounded-2xl sm:order-none sm:h-[224px] sm:w-[42%] sm:rounded-3xl lg:h-64 lg:w-[324px]">
                <SiteImage
                  {...images.fleetLineup}
                  sizes="(max-width: 639px) 100vw, 324px"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 p-2 pb-4 sm:flex-row sm:items-center sm:gap-8 sm:p-4">
              <div className="order-2 px-2 sm:order-none sm:flex-1 sm:px-0 sm:pl-4 lg:w-[279px] lg:flex-none">
                <h3 className="type-h4 text-white">The workshop</h3>
                <p className="type-body-md mt-4 text-neutral-400">
                  Behind every on-time delivery is a crew that pulls each
                  truck in weekly, and an approved repairer network that
                  covers the fleet anywhere in the country.
                </p>
              </div>
              <div className="relative order-1 h-[256px] shrink-0 overflow-hidden rounded-2xl sm:order-none sm:h-[224px] sm:w-[42%] sm:rounded-3xl lg:h-64 lg:w-[324px]">
                <SiteImage
                  {...images.workshopMechanic}
                  sizes="(max-width: 639px) 100vw, 324px"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="type-h4 mx-auto mt-10 max-w-[1150px] text-left text-white sm:text-center">
          Supporting the Northern Territory&apos;s remote communities isn&apos;t
          a market segment to us — it&apos;s the run we&apos;ve built our
          lives around.
        </p>
      </Container>
    </section>
  );
}
