import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function WeighBridgesBanner() {
  return (
    <section className="relative h-160 w-full overflow-hidden sm:h-[420px] lg:h-200">
      <VideoBackground
        src="/videos/safety-page_wash-bay-loop.mp4"
        poster={images.freightForklift.src}
        cropLetterbox
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,28,26,0.0768)_71.37%,rgba(24,28,26,0.5632)_100%)]" />
      <div className="relative flex h-full items-end justify-center pb-12 sm:pb-16">
        <h2 className="type-h2 max-w-164 text-center text-white">
          Weigh Bridges at our depots
        </h2>
      </div>
    </section>
  );
}
