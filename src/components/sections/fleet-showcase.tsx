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
            baseline rather than its top. On the 375 frame it collapses to
            "Frame 88" — one column on a flat 16px gap. */}
        <div className="grid grid-cols-1 gap-4 lg:flex lg:items-end lg:justify-between">
          {/* "Frame 100": 742px, eyebrow and heading on a flat 16px gap. */}
          <div className="lg:w-[742px]">
            <p className="type-caption-caps text-neutral-600">The fleet</p>
            <h2 className="type-h2 mt-4 text-ink">
              Late-model Kenworths and Macks, in the green and white.
            </h2>
          </div>
          {/* Body/Md Medium on the mobile frame, stepping to Body/Lg Medium at
              509px on desktop. One flat Neutral/800 either way — the frame
              gives the whole standfirst a single colour, so the claims are
              picked out by weight alone. */}
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

        {/* "Frame 2147217021": the swipe hint sits on the mobile frame's flat
            8px gap between the header block and the rail, right-aligned,
            11px caps on 3px tracking in Neutral/600. */}
        <div className="mt-2 flex items-center justify-end gap-2 sm:hidden">
          <span className="text-[11px] leading-4 font-normal uppercase tracking-[3px] text-neutral-600">
            Swipe
          </span>
          <ChevronRightDuo />
        </div>

        {/* "Frame 106" sits 40px under the header: 1092x600 cards with a 24px
            radius on a 16px gutter, so the next one shows as a slice. The 375
            frame keeps the same radius on 314x400 cards and an 8px gutter,
            8px under the swipe hint. */}
        <ImageSlider
          slides={slides}
          className="mt-2 sm:mt-10"
          railClassName="gap-2 sm:gap-4"
          slideClassName="h-[400px] w-[87.5%] rounded-3xl sm:h-[600px] sm:w-[78.9%]"
          sizes="(max-width: 640px) 88vw, 79vw"
        />

        {/* "Frame 105": three equal 450.67px columns on the same 16px gutter,
            which is exactly the container's 1384px, 40px under the rail. The
            mobile frame stacks them on a 16px gap, 24px under the rail. */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-2">
              {/* "Frame 108": the icon tile is 50px with 12px of padding on
                  mobile and 42px with 9px on desktop, so the 24px glyph is
                  the same size in both — Brand at 8% behind a 16% border. */}
              <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg border border-brand-bright/16 bg-brand-bright/8 sm:h-10.5 sm:w-10.5">
                <Image src={f.icon.src} alt={f.icon.alt} width={24} height={24} />
              </span>
              {/* "Frame 107": title and caption run on a flat 24px line box
                  with no gap between them on the mobile frame. */}
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

/** "Button/Arrow/Chevron_Right_Duo": three 1px Neutral/500 chevrons in 24x16. */
function ChevronRightDuo() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden
      className="shrink-0 text-neutral-500"
    >
      {[4, 10.67, 17.33].map((x) => (
        <path
          key={x}
          d={`M${x} 5.5 L${x + 2.33} 8 L${x} 10.5`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
