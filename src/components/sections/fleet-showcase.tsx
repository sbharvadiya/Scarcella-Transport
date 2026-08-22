import Image from "next/image";
import { Container } from "@/components/ui/container";
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
    // This icon exports as the bare 24px glyph, so it needs the Figma
    // "Frame 108" tile drawn around it; the other two ship with it baked in.
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
    <section className="pt-14 pb-20 sm:pt-16 sm:pb-28">
      <Container>
        {/* "Frame 99": the 1384px container row, space-between and bottom-
            aligned, so the standfirst's last line lands on the heading's
            baseline rather than its top. */}
        <div className="grid grid-cols-1 gap-6 lg:flex lg:items-end lg:justify-between lg:gap-4">
          {/* "Frame 100": 742px, eyebrow and heading on a flat 16px gap. */}
          <div className="lg:w-[742px]">
            <p className="type-caption-caps text-neutral-600">The fleet</p>
            <h2 className="type-h2 mt-4 text-ink">
              Late-model Kenworths and Macks, in the green and white.
            </h2>
          </div>
          {/* Body/Lg Medium at 509px, one flat Neutral/800 — the frame gives
              the whole standfirst a single colour, so the claims are picked
              out by weight alone. */}
          <p className="type-body-lg font-medium text-neutral-800 lg:w-[509px]">
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

        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>

        {/* "Frame 106" sits 40px under the header: 1092x600 cards with a 24px
            radius on a 16px gutter, so the next one shows as a slice. */}
        <ImageSlider
          slides={slides}
          className="mt-4 sm:mt-10"
          railClassName="gap-2 sm:gap-4"
          slideClassName="h-[420px] w-[85%] rounded-2xl sm:h-[600px] sm:w-[78.9%] sm:rounded-3xl"
          sizes="(max-width: 640px) 85vw, 79vw"
        />

        {/* "Frame 105", 40px under the rail: three equal 450.67px columns on
            the same 16px gutter, which is exactly the container's 1384px. */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-2">
              {f.bare ? (
                <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg border border-brand-bright/16 bg-brand-bright/8">
                  <Image src={f.icon.src} alt={f.icon.alt} width={24} height={24} />
                </span>
              ) : (
                <span className="relative h-10.5 w-10.5 shrink-0">
                  <Image src={f.icon.src} alt={f.icon.alt} fill className="object-contain" />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="type-h4 text-ink">{f.title}</p>
                <p className="type-body-lg mt-2 text-neutral-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
