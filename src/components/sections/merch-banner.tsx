import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function MerchBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[480px] w-full sm:h-[600px]">
        <SiteImage {...images.merchRack} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 from-0% via-ink/10 via-40% to-transparent to-75%" />
        <div className="relative flex h-full flex-col justify-end p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                New — Official merch
              </p>
              <h2 className="mt-2 text-3xl font-medium text-white sm:text-5xl">
                Wear the green
                <br />
                and white.
              </h2>
            </div>
            <div className="sm:max-w-md">
              <p className="text-sm text-white/80">
                Fifty years on Australian highways has earned a few fans. The
                Sydney–Darwin Express range — tee, hoodie and trucker cap in
                the Scarcella colours — printed in Australia, shipped anywhere
                we drive (which is everywhere).
              </p>
              <div className="mt-6">
                <Button href="/merch" variant="primary" size="lg">
                  Shop the merch <span aria-hidden>»</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
