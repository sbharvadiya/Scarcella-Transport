import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
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
    <section className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow className="text-white/50">Accreditation &amp; Safety</Eyebrow>
            <h2 className="mt-4 text-[28px] font-medium leading-tight sm:text-4xl lg:text-5xl">
              Safety isn&apos;t a policy on a wall. It&apos;s fitted to every
              truck.
            </h2>
          </div>
          <p className="text-base text-white/70">
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

        <div className="mt-4 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="w-[80%] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:w-auto"
            >
              <div className="relative h-32 overflow-hidden rounded-xl bg-white/95">
                <SiteImage
                  src={it.image.src}
                  alt={it.image.alt}
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-white/60">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium">
            Technology &amp;
            <br />
            accreditation partners
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {partners.map((p) => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-9 w-auto"
              />
            ))}
          </div>
        </div>
      </Container>

      {showWashBay && (
        <div className="relative mt-14 h-[300px] w-full overflow-hidden sm:h-[380px]">
          <VideoBackground src="/videos/safety-page_wash-bay-loop.mp4" />
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
