import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { images, blogThumbs } from "@/lib/images";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News and updates from F&A Scarcella Transport — fleet, safety, and life on the Sydney–Darwin lane.",
};

const posts = [
  {
    slug: "new-adelaide-branch",
    image: blogThumbs[0],
    tag: "Company news",
    title: "New Adelaide branch launching soon",
    excerpt:
      "We're adding a third depot to the network, with two runs a week between Adelaide and Darwin.",
  },
  {
    slug: "fleet-servicing-standard",
    image: blogThumbs[1],
    tag: "The fleet",
    title: "Why every truck is serviced weekly",
    excerpt:
      "After every 8,000 km Darwin round trip, each prime mover goes through a full workshop check before it's back on the road.",
  },
  {
    slug: "technology-behind-every-load",
    image: blogThumbs[2],
    tag: "Safety",
    title: "The technology behind every load",
    excerpt:
      "Teletrac Navman, Guardian fatigue monitoring and live mass management — a look at what's fitted to every Scarcella truck.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Blog"
        title="News from the green and white."
        description="Updates on the fleet, the depots, and the people who keep the Sydney–Darwin lane running."
        image={images.blogHero.src}
        imageAlt="Scarcella Transport prime mover at the depot"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative h-52 overflow-hidden">
                  <SiteImage
                    src={post.image}
                    alt={post.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Pill className="self-start">{post.tag}</Pill>
                  <h3 className="mt-4 text-xl font-medium text-ink">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-5 text-sm font-medium text-brand-bright">
                    Read more »
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
