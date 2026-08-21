import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/container";
import { depots } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak to a person, not a portal. Call (02) 4626 6661 or email ops@scarcellatransport.com.au.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Spoken to a person, not a portal."
        description="Call, email, or drop by one of our depots — operations answer, day or night."
        image={images.primeMoverFront.src}
        imageAlt="Scarcella Transport Kenworth road train"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium text-ink sm:text-4xl">
                Get in touch.
              </h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-2xl bg-surface p-6">
                  <p className="text-sm font-medium text-muted">Phone</p>
                  <a href="tel:0246266661" className="mt-1 block text-2xl font-medium text-ink hover:text-brand-bright">
                    (02) 4626 6661
                  </a>
                  <p className="mt-1 text-sm text-muted">After hours: 0413 021 210</p>
                </div>
                <div className="rounded-2xl bg-surface p-6">
                  <p className="text-sm font-medium text-muted">Email</p>
                  <a href="mailto:ops@scarcellatransport.com.au" className="mt-1 block text-xl font-medium text-ink hover:text-brand-bright">
                    ops@scarcellatransport.com.au
                  </a>
                </div>
              </div>
            </div>

            <form className="rounded-3xl bg-surface p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-ink">Name</label>
                  <input type="text" placeholder="Enter Name" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">Phone</label>
                  <input type="text" placeholder="Enter Phone Number" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none" />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-ink">Email</label>
                <input type="email" placeholder="Enter Email" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none" />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-ink">Message</label>
                <textarea rows={5} placeholder="How can we help?" className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none" />
              </div>
              <button type="submit" className="mt-6 w-full rounded-full bg-brand-dark py-4 text-sm font-semibold text-white hover:bg-brand">
                Send message
              </button>
            </form>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {depots.map((d) => (
              <div key={d.name} className="rounded-2xl bg-surface p-6">
                <h3 className="text-lg font-medium text-ink">{d.name}</h3>
                <p className="mt-2 text-sm text-muted">{d.address}</p>
                <div className="mt-4 space-y-1 border-t border-line pt-4">
                  <a href={d.phoneHref} className="block text-sm font-medium text-ink hover:text-brand-bright">
                    {d.phone}
                  </a>
                  <a href={`mailto:${d.email}`} className="block text-sm text-muted hover:text-brand-bright">
                    {d.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
