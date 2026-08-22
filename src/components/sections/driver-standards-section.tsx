import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images, driverStandardIcons } from "@/lib/images";

const standards = [
  { icon: driverStandardIcons.coupling, lines: ["Coupling", "and uncoupling trailers"] },
  { icon: driverStandardIcons.compliance, lines: ["All relevant", "OH&S compliance issues"] },
  { icon: driverStandardIcons.fatigue, lines: ["Fatigue and the", "effects of fatigue in transport"] },
  { icon: driverStandardIcons.loadRestraint, lines: ["Advanced", "Load Restraint"] },
];

export function DriverStandardsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:items-start lg:gap-x-[132px]">
          <div className="contents lg:block">
            <h2 className="type-h2 order-1 text-neutral-950">
              Driver Standards
            </h2>
            <p className="type-body-md order-2 mt-4 text-neutral-600">
              All drivers receive induction and ongoing training; all drivers
              participate in the company&apos;s health screening program
              aligned with the Truck Safe Accreditation Program.
            </p>
            <h3 className="type-h5 order-4 mt-6 text-neutral-950">
              Scarcella Transport has a high priority on safety and all
              drivers are trained in the following:
            </h3>
            <div className="order-5 mt-4 grid grid-cols-2 gap-x-2 gap-y-4">
              {standards.map((s) => (
                <div
                  key={s.lines.join(" ")}
                  className="flex min-h-33 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-surface p-4 text-center"
                >
                  <Image src={s.icon.src} alt={s.icon.alt} width={48} height={48} className="shrink-0" />
                  <p className="text-[18px] font-medium leading-6 tracking-[-0.24px] text-neutral-950">
                    {s.lines[0]}
                    <br />
                    {s.lines[1]}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-6 mt-4 flex min-h-17 flex-col justify-center rounded-2xl border border-neutral-200 bg-surface px-4 py-2.25">
              <p className="text-base font-normal leading-6 text-neutral-950">
                All Training is delivered by{" "}
                <span className="text-brand-bright underline decoration-brand-bright">
                  Pentrans Consulting
                </span>{" "}
                (
                <span className="text-brand-bright underline decoration-brand-bright">
                  Ian Pendered
                </span>
                ).
              </p>
            </div>
          </div>
          <div className="order-3 mt-6 flex flex-col justify-end overflow-hidden rounded-3xl border border-neutral-200 bg-[#f2f3ee] lg:order-none lg:mt-0 lg:h-[608px]">
            <div className="relative h-72 sm:h-80 lg:h-auto lg:flex-1">
              <SiteImage
                {...images.guardianCamera}
                fit="contain"
                className="p-8"
                sizes="(max-width: 1024px) 100vw, 626px"
              />
            </div>
            <div className="flex flex-col items-start p-6 sm:p-8">
              <p className="type-body-sm self-stretch text-[#525252]">
                The tech in the cab:
              </p>
              <p className="type-h5 self-stretch text-black">
                Guardian Seeing-eye in-cab camera
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
