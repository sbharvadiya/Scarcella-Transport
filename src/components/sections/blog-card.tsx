import Image from "next/image";
import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import { SharePost } from "@/components/ui/share-post";
import { formatPostDate, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex flex-col">
      <Link href={`/blog/${post.slug}`} className="flex flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface">
          <SiteImage
            src={post.image}
            alt={post.title}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <h2 className="type-h5 mt-5 line-clamp-2 text-ink transition-colors group-hover:text-brand-bright">
          {post.title}
        </h2>
        <p className="type-body-sm mt-3 line-clamp-2 text-[#A9AC9F]">{post.excerpt}</p>
      </Link>
      <div className="mt-5 flex items-center gap-3 border-b border-line pb-5">
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
    </article>
  );
}
