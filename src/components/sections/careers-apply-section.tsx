import Image from "next/image";
import { Container } from "@/components/ui/container";

const requirements = [
  "Be a minimum of 25 years of age (for insurance purposes)",
  "Hold a current MC class driver's licence issued in any Australian state or territory",
  "Provide 2 current referees",
  "Be able to provide a driving history from the relevant transport authority",
  "Undertake and pass a Truck Safe Medical prior to commencement and Drug Test",
];

export function CareersApplySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(20,20,15,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-[32px] font-medium leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
              Want to work with us?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              We have invested in motel style accommodation fully equipped
              with onsite individual rooms, kitchens, and laundry facilities.
              Your safety and rest is paramount to Scarcella Transport.
            </p>

            <h3 className="mt-16 text-xl font-medium leading-snug text-ink sm:mt-20 sm:text-2xl">
              Please note that for all driving positions,
              <br />
              the applicant must:
            </h3>

            <ul className="mt-6">
              {requirements.map((item, i) => (
                <li key={item} className="border-b border-line py-4 first:pt-0">
                  <span className="flex items-start gap-4 text-sm text-ink sm:text-base">
                    <span className="shrink-0 text-sm font-semibold text-brand-bright sm:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ApplyForm />
        </div>
      </Container>
    </section>
  );
}

function ApplyForm() {
  return (
    <form className="rounded-3xl bg-surface p-6 sm:p-10">
      <h3 className="text-xl font-medium text-ink sm:text-2xl">
        Join the success, please fill up the form below
      </h3>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" placeholder="Enter your first name" required />
        <Field label="Last name" placeholder="Enter your last name" />
        <Field
          label="Email"
          placeholder="Enter your email address"
          icon="/img/mail-02.svg"
          required
        />
        <Field
          label="Phone"
          placeholder="Enter your phone number"
          icon="/img/smart-phone-01.svg"
          required
        />
      </div>

      <div className="mt-5">
        <Field label="Address" placeholder="Enter your address" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink">Position</label>
          <div className="relative mt-2">
            <select
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink focus:border-brand-bright focus:outline-none"
            >
              <option value="" disabled>
                Select a position
              </option>
              <option>MC Driver</option>
              <option>Diesel Mechanic</option>
              <option>Operations</option>
              <option>Workshop apprentice</option>
            </select>
            <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
          </div>
        </div>
        <Field label="LinkedIn Link" placeholder="Enter your LinkedIn profile URL" />
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-ink">Cover Letter</label>
        <textarea
          rows={4}
          placeholder="Tell us about yourself and why you'd like to join Scarcella Transport"
          className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-bright focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark py-4 text-sm font-semibold text-white hover:bg-brand"
      >
        Submit application <SendIcon />
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

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={className}>
      <path d="M3 5.25 7 9l4-3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
