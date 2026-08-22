import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { QuoteForm } from "@/components/sections/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us what's moving and we'll come back with a price — usually same business day.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        breadcrumb="Get a Quote"
        title="We'll come back with a price."
        description="Refrigerated, general, oversize or dangerous goods — fill in the details below and operations will be in touch."
        image={images.heroRoadTrains.src}
        imageAlt="F&A Scarcella Transport road train"
      />
      <QuoteForm />
    </>
  );
}
