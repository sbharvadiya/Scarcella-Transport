import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronRightDuo } from "@/components/ui/chevron-right-duo";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";
import { MERCH_STORE_URL } from "@/lib/nav";

export function MerchBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full sm:h-[700px] lg:h-[864px]">
        <SiteImage {...images.merchRack} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,28,26,0.0768)_0%,rgba(24,28,26,0.5632)_100%)]" />
        <div className="relative flex h-full flex-col justify-end pb-14 lg:pb-20">
          <Container>
            <div className="flex flex-col gap-8 lg:h-[184px] lg:flex-row lg:items-end lg:justify-between lg:gap-4">
              <div className="flex flex-col gap-4 lg:w-[742px]">
                <p className="type-caption-caps text-neutral-300">
                  New — official merch
                </p>
                <h2 className="type-h2 max-w-[445px] text-white">
                  Wear the green and white.
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-6 lg:h-full lg:w-[509px] lg:gap-8">
                <p className="type-body-lg text-white">
                  Fifty years on Australian highways has earned a few fans. The
                  Sydney–Darwin Express range — tee, hoodie and trucker cap in
                  the Scarcella colours — printed in Australia, shipped anywhere
                  we drive (which is everywhere).
                </p>
                <Button
                  href={MERCH_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
