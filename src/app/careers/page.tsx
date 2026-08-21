import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { CareersCta } from "@/components/sections/careers-cta";
import { PeopleSection } from "@/components/sections/people-section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a family-run fleet. Driver, workshop and operations roles across our Sydney and Darwin depots.",
};

const perks = [
  { title: "Modern fleet", desc: "Late-model Kenworths and Macks, serviced weekly." },
  { title: "Two-up teams", desc: "Fatigue-compliant scheduling on every long-haul run." },
  { title: "Family-run", desc: "Decisions made by people whose name is on the door." },
  { title: "Real career paths", desc: "From workshop apprentice to prime mover driver." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the green and white."
        description="We're a family-run operation that looks after the people who keep the wheels turning. If that sounds like you, we'd like to hear from you."
        image={images.depotGateSign.src}
        imageAlt="F. & A. Scarcella livery detail"
        video="/videos/careers-page_loop.mp4"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CareersCta />
      <PeopleSection />
    </>
  );
}
