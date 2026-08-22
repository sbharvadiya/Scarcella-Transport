import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function WeighBridgesBanner() {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[420px]">
      <SiteImage {...images.freightForklift} sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
      <div className="relative flex h-full items-end justify-center pb-12 sm:pb-16">
        <h2 className="text-3xl font-medium text-white sm:text-5xl">
          Weigh Bridges at our depots
        </h2>
      </div>
    </section>
  );
}
