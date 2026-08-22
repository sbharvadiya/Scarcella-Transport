import Image from "next/image";
import { Container } from "@/components/ui/container";

/*
  Figma "Group 45" — Get a quote.
  Left column 567px, card 684px, 133px gutter inside the 1384px content width.
  Card: 32px padding, 32px gap, #F5F6F3 on a #EDEEEA hairline, 24px radius.
*/

const bullets = [
  {
    icon: "/img/delivery-tracking-01.svg",
    text: "Refrigerated, general, DG and oversize",
  },
  {
    icon: "/img/elements.svg",
    text: "Sydney–Darwin express, eastern seaboard, regional NSW",
  },
  {
    icon: "/img/customer-service-01.svg",
    text: "Spoken to a person, not a portal — ",
    phone: "(02) 4626 6661",
  },
];

export function QuoteForm() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,567fr)_minmax(0,684fr)] lg:gap-x-[133px] lg:gap-y-0">
          {/* ---- Copy + bullets ------------------------------------------ */}
          <div className="flex h-full flex-col">
            <div className="flex flex-col gap-4">
              <p className="type-caption-caps text-neutral-600">Get a quote</p>
              <h2 className="type-h2 text-neutral-950">
                Tell us what&apos;s moving. We&apos;ll come back with a price.
              </h2>
              <p className="type-body-lg max-w-[329px] text-neutral-600">
                Fill this in and operations will get back to you — usually same
                business day.
              </p>
            </div>

            <div className="mt-12 divide-y divide-line border-y border-line lg:mt-auto">
              {bullets.map((b) => (
                <div key={b.text} className="flex items-center gap-2 py-4">
                  <Image
                    src={b.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 shrink-0"
                  />
                  <p className="flex-1 text-base font-medium leading-6 text-neutral-950">
                    {b.text}
                    {b.phone && (
                      <a
                        href="tel:0246266661"
                        className="text-brand-bright hover:underline"
                      >
                        {b.phone}
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Form card ----------------------------------------------- */}
          <form className="flex flex-col gap-8 rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" placeholder="Enter Name" required />
                <Field label="Company" placeholder="Enter Company" />
                <Field
                  label="Phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  icon="/img/smart-phone-01.svg"
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  icon="/img/mail-02.svg"
                />
                <Field
                  label="Pickup suburb"
                  placeholder="e.g. Campbelltown NSW"
                />
                <Field label="Delivery suburb" placeholder="e.g. Darwin NT" />

                <div className="flex flex-col">
                  <FieldLabel label="Freight type" />
                  <div className="relative">
                    <select
                      defaultValue="Refrigerated"
                      className="type-label-md h-12 w-full appearance-none rounded-xl border border-neutral-300 bg-white py-3 pl-3 pr-11 text-neutral-800 focus:border-brand-bright focus:outline-none"
                    >
                      <option>Refrigerated</option>
                      <option>General</option>
                      <option>Oversize</option>
                      <option>Dangerous goods</option>
                    </select>
                    <CaretDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <Field
                  label="When does it need to move?"
                  placeholder="e.g. next Tuesday"
                />
              </div>

              <div className="flex flex-col">
                <FieldLabel label="Freight details" />
                <textarea
                  rows={3}
                  placeholder="Pallets, weight, dimensions, temperature requirements…"
                  className="type-label-md h-24 w-full resize-none rounded-xl border border-line bg-white p-3 text-neutral-800 placeholder:text-neutral-500 focus:border-brand-bright focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="type-label-lg flex h-14 w-full items-center justify-center rounded-xl bg-brand-bright px-6 text-white transition-colors hover:bg-brand"
              >
                Request my quote
              </button>
              <p className="type-body-sm text-center text-neutral-600">
                This concept form is wired to a live CRM — submissions land with the Sora team, not Scarcella.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="flex items-start gap-1">
      <span className="type-body-sm text-neutral-800">{label}</span>
      {required && <span className="type-body-sm text-neutral-300">*</span>}
    </span>
  );
}

function Field({
  label,
  placeholder,
  required,
  icon,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  icon?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <FieldLabel label={label} required={required} />
      <div className="flex h-12 items-center gap-2 rounded-xl border border-line bg-white p-3 focus-within:border-brand-bright">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 shrink-0"
          />
        )}
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          className="type-label-md min-w-0 flex-1 bg-transparent text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

function CaretDown({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 11L12 14L15 11"
        stroke="#C9CBC2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
