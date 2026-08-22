import Image from "next/image";
import { Container } from "@/components/ui/container";
import { logos } from "@/lib/images";

const partners = [
  logos.truckSafe,
  logos.nhvas,
  logos.accredThree,
  logos.sillaker,
  logos.accredFour,
];

export function AccreditationPartnersSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <h2 className="text-center text-3xl font-medium text-ink sm:text-4xl">
          Scarcella Transport is part of:
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.src}
              className="flex h-32 items-center justify-center rounded-2xl bg-surface p-6"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={120}
                className="h-auto max-h-20 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
