import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { ImageSlider } from "@/components/ui/image-slider";
import { images } from "@/lib/images";

const trailers = [
  "Conventional Refrigerated Vans",
  "Refrigerated Slider Vans",
  "Flat Tops",
  "Swiss Door Refrigerated Vans",
  "Refrigerated Drop Deck Mezzanine floor tautliners",
  "Drop Deck open trailers with ramps",
  "36 dollies",
  "We are also insured to carry packaged DG and permitted for oversize loads",
];

const gallerySlides = [
  images.fleetRoadTrainFull,
  images.freightForklift,
  images.workshopMechanic,
  images.fleetLineup,
  images.primeMoverFront,
];

/**
 * Figma: rows are `padding: 12px 0` / gap 8 on mobile and `16px 0` / gap 12 on
 * desktop, each with a 1px #DFE1DB rule top and bottom so the block reads as a
 * closed table.
 *
 * Mobile stacks all eight rows in one continuous column while desktop splits
 * them 4/4. That is a two-column *flow* of one list rather than two lists —
 * rendering two `<ul>`s would double the rule where they meet on mobile — so
 * the split is done with CSS columns and each row is kept from breaking across
 * them.
 */
function TrailerList({ items }: { items: string[] }) {
  return (
    <ul className="lg:columns-2 lg:gap-x-33">
      {items.map((item) => (
        <li
          key={item}
          className="flex break-inside-avoid items-center gap-2 border-b border-neutral-300 py-3 first:border-t lg:gap-3 lg:py-4 lg:nth-5:border-t"
        >
          <span className="h-2 w-2 shrink-0 bg-brand-bright" aria-hidden />
          <span className="type-body-md-medium flex-1 text-ink">{item}</span>
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
        {/* Figma: two 626px columns with a 132px gutter, the photo spanning
            both rows on the right. The h3 reads after the photo on mobile but
            beside it on desktop, so it is placed third in source order and
            assigned an explicit grid cell from `lg` up — where it bottoms out
            against the photo (both end on the 1264 baseline). */}
        <div className="grid grid-cols-1 gap-x-33 gap-y-8 lg:grid-cols-2 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="type-h2 text-ink">
              Quality over quantity,
              <br />
              every time.
            </h2>
            {/* Body/Md #41453C on mobile, Body/Lg #848877 from lg. The spec
                fills the block flat, but the desktop mock picks the two figures
                out in ink — keep that emphasis where the copy is grey. */}
            <p className="type-body-md mt-4 text-neutral-800 lg:text-[18px] lg:tracking-[-0.24px] lg:text-neutral-600">
              Scarcella Transport has{" "}
              <span className="lg:text-ink">
                35 late model, immaculately presented and well maintained
                Prime Movers,
              </span>{" "}
              as well as{" "}
              <span className="lg:text-ink">150 trailers and 36 dollies.</span>
            </p>
          </div>

          <div className="relative h-[353px] overflow-hidden rounded-3xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-100">
            <SiteImage
              {...images.heroRoadTrains}
              sizes="(max-width: 1024px) 100vw, 626px"
            />
          </div>

          {/* Mob/H4 (18px) stepping to Heading/H5 (24px) — exactly what
              `type-h5` encodes, so no size override is needed. */}
          <h3 className="type-h5 max-w-98 text-ink lg:col-start-1 lg:row-start-2 lg:-mt-2 lg:self-end">
            Scarcella Transport has a mixture of trailers including:
          </h3>
        </div>

        <div className="mt-8 lg:mt-10">
          <TrailerList items={trailers} />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:mt-32 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="type-caption-caps text-muted">Our mission</p>
            <h2 className="type-h2 mt-4 text-ink">
              We have the fleet to get
              <br />
              the job done
            </h2>
          </div>
          <p className="type-body-md text-muted">
            F &amp; A Scarcella Pty Ltd are responsible for ensuring the
            quality and reliability of all products and services it
            provides. We recognise that quality starts with the planning of
            all activities and goes through all subsequent phases of our
            services.
          </p>
        </div>

        <div className="mt-6 flex justify-end sm:hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Swipe <span aria-hidden>»»»</span>
          </span>
        </div>

        <ImageSlider slides={gallerySlides} className="mt-4 sm:mt-14" />
      </Container>
    </section>
  );
}
