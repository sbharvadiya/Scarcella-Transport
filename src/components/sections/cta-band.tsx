import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title,
  description,
  primaryLabel = "Get a Freight Quote",
  primaryHref = "/quote",
  secondaryLabel = "Call (02) 4626 6661",
  secondaryHref = "tel:0246266661",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-brand-dark py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base text-white/70">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryHref} variant="primary" size="lg">
              {primaryLabel} <span aria-hidden>»</span>
            </Button>
            <Button href={secondaryHref} variant="outline-light" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
