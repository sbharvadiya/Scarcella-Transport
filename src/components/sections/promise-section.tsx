import Image from "next/image";
import { Container } from "@/components/ui/container";
import { images } from "@/lib/images";

const promises = [
  {
    n: "01",
    title: "Right the first time,\nevery time",
    desc: "Not a slogan — the founding principle. Every load is run like the family's reputation depends on it, because it does.",
    icon: images.promiseIconRightFirstTime,
    iconClassName: "right-[24%] top-[53%] w-[52%] aspect-[1511/276]",
  },
  {
    n: "02",
    title: "Fresh\nmeans fresh",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconFreshMeansFresh,
    iconClassName: "right-[9%] top-[20%] w-[70%] aspect-[1587/755]",
  },
  {
    n: "03",
    title: "Maintained like\nour name depends on it",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconMaintained,
    iconClassName: "right-[14%] top-[36%] w-[30%] aspect-[754/776]",
  },
  {
    n: "04",
    title: "A person answers,\nday or night",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconPersonAnswers,
    iconClassName: "right-6 top-[20%] w-[45%] aspect-[977/747]",
  },
];

export function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#77a1cc]">
      <div className="bg-[linear-gradient(180deg,#fdfdfe_0%,#d5e2ef_30%,#acc5df_60%,#8db0d4_75%,#7ba4cd_85%,#77a1cc_90%)] lg:bg-[linear-gradient(180deg,#fdfdfe_0,#d5e2ef_13.56vw,#acc5df_27.12vw,#8db0d4_33.93vw,#7ba4cd_38.43vw,#77a1cc_40.74vw)] min-[1920px]:bg-[linear-gradient(180deg,#fdfdfe_0,#d5e2ef_257px,#acc5df_514px,#8db0d4_643px,#7ba4cd_728px,#77a1cc_782px)]">
        <Container className="pt-20 pb-0 sm:pt-28">
          <div className="mx-auto max-w-[829px] text-center">
            <p className="type-caption-caps text-neutral-600">
              The Scarcella promise
            </p>
            <h2 className="type-h2 mt-4 text-ink">
              Our name is on the truck. That&apos;s the guarantee.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-[1034px] grid-cols-1 gap-4 sm:grid-cols-2">
            {promises.map((p) => (
              <div
                key={p.n}
                className="relative flex min-h-[240px] flex-col overflow-hidden rounded-3xl border border-white/[0.16] bg-[#477fb8]/[0.16] p-6 text-white backdrop-blur-[6px] sm:min-h-[170px] lg:min-h-[288px]"
              >
                <Image
                  src={p.icon.src}
                  alt=""
                  width={p.icon.width}
                  height={p.icon.height}
                  unoptimized
                  priority
                  className={`pointer-events-none absolute select-none object-contain brightness-0 invert ${p.iconClassName}`}
                />
                <div className="relative flex flex-1 flex-col justify-between gap-6">
                  <span className="block text-center text-[40px] font-medium leading-12 tracking-[-1.56px] text-white sm:text-left">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="type-h3 whitespace-pre-line">{p.title}</h3>
                    <p className="type-body-sm mt-4 text-white">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="type-h5 mx-auto mt-10 max-w-[1034px] text-center text-white">
            Innovation with a purpose: continually improving safety and
            efficiency — that&apos;s been the written vision of this company
            from the start, not a line added by a marketing agency.
          </p>
        </Container>
      </div>
      <div className="relative h-[81.5vw] w-full overflow-hidden sm:h-[67.9vw] lg:h-[54.3vw] min-[2560px]:h-[1390px]">
        <Image
          src={images.promiseRoadTrain.src}
          alt={images.promiseRoadTrain.alt}
          width={1512}
          height={1696}
          sizes="(max-width: 639px) 150vw, (max-width: 1023px) 125vw, 100vw"
          className="absolute bottom-0 left-0 w-[150%] max-w-none sm:w-[125%] lg:w-full"
        />
        <div className="pointer-events-none absolute -inset-x-[40%] -bottom-[34.1vw] h-[50.4vw] bg-ink blur-[8.49vw] sm:-bottom-[28.4vw] sm:h-[42vw] sm:blur-[7.07vw] lg:-bottom-[22.8vw] lg:h-[33.6vw] lg:blur-[5.66vw] min-[2560px]:-bottom-[582px] min-[2560px]:h-[860px] min-[2560px]:blur-[145px]" />
      </div>
    </section>
  );
}
