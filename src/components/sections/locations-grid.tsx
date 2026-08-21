import { Container } from "@/components/ui/container";
import { depots } from "@/lib/nav";
import { SiteImage } from "@/components/ui/site-image";

export function LocationsGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-medium text-ink sm:text-5xl">Head Office</h2>
          <p className="mt-4 text-base text-muted">
            <span className="font-semibold text-ink">Three locations.</span> One
            trusted transport network.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {depots.map((d) => (
            <div key={d.name} className="rounded-2xl bg-surface p-8">
              <h3 className="text-xl font-medium text-ink">{d.name}</h3>
              <p className="mt-2 text-sm text-muted">{d.address}</p>

              <div className="relative mt-8 h-32 overflow-hidden rounded-xl bg-surface-2">
                <SiteImage
                  src={d.image}
                  alt={`${d.name} depot`}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="mt-6 space-y-3 border-t border-line pt-5">
                <p className="flex items-center gap-2 text-sm text-ink">
                  <PhoneIcon /> (02) 4626 6661
                </p>
                <p className="flex items-center gap-2 text-sm text-ink">
                  <MailIcon /> ops@scarcellatransport.com.au
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted">
      <path d="M3.5 1.5h2l1.2 3-1.5 1a9 9 0 0 0 4.3 4.3l1-1.5 3 1.2v2c0 .8-.7 1.5-1.5 1.5C7 12 2 7 2 3c0-.8.7-1.5 1.5-1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
