import Image from "next/image";
import { Container } from "@/components/ui/container";
import { depots } from "@/lib/nav";

const depotMap: Record<string, { src: string; width: number; height: number }> = {
  "Sydney — Campbelltown": { src: "/img/map-adelaide.svg", width: 203, height: 189 },
  "Darwin — Yarrawonga": { src: "/img/map-darwin.svg", width: 202, height: 205 },
  Adelaide: { src: "/img/map-sydney.svg", width: 211, height: 189 },
};

function ContactLink({
  icon,
  href,
  children,
}: {
  icon: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="type-label-lg flex w-fit items-center gap-2 text-neutral-800 transition-colors hover:text-ink"
    >
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0"
        aria-hidden
      />
      {children}
    </a>
  );
}

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
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="type-h2 text-ink">{title}</h2>
          {description && (
            <p className="type-body-md-medium text-neutral-800">{description}</p>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {depots.map((d) => {
            const map = depotMap[d.name];
            return (
              <div
                key={d.name}
                className="relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-line bg-surface p-6 lg:min-h-[288px]"
              >
                {map && (
                  <Image
                    src={map.src}
                    alt=""
                    width={map.width}
                    height={map.height}
                    aria-hidden
                    className="pointer-events-none absolute right-4 bottom-3.5 -z-10 max-w-none"
                  />
                )}

                <div className="flex flex-col gap-4">
                  <h3 className="type-h4 text-ink">{d.name}</h3>
                  <p className="type-body-sm text-ink">{d.address}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col justify-center gap-3">
                    <ContactLink icon="/img/icon-smart-phone-01.svg" href={d.phoneHref}>
                      {d.phone}
                    </ContactLink>
                    {"afterHoursLabel" in d && (
                      <div className="flex flex-col justify-center">
                        <p className="text-[11px] leading-4 text-neutral-500">
                          {d.afterHoursLabel}
                        </p>
                        <ContactLink
                          icon="/img/icon-smart-phone-01.svg"
                          href={d.afterHoursPhoneHref}
                        >
                          {d.afterHoursPhone}
                        </ContactLink>
                      </div>
                    )}
                  </div>
                  <div className="h-px w-full bg-neutral-300" />
                  <ContactLink icon="/img/icon-mail-02.svg" href={`mailto:${d.email}`}>
                    {d.email}
                  </ContactLink>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
