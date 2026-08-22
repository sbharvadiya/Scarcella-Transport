import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/sections/blog-card";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News and updates from F&A Scarcella Transport — fleet, safety, and life on the Sydney–Darwin lane.",
};

export default function BlogPage() {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <Container>
        <nav className="type-body-sm flex items-center gap-1" aria-label="Breadcrumb">
          <Link href="/" className="text-neutral-400 transition-colors hover:text-ink">
            Home
          </Link>
          <span className="text-ink" aria-hidden>
            /
          </span>
          <span className="text-ink">Blog</span>
        </nav>
        <h1 className="type-h1 mt-6 text-ink">Blog</h1>
        <p className="type-body-sm mt-6 max-w-[520px] text-ink">
          News, updates and explainers from the green and white — the fleet, the depots, and
          the people who keep the Sydney–Darwin lane running.
        </p>
        <div className="mt-10 border-b border-line">
          <span className="inline-flex items-center gap-2 border-b-2 border-ink pb-3 text-sm font-medium tracking-[-0.24px] text-ink">
            All Posts
            <span className="text-neutral-600">({posts.length})</span>
          </span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
