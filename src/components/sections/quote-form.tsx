import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";

const bullets = [
  { icon: <BoxIcon />, text: "Refrigerated, general, DG and oversize" },
  {
    icon: <RouteIcon />,
    text: "Sydney–Darwin express, eastern seaboard, regional NSW",
  },
  {
    icon: <HeadsetIcon />,
    text: "Spoken to a person, not a portal — (02) 4626 6661",
  },
];

export function QuoteForm() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Tell us what&apos;s moving. We&apos;ll come back with a price.
            </h2>
            <p className="mt-4 text-base text-muted">
              Fill this in and operations will get back to you — usually same
              business day.
            </p>

            <div className="mt-14 divide-y divide-line border-t border-line">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-4 py-5">
                  <span className="text-brand-bright">{b.icon}</span>
                  <p className="text-sm text-ink">
                    <a href="tel:0246266661" className="font-semibold text-ink underline decoration-brand-bright/40 hover:decoration-brand-bright">
                      {b.text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-3xl bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Enter Name" required />
              <Field label="Company" placeholder="Enter Company" />
              <Field label="Phone" placeholder="Enter Phone Number" required />
              <Field label="Email" placeholder="Enter Email" />
              <Field label="Pickup suburb" placeholder="e.g. Campbelltown NSW" />
              <Field label="Delivery suburb" placeholder="e.g. Darwin NT" />
              <div>
                <label className="text-sm font-medium text-ink">Freight type</label>
                <select className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink focus:border-brand-bright focus:outline-none">
                  <option>Refrigerated</option>
                  <option>General</option>
                  <option>Oversize</option>
                  <option>Dangerous goods</option>
                </select>
              </div>
              <Field label="When does it need to move?" placeholder="e.g. next Tuesday" />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-ink">Freight details</label>
              <textarea
                rows={4}
                placeholder="Pallets, weight, dimensions, temperature requirements…"
                className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-dark py-4 text-sm font-semibold text-white hover:bg-brand"
            >
              Request my quote
            </button>
            <p className="mt-4 text-center text-xs text-muted">
              Submissions are sent directly to our operations team.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  placeholder,
  required,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">
        {label} {required && <span className="text-brand-bright">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none"
      />
    </div>
  );
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 6 10 2.5 17.5 6 10 9.5 2.5 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2.5 6v8L10 17.5V9.5M17.5 6v8L10 17.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="4.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.5" cy="15" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 7v3a3 3 0 0 0 3 3h5" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
    </svg>
  );
}
function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 11v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2" y="11" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="14" y="11" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
