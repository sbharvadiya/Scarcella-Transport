import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { ImageSlider } from "@/components/ui/image-slider";
import { images } from "@/lib/images";

const trailerColumns = [
  [
    "Conventional Refrigerated Vans",
    "Refrigerated Slider Vans",
    "Flat Tops",
    "Swiss Door Refrigerated Vans",
  ],
  [
    "Refrigerated Drop Deck Mezzanine floor tautliners",
    "Drop Deck open trailers with ramps",
    "36 dollies",
    "We are also insured to carry packaged DG and permitted for oversize loads",
  ],
];

const gallerySlides = [
  images.fleetRoadTrainFull,
  images.freightForklift,
  images.workshopMechanic,
  images.fleetLineup,
  images.primeMoverFront,
];

function TrailerList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} className="border-b border-line py-4 first:pt-0">
          <span className="flex items-start gap-3 text-sm text-ink sm:text-base">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-brand-bright" aria-hidden />
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FleetQualitySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(20,20,15,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
              Quality over quantity,
              <br />
              every time.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed">
              <span className="text-muted">Scarcella Transport has</span>{" "}
              <span className="text-ink">
                35 late model, immaculately presented and well maintained
                Prime Movers,
              </span>{" "}
              <span className="text-muted">as well as</span>{" "}
              <span className="text-ink">150 trailers and 36 dollies.</span>
            </p>

            <h3 className="mt-10 text-xl font-medium leading-snug text-ink sm:mt-12 sm:text-2xl">
              Scarcella Transport has a mixture
              <br />
              of trailers including:
            </h3>
          </div>

          <div className="relative h-85 overflow-hidden rounded-3xl sm:h-115 lg:h-130">
            <SiteImage
              {...images.heroRoadTrains}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <TrailerList items={trailerColumns[0]} />
          <TrailerList items={trailerColumns[1]} />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:mt-32 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="mt-4 text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
              We have the fleet to get
              <br />
              the job done
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted">
            F &amp; A Scarcella Pty Ltd are responsible for ensuring the
            quality and reliability of all products and services it
            provides. We recognise that quality starts with the planning of
            all activities and goes through all subsequent phases of our
            services.
          </p>
        </div>

        <ImageSlider slides={gallerySlides} className="mt-10 sm:mt-14" />
      </Container>
    </section>
  );
}
