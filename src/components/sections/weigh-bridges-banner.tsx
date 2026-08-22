import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function WeighBridgesBanner() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[420px]">
      {/* TODO: placeholder footage. There is no weigh-bridge cut in the library
          — public/videos/README-WHERE-THESE-GO.txt flags it for the next shoot
          day. Swap this src once that footage lands. */}
      <VideoBackground
        src="/videos/safety-page_wash-bay-loop.mp4"
        poster={images.freightForklift.src}
        cropLetterbox
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
      <div className="relative flex h-full items-end justify-center pb-12 sm:pb-16">
        <h2 className="text-3xl font-medium text-white sm:text-5xl">
          Weigh Bridges at our depots
        </h2>
      </div>
    </section>
  );
}
