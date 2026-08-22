import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const services = [
  {
    tag: "Flagship lane",
    title: "Sydney → Darwin Express",
    desc: "Departures every Tuesday and Friday. Triple and quad road trains with two-up driver teams running non-stop — fatigue-compliant, two-day express.",
    chips: ["Tue & Fri", "2-day express"],
    bg: images.serviceSydneyDarwin,
  },
  {
    tag: "Eastern seaboard",
    title: "Sydney – Brisbane – Melbourne",
    desc: "B-double and single combinations on the east-coast triangle, with interstate full loads from Brisbane and Melbourne through to Darwin.",
    chips: ["Scheduled + full loads"],
    bg: images.serviceEasternSeaboard,
  },
  {
    tag: "Cold chain",
    title: "Refrigerated Freight",
    desc: "Refrigerated vans, slider vans and tautliners purpose-built for produce and temperature-controlled goods — the freight we were founded on.",
    chips: ["Produce", "Chilled", "Frozen"],
    bg: images.serviceRefrigerated,
  },
  {
    tag: "Specialised",
    title: "Dangerous Goods & Oversize",
    desc: "Authorised for packaged dangerous goods and oversized loads. Drop deck mezzanine trailers, flat tops, and regional pickups through the Riverina.",
    chips: ["DG authorised", "Oversize"],
    bg: images.serviceDangerousGoods,
  },
];

export function ServicesGrid() {
  return (
    <section className="pt-20 pb-14 sm:pt-28 sm:pb-16">
      <Container>
        {/* Figma "Frame 88": 829px wide, centred in the 1512 frame, with a flat
            16px gap between all three lines — so the eyebrow, heading and
            standfirst all share one measure rather than narrowing as they go. */}
        <div className="mx-auto max-w-[829px] text-left sm:text-center">
          <p className="type-caption-caps text-neutral-600">What we move</p>
          <h2 className="type-h2 mt-4 text-ink">
            Scheduled lanes. Specialised gear. One family answerable for all
            of it.
          </h2>
          <p className="type-body-lg mt-4 text-neutral-600">
            From cold chain produce to oversized loads — if it has to be
            there, it goes on green and white.
          </p>
        </div>

        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>

        {/* "Frame 98" sits 40px under the header block: four 334px cards on a
            16px gutter, which is exactly the container's 1384px. Below sm the
            row becomes the swipe carousel the mobile frame uses. */}
        <div className="mt-4 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              /* Figma card: 334x424, fill Neutral/100, 1px Neutral/300 border,
                 24px radius, 24px padding. The height is a floor, not a fix, so
                 a title that wraps one line further cannot clip the chips. */
              className="relative flex min-h-100 w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-neutral-300 bg-surface p-6 sm:w-auto lg:min-h-[424px]"
            >
              {/* The export is the full 334x424 card art — map/graphic with the
                  180deg #F5F6F3 -> 16% fade already flattened into it — so it
                  fills the card and the copy reads straight over its top half. */}
              <SiteImage
                {...s.bg}
                sizes="(max-width: 639px) 85vw, (max-width: 1023px) 50vw, 334px"
                className="pointer-events-none select-none object-bottom-right"
              />
              <div className="relative flex flex-1 flex-col">
                {/* "Frame 84": outline-only chip — no fill — 8px/12px padding
                    on a 32px radius, Caption/lg caps in Neutral/600. */}
                <span className="type-caption-caps inline-flex self-start items-center rounded-full border border-neutral-300 px-3 py-2 text-neutral-600">
                  {s.tag}
                </span>
                {/* Heading/H4 with the 24px gap the frame puts between the chip
                    and the title block, and again between title and copy. */}
                <h3 className="mt-6 text-xl font-medium leading-snug text-ink lg:text-[32px] lg:leading-10 lg:tracking-[-1px]">
                  {s.title}
                </h3>
                <p className="type-body-sm mt-6 flex-1 text-neutral-700">
                  {s.desc}
                </p>
                {/* Pinned to the card's bottom padding, which is where the
                    frame's 40px chip row lands (top 360 of 424). */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-neutral-300 px-3 py-2 text-sm font-medium text-ink sm:text-base"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
