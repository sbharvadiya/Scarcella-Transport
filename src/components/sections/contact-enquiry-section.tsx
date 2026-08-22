import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const rows = [
  {
    label: "Freight Enquiries",
    value: "ops@scarcellatransport.com.au",
    href: "mailto:ops@scarcellatransport.com.au",
    icon: "/img/elements (2).svg",
  },
  {
    label: "General Enquiries",
    value: "reception@scarcellatransport.com.au",
    href: "mailto:reception@scarcellatransport.com.au",
    icon: "/img/elements (2).svg",
  },
  {
    label: "Compliance & Accreditation",
    value: "compliance@scarcellatransport.com.au",
    href: "mailto:compliance@scarcellatransport.com.au",
    icon: "/img/elements (2).svg",
  },
  {
    label: "Please use the form or call us on",
    value: "02 4626 6661",
    href: "tel:0246266661",
    icon: "/img/elements (1).svg",
    large: true,
  },
];

export function ContactEnquirySection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <nav className="flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-ink">Contact Us</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[626fr_718fr]">
          <div className="flex h-full flex-col justify-between">
            <h1 className="text-[40px] font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              For Enquiries
              <br />
              or Questions
            </h1>

            <div className="mt-8 border-t border-line">
              {rows.map((row) => (
                <div key={row.label} className="border-b border-line py-4">
                  <p className="text-sm text-muted">{row.label}</p>
                  <a
                    href={row.href}
                    className={`mt-2 flex items-center gap-3 font-medium text-ink hover:text-brand-bright ${
                      row.large ? "text-xl sm:text-2xl" : "text-base"
                    }`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line">
                      <Image src={row.icon} alt="" width={14} height={14} />
                    </span>
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
    <form className="rounded-3xl bg-surface p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" placeholder="Enter your first name" required />
        <Field label="Last name" placeholder="Enter your last name" />
      </div>

      <div className="mt-5">
        <Field
          label="Email"
          placeholder="Enter your email address"
          icon="/img/mail-02.svg"
          required
        />
      </div>

      <div className="mt-5">
        <Field label="Subject" placeholder="What is your enquiry about?" />
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-ink">Leave us a message</label>
        <textarea
          rows={5}
          placeholder="Tell us how we can help"
          className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark py-4 text-sm font-semibold text-white hover:bg-brand"
      >
        Submit enquiry <SendIcon />
      </button>
    </form>
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
        {label} {required && <span className="text-[#DFE1DB]">*</span>}
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

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M14.5 1.5 7.25 8.75M14.5 1.5 9.75 14.5l-2.5-5.75L1.5 6.25l13-4.75Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
