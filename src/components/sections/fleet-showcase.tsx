import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ImageSlider } from "@/components/ui/image-slider";
import { SwipeHint } from "@/components/ui/swipe-hint";
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
  },
  {
    title: "Quality over quantity",
    desc: "Every time",
    icon: images.fleetIconQualityOverQuantity,
  },
];

export function FleetShowcase() {
  return (
    <section className="pt-14 pb-20 sm:pt-16 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:flex lg:items-end lg:justify-between">
          <div className="lg:w-[742px]">
            <p className="type-caption-caps text-neutral-600">The fleet</p>
            <h2 className="type-h2 mt-4 text-ink">
              Late-model Kenworths and Macks, in the green and white.
            </h2>
          </div>
          <p className="type-body-md-medium text-neutral-800 lg:w-[509px]">
            <span className="font-semibold">
              45+ prime movers, 150 trailers and 40 dollies
            </span>{" "}
            — conventional and slider refrigerated vans, tautliners, flat tops,
            Swiss door models and drop deck mezzanine units.{" "}
            <span className="font-semibold">
              Every truck is fully serviced weekly
            </span>
            , after each{" "}
            <span className="font-semibold">
              8,000 km Darwin round trip.
            </span>
          </p>
        </div>
        <div className="mt-2 flex justify-end sm:hidden">
          <SwipeHint />
        </div>
        <ImageSlider
          slides={slides}
          className="mt-2 sm:mt-10"
          railClassName="gap-2 sm:gap-4"
          slideClassName="h-[400px] w-[87.5%] rounded-3xl sm:h-[600px] sm:w-[78.9%]"
          sizes="(max-width: 640px) 88vw, 79vw"
        />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-2">
              <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg border border-brand-bright/16 bg-brand-bright/8 sm:h-10.5 sm:w-10.5">
                <Image src={f.icon.src} alt={f.icon.alt} width={24} height={24} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="type-h4 text-ink max-sm:text-[18px] max-sm:leading-6 max-sm:tracking-[-0.56px]">
                  {f.title}
                </p>
                <p className="type-body-lg text-neutral-600 sm:mt-2">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
