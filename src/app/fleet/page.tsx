import type { Metadata } from "next";
import { FleetHero } from "@/components/sections/fleet-hero";
import { FleetQualitySection } from "@/components/sections/fleet-quality-section";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "45+ prime movers and 150 trailers — late-model Kenworths and Macks, serviced weekly, in the green and white.",
};

export default function FleetPage() {
  return (
    <>
      <FleetHero />
      <FleetQualitySection />

    </>
  );
}
