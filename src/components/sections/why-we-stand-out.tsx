import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-bright/15 bg-brand-bright/10 px-4 py-2 text-xs font-medium text-brand-dark sm:text-sm">
      {children}
    </span>
  );
}

type Card = {
  title: string;
  paragraphs: string[];
  pills: string[];
  bg: { src: string; alt: string };
};

const cards: Card[] = [
  {
    title: "Our Specialties",
    paragraphs: [
      "We offer a 2 day express services from Sydney – Brisbane – Melbourne to Darwin with 2up teams driving non stop to offer a unrivaled level of service.",
      "With air bag suspension, late model equipment and experienced operators we can ensure your freight arrives intact, in full and on time.",
    ],
    pills: ["2 day — Express service", "2up — Teams driving non stop"],
    bg: images.graphicRoadTrain,
  },
  {
    title: "How We Operate",
    paragraphs: [
      "The company operates with two drivers in each truck to ensure compliance to fatigue regulations are adhered to but the level of service is not compromised. Scarcella Transport also have solo drivers to help move some of the less time sensitive freight across the country.",
      "The company workshop handles all the scheduled and non scheduled maintenance. Each piece of equipment is fully serviced every week once it has made the 8000km round trip to Darwin. With a maintenance management scheme in place and a member of truck safe, Scarcella's level of fleet maintenance and repairs is second to none. We also have a large list of approved service providers and authorised repairers throughout Australia.",
    ],
    pills: ["Pickup → Loading → Road Train → Delivery"],
    bg: images.graphicGauge,
  },
  {
    title: "Our Vision",
    paragraphs: [
      "Scarcella Transport will always strive to be an innovative leader in the transport industry, continually improving safety and efficiency and utilising the latest technology in road freight transport",
    ],
    pills: ["Safety — Continually improving", "Efficiency — Latest technology"],
    bg: images.graphicTrajectory,
  },
  {
    title: "Our Mission",
    paragraphs: [
      "Scarcella Transport are responsible for ensuring the quality and reliability of all products and services it provides. We recognise that quality starts with the planning of all activities and goes through all subsequent phases of our services. A 'do it right first time, every time' approach is the key to delivering customer satisfaction, quality service, a safe operation and reliable/efficient service.",
      "We also recognise the value in supporting the economies in the northern territory and the remote communities who reply on the goods and services we provide.",
    ],
    pills: ["Quality — And reliability", "First time — Every time"],
    bg: images.graphicMilestones,
  },
];

export function WhyWeStandOut() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <h2 className="text-[40px] font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Why We
            <br />
            Stand Out
          </h2>
          <div className="border-l-4 border-brand-bright pl-6">
            <p className="text-xl font-medium leading-snug text-ink sm:text-2xl">
              When you have been in the road freight business as long as we
              have, you know that experience counts.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Scarcella Transport is based in NSW and has been in business
              since the late 1960s. During that time, the small family
              company carried coal locally, and was involved in the
              transportation of grain, fertilizer, and produce for the rural
              community in NSW. The company has diversified, delivering
              quality services to the Northern Regions of the country using
              Road Trains as well as B Doubles across the eastern seaboard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We like to be flexible. We like to listen. We care about your
              next delivery and our history tells us we are one of the best
              in the business.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative flex h-125 flex-col overflow-hidden rounded-3xl bg-surface p-8 sm:h-135 sm:p-10"
            >
              <SiteImage
                src={card.bg.src}
                alt=""
                className="object-cover object-bottom-right"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              <div className="relative">
                <h3 className="text-2xl font-medium text-ink sm:text-[28px]">
                  {card.title}
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                  {card.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
                {card.pills.map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
