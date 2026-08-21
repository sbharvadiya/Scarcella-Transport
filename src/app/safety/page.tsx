import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { SafetyTechGrid } from "@/components/sections/safety-tech-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Accreditation & Safety",
  description:
    "TruckSafe accredited, with Teletrac Navman, Guardian fatigue monitoring, live GPS and on-board mass management fitted fleet-wide.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation & Safety"
        title="It's fitted to every truck."
        description="Safety isn't a policy on a wall — it's technology fitted fleet-wide, monitored in real time, and backed by national accreditation."
        image={images.safetyHero.src}
        imageAlt="Scarcella Transport fleet at the depot"
        video="/videos/safety-page_workshop-mechanics-loop.mp4"
      />
      <SafetyTechGrid showWashBay />
      <CtaBand
        title="Questions about our compliance or accreditation?"
        description="Speak directly to operations — we're happy to walk through our safety systems."
      />
    </>
  );
}
