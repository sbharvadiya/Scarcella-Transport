import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

const EMAIL = "ops@scarcellatransport.com.au";

function ChevronRightDuo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
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

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 7.4 5.3a1 1 0 0 0 1.2 0L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RatesBand() {
  return (
    <section className="pb-16 lg:pb-[144px]">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink">
          <SiteImage
            {...images.fleetLineup}
            className="object-center"
            sizes="(max-width: 1024px) 100vw, 1384px"
          />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="relative flex flex-col gap-8 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-12">
            <div className="flex flex-col gap-4 lg:max-w-[640px]">
              <h2 className="type-h2-h3 text-white">Rates</h2>
              <p className="type-body-md text-neutral-300">
                <span className="text-white">Scarcella Transport</span>{" "}
                continually offers a superior service at competitive rates.
                Please{" "}
                <Link href="/contact" className="text-white underline">
                  contact us
                </Link>{" "}
                for a quote via
              </p>
            </div>
            <Link
              href={`mailto:${EMAIL}`}
              className="type-label-lg inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-brand-bright px-4 py-3 text-white transition-colors hover:bg-brand sm:px-6"
            >
              <MailIcon />
              <span className="whitespace-nowrap text-sm sm:text-base">{EMAIL}</span>
              <ChevronRightDuo />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
