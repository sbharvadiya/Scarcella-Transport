import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

function CouplingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 15V9a2 2 0 0 1 2-2h6l3 3h5a2 2 0 0 1 2 2v3" />
      <circle cx="7" cy="17" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />
      <path d="M9.2 17h5.6" />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5c-1.8-1-4-1.4-6-1v13c2 0 4.2.4 6 1.4V5z" />
      <path d="M12 5c1.8-1 4-1.4 6-1v13c-2 0-4.2.4-6 1.4V5z" />
    </svg>
  );
}

function FatigueIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12a8 8 0 1 1-3-6.2" />
      <path d="M19 3v4h-4" />
      <path d="M12 8v4.5l2.5 1.5" />
    </svg>
  );
}

function LoadRestraintIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 20 8v8l-8 4.5-8-4.5V8l8-4.5Z" />
      <path d="M4.3 7.8 12 12l7.7-4.2" />
      <path d="M12 12v8.7" />
    </svg>
  );
}

const standards = [
  { icon: CouplingIcon, label: "Coupling and uncoupling trailers" },
  { icon: ComplianceIcon, label: "All relevant OH&S compliance issues" },
  { icon: FatigueIcon, label: "Fatigue and the effects of fatigue in transport" },
  { icon: LoadRestraintIcon, label: "Advanced Load Restraint" },
];

export function DriverStandardsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
              Driver Standards
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              All drivers receive induction and ongoing training; all drivers
              participate in the company&apos;s health screening program
              aligned with the Truck Safe Accreditation Program.
            </p>

            <h3 className="mt-10 text-lg font-medium leading-snug text-ink sm:text-xl">
              Scarcella Transport has a high priority on safety and all
              drivers are trained in the following:
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {standards.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-surface px-5 py-6 text-center"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-bright/10 text-brand-bright">
                    <s.icon />
                  </span>
                  <p className="text-sm leading-snug text-ink">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-2xl bg-surface px-5 py-4 text-sm text-ink">
              All Training is delivered by{" "}
              <span className="font-medium text-brand-bright underline decoration-brand-bright/40">
                Pentrans Consulting
              </span>{" "}
              (
              <span className="font-medium text-brand-bright underline decoration-brand-bright/40">
                Ian Pendered
              </span>
              ).
            </p>
          </div>

          <div className="rounded-3xl bg-surface p-6 sm:p-8">
            <div className="relative h-72 overflow-hidden rounded-2xl bg-white sm:h-80">
              <SiteImage
                {...images.guardianCamera}
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-6 text-sm text-muted">The tech in the cab:</p>
            <p className="text-lg font-medium text-ink">
              Guardian Seeing-eye in-cab camera
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
