import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/ui/stat-counter";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const routes = ["Sydney", "Darwin", "Adelaide", "Brisbane", "Melbourne"];

const stats = [
  { value: "50+", label: "Years family owned" },
  { value: "45+", label: "Prime movers" },
  { value: "150", label: "Trailers" },
  { value: "3", label: "Depots — NSW & NT" },
  { value: "2-day", label: "Sydney–Darwin express" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[784px] max-h-[900px] min-h-[620px] w-full bg-ink lg:h-[720px] lg:max-h-none lg:min-h-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute left-0 w-full object-cover"
            style={{ top: "-6%", height: "112%" }}
            src="/videos/home-page_hero-reel.mp4"
            poster={images.heroRoadTrains.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/30 via-45% to-transparent lg:from-0% lg:via-ink/10 lg:via-50%" />
        <div className="relative flex h-full flex-col pb-12 pt-24 lg:justify-end">
          <Container className="flex flex-1 flex-col lg:block lg:flex-none">
            <div className="flex h-full flex-col justify-between gap-10 lg:grid lg:h-auto lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div>
                <h1 className="text-[40px] font-medium leading-[48px] text-white sm:text-6xl sm:leading-[1.05] lg:text-7xl">
                  Interstate freight,
                  <br />
                  <span className="font-script text-5xl italic sm:text-7xl lg:text-8xl">Done</span>{" "}
                  <span className="font-bold">PROPERLY.</span>
                </h1>
                <div className="mt-8 flex flex-wrap gap-2">
                  {routes.map((r) => (
                    <span
                      key={r}
                      className="rounded-xl border border-white/[0.16] bg-white/[0.08] px-3 py-2 text-lg font-medium text-white backdrop-blur-md lg:px-4 lg:py-3"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:pb-2">
                <p className="text-base text-white/90">
                  Refrigerated, general, oversize and dangerous goods. Family run
                  since the late 1960s.
                </p>
                <p className="mt-3 text-base text-white/70">
                  Sydney → Darwin twice weekly, two-day express · 50+ years ·
                  TruckSafe accredited
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap lg:gap-3">
                  <Button href="/#quote" variant="primary" size="lg">
                    Get a Freight Quote <span aria-hidden className="hidden lg:inline">»</span>
                  </Button>
                  <Button href="tel:0246266661" variant="outline-light" size="lg">
                    <PhoneIcon />
                    <span className="lg:hidden">Call</span>
                    <span className="hidden lg:inline">Call (02) 4626 6661</span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="bg-white">
        <Container>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 py-6 text-center sm:grid-cols-3 sm:gap-0 sm:py-12 lg:grid-cols-5">
            {stats.map((s, i) => {
              const isLast = i === stats.length - 1;
              const hairline = "before:absolute before:left-0 before:h-px before:w-full before:bg-ink/10 sm:before:hidden";
              return (
                <div
                  key={s.label}
                  className={cn(
                    "relative flex min-h-28 flex-col justify-center gap-2",
                    "sm:block sm:min-h-0 sm:gap-0 sm:px-4",
                    i % 2 === 0 &&
                      !isLast &&
                      "after:absolute after:-right-1 after:top-0 after:h-full after:w-px after:bg-ink/10 sm:after:hidden",
                    i < 2 && `${hairline} before:-bottom-2`,
                    isLast && `col-span-2 sm:col-span-1 ${hairline} before:-top-2`,
                    i < stats.length - 1 && "sm:border-r sm:border-ink/10",
                  )}
                >
                  <StatCounter value={s.value} />
                  <p className="text-base text-neutral-500 sm:mt-2 sm:text-sm sm:text-ink/50">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 1.5h2l1.2 3-1.5 1a9 9 0 0 0 4.3 4.3l1-1.5 3 1.2v2c0 .8-.7 1.5-1.5 1.5C7 12 2 7 2 3c0-.8.7-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
