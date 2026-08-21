import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const promises = [
  {
    n: "01",
    title: "Right the first time, every time",
    desc: "Not a slogan — the founding principle. Every load is run like the family's reputation depends on it, because it does.",
    icon: images.promiseIconRightFirstTime,
    iconClassName: "right-0 top-11 w-[78%] aspect-[1511/276] sm:top-12",
  },
  {
    n: "02",
    title: "Fresh means fresh",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconFreshMeansFresh,
    // Cropped: the source graphic pads the thermometer with a long dotted
    // line off to its left, so the visible window is narrower than the
    // image and pinned to the right edge to isolate just the glyph.
    wrapperClassName: "right-6 top-6 bottom-6 w-[54px] sm:w-[64px]",
    iconClassName: "absolute right-0 top-0 h-full w-auto max-w-none",
  },
  {
    n: "03",
    title: "Maintained like our name depends on it",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconMaintained,
    iconClassName: "right-6 top-6 w-[30%] aspect-[754/776]",
  },
  {
    n: "04",
    title: "A person answers, day or night",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconPersonAnswers,
    iconClassName: "right-4 top-4 w-[42%] aspect-[977/747]",
  },
];

export function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white from-0% via-[#a9c3de] via-[18%] to-[#6d93bf] to-100%">
      <Container className="pt-20 pb-0 sm:pt-28">
        <div className="text-center">
          <Eyebrow className="text-ink/50">The Scarcella promise</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Our name is on the truck. That&apos;s the guarantee.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {promises.map((p) => (
            <div
              key={p.n}
              className="relative min-h-[170px] overflow-hidden rounded-2xl border border-white/30 bg-white/10 p-6 text-white backdrop-blur-sm sm:p-7"
            >
              {p.wrapperClassName ? (
                <div
                  className={`pointer-events-none absolute overflow-hidden ${p.wrapperClassName}`}
                >
                  <Image
                    src={p.icon.src}
                    alt=""
                    width={p.icon.width}
                    height={p.icon.height}
                    unoptimized
                    priority
                    className={`select-none opacity-70 ${p.iconClassName}`}
                  />
                </div>
              ) : (
                <Image
                  src={p.icon.src}
                  alt=""
                  width={p.icon.width}
                  height={p.icon.height}
                  unoptimized
                  priority
                  className={`pointer-events-none absolute select-none object-contain opacity-70 ${p.iconClassName}`}
                />
              )}
              <div className="relative max-w-[72%]">
                <span className="text-sm font-medium text-white/80">{p.n}</span>
                <h3 className="mt-2 text-lg font-medium leading-snug sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg font-medium text-white sm:text-xl">
          Innovation with a purpose: continually improving safety and
          efficiency — that&apos;s been the written vision of this company
          from the start, not a line added by a marketing agency.
        </p>
      </Container>

      {/* The photo carries its own sky, which continues the section gradient —
          anchor to the bottom so the trucks stay whole as the crop changes. */}
      <div className="relative mt-14 h-[340px] w-full sm:h-[520px] lg:h-[620px]">
        <SiteImage
          {...images.promiseRoadTrain}
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}
