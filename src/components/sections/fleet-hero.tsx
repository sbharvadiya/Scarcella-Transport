import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { ScriptWord } from "@/components/sections/page-hero";

/**
 * Figma: 584px tall at 375px, 672px at 1512px, with the H1 centred and sitting
 * 32px (mobile) / 48px (desktop) off the bottom of the frame. The centred title
 * is why this does not compose from `PageHero`, which pins its copy bottom-left.
 */
export function FleetHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full lg:h-[672px]">
        <VideoBackground src="/videos/fleet-page_loop.mp4" cropLetterbox />
        {/* Figma scrim: 180deg ramping to 0.72 at the base so the centred white
            title stays legible. The mobile frame starts at 0.1728/0%, the
            desktop one at 0.1152/-12.66%. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,28,26,0.1728)_0%,rgba(24,28,26,0.72)_100%)] lg:bg-[linear-gradient(180deg,rgba(24,28,26,0.1152)_-12.66%,rgba(24,28,26,0.72)_100%)]" />

        <div className="relative flex h-full flex-col">
          <Container className="pt-[92px] lg:pt-[112px]">
            <nav
              className="type-body-sm flex items-center gap-1"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-neutral-400 hover:text-white">
                Home
              </Link>
              <span className="text-white" aria-hidden>
                /
              </span>
              <span className="text-white">Our Fleet</span>
            </nav>
          </Container>

          <div className="flex flex-1 items-end pb-8 lg:pb-[48px]">
            <Container>
              <h1 className="type-h1 text-center text-white">
                We&apos;re <ScriptWord>Built</ScriptWord> to last
              </h1>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
