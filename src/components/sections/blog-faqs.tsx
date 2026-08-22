"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Figma "Questions we get asked" — bordered rows with a chevron that rotates
 * as the answer opens. Rows use native buttons so keyboard and screen-reader
 * users get the disclosure semantics for free.
 */
export function BlogFaqs({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[848px] px-4 sm:px-6 lg:px-0">
        <h2 className="type-h3 text-ink">Questions we get asked</h2>

        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="rounded-2xl border border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="type-body-md-medium text-ink">{faq.question}</span>
                  <ChevronIcon open={open} />
                </button>

                {open ? (
                  <div className="px-6 pb-6">
                    <p className="type-body-md text-muted">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn(
        "shrink-0 text-neutral-600 transition-transform duration-200",
        open ? "rotate-0" : "rotate-180",
      )}
    >
      <path
        d="m6 15 6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
