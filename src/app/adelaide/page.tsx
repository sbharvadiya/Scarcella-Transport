import type { Metadata } from "next";
import { AdelaideHero } from "@/components/sections/adelaide-hero";
import { AdelaideContent } from "@/components/sections/adelaide-content";

export const metadata: Metadata = {
  title: "Adelaide Branch",
  description:
    "New Adelaide branch launching soon. Two Adelaide to Darwin freight services per week — refrigerated, general and dangerous goods.",
};

export default function AdelaidePage() {
  return (
    <>
      <AdelaideHero />
      <AdelaideContent />
    </>
  );
}
