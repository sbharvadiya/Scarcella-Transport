import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { ScriptWord } from "@/components/sections/page-hero";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[584px] w-full lg:h-[672px]">
        <VideoBackground src="/videos/about-page_story-loop_v2.mp4" cropLetterbox />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,28,26,0.1728) 0%, rgba(24,28,26,0.72) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,28,26,0.1152) 0%, rgba(24,28,26,0.72) 100%)",
          }}
        />
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
              <span className="text-white">About Us</span>
            </nav>
          </Container>
          <div className="flex flex-1 items-end pb-8 lg:pb-[48px]">
            <Container className="flex flex-col gap-4 lg:items-center lg:text-center">
              <h1 className="type-h1 max-w-[343px] text-white lg:max-w-[1150px]">
                <span className="lg:hidden">
                  Three{" "}
                  <ScriptWord size="custom" className="text-[40px] leading-none">
                    Generations.
                  </ScriptWord>{" "}
                  Same Standard.
                </span>
                <span className="hidden lg:inline">
                  Three Generations.{" "}
                  <ScriptWord size="custom" className="block text-[68px]">
                    Same Standard.
                  </ScriptWord>
                </span>
              </h1>
              <p className="type-body-lg max-w-[343px] text-white lg:max-w-[1150px]">
                Two brothers started it in the late 1960s. The name on the door
                hasn&apos;t changed.
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
