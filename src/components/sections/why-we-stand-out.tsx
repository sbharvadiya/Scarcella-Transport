import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 items-center justify-center rounded-lg bg-[rgba(13,120,60,0.12)] px-3 text-sm font-medium leading-6 tracking-[-0.24px] text-brand-bright lg:text-base lg:tracking-normal">
      {children}
    </span>
  );
}

type Card = {
  title: string;
  paragraphs: string[];
  pills: string[];
  bg: { src: string; alt: string };
  height: string;
  bgAspect: number;
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
    height: "lg:h-[466px]",
    bgAspect: 2400 / 1800,
  },
  {
    title: "How We Operate",
    paragraphs: [
      "The company operates with two drivers in each truck to ensure compliance to fatigue regulations are adhered to but the level of service is not compromised. Scarcella Transport also have solo drivers to help move some of the less time sensitive freight across the country.",
      "The company workshop handles all the scheduled and non scheduled maintenance. Each piece of equipment is fully serviced every week once it has made the 8000km round trip to Darwin. With a maintenance management scheme in place and a member of truck safe, Scarcella\u2019s level of fleet maintenance and repairs is second to none. We also have a large list of approved service providers and authorised repairers throughout Australia.",
    ],
    pills: ["Pickup → Loading → Road Train → Delivery"],
    bg: images.graphicGauge,
    height: "lg:h-[466px]",
    bgAspect: 2400 / 1800,
  },
  {
    title: "Our Vision",
    paragraphs: [
      "Scarcella Transport will always strive to be an innovative leader in the transport industry, continually improving safety and efficiency and utilising the latest technology in road freight transport",
    ],
    pills: ["Safety — Continually improving", "Efficiency — Latest technology"],
    bg: images.graphicTrajectory,
    height: "lg:h-[394px]",
    bgAspect: 2400 / 1800,
  },
  {
    title: "Our Mission",
    paragraphs: [
      "Scarcella Transport are responsible for ensuring the quality and reliability of all products and services it provides. We recognise that quality starts with the planning of all activities and goes through all subsequent phases of our services. A \u2018do it right first time, every time\u2019 approach is the key to delivering customer satisfaction, quality service, a safe operation and reliable/efficient service.",
      "We also recognise the value in supporting the economies in the northern territory and the remote communities who reply on the goods and services we provide.",
    ],
    pills: ["Quality — And reliability", "First time — Every time"],
    bg: images.graphicMilestones,
    height: "lg:h-[394px]",
    bgAspect: 2534 / 1800,
  },
];

export function WhyWeStandOut() {
  return (
    <section className="bg-white pt-16 pb-8 lg:pt-[144px] lg:pb-0">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[312px_minmax(0,684px)] lg:justify-between lg:gap-0">
          <h2 className="type-h2 text-ink">
            Why We<span className="hidden lg:inline"><br /></span>
            <span className="lg:hidden"> </span>Stand Out
          </h2>
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-brand-bright pl-4 lg:pl-6">
              <p className="type-h5 text-brand-dark">
                When you have been in the road freight business as long as we
                have, you know that experience counts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="type-body-md text-neutral-600">
                Scarcella Transport is based in NSW and has been in business
                since the late 1960s. During that time, the small family company
                carried coal locally, and was involved in the transportation of
                grain, fertilizer, and produce for the rural community in NSW.
                The company has diversified, delivering quality services to the
                Northern Regions of the country using Road Trains as well as B
                Doubles across the eastern seaboard.
              </p>
              <p className="type-body-md text-neutral-600">
                We like to be flexible. We like to listen. We care about your
                next delivery and our history tells us we are one of the best in
                the business.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-[80px] lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line p-6 lg:p-10 bg-[#f1f0ec] ${card.height}`}
            >
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 select-none"
                style={{ aspectRatio: card.bgAspect }}
                aria-hidden
              >
                <SiteImage
                  src={card.bg.src}
                  alt=""
                  className="object-bottom"
                  sizes="(max-width: 1024px) 100vw, 684px"
                />
              </div>
              <div className="relative flex flex-col gap-4">
                <h3 className="type-h3 text-ink">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {card.paragraphs.map((p, i) => (
                    <p key={i} className="type-body-md text-neutral-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative mt-6 flex flex-wrap items-center gap-2">
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
