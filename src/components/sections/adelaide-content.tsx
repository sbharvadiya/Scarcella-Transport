import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";
import { depots as depotList } from "@/lib/nav";

const stats = [
  { value: "2 runs", suffix: " / week", label: "Adelaide ↔ Darwin" },
  { value: "50+", label: "years family-run experience" },
  { value: "Own fleet", label: "Scarcella-operated trucks" },
  { value: "Own drivers", label: "dedicated driving teams" },
];

const serviceColumns = [
  ["2 runs per week", "Refrigerated freight", "DG freight"],
  ["Adelaide ↔ Darwin", "General freight", "Transit expectations"],
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} className="border-t  border-b border-line py-4 last:pb-3">
          <span className="flex items-center gap-3 md:text-[18px] font-medium text-ink sm:text-base">
            <span className="h-2 w-2 shrink-0  bg-brand-bright" aria-hidden />
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AdelaideContent() {
  const adelaide = depotList.find((d) => d.name === "Adelaide")!;

  return (
    <>
      <section className="border-line bg-white py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 text-left sm:grid-cols-4">
            {stats.map((s, i) => {
              const isRightCol = i % 2 === 1;
              const isBottomRow = i >= 2;
              return (
                <div key={s.label} className="relative px-4 py-6 sm:py-0 text-center">
                  {isRightCol && (
                    <span
                      aria-hidden
                      className="divider-fade-y absolute inset-y-0 left-0 w-px sm:hidden"
                    />
                  )}
                  {isBottomRow && (
                    <span
                      aria-hidden
                      className="divider-fade-x absolute inset-x-0 top-0 h-px sm:hidden"
                    />
                  )}
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="divider-fade-y absolute inset-y-0 left-0 hidden w-px sm:block"
                    />
                  )}
                  <p className="text-2xl font-medium text-ink sm:text-3xl">
                    {s.value}
                    {s.suffix && <span className="text-[#A9AC9F]">{s.suffix}</span>}
                  </p>
                  <p className="mt-2 text-sm text-[#A9AC9F]">{s.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-x-10 lg:gap-y-8">
            <div className="lg:col-start-1 lg:row-start-1">
              <Eyebrow>Service</Eyebrow>
              <h2 className="type-h2 mt-4 text-ink">
                Adelaide to Darwin
                <br />
                Service
              </h2>
            </div>
            <div className="relative h-[353px] overflow-hidden rounded-3xl sm:h-100 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[608px]">
              <SiteImage
                {...images.adelaideServiceRoadTrain}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-10 lg:col-start-1 lg:row-start-2 lg:self-end">
              <BulletList items={serviceColumns[0]} />
              <BulletList items={serviceColumns[1]} />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white pb-0 sm:pb-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="type-h2 text-ink">
                Adelaide depot
              </h2>
              <p className="mt-3 text-base text-[#848877]">{adelaide.address}</p>
            </div>
            <div className="w-full max-w-xs sm:w-auto">
              <div className="border-t border-line py-3">
                <a
                  href={adelaide.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand-bright"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line">
                    <Image src="/img/elements (1).svg" alt="" width={11} height={16} />
                  </span>
                  {adelaide.phone}
                </a>
              </div>
              <div className="border-t border-b border-line py-3">
                <a
                  href={`mailto:${adelaide.email}`}
                  className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand-bright"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line">
                    <Image src="/img/elements (2).svg" alt="" width={13} height={11} />
                  </span>
                  {adelaide.email}
                </a>
              </div>
            </div>
          </div>
          <div className="relative left-1/2 mt-5 -ml-[50vw] h-[488px] w-screen overflow-hidden border-y border-line sm:left-0 sm:ml-0  sm:w-full sm:rounded-3xl sm:border">
            <iframe
              title="Adelaide depot area map"
              src="https://www.google.com/maps?q=Lonsdale+SA+5160+Australia&z=14&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
