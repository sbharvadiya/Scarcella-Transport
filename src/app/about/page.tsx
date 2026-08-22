import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { WhyWeStandOut } from "@/components/sections/why-we-stand-out";
import { SpecialBanner } from "@/components/sections/special-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-run since the late 1960s. Meet the Scarcella brothers and the crews who carry the green and white.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeStandOut />
      <SpecialBanner />
    </>
  );
}
