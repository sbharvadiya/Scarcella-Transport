import { AnnouncementCountdown } from "@/components/sections/announcement-countdown";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

/*
 * Two Figma frames, split at lg so the shared type utilities (which step at
 * 1024) flip with the layout:
 *   - 375: a 343x450 card, 32px/24px padding, a 64px gap between the counter
 *     row and the copy block, counters first.
 *   - 1512: a 1384x288 card, 56px padding, a 16px gap, copy block growing to
 *     890px with the counter row pinned to the right.
 * Both heights are literal rather than min-height because both frames pin
 * them, and both counters are the same glass box (white 8% on a white 24%
 * hairline, blur 6) at two sizes.
 */
export function AnnouncementBanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[450px] w-full lg:h-[288px]">
            <SiteImage {...images.outbackDusk} />
          </div>
          {/* Both frames flatten the photo under a single 56% ink wash rather
              than a directional scrim. */}
          <div className="absolute inset-0 bg-[rgba(24,28,26,0.56)]" />
          <div className="absolute inset-0 flex flex-col justify-center gap-16 px-6 py-8 lg:flex-row lg:items-center lg:gap-4 lg:p-14">
            <div className="flex flex-col justify-center gap-4 lg:flex-1">
              <h2 className="type-h2 text-white">
                New Adelaide <br className="lg:hidden" />
                branch
              </h2>
              <p className="type-body-lg text-neutral-300">
                Two runs a week, Adelaide to Darwin.
              </p>
              {/* Figma pins the button to the card's 295px content width on
                  mobile and to its own 160x56 box on desktop. */}
              <Button
                href="/locations"
                variant="primary"
                size="none"
                className="type-label-lg w-full px-6 py-4 lg:w-40"
              >
                Learn More <span aria-hidden>»</span>
              </Button>
            </div>
            {/* The counter row leads on mobile and returns to the right-hand
                end from lg up, so the copy stays first in the DOM. */}
            <AnnouncementCountdown className="order-first flex gap-2 lg:order-none lg:gap-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
