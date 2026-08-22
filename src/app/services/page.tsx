import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { ServicesTabs } from "@/components/sections/services-tabs";
import { RatesBand } from "@/components/sections/rates-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scheduled lanes and specialised gear — refrigerated, general, oversize and dangerous goods freight across the eastern seaboard and Sydney–Darwin express.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Our Services"
        title="We Offer a Range of Services to Meet Your Needs on the Road"
        description="We make it happen with all types of freight."
        image={images.servicesHero.src}
        imageAlt="Scarcella Transport Kenworth road train"
        video="/videos/services-page_freight-loop.mp4"
      />
      <ServicesTabs />
      <RatesBand />
    </>
  );
}
