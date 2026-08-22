import type { Metadata } from "next";
import { AccreditationHero } from "@/components/sections/accreditation-hero";
import { DriverStandardsSection } from "@/components/sections/driver-standards-section";
import { WeighBridgesBanner } from "@/components/sections/weigh-bridges-banner";
import { AccreditationPartnersSection } from "@/components/sections/accreditation-partners-section";
import { ExperienceBanner } from "@/components/sections/experience-banner";

export const metadata: Metadata = {
  title: "Accreditation & Safety",
  description:
    "TruckSafe accredited, with driver standards training, weigh bridges at our depots and national accreditation across the fleet.",
};

export default function SafetyPage() {
  return (
    <>
      <AccreditationHero />
      <DriverStandardsSection />
      <WeighBridgesBanner />
      <AccreditationPartnersSection />
      <ExperienceBanner />
    </>
  );
}
