import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronRightDuo } from "@/components/ui/chevron-right-duo";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

/*
 * Figma "Group 44": a full-bleed 1512x864 store hero (Rectangle 4175) with the
 * merch-rack photo under a top-to-bottom Neutral/950 wash that only reaches
 * 56% at the very bottom, so the warehouse stays readable behind the copy.
 *
 * Frame 150 is a 1384x184 row pinned to the bottom of the frame, bottom-aligned
 * (not centred) with a 16px gap: a 742px title column (Frame 100, 16px gap) on
 * the left and a 509px copy + button column (justify-center, 32px gap) on the
 * right. The title column is only 160px tall, which is why the row hangs off
 * flex-end rather than stretching.
 */
export function MerchBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full sm:h-[700px] lg:h-[864px]">
        <SiteImage {...images.merchRack} />
        {/* Rectangle 4175's fill: 7.68% → 56.32% Neutral/950, top to bottom. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,28,26,0.0768)_0%,rgba(24,28,26,0.5632)_100%)]" />

        <div className="relative flex h-full flex-col justify-end pb-14 lg:pb-20">
          <Container>
            {/* Frame 150 — 1384x184 */}
            <div className="flex flex-col gap-8 lg:h-[184px] lg:flex-row lg:items-end lg:justify-between lg:gap-4">
              {/* Frame 100 — 742x160 */}
              <div className="flex flex-col gap-4 lg:w-[742px]">
                <p className="type-caption-caps text-neutral-300">
                  New — official merch
                </p>
                {/* 445 wide, which is what breaks it over two lines. */}
                <h2 className="type-h2 max-w-[445px] text-white">
                  Wear the green and white.
                </h2>
              </div>

              {/* Frame 150 (inner) — 509x184, copy and button vertically centred */}
              <div className="flex flex-col justify-center gap-6 lg:h-full lg:w-[509px] lg:gap-8">
                <p className="type-body-lg text-white">
                  Fifty years on Australian highways has earned a few fans. The
                  Sydney–Darwin Express range — tee, hoodie and trucker cap in
                  the Scarcella colours — printed in Australia, shipped anywhere
                  we drive (which is everywhere).
                </p>
                {/* 191x56: 16px/24px padding on a 12px radius, 8px gap. */}
                <Button
                  href="/merch"
                  variant="primary"
                  size="none"
                  className="type-label-lg w-fit px-6 py-4"
                >
                  Shop the merch
                  <ChevronRightDuo />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
