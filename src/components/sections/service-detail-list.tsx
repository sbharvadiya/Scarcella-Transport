import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const details = [
  {
    title: "Sydney → Darwin Express",
    image: images.fleetRoadTrainFull,
    body: "Our flagship lane. Triple and quad road trains depart Campbelltown every Tuesday and Friday, running non-stop with two-up driver teams to keep the 4,000 km leg fatigue-compliant and on schedule — door to door in two days.",
    points: ["Twice-weekly departures", "Two-up driver teams", "Fatigue-compliant, non-stop", "2-day express transit"],
  },
  {
    title: "Sydney – Brisbane – Melbourne",
    image: images.fleetLineup,
    body: "Scheduled B-double and single-combination runs across the eastern seaboard triangle, connecting into the same network that carries interstate freight through to Darwin.",
    points: ["Scheduled lanes", "Full and part loads", "B-double & single combinations"],
  },
  {
    title: "Refrigerated Freight",
    image: images.freightForklift,
    body: "The freight the business was founded on. Refrigerated vans, slider vans and tautliners purpose-built for produce and temperature-controlled goods, with unbroken cold chain across every leg.",
    points: ["Fresh produce", "Chilled & frozen", "Cold chain integrity"],
  },
  {
    title: "Dangerous Goods & Oversize",
    image: images.servicesDetail,
    body: "Authorised for packaged dangerous goods and oversized loads. Drop deck mezzanine trailers and flat tops handle the awkward freight, with regional pickups through the Riverina.",
    points: ["DG authorised", "Oversize & drop deck", "Regional NSW pickups"],
  },
  {
    title: "General & Regional Freight",
    image: images.outbackDusk,
    body: "Grain, fertiliser and general produce for rural NSW communities — the run that turned two brothers with a coal truck into a fleet the bush relies on.",
    points: ["Grain & fertiliser", "Rural NSW communities", "Seasonal scheduling"],
  },
];

export function ServiceDetailList() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="divide-y divide-line border-t border-line">
          {details.map((d, i) => (
            <div key={d.title} className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
              <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-2xl font-medium text-ink lg:text-3xl">{d.title}</h3>
                <div className="relative mt-6 h-48 overflow-hidden rounded-2xl sm:h-56">
                  <SiteImage
                    src={d.image.src}
                    alt={d.image.alt}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted">{d.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.points.map((p) => (
                    <span key={p} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink/70">
                      {p}
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
