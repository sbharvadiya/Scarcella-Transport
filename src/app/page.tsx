import { HomeHero } from "@/components/sections/home-hero";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FleetShowcase } from "@/components/sections/fleet-showcase";
import { SafetyTechGrid } from "@/components/sections/safety-tech-grid";
import { StoryTimeline } from "@/components/sections/story-timeline";
import { PromiseSection } from "@/components/sections/promise-section";
import { PeopleSection } from "@/components/sections/people-section";
import { CareersCta } from "@/components/sections/careers-cta";
import { QuoteForm } from "@/components/sections/quote-form";
import { MerchBanner } from "@/components/sections/merch-banner";
import { LocationsGrid } from "@/components/sections/locations-grid";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AnnouncementBanner />
      <ServicesGrid />
      <FleetShowcase />
      <SafetyTechGrid />
      <StoryTimeline />
      <PromiseSection />
      <PeopleSection />
      <CareersCta />
      <QuoteForm />
      <MerchBanner />
      <LocationsGrid />
    </>
  );
}
