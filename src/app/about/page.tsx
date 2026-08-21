import type { Metadata } from "next";
import { PageHero, ScriptWord } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { StoryTimeline } from "@/components/sections/story-timeline";
import { PromiseSection } from "@/components/sections/promise-section";
import { PeopleSection } from "@/components/sections/people-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-run since the late 1960s. Meet the Scarcella brothers and the crews who carry the green and white.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Two brothers, one truck, and a{" "}
            <ScriptWord>name</ScriptWord> worth protecting.
          </>
        }
        description="A late-1960s coal run became a fleet the bush relies on. This is the family behind the name on every door."
        image={images.aboutHero.src}
        imageAlt="The Scarcella brothers with their road train"
        video="/videos/about-page_story-loop_v2.mp4"
      />
      <StoryTimeline />
      <PromiseSection />
      <PeopleSection />
      <CtaBand
        title="Want to talk to the family running the trucks?"
        description="Call the depot directly, or send through your freight details and we'll come back with a price."
      />
    </>
  );
}
