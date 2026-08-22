import Image from "next/image";
import { Container } from "@/components/ui/container";
import { accreditationBadges } from "@/lib/images";

const partners = [
  accreditationBadges.truckSafe,
  accreditationBadges.nhvas,
  accreditationBadges.waHeavyVehicle,
  accreditationBadges.silliker,
  accreditationBadges.natroad,
];

export function AccreditationPartnersSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 lg:gap-10">
        <h2 className="type-h2 text-center text-neutral-950">
          Scarcella Transport is part of:
        </h2>
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {partners.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={264}
              height={152}
              className="h-auto w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
