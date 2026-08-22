import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

function CouplingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 15V9a2 2 0 0 1 2-2h6l3 3h5a2 2 0 0 1 2 2v3" />
      <circle cx="7" cy="17" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />
      <path d="M9.2 17h5.6" />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.5c-1.8-1-4-1.4-6-1v11c2 0 4.2.4 6 1.4V6.5z" />
      <path d="M12 6.5c1.2-.7 2.6-1.1 4-1.2" />
      <path d="M12 17.9V6.5" />
      <path d="m20.5 11.5-4.2 4.2-2.1.5.5-2.1 4.2-4.2a1.2 1.2 0 0 1 1.6 1.6Z" />
    </svg>
  );
}

function FatigueIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 10.5h3" />
      <path d="M13 16.5a2 2 0 0 1 4 0" />
      <path d="M17 2h4l-4 5h4" />
    </svg>
  );
}

function LoadRestraintIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.6 21 7.4v9.2L12 21.4 3 16.6V7.4l9-4.8Z" />
      <path d="M3.3 7.6 12 12.2l8.7-4.6" />
      <path d="M12 12.2v9.2" />
    </svg>
  );
}

const standards = [
  { icon: CouplingIcon, lines: ["Coupling", "and uncoupling trailers"] },
  { icon: ComplianceIcon, lines: ["All relevant", "OH&S compliance issues"] },
  { icon: FatigueIcon, lines: ["Fatigue and the", "effects  of fatigue in transport"] },
  { icon: LoadRestraintIcon, lines: ["Advanced", "Load Restraint"] },
];

export function DriverStandardsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:items-start lg:gap-x-[132px]">
          <div className="contents lg:block">
            <h2 className="order-1 text-[40px] font-medium leading-[1.1] tracking-[-1px] text-neutral-950 sm:text-5xl lg:text-[56px] lg:leading-16 lg:tracking-[-2px]">
              Driver Standards
            </h2>
            <p className="order-2 mt-4 text-base font-normal leading-6 text-neutral-600">
              All drivers receive induction and ongoing training; all drivers
              participate in the company&apos;s health screening program
              aligned with the Truck Safe Accreditation Program.
            </p>
            <h3 className="order-4 mt-10 text-2xl font-medium leading-8 tracking-[-0.72px] text-neutral-950">
              Scarcella Transport has a high priority on safety and all
              drivers are trained in the following:
            </h3>
            <div className="order-5 mt-4 grid grid-cols-2 gap-4">
              {standards.map((s) => (
                <div
                  key={s.lines.join(" ")}
                  className="flex min-h-[136px] flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-surface p-4 text-center"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-bright">
                    <s.icon />
                  </span>
                  <p className="text-[18px] font-medium leading-6 tracking-[-0.24px] text-neutral-950">
                    {s.lines[0]}
                    <br />
                    {s.lines[1]}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-6 mt-4 flex min-h-14 flex-col justify-center rounded-2xl border border-neutral-200 bg-surface p-4">
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
          <div className="order-3 mt-8 flex flex-col justify-end overflow-hidden rounded-3xl border border-neutral-200 bg-[#f2f3ee] lg:order-none lg:mt-0 lg:h-[608px]">
            <div className="relative h-72 sm:h-80 lg:h-auto lg:flex-1">
              <SiteImage
                {...images.guardianCamera}
                fit="contain"
                className="p-8"
                sizes="(max-width: 1024px) 100vw, 626px"
              />
            </div>
            <div className="flex flex-col items-start p-6 sm:p-8">
              <p className="self-stretch text-base font-medium leading-6 tracking-[-0.24px] text-[#525252]">
                The tech in the cab:
              </p>
              <p className="self-stretch text-2xl font-medium leading-8 tracking-[-0.72px] text-black">
                Guardian Seeing-eye in-cab camera
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
