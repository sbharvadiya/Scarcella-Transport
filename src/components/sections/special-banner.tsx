import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function SpecialBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl bg-ink lg:grid-cols-2">
          <div className="relative h-[320px] p-4 sm:h-[420px] sm:p-6">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <SiteImage
                {...images.primeMoverFront}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
              We think we are quite special
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              The distinctive green and white colours of the Kenworths and
              Macks can be seen regularly between Sydney and Darwin, Brisbane
              to Darwin and Melbourne to Darwin.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Scarcella Transport currently operates a large Road Train
              operation to the northern regions and departs Sydney twice
              weekly to Darwin delivering on time freight in many varying
              combinations.
            </p>
            <div className="mt-8">
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote <span aria-hidden>»</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
