import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { LocationsGrid } from "@/components/sections/locations-grid";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Sydney—Campbelltown, Darwin—Yarrawonga, and a new Adelaide branch launching soon. Three locations, one trusted transport network.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Locations"
        title="One trusted transport network."
        description="Two depots, 4,000 km apart, with a third on the way in Adelaide — every load runs through people who know the lane."
        image={images.outbackDusk.src}
        imageAlt="Scarcella Transport road train on the highway at dusk"
      />
      <AnnouncementBanner />
      <LocationsGrid />
      <CtaBand
        title="Freight moving through one of our depots?"
        description="Get in touch with the local team directly, or request a quote online."
      />
    </>
  );
}
