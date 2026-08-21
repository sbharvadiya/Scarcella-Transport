import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";

const bullets = [
  {
    icon: "/img/elements.svg",
    text: "Refrigerated, general, DG and oversize",
  },
  {
    icon: "/img/delivery-tracking-01.svg",
    text: "Sydney–Darwin express, eastern seaboard, regional NSW",
  },
  {
    icon: "/img/customer-service-01.svg",
    text: "Spoken to a person, not a portal — (02) 4626 6661",
  },
];

export function QuoteForm() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex h-full flex-col">
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Tell us what&apos;s moving. We&apos;ll come back with a price.
            </h2>
            <p className="mt-4 text-base text-muted">
              Fill this in and operations will get back to you — usually same
              business day.
            </p>

            <div className="mt-14 divide-y divide-line border-t border-line lg:mt-auto">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-4 py-5">
                  <Image src={b.icon} alt="" width={22} height={22} />
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
              <Field
                label="Phone"
                placeholder="Enter Phone Number"
                icon="/img/smart-phone-01.svg"
                required
              />
              <Field
                label="Email"
                placeholder="Enter Email"
                icon="/img/mail-02.svg"
              />
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
              className="mt-6 w-full rounded-xl bg-brand-dark py-4 text-sm font-semibold text-white hover:bg-brand"
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
  icon,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  icon?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">
        {label} {required && <span className="text-brand-bright">*</span>}
      </label>
      <div className="relative mt-2">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={18}
            height={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full rounded-xl border border-line bg-white py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none ${
            icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}
