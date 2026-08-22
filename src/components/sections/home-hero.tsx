import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/ui/stat-counter";
import { images } from "@/lib/images";

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
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[620px] w-full lg:h-[720px]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

        <div className="relative flex h-full flex-col justify-end pb-12 pt-24">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div>
                <h1 className="text-4xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                  Interstate freight,
                  <br />
                  <span className="font-script text-5xl italic sm:text-7xl lg:text-8xl">Done</span>{" "}
                  <span className="font-bold">PROPERLY.</span>
                </h1>

                <div className="mt-8 flex flex-wrap gap-3">
                  {routes.map((r) => (
                    <span
                      key={r}
                      className="rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
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
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/quote" variant="primary" size="lg">
                    Get a Freight Quote <span aria-hidden>»</span>
                  </Button>
                  <Button href="tel:0246266661" variant="outline-light" size="lg">
                    <PhoneIcon /> Call (02) 4626 6661
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="border-t border-black/5 bg-white">
        <Container>
          <div className="grid grid-cols-2 divide-y divide-ink/10 py-12 text-center sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 sm:py-0 ${
                  i < stats.length - 1 ? "sm:border-r sm:border-ink/10" : ""
                }`}
              >
                <StatCounter value={s.value} />
                <p className="mt-2 text-sm text-ink/50">{s.label}</p>
              </div>
            ))}
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
