import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const promises = [
  {
    n: "01",
    title: "Right the first time, every time",
    desc: "Not a slogan — the founding principle. Every load is run like the family's reputation depends on it, because it does.",
  },
  {
    n: "02",
    title: "Fresh means fresh",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
  },
  {
    n: "03",
    title: "Maintained like our name depends on it",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
  },
  {
    n: "04",
    title: "A person answers, day or night",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
  },
];

export function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#a9c3de] to-[#6d93bf]">
      <Container className="pt-20 pb-0 sm:pt-28">
        <div className="text-center">
          <Eyebrow className="text-ink/50">The Scarcella promise</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Our name is on the truck. That&apos;s the guarantee.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {promises.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-white/30 bg-white/10 p-8 text-white backdrop-blur-sm"
            >
              <span className="text-lg font-medium text-white/80">{p.n}</span>
              <h3 className="mt-4 text-2xl font-medium leading-snug sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-white/80">{p.desc}</p>
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
