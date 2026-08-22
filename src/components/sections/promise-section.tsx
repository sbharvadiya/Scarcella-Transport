import Image from "next/image";
import { Container } from "@/components/ui/container";
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
          {/* Frame 135: an 829px centred stack — Caption/lg caps in
              Neutral/600 over a Heading/H2 in Neutral/950, 16px apart. The
              frame's third line (the "cold chain produce" standfirst) is
              display:none, so it is not rendered here. */}
          <div className="mx-auto max-w-[829px] text-center">
            <p className="type-caption-caps text-neutral-600">
              The Scarcella promise
            </p>
            <h2 className="type-h2 mt-4 text-ink">
              Our name is on the truck. That&apos;s the guarantee.
            </h2>
          </div>

          {/* Figma "Frame 137": cards are 509x288 on a 16px gutter (the second
              column starts at 525, the second row at 304), so the grid is
              509*2 + 16 = 1034 wide and centred inside the 1512 frame rather
              than filling the container's full 1384px. It sits 40px under the
              header. */}
          <div className="mx-auto mt-10 grid max-w-[1034px] grid-cols-1 gap-4 sm:grid-cols-2">
            {promises.map((p) => (
              <div
                key={p.n}
                /* Figma panel: fill #477FB8 at 16%, 1px #FFFFFF at 16% border,
                   24px padding, space-between, backdrop-filter: blur(6px). */
                className="relative flex min-h-[170px] flex-col overflow-hidden rounded-2xl border border-white/[0.16] bg-[#477fb8]/[0.16] p-6 text-white backdrop-blur-[6px] lg:min-h-[288px]"
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
                  {/* Frame 84 — Heading/H4. */}
                  <span className="type-h4 text-white">{p.n}</span>
                  <div>
                    {/* Frame 89 — Heading/H3 over Body/Sm, 16px apart, both
                        Neutral/0. */}
                    <h3 className="type-h3 whitespace-pre-line">{p.title}</h3>
                    <p className="type-body-sm mt-4 text-white">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Heading/H5, the full 1034 measure, 40px under the grid. */}
          <p className="type-h5 mx-auto mt-10 max-w-[1034px] text-center text-white">
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
        {/* Figma "Rectangle 4191": a 2382x508 #181C1A rect under an 85.55px
            layer blur, spanning y 7456-7964 while the mask group — the photo —
            is clipped at 7620. So the rect's top edge sits 164px above the
            photo's bottom and it runs 344px past it. This is not a ramp: it is
            a hard-edged block whose top edge the blur turns into a Gaussian
            falloff, ~256px of fade each side. The onset therefore lands on the
            trucks' tyres, not halfway up the trailers — measuring the overhang
            off "Rectangle 4190" (the solid #181C1A the people section runs on,
            which only starts at 7760) put the rect 140px too high.

            At the photo's bottom the edge is 1.92 sigma in — 97% opaque over
            asphalt already within a few units of #181C1A, so the seam with the
            people section still reads as flat. The 344px overhang and the
            435px per side are there purely so the rect's other three blurred
            edges fall outside the visible area; the overhang is clipped here
            the same way the solid rect covers it in the frame. The frame's
            28.8% is taken to 40% because the sides have to clear 3 sigma of
            their own blur, and sigma is widest (8.49vw) at the mobile step.

            Every measurement is in frame units, so all three scale with the
            photo above (150% / 125% / 100%) and freeze past 2560 with it. */}
        <div className="pointer-events-none absolute -inset-x-[40%] -bottom-[34.1vw] h-[50.4vw] bg-ink blur-[8.49vw] sm:-bottom-[28.4vw] sm:h-[42vw] sm:blur-[7.07vw] lg:-bottom-[22.8vw] lg:h-[33.6vw] lg:blur-[5.66vw] min-[2560px]:-bottom-[582px] min-[2560px]:h-[860px] min-[2560px]:blur-[145px]" />
      </div>
    </section>
  );
}
