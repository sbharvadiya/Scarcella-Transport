import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { ChevronRightDuo } from "@/components/ui/chevron-right-duo";
import { SharePost } from "@/components/ui/share-post";
import { BlogFaqs } from "@/components/sections/blog-faqs";
import { BlogCard } from "@/components/sections/blog-card";
import { posts, getPost, formatPostDate, type BlogBlock } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) notFound();

  const body: BlogBlock[] = post.body ?? [
    { type: "lead", text: post.excerpt },
    { type: "image", src: post.image, alt: post.title },
  ];

  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="pt-4">
        <Container>
          <nav className="type-body-sm flex flex-wrap items-center gap-1" aria-label="Breadcrumb">
            <Link href="/" className="text-neutral-400 transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-neutral-400" aria-hidden>
              /
            </span>
            <Link href="/blog" className="text-neutral-400 transition-colors hover:text-ink">
              Blog
            </Link>
            <span className="text-ink" aria-hidden>
              /
            </span>
            <span className="text-ink">{post.title}</span>
          </nav>
        </Container>
      </section>
      <article className="pb-16">
        <div className="mx-auto w-full max-w-[848px] px-4 sm:px-6 lg:px-0">
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-line p-4">
            <Image
              src="/brand/scarcella-logo.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden
              className="h-8 w-8 shrink-0 rounded-full border border-line bg-white object-contain p-[3px]"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-5 tracking-[-0.24px] text-ink">
                Scarcella Transport
              </p>
              <p className="mt-0.5 text-xs leading-4 text-neutral-600">
                <time dateTime={post.date}>{formatPostDate(post)}</time>
                <span aria-hidden className="mx-1.5">
                  •
                </span>
                {post.readMinutes} min read
              </p>
            </div>
            <SharePost slug={post.slug} title={post.title} />
          </div>
          <h1 className="type-h3 mt-8 text-ink">{post.title}</h1>
          <div className="mt-8 flex flex-col gap-6">
            {body.map((block, i) => (
              <BodyBlock key={i} block={block} />
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-surface p-6 sm:flex-row sm:items-center">
            <Button href="/quote" variant="primary" size="md">
              Get an interstate freight quote
              <ChevronRightDuo className="h-6 w-6" />
            </Button>
            <p className="type-body-sm text-ink">
              or call{" "}
              <a
                href="tel:0246266661"
                className="font-medium text-brand-bright underline underline-offset-4"
              >
                (02) 4626 6661
              </a>{" "}
              and talk it through with the depot.
            </p>
          </div>
          <div className="mt-10 border-t border-line pt-8">
            <SharePost slug={post.slug} title={post.title} inline />
          </div>
        </div>
      </article>
      {post.faqs?.length ? <BlogFaqs faqs={post.faqs} /> : null}

      <section className="border-t border-line py-16 lg:py-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="type-h3 text-ink">Recent Posts</h2>
            <Link
              href="/blog"
              className="type-label-lg inline-flex items-center gap-2 text-ink transition-colors hover:text-brand-bright"
            >
              See All
              <ChevronRightDuo className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function BodyBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "lead":
      return <p className="type-body-md text-ink">{block.text}</p>;

    case "paragraph":
      return <p className="type-body-sm text-ink">{block.text}</p>;

    case "note":
      return <p className="type-body-sm italic text-[#A9AC9F]">{block.text}</p>;

    case "heading":
      return <h2 className="type-h5 mt-4 text-ink">{block.text}</h2>;

    case "image":
      return (
        <figure className="my-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface">
            <SiteImage
              src={block.src}
              alt={block.alt}
              sizes="(max-width: 848px) 100vw, 848px"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-2 text-xs leading-5 text-neutral-600">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}
