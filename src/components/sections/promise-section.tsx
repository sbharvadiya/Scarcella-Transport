import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { images } from "@/lib/images";

/*
 * Figma card: 509x288. The number is pinned to the top, the title/copy block to
 * the bottom, and the titles carry hand-placed line breaks (each one breaks at
 * a different width, so no single wrap width reproduces them).
 */
const promises = [
  {
    n: "01",
    title: "Right the first time,\nevery time",
    desc: "Not a slogan — the founding principle. Every load is run like the family's reputation depends on it, because it does.",
    icon: images.promiseIconRightFirstTime,
    // The tick sits on the title's second line, not above it: 48px circle
    // centred at (361,176) in the 509x288 card puts the 1511x276 strip at
    // 52% wide, 24% in from the right, 53% down.
    iconClassName: "right-[24%] top-[53%] w-[52%] aspect-[1511/276]",
  },
  {
    n: "02",
    title: "Fresh\nmeans fresh",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconFreshMeansFresh,
    // The frame keeps the dotted line and snowflakes that run left out of the
    // thermometer, so the strip is placed whole. The tube's outline fills the
    // strip's full height (only its mercury sits inside), so 70% puts the
    // glyph at 39x169 spanning y 58-227 — centred on the card, right edge 47px
    // in, which is where the frame has it.
    iconClassName: "right-[9%] top-[20%] w-[70%] aspect-[1587/755]",
  },
  {
    n: "03",
    title: "Maintained like\nour name depends on it",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconMaintained,
    // Sized off the cog: it reads ~52px in the frame and is 0.39 of the
    // strip's width, so the strip is ~137 (27%), not the 163 it was.
    iconClassName: "right-[14%] top-[36%] w-[30%] aspect-[754/776]",
  },
  {
    n: "04",
    title: "A person answers,\nday or night",
    desc: "Two-up driver teams run the Darwin express non-stop and fatigue-compliant — two days door to door, cold chain unbroken.",
    icon: images.promiseIconPersonAnswers,
    // Like the thermometer, the handset carries a big faint arc that fills the
    // strip — measuring the handset alone (76x89 in the frame) put the strip at
    // 1.7x its size. At 31% the arc lands flush with the card's right edge.
    iconClassName: "right-6 top-[20%] w-[45%] aspect-[977/747]",
  },
];

export function PromiseSection() {
  return (
    /* Figma "Mask group": a 1512x1696 frame stacking a white -> #77A1CC ramp
       (Rectangle 4189), a blurred #77A1CC band across the seam (Rectangle 4190)
       and the road-train photo, all flattened into one export. The frame splits
       at y=684, where the band has already gone solid #77A1CC: above that the
       artwork is flat horizontally, so it is reproduced as a CSS ramp that can
       stretch with the copy; below it comes straight off the export. The
       section colour is that seam colour, so no hairline can show between the
       two halves (Rectangle 25's #F5F5F5 never surfaces). */
    <section className="relative overflow-hidden bg-[#77a1cc]">
      {/* Stops sampled off the export. The ramp's length is fixed in the frame
          (white at y=0, solid #77A1CC by y=616), so from lg up it is pinned in
          vw — 616/1512 = 40.74vw — and scales with the frame exactly like the
          photo below. Copy taller than the frame's 684px therefore sits on the
          band's solid #77A1CC instead of stretching the ramp out flat. Below
          lg the 1512 frame does not apply, so the stops stay proportional. */}
      <div className="bg-[linear-gradient(180deg,#fdfdfe_0%,#d5e2ef_30%,#acc5df_60%,#8db0d4_75%,#7ba4cd_85%,#77a1cc_90%)] lg:bg-[linear-gradient(180deg,#fdfdfe_0,#d5e2ef_13.56vw,#acc5df_27.12vw,#8db0d4_33.93vw,#7ba4cd_38.43vw,#77a1cc_40.74vw)] min-[1920px]:bg-[linear-gradient(180deg,#fdfdfe_0,#d5e2ef_257px,#acc5df_514px,#8db0d4_643px,#7ba4cd_728px,#77a1cc_782px)]">
        <Container className="pt-20 pb-0 sm:pt-28">
          <div className="text-center">
            <Eyebrow className="text-ink/50">The Scarcella promise</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Our name is on the truck. That&apos;s the guarantee.
            </h2>
          </div>

          {/* Figma cards are 509x288 with a 24px gutter, so the grid is
              509*2 + 24 = 1042 wide and centred inside the 1512 frame rather
              than filling the container's full 1384px. */}
          <div className="mx-auto mt-10 grid max-w-[1042px] grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {promises.map((p) => (
              <div
                key={p.n}
                /* Figma panel: fill #477FB8 at 16%, 1px #FFFFFF at 16% border,
                   24px padding, space-between, background blur 12. */
                className="relative flex min-h-[170px] flex-col overflow-hidden rounded-2xl border border-white/[0.16] bg-[#477fb8]/[0.16] p-6 text-white backdrop-blur-[12px] lg:min-h-[288px]"
              >
                {/* The exports are dark line art with the Figma opacity baked
                    into their alpha (peak 33-66%), so on the blue card they
                    read as grey smudges. brightness-0 invert repaints every
                    visible pixel white and leaves that alpha alone, which is
                    the white the frame shows — no extra opacity on top. */}
                <Image
                  src={p.icon.src}
                  alt=""
                  width={p.icon.width}
                  height={p.icon.height}
                  unoptimized
                  priority
                  className={`pointer-events-none absolute select-none object-contain brightness-0 invert ${p.iconClassName}`}
                />
                <div className="relative flex flex-1 flex-col justify-between gap-6">
                  <span className="text-xl font-normal leading-none text-white/80 lg:text-[36px]">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="whitespace-pre-line text-lg font-medium leading-snug sm:text-xl lg:text-[36px] lg:leading-[48px] lg:tracking-[-1px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm lg:mt-4 lg:leading-5">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-[1042px] text-center text-lg font-medium text-white sm:text-xl">
            Innovation with a purpose: continually improving safety and
            efficiency — that&apos;s been the written vision of this company
            from the start, not a line added by a marketing agency.
          </p>
        </Container>
      </div>

      {/* The photo shows the frame's bottom slice, cropped from asset y=875
          rather than the frame's 684: the band holds #77A1CC flat to 840 and is
          still within 3/255 of it at 875, so the seam stays invisible, and
          starting that low leaves 100px of sky over the warehouse instead of
          the frame's 291px — that gap only reads as a void because our copy
          block runs taller than the frame's 684px. 54.3vw keeps the crop exact
          at every width; past 2560 it freezes so a zoomed-out window cannot
          push the trucks thousands of px down, and object-bottom keeps them
          whole there. */}
      <div className="relative h-[81.5vw] w-full overflow-hidden sm:h-[67.9vw] lg:h-[54.3vw] min-[2560px]:h-[1390px]">
        {/* Bottom-anchored at its natural aspect, so the block's height alone
            decides where the crop starts. Small screens widen the photo past
            the viewport and anchor it left: that keeps the prime mover whole
            (centring would cut its nose off) and scales the trucks up, while
            the block height is re-derived per step — 0.4844 of the image's
            height, whatever the zoom — so the top edge still lands on y=875.
            150% -> 81.5vw, 125% -> 67.9vw, 100% -> 54.3vw. */}
        <Image
          src={images.promiseRoadTrain.src}
          alt={images.promiseRoadTrain.alt}
          width={1512}
          height={1696}
          sizes="(max-width: 639px) 150vw, (max-width: 1023px) 125vw, 100vw"
          className="absolute bottom-0 left-0 w-[150%] max-w-none sm:w-[125%] lg:w-full"
        />
        {/* The frame dissolves the photo's bottom into the dark section that
            follows instead of butting it against a hard edge — ~150px of the
            frame, so 10vw, ramped to the same #181c1a the people section uses.
            Sits after the photo so it paints over it. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[15vw] bg-gradient-to-b sm:h-[10vw] from-ink/0 to-ink" />
      </div>
    </section>
  );
}
