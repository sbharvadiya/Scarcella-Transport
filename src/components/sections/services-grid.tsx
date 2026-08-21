import { Container } from "@/components/ui/container";
import { Eyebrow, Pill } from "@/components/ui/badge";
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
    <section className="py-20 sm:py-28">
      <Container>
        <div className="text-left sm:text-center">
          <Eyebrow>What we move</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[28px] font-medium leading-tight text-ink sm:mx-auto sm:text-4xl lg:text-5xl">
            Scheduled lanes. Specialised gear. One family answerable for all
            of it.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted sm:mx-auto">
            From cold chain produce to oversized loads — if it has to be
            there, it goes on green and white.
          </p>
        </div>

        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>

        <div className="mt-4 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative flex min-h-100 w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:w-auto"
            >
              <SiteImage
                {...s.bg}
                className="pointer-events-none select-none object-bottom-right"
              />
              <div className="relative flex flex-1 flex-col">
                <Pill className="self-start">{s.tag}</Pill>
                <h3 className="mt-5 text-xl font-medium leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink/70"
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
