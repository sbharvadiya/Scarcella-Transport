import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

/*
  Figma "Contact Us" — hero enquiry block.
  Left column 626px, card 718px inside the 1384px content width. The left
  column is justify-between so the contact rows bottom-align with the card:
  the heading sits at the top, the divided list flushes to the baseline.
*/

const rows = [
  {
    label: "Freight Enquiries",
    value: "ops@scarcellatransport.com.au",
    href: "mailto:ops@scarcellatransport.com.au",
    icon: "/img/icon-mail-02.svg",
  },
  {
    label: "General Enquiries",
    value: "reception@scarcellatransport.com.au",
    href: "mailto:reception@scarcellatransport.com.au",
    icon: "/img/icon-mail-02.svg",
  },
  {
    label: "Compliance & Accreditation",
    value: "compliance@scarcellatransport.com.au",
    href: "mailto:compliance@scarcellatransport.com.au",
    icon: "/img/icon-mail-02.svg",
  },
  {
    /*
      The phone row is the one emphasised entry — Figma sets it at Heading/H5
      with the label above, so `large` swaps the type ramp rather than the
      layout.
    */
    label: "Please use the form or call us on",
    value: "02 4626 6661",
    href: "tel:0246266661",
    icon: "/img/icon-smart-phone-01.svg",
    large: true,
  },
];

export function ContactEnquirySection() {
  return (
    <section className="pb-16 sm:pb-20 pt-[16px]">
      <Container>
        <nav
          className="type-body-sm flex items-center gap-1"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-neutral-400 hover:text-ink">
            Home
          </Link>
          <span className="text-ink" aria-hidden>
            /
          </span>
          <span className="text-ink">Contact Us</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-[minmax(0,626fr)_minmax(0,718fr)] lg:gap-x-16">
          <div className="flex h-full flex-col justify-between gap-12">
            <h1 className="type-h2 text-ink">
              For Enquiries
              <br />
              or Questions
            </h1>

            <div className="divide-y divide-line border-y border-line">
              {rows.map((row) => (
                <div key={row.label} className="flex flex-col py-4">
                  <p className="type-body-sm text-neutral-600 ml-8">{row.label}</p>
                  <a
                    href={row.href}
                    className={`flex w-fit items-center gap-2 text-ink transition-colors hover:text-brand-bright ${
                      row.large ? "type-h5" : "type-body-md-medium"
                    }`}
                  >
                    <Image
                      src={row.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 shrink-0"
                      aria-hidden
                    />
                    {row.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-6 rounded-3xl bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="First name"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <Field
            label="Last name"
            name="lastName"
            placeholder="Enter your last name"
          />
        </div>

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          icon="/img/icon-mail-02.svg"
          required
        />

        <Field
          label="Subject"
          name="subject"
          placeholder="What is your enquiry about?"
        />

        <div className="flex flex-col">
          <FieldLabel label="Leave us a message" htmlFor="message" />
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us how we can help"
            className="type-label-md h-28 w-full resize-none rounded-xl border border-line bg-white p-3 text-neutral-800 placeholder:text-neutral-500 focus:border-brand-bright focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="type-label-lg flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-bright px-6 text-white transition-colors hover:bg-brand"
      >
        Submit enquiry
        <SendIcon />
      </button>
    </form>
  );
}

function FieldLabel({
  label,
  required,
  htmlFor,
}: {
  label: string;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="flex items-start gap-1">
      <span className="type-body-sm text-neutral-800">{label}</span>
      {required && (
        <span className="type-body-sm text-neutral-300" aria-hidden>
          *
        </span>
      )}
    </label>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  icon,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  icon?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <FieldLabel label={label} required={required} htmlFor={name} />
      <div className="flex h-12 items-center gap-2 rounded-xl border border-line bg-white p-3 focus-within:border-brand-bright">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 shrink-0"
            aria-hidden
          />
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="type-label-md min-w-0 flex-1 bg-transparent text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.5 3.5 11.5 12.5M20.5 3.5 14.75 20.5l-3.25-8-8-3.25L20.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
