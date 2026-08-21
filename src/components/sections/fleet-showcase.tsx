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
    icon: <WrenchIcon />,
  },
  {
    title: "Two-up teams",
    desc: "Non-stop express, fatigue compliant",
    icon: <PeopleIcon />,
  },
  {
    title: "Quality over quantity",
    desc: "Every time",
    icon: <ShieldIcon />,
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
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-brand-bright">
                {f.icon}
              </span>
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

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M13 3.5a4 4 0 0 0-5.4 4.6L3 13.5V17h3.5l5.4-5.4a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.1-2.1L13 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="7" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 16c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 3.7c1.2.4 2 1.5 2 2.8s-.8 2.4-2 2.8M15 12.2c1.7.4 3 1.8 3 3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5 16.5 5v5c0 4-2.8 6.8-6.5 8-3.7-1.2-6.5-4-6.5-8V5L10 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.3 10 9.2 12l3.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
