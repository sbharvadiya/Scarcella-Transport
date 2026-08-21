import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { ImageSlider } from "@/components/ui/image-slider";
import { images } from "@/lib/images";

const slides = [
  images.fleetRoadTrainFull,
  images.primeMoverFront,
  images.fleetLineup,
  images.heroRoadTrains,
  images.workshopBonnetUp,
];

const features = [
  {
    title: "Weekly servicing",
    desc: "After every Darwin round trip",
    icon: images.fleetIconWeeklyServicing,
  },
  {
    title: "Two-up teams",
    desc: "Non-stop express, fatigue compliant",
    icon: images.fleetIconTwoUpTeams,
    bare: true,
  },
  {
    title: "Quality over quantity",
    desc: "Every time",
    icon: images.fleetIconQualityOverQuantity,
  },
];

export function FleetShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Eyebrow>The fleet</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Late-model Kenworths and Macks, in the green and white.
            </h2>
          </div>
          <p className="text-base text-muted lg:pt-14">
            <span className="font-semibold text-ink">
              45+ prime movers, 150 trailers and 40 dollies
            </span>{" "}
            — conventional and slider refrigerated vans, tautliners, flat
            tops, Swiss door models and drop deck mezzanine units.{" "}
            <span className="font-semibold text-ink">
              Every truck is fully serviced weekly
            </span>
            , after each <span className="font-semibold text-ink">8,000 km Darwin round trip.</span>
          </p>
        </div>

        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>

        <ImageSlider slides={slides} className="mt-4 sm:mt-10" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              {f.bare ? (
                <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg border border-brand-bright/16 bg-brand-bright/8">
                  <Image src={f.icon.src} alt={f.icon.alt} width={24} height={24} />
                </span>
              ) : (
                <span className="relative h-10.5 w-10.5 shrink-0">
                  <Image src={f.icon.src} alt={f.icon.alt} fill className="object-contain" />
                </span>
              )}
              <div>
                <p className="text-lg font-medium text-ink">{f.title}</p>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
