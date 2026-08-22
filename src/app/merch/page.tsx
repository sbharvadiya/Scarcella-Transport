import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";

export const metadata: Metadata = {
  title: "Merch Store",
  description:
    "Official Scarcella Transport merch — the Sydney–Darwin Express range in the green and white.",
};

const products = [
  { name: "Sydney–Darwin Express Hoodie", price: "$65" },
  { name: "Sydney–Darwin Express Tee", price: "$40" },
  { name: "Green & White Trucker Cap", price: "$30" },
];

export default function MerchPage() {
  return (
    <>
      <PageHero
        breadcrumb="Merch Store"
        title="Wear the green and white."
        description="Fifty years on Australian highways has earned a few fans. Printed in Australia, shipped anywhere we drive."
        image={images.merchRack.src}
        imageAlt="Scarcella Transport warehouse"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {products.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative h-64">
                  <SiteImage
                    src={images.merchRack.src}
                    alt={p.name}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-ink">{p.name}</h3>
                  <p className="mt-2 text-base font-semibold text-brand-bright">{p.price}</p>
                  <Button href="mailto:ops@scarcellatransport.com.au" variant="dark" size="md" className="mt-4 w-full">
                    Enquire to order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
