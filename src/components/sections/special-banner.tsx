import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function SpecialBanner() {
  return (
    <section className="py-16 lg:py-[144px]">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-ink lg:h-[560px] lg:grid-cols-[660px_1fr] lg:items-center lg:gap-[74px] lg:p-6">
          <div className="relative h-[288px] lg:h-[512px]">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <SiteImage
                {...images.primeMoverFront}
                sizes="(max-width: 1024px) 100vw, 660px"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 p-6 lg:max-w-[568px] lg:gap-[34px] lg:p-0">
            <div className="flex flex-col gap-6">
              <h2 className="type-h2-h3 text-white">
                We think we are quite special
              </h2>
              <div className="flex flex-col gap-4">
                <p className="type-body-md text-neutral-300">
                  The distinctive green and white colours of the Kenworths and
                  Macks can be seen regularly between Sydney and Darwin,
                  Brisbane to Darwin and Melbourne to Darwin.
                </p>
                <p className="type-body-md text-neutral-300">
                  Scarcella Transport currently operates a large Road Train
                  operation to the northern regions and departs Sydney twice
                  weekly to Darwin delivering on time freight in many varying
                  combinations.
                </p>
              </div>
            </div>
            <Button
              href="/quote"
              variant="primary"
              size="none"
              className="type-label-lg h-12 w-full gap-2 rounded-xl px-6 lg:w-[165px]"
            >
              Get a Quote
              <ChevronRightDuo />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChevronRightDuo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M7 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
