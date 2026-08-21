import type { Metadata } from "next";
import { PageHero, ScriptWord } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServiceDetailList } from "@/components/sections/service-detail-list";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scheduled lanes and specialised gear — refrigerated, general, oversize and dangerous goods freight across the eastern seaboard and Sydney–Darwin express.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            <ScriptWord>One family</ScriptWord> answerable for all of it.
          </>
        }
        description="Scheduled lanes, specialised gear, and a fleet built for the freight other carriers won't run."
        image={images.servicesHero.src}
        imageAlt="Scarcella Transport Kenworth road train"
        video="/videos/services-page_freight-loop.mp4"
      />
      <ServicesGrid />
      <ServiceDetailList />
      <CtaBand
        title="Tell us what's moving."
        description="We'll come back with a price — usually same business day."
      />
    </>
  );
}
