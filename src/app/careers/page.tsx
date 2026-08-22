import type { Metadata } from "next";
import { CareersHero } from "@/components/sections/careers-hero";
import { CareersApplySection } from "@/components/sections/careers-apply-section";
import { LocationsGrid } from "@/components/sections/locations-grid";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a family-run fleet. Driver, workshop and operations roles across our Sydney and Darwin depots.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersApplySection />
      <LocationsGrid title="Our Locations" description={null} />
    </>
  );
}
