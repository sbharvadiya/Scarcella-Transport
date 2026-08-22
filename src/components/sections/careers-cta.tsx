import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

/*
 * Figma "Group 40": a 1384x512 block that opens on an 800px centred header
 * (Frame 136), drops the 1384x264 hiring banner (Group 39) 40px under it, and
 * closes on a 716px centred Body/Lg line 24px below the banner.
 *
 * The banner pads 56px on all four sides — 56 + 152 + 56 = its 264px height —
 * and the copy block and the button share the same baseline, so the row is
 * bottom-aligned rather than centred.
 */
export function CareersCta() {
  return (
    <section className="bg-ink pt-18 pb-20 text-white sm:pb-28">
      <Container>
        <div className="mx-auto max-w-[800px] text-left sm:text-center">
          <p className="type-caption-caps text-neutral-300">Join the team</p>
          <h2 className="type-h2 mt-4 text-white">
            Join the green and white.
          </h2>
          <p className="type-body-lg mt-4 text-neutral-300">
            We&apos;re a family-run operation that looks after the people who
            keep the wheels turning. If that sounds like you, we&apos;d like
            to hear from you.
          </p>
        </div>

        {/* Rectangle 2061: the photo under a flat 56% Neutral/950 wash — the
            frame's gradient has the same stop at both ends — with the same
            1px Neutral/800 border and 24px radius the people cards use. */}
        <div className="relative mt-10 min-h-[340px] overflow-hidden rounded-3xl border border-neutral-800 sm:min-h-[264px]">
          <SiteImage {...images.mechanicCummins} />
          <div className="absolute inset-0 bg-ink/56" />
          <div className="relative flex flex-col gap-8 p-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:p-14">
            {/* Frame 140: 652 wide, 24px between the title block and the copy,
                16px inside the title block. */}
            <div className="max-w-[652px]">
              <p className="type-caption-caps text-neutral-300">
                Now hiring · SYD Depot
              </p>
              <h3 className="type-h3 mt-4 text-white">
                Qualified Diesel Mechanic
              </h3>
              <p className="type-body-md mt-6 text-neutral-300">
                Positions available at our Sydney depot in Campbelltown NSW.
                Work on a modern, well-maintained fleet of Kenworth and Mack
                prime movers with a crew that takes pride in the gear.
              </p>
            </div>
            {/* 179x56: 16px/24px padding on a 12px radius, 8px between the
                icon and the label. */}
            <a
              href="mailto:ops@scarcellatransport.com.au"
              className="type-label-lg inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-brand-bright px-6 py-4 text-white transition-colors hover:bg-brand sm:self-auto"
            >
              {/* The export's paths are Neutral/400; the frame draws the glyph
                  in Neutral/0 with its tone layer at 40%, which is what
                  brightness-0 invert leaves once the per-path alpha is kept. */}
              <Image
                src="/img/mail-02.svg"
                alt=""
                width={24}
                height={24}
                className="brightness-0 invert"
              />
              Email to apply
            </a>
          </div>
        </div>

        {/* 716 wide, centred, 24px under the banner. */}
        <p className="type-body-lg mx-auto mt-6 max-w-[716px] text-center text-neutral-300">
          To apply for any role, email{" "}
          <a
            href="mailto:ops@scarcellatransport.com.au"
            className="underline"
          >
            ops@scarcellatransport.com.au
          </a>{" "}
          with your details and experience.
        </p>
      </Container>
    </section>
  );
}
