import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { FleetShowcase } from "@/components/sections/fleet-showcase";
import { PeopleSection } from "@/components/sections/people-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "45+ prime movers and 150 trailers — late-model Kenworths and Macks, serviced weekly, in the green and white.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Fleet"
        title="Late-model Kenworths and Macks, in the green and white."
        description="Conventional and slider refrigerated vans, tautliners, flat tops, Swiss door models and drop deck mezzanine units."
        image={images.fleetLineup.src}
        imageAlt="Scarcella Transport Kenworth road train"
        video="/videos/fleet-page_loop.mp4"
      />
      <FleetShowcase />
      <PeopleSection />
      <CtaBand
        title="Need specialised gear for a big job?"
        description="Tell us the freight and we'll match it to the right combination in the fleet."
      />
    </>
  );
}
