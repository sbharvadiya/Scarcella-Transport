import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

/*
 * Figma "Group 38": a 1384x912 block on Neutral/950. The header (Frame 135) is
 * a 918px centred stack, then a two-column card row — one 684x592 card beside
 * two stacked 684x288 cards on a 16px gutter (684*2 + 16 = the container's
 * 1384) — closing on a 1150px centred Heading/H4 pull quote.
 *
 * The cards carry two different insets: the photos sit on the card's 16px
 * padding, the copy on 32px. So each card pads 16 and the copy adds its own 16
 * on top rather than the whole card sharing one measure.
 */
export function PeopleSection() {
  return (
    <section className="bg-ink pt-14 pb-18 text-white lg:pt-20">
      <Container>
        {/* Frame 135: 918 wide, centred, 16px between the two lines. The
            frame's third line (the "cold chain produce" standfirst) is
            display:none, so it is not rendered here. */}
        <div className="mx-auto max-w-[918px] text-left sm:text-center">
          <p className="type-caption-caps text-neutral-300">
            The people in the green and white
          </p>
          {/* The frame breaks the line after the first sentence — at 918px
              the natural wrap would take "Carried by the" up onto line one —
              so the break is hand-placed, and only from lg, where the 1512
              frame applies. */}
          <h2 className="type-h2 mt-4 text-white">
            Driven by family.
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Carried by the best crews on the lane.
          </h2>
        </div>

        {/* Group 37 sits 40px under the header. */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Group 32 — 684x592: photo on the 16px padding, copy on 32, with a
              32px gap between them (16 + 384 + 32 + 128 + 32 = 592). */}
          <div className="flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900 p-4">
            <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[320px] lg:h-96">
              <SiteImage
                {...images.liveryDetail}
                sizes="(max-width: 1023px) 100vw, 652px"
              />
            </div>
            <div className="mt-8 px-4 pb-4">
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
            {/* Group 35 / Group 36 — 684x288 each. The copy is 279 wide and
                vertically centred against the 324x256 photo, with a 32px gap
                between the two (32 + 279 + 32 + 324 + 16 = 684). */}
            <div className="flex flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="sm:flex-1 sm:pl-4 lg:w-[279px] lg:flex-none">
                <h3 className="type-h4 text-white">The drivers</h3>
                <p className="type-body-md mt-4 text-neutral-400">
                  The two-up teams that run Sydney–Darwin non-stop are the
                  backbone of this company — professional, fatigue-compliant,
                  and proud of the gear they drive.
                </p>
              </div>
              <div className="relative h-[160px] shrink-0 overflow-hidden rounded-3xl sm:h-[224px] sm:w-[42%] lg:h-64 lg:w-[324px]">
                <SiteImage
                  {...images.fleetLineup}
                  sizes="(max-width: 639px) 100vw, 324px"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 p-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="sm:flex-1 sm:pl-4 lg:w-[279px] lg:flex-none">
                <h3 className="type-h4 text-white">The workshop</h3>
                <p className="type-body-md mt-4 text-neutral-400">
                  Behind every on-time delivery is a crew that pulls each
                  truck in weekly, and an approved repairer network that
                  covers the fleet anywhere in the country.
                </p>
              </div>
              <div className="relative h-[160px] shrink-0 overflow-hidden rounded-3xl sm:h-[224px] sm:w-[42%] lg:h-64 lg:w-[324px]">
                <SiteImage
                  {...images.workshopMechanic}
                  sizes="(max-width: 639px) 100vw, 324px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 1150 wide, centred, 40px under the cards. */}
        <p className="type-h4 mx-auto mt-10 max-w-[1150px] text-left text-white sm:text-center">
          Supporting the Northern Territory&apos;s remote communities isn&apos;t
          a market segment to us — it&apos;s the run we&apos;ve built our
          lives around.
        </p>
      </Container>
    </section>
  );
}
