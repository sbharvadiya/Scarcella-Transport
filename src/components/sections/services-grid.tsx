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
        <div className="mx-auto max-w-[829px] text-left sm:text-center">
          <p className="type-caption-caps text-neutral-600">What we move</p>
          <h2 className="type-h2 mt-4 text-ink">
            Scheduled lanes. Specialised gear. One family answerable for all
            of it.
          </h2>
          <p className="type-body-md mt-4 text-neutral-600 lg:text-[18px] lg:tracking-[-0.24px]">
            From cold chain produce to oversized loads — if it has to be
            there, it goes on green and white.
          </p>
        </div>
        <div className="mt-2 flex items-center justify-end gap-2 sm:hidden">
          <span className="text-[11px] leading-4 font-normal uppercase tracking-[3px] text-neutral-600">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>
        <div className="mt-2 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative flex min-h-[368px] w-[285px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-neutral-300 bg-surface p-4 sm:w-auto sm:p-6 lg:min-h-[424px]"
            >
              <SiteImage
                {...s.bg}
                sizes="(max-width: 639px) 285px, (max-width: 1023px) 50vw, 334px"
                className="pointer-events-none select-none object-bottom-right"
              />
              <div className="relative flex flex-1 flex-col">
                <span className="type-caption-caps inline-flex self-start items-center rounded-full border border-neutral-300 px-3 py-2 text-neutral-600">
                  {s.tag}
                </span>
                <h3 className="mt-4 text-2xl font-medium leading-8 tracking-[-0.72px] text-ink sm:mt-6 lg:text-[32px] lg:leading-10 lg:tracking-[-1px]">
                  {s.title}
                </h3>
                <p className="type-body-sm mt-4 flex-1 text-neutral-700 sm:mt-6">
                  {s.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-neutral-300 px-3 py-1 text-sm font-medium text-ink sm:py-2 sm:text-base"
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
