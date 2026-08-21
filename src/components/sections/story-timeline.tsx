import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const timeline = [
  {
    n: "01",
    tag: "Late 1960s",
    title: "It starts with coal.",
    desc: "Two brothers put the Scarcella name on a truck and start carting coal around New South Wales. The name on the door is the business plan.",
  },
  {
    n: "02",
    tag: "The bush years",
    title: "The country becomes the business.",
    desc: "Grain, fertiliser and produce for rural NSW communities — the seasons set the schedule, and the bush learns the green and white can be relied on.",
  },
  {
    n: "03",
    tag: "The cold chain",
    title: "Fresh becomes the specialty.",
    desc: "Refrigerated vans and tautliners become the backbone of the fleet. Produce that leaves the farm fresh arrives fresh — every time, no excuses.",
  },
  {
    n: "04",
    tag: "Today",
    title: "The lane is ours.",
    desc: "45+ prime movers, 150 trailers, two depots 4,000 km apart — and road trains to Darwin twice a week. Every week. Same family, same standard.",
  },
];

export function StoryTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>The Scarcella story</Eyebrow>
            <h2 className="mt-4 text-[28px] font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Two brothers, one truck, and a name worth protecting.
            </h2>
            <p className="mt-5 max-w-lg text-base text-muted">
              Plenty of carriers are owned by funds and run by dashboards.
              This one is run by the family whose name is painted on every
              door — and that changes how everything gets done.
            </p>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[400px]">
            <SiteImage {...images.scarcellaBrothers} sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 pt-16">
              <p className="text-xl font-medium text-white">
                &quot;Do it right the first time, every time.&quot;
              </p>
              <p className="mt-1 text-sm text-white/70">
                The line the company has run on for over fifty years.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 pt-12">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-line sm:block" />
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {timeline.map((t) => (
              <div key={t.n} className="border-b border-line pb-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-xs text-muted">
                    {t.n}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/70">
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-ink">{t.title}</h3>
                <p className="mt-3 text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
