import type { Metadata } from "next";
import { ContactEnquirySection } from "@/components/sections/contact-enquiry-section";
import { LocationsGrid } from "@/components/sections/locations-grid";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak to a person, not a portal. Call (02) 4626 6661 or email ops@scarcellatransport.com.au.",
};

export default function ContactPage() {
  return (
    <>
      <ContactEnquirySection />
      <LocationsGrid title="Our Locations" description={null} />
    </>
  );
}
