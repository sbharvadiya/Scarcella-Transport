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
        <li key={item} className="border-t border-line py-4 last:pb-0">
          <span className="flex items-center gap-3 text-sm text-ink sm:text-base">
            <span className="h-1.5 w-1.5 shrink-0 rounded-xs bg-brand-bright" aria-hidden />
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
      <section className="border-b border-line bg-white py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 divide-y divide-line text-center sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 sm:py-0 ${
                  i < stats.length - 1 ? "sm:border-r sm:border-line" : ""
                }`}
              >
                <p className="text-2xl font-medium text-ink sm:text-3xl">
                  {s.value}
                  {s.suffix && <span className="text-muted">{s.suffix}</span>}
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 lg:items-stretch">
            <div>
              <Eyebrow>Service</Eyebrow>
              <h2 className="mt-4 text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                Adelaide to Darwin
                <br />
                Service
              </h2>

              <div className="mt-16 grid grid-cols-2 gap-x-10 sm:mt-20">
                <BulletList items={serviceColumns[0]} />
                <BulletList items={serviceColumns[1]} />
              </div>
            </div>

            <div className="relative h-70 overflow-hidden rounded-3xl sm:h-100 lg:h-full">
              <SiteImage
                {...images.outbackDusk}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                Adelaide depot
              </h2>
              <p className="mt-3 text-base text-muted">{adelaide.address}</p>
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
              <div className="border-t border-line py-3">
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

          <div className="mt-10 h-[420px] w-full overflow-hidden rounded-3xl border border-line sm:h-[480px]">
            <iframe
              title="Adelaide depot area map"
              src="https://www.google.com/maps?q=Lonsdale+SA+Australia&output=embed"
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
