import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

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

const rows = [timeline.slice(0, 2), timeline.slice(2, 4)];

/**
 * Figma (1512px frame): two 626px columns in a 1384px content width, so the
 * gutter is 132px and the hairline between them sits dead centre at x=756.
 *
 * The timeline grid is two rows of two. Only the FIRST row carries a bottom
 * hairline (626px under each column, 22px below the copy) — the bottom of the
 * second row is open, there is no closing line under the section.
 */
export function StoryTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-2 lg:gap-x-[132px]">
          <div className="flex flex-col gap-4">
            <p className="type-caption-caps text-neutral-600">
              The Scarcella story
            </p>
            <h2 className="type-h2 text-neutral-950">
              Two brothers, one truck, and a name worth protecting.
            </h2>
            <p className="type-body-lg text-neutral-600">
              Plenty of carriers are owned by funds and run by dashboards. This
              one is run by the family whose name is painted on every door — and
              that changes how everything gets done.
            </p>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-[24px] lg:h-[400px]">
            <SiteImage
              {...images.scarcellaBrothers}
              sizes="(max-width: 1024px) 100vw, 626px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(24,28,26,0.1024) 0%, rgba(24,28,26,0.64) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 lg:bottom-8 lg:left-8 lg:right-8 lg:max-w-[482px]">
              <p className="type-h4 text-white">
                &quot;Do it right the first time, every time.&quot;
              </p>
              <p className="type-body-md text-neutral-200">
                The line the company has run on for over fifty years.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {rows.map((row, i) => (
            <div key={i} className={cn("relative", i > 0 && "mt-10 lg:mt-6")}>
              {/* 168px hairline down the middle of the 132px gutter */}
              <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[168px] w-px -translate-x-1/2 bg-line lg:block" />
              <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-[132px] lg:gap-y-0">
                {row.map((t) => (
                  <div
                    key={t.n}
                    className={cn(
                      "flex flex-col gap-6",
                      i === 0 && "lg:border-b lg:border-line lg:pb-[22px]"
                    )}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-2">
                        <span className="type-body-lg flex h-[34px] w-[34px] items-center justify-center rounded-[32px] border border-line bg-neutral-50 text-neutral-600">
                          {t.n}
                        </span>
                        <span className="type-body-sm inline-flex items-center rounded-[32px] border border-line bg-neutral-50 px-4 py-1 font-medium text-neutral-600">
                          {t.tag}
                        </span>
                      </div>
                      <h3 className="type-h3 text-neutral-950">{t.title}</h3>
                    </div>
                    <p className="type-body-lg text-neutral-600">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
