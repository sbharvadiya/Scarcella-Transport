import { blogThumbs } from "@/lib/images";

/**
 * The blog index copy, in the order Figma lays the grid out.
 *
 * `date` is the ISO day the post is dated; the card prints the Figma
 * "Aug 2026" / "Nov 28, 2022" shape, so recent posts show month + year and
 * the older syndicated pieces keep their full date. `readMinutes` drives the
 * "N min read" label rather than being counted from the excerpt, which would
 * under-report against the full article body.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  dateFormat: "monthYear" | "fullDate";
  readMinutes: number;
  /** Article body. Posts without one still list on the index. */
  body?: BlogBlock[];
  faqs?: { question: string; answer: string }[];
};

/**
 * Article bodies are modelled as blocks rather than raw HTML so the renderer
 * keeps full control of the Figma type scale and image treatment, and so no
 * `dangerouslySetInnerHTML` is needed.
 */
export type BlogBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "note"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export const posts: BlogPost[] = [
  {
    slug: "sydney-to-darwin-freight-2-day-express",
    title: "Sydney to Darwin freight: inside the 2-day express",
    excerpt:
      "Road trains leave Sydney for Darwin every Tuesday and Friday — door to door in two days, cold chain unbroken. Inside Scarcella's express lane.",
    image: blogThumbs[0],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "how-to-choose-an-interstate-freight-company",
    title: "How to choose an interstate freight company: seven checks that separate carriers",
    excerpt:
      "Seven checks procurement teams should run before awarding interstate freight — fleet ownership, maintenance, DG authority and more.",
    image: blogThumbs[1],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "refrigerated-transport-cold-chain",
    title: "Refrigerated transport: how a cold chain stays unbroken for 4,000 km",
    excerpt:
      "What an unbroken cold chain actually requires over 4,000 km — equipment, drivers and discipline. How Scarcella moves refrigerated freight.",
    image: blogThumbs[2],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "what-does-interstate-freight-cost",
    title: "What does interstate freight cost? The six things a quote is actually made of",
    excerpt:
      "The six factors that actually set an interstate freight quote — distance, space, temperature, DG, timing and access — explained plainly.",
    image: blogThumbs[3],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
    body: [
      {
        type: "lead",
        text: "The six factors that actually set an interstate freight quote — distance, space, temperature, DG, timing and access — explained without the jargon.",
      },
      { type: "image", src: blogThumbs[3], alt: "Scarcella road train loaded at the Campbelltown depot" },
      {
        type: "paragraph",
        text: "Ask three carriers to quote the same load and you'll get three different numbers — and usually no explanation. Here's what actually drives an interstate freight quote, so you can compare quotes properly and avoid the surprises that show up as surcharges later.",
      },
      {
        type: "note",
        text: "(We deliberately don't publish rate tables — every lane and load is different, and a number without the details below would be a guess. What we will do is explain exactly what you're paying for.)",
      },
      { type: "heading", text: "1. The lane — and whether the carrier actually runs it" },
      {
        type: "paragraph",
        text: "Distance sets the base, but scheduled lanes price better than one-offs. A carrier running Sydney–Darwin twice a week, every week, prices that lane off a real operation. A carrier who has to work out how to get your freight there prices in their uncertainty.",
      },
      { type: "heading", text: "2. Space and weight — whichever bites first" },
      {
        type: "paragraph",
        text: "Freight is charged on the space it occupies or the weight it puts on the axles, whichever runs out first. Accurate dimensions and weights get you an accurate quote; \"roughly a pallet\" gets you a margin for error that you pay for.",
      },
      {
        type: "image",
        src: blogThumbs[2],
        alt: "Loading dock leveller at a refrigerated trailer",
        caption: "Space or weight — whichever bites first",
      },
      { type: "heading", text: "3. Temperature" },
      {
        type: "paragraph",
        text: "Refrigerated freight costs more than ambient — the trailer, the fuel to run the unit, and the discipline to keep the cold chain unbroken are all real costs. What matters is that \"refrigerated\" means continuously refrigerated, not refrigerated-most-of-the-way.",
      },
      { type: "heading", text: "4. Dangerous goods" },
      {
        type: "paragraph",
        text: "DG carriage requires authorisation, licensed drivers, placarding and segregation rules. If your freight is dangerous goods, say so at quote stage — an accurate DG declaration protects the price as well as the load.",
      },
      {
        type: "image",
        src: blogThumbs[8],
        alt: "Forklift loading palletised freight into a trailer",
        caption: "Dock handling is a real cost — it should be a visible one",
      },
      { type: "heading", text: "5. Timing" },
      {
        type: "paragraph",
        text: "A departure you can book onto is cheaper than a truck summoned for you. If your freight can ride a scheduled service — like our Tuesday and Friday Darwin express — you're sharing a linehaul that's running anyway.",
      },
      { type: "heading", text: "6. Access at both ends" },
      {
        type: "paragraph",
        text: "Dock-to-dock is the clean case. Tail-lift deliveries, remote sites, and tight access all add handling — legitimate costs, but they should be visible on the quote, not discovered on the invoice.",
      },
      {
        type: "image",
        src: blogThumbs[4],
        alt: "Two Scarcella prime movers parked at the depot",
        caption: "A scheduled lane prices better than a summoned truck",
      },
      { type: "heading", text: "How to get a quote that holds" },
      {
        type: "paragraph",
        text: "Give the carrier the six things above — lane, dimensions and weight, temperature, DG status, timing, access — and a good operator will give you a number that doesn't move. Leave any of them vague and you've bought a variable.",
      },
    ],
    faqs: [
      {
        question: "How is interstate freight calculated in Australia?",
        answer:
          "On whichever runs out first: the space your freight occupies in the trailer, or the weight it puts on the axles. Distance, temperature control, dangerous goods status, timing and access at both ends then adjust that base.",
      },
      {
        question: "Why do freight quotes vary so much between carriers?",
        answer:
          "Usually because carriers price risk differently. An operator running your lane on a fixed schedule prices off a real operation; one who has to arrange it prices in uncertainty. Quotes also differ on what they include — check whether tail-lift, fuel and dock handling are in the number or added later.",
      },
      {
        question: "Is refrigerated freight more expensive?",
        answer:
          "Yes. A refrigerated trailer costs more to buy and run, the unit burns fuel for the whole trip, and keeping the cold chain unbroken takes equipment and discipline. The premium buys continuous temperature control, not best-effort.",
      },
      {
        question: "What details do I need for an accurate freight quote?",
        answer:
          "Pickup and delivery addresses, pallet or item dimensions and weights, whether it needs temperature control, whether any of it is dangerous goods, when it needs to move, and what access is like at both ends — particularly whether a forklift or dock is available.",
      },
    ],
  },
  {
    slug: "adelaide-to-darwin-freight",
    title: "Adelaide to Darwin freight: the green and white is coming to South Australia",
    excerpt:
      "Scarcella Transport is opening an Adelaide branch — two Adelaide–Darwin services a week, own fleet, own drivers. What it means for shippers.",
    image: blogThumbs[4],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "what-is-a-road-train",
    title: "What is a road train? Inside Australia's biggest rigs",
    excerpt:
      "What counts as a road train, where they're allowed to run, and what it takes to drive one — from a family that's run them to Darwin for decades.",
    image: blogThumbs[5],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "serviced-after-every-run",
    title: "Serviced after every run: inside the workshop that keeps the schedule",
    excerpt:
      "Every Scarcella truck comes through the company's own workshop after each Darwin round trip. Inside the maintenance routine that protects the run.",
    image: blogThumbs[6],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
  {
    slug: "driving-for-the-name",
    title: "Driving for the name: what it's like behind a Scarcella wheel",
    excerpt:
      "MC drivers and diesel mechanics: what it's like driving for a family whose name is on every door — late-model gear, real runs, real support.",
    image: blogThumbs[7],
    date: "2026-08-01",
    dateFormat: "monthYear",
    readMinutes: 2,
  },
];

/** Look one post up by slug; used by the article route. */
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/**
 * Figma prints recent posts as "Aug 2026" and the older syndicated pieces as
 * "Nov 28, 2022". Formatting is pinned to en-AU with a UTC time zone so the
 * server and client render the same string — the date carries no local time.
 */
export function formatPostDate(post: BlogPost) {
  const date = new Date(`${post.date}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "UTC",
    ...(post.dateFormat === "monthYear"
      ? { month: "short", year: "numeric" }
      : { month: "short", day: "numeric", year: "numeric" }),
  }).format(date);
}
