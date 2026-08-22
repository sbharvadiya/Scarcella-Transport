import Image from "next/image";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { SiteImage } from "@/components/ui/site-image";
import { images, techPartnerLogos } from "@/lib/images";

const items = [
  {
    title: "Teletrac Navman software",
    image: images.techTelematics,
    desc: "Fleet telematics, mass management and compliance from the cab.",
  },
  {
    title: "Guardian Seeing-eye machines",
    image: images.techGuardian,
    desc: "In-cab fatigue and distraction detection, monitoring every driver in real time.",
  },
  {
    title: "Electronic work diaries",
    image: images.techEwd,
    desc: "Digital fatigue management accurate, tamper-evident, always up to date.",
  },
  {
    title: "Live GPS tracking",
    image: images.techGps,
    desc: "Every vehicle visible in real time, right across the Sydney-Darwin lane.",
  },
  {
    title: "Electronic weight scales",
    image: images.techScales,
    desc: "On-board weighing so every load leaves legal and correctly distributed.",
  },
  {
    title: "Mass management",
    image: images.techMass,
    desc: "Every axle group measured and recorded against legal limits, load by load",
  },
];

const partners = [
  techPartnerLogos.teletracNavman,
  techPartnerLogos.seeingMachinesGuardian,
  techPartnerLogos.nswFoodAuthority,
];

export function SafetyTechGrid({ showWashBay = false }: { showWashBay?: boolean }) {
  return (
    <section className="bg-ink py-20 text-white lg:py-[72px]">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:flex lg:items-end lg:justify-between lg:gap-4">
          <div className="lg:w-[742px]">
            <p className="type-caption-caps text-neutral-300">
              Accreditation &amp; Safety
            </p>
            <h2 className="type-h2 mt-4 text-white">
              Safety isn&apos;t a policy on a wall. It&apos;s fitted to every
              truck.
            </h2>
          </div>
          <p className="type-body-lg font-medium text-neutral-300 lg:w-[509px]">
            Scarcella Transport prioritises safety and has invested in the
            following technology in every vehicle — so every load runs
            compliant, monitored and accounted for.
          </p>
        </div>
        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-white/50">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>
        <div className="mt-4 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex w-[80%] shrink-0 snap-start flex-col gap-4 rounded-3xl bg-neutral-900 p-4 pb-6 sm:w-auto"
            >
              <div className="relative h-40 shrink-0 overflow-hidden rounded-2xl bg-neutral-50 lg:h-[232px]">
                <SiteImage
                  src={it.image.src}
                  alt={it.image.alt}
                  fit="contain"
                  className="p-3"
                  sizes="(max-width: 639px) 80vw, (max-width: 1023px) 45vw, 419px"
                />
              </div>
              <div className="px-4">
                <h3 className="type-h5 text-white">{it.title}</h3>
                <p className="type-body-md mt-2 text-neutral-300">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-neutral-900 p-6 sm:mt-10 lg:h-[104px] lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:p-6">
          <p className="type-h5 shrink-0 text-white lg:w-[268px]">
            Technology &amp; accreditation partners
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:w-[1006px] lg:flex-nowrap lg:justify-center lg:gap-x-[116px]">
            {partners.map((p) => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-9 w-auto lg:h-14"
              />
            ))}
          </div>
        </div>
      </Container>
      {showWashBay && (
        <div className="relative mt-14 h-[300px] w-full overflow-hidden sm:h-[380px]">
          <VideoBackground src="/videos/safety-page_wash-bay-loop.mp4" cropLetterbox />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
            <p className="text-lg font-medium text-white sm:text-xl">
              Every truck washed, every trip.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
