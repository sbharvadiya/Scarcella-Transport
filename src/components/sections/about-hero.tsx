import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { ScriptWord } from "@/components/sections/page-hero";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[560px] w-full sm:h-[640px] lg:h-[700px]">
        <VideoBackground src="/videos/about-page_story-loop_v2.mp4" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            <nav className="flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">About Us</span>
            </nav>
          </Container>

          <div className="flex flex-1 flex-col items-center justify-end pb-14 text-center sm:pb-16">
            <Container className="flex flex-col items-center">
              <h1 className="max-w-3xl text-[40px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Three Generations.
              </h1>
              <p className="mt-1 text-white">
                <ScriptWord>Same Standard.</ScriptWord>
              </p>
              <p className="mt-5 max-w-lg text-base text-white/80">
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
