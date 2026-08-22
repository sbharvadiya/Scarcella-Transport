import Image from "next/image";
import { Container } from "@/components/ui/container";
import { depots } from "@/lib/nav";

// Each map graphic already has its own pin baked in (dashed ring + solid
// marker) at the depot's real position in the source 203×189 viewBox. Every
// card places that same 200×186 graphic in the exact same bottom-right spot
// — so the maps sit level with each other card-to-card — and each pin just
// falls wherever it naturally is within that fixed frame.
const depotMap: Record<string, string> = {
  "Sydney — Campbelltown": "/img/map-sydney.svg",
  "Darwin — Yarrawonga": "/img/map-darwin.svg",
  Adelaide: "/img/map-adelaide.svg",
};

export function LocationsGrid({
  title = "Head Office",
  description = (
    <>
      <span className="font-semibold text-ink">Three locations.</span> One
      trusted transport network.
    </>
  ),
}: {
  title?: string;
  description?: React.ReactNode;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-medium text-ink sm:text-5xl">{title}</h2>
          {description && <p className="mt-4 text-base text-muted">{description}</p>}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {depots.map((d) => (
            <div key={d.name} className="relative overflow-hidden rounded-2xl bg-surface">
              <Image
                src={depotMap[d.name]}
                alt=""
                width={200}
                height={186}
                className="pointer-events-none absolute right-2 bottom-0"
              />

              <div className="relative p-6">
                <h3 className="text-2xl font-medium text-ink">{d.name}</h3>
                <p className="mt-3 text-sm text-muted">{d.address}</p>

                <div className="mt-12 min-h-[84px] space-y-3">
                  <p className="flex items-center gap-2 text-sm text-ink">
                    <Image src="/img/elements (1).svg" alt="" width={11} height={16} className="text-muted" />
                    {d.phone}
                  </p>
                  {"afterHoursLabel" in d && (
                    <div>
                      <p className="text-xs text-muted">{d.afterHoursLabel}</p>
                      <p className="mt-1 flex items-center gap-2 text-sm text-ink">
                        <Image src="/img/elements (1).svg" alt="" width={11} height={16} className="text-muted" />
                        {d.afterHoursPhone}
                      </p>
                    </div>
                  )}
                </div>
                <div className="border-t border-line pt-5">
                  <p className="flex items-center gap-2 text-sm text-ink">
                    <Image src="/img/elements (2).svg" alt="" width={13} height={11} className="text-muted" />
                    {d.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
