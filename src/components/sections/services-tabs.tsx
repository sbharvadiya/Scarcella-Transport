"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

/** Figma "Button/Arrow/Chevron_Right_Duo" — two 1.5px chevrons in a 24px box. */
function ChevronRightDuo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M7 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Muted body copy with ink-coloured emphasis, the way the design marks terms. */
function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-ink">{children}</strong>;
}

const sections = [
  { id: "regular-services", label: "Regular services" },
  { id: "schedule", label: "Schedule of regular services provided" },
  { id: "other-services", label: "Other Services" },
] as const;

/** One end of a leg: the action and city over its day chip. */
function LegEnd({
  action,
  city,
  day,
  align = "start",
}: {
  action: string;
  city: string;
  day: string;
  align?: "start" | "end";
}) {
  const end = align === "end";
  return (
    <div className={`flex flex-col gap-1.5 ${end ? "items-end" : "items-start"}`}>
      <span className="type-body-sm text-muted">
        {action} <Em>{city}</Em>
      </span>
      <span className="type-body-sm rounded-full border border-line px-3 py-0.5 text-muted">
        {day}
      </span>
    </div>
  );
}

/**
 * One leg of the schedule: a white card holding depart and deliver ends either
 * side of a chevron, each end stacking its city over its day.
 */
function Leg({
  from,
  fromDay,
  to,
  toDay,
}: {
  from: string;
  fromDay: string;
  to: string;
  toDay: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3">
      <LegEnd action="Depart" city={from} day={fromDay} />
      <ChevronRightDuo className="size-5 shrink-0 text-muted" />
      <LegEnd action="Deliver" city={to} day={toDay} align="end" />
    </div>
  );
}

/** Header clearance before the first card parks. */
const STACK_TOP = 112;
/**
 * How far each card parks below the one before it — just enough of the covered
 * card's rounded top edge stays visible to read as a stack.
 */
const CARD_PEEK = 24;

/** Breathing room before the final card rides up over the one before it. */
const CARD_DWELL = 5;

/**
 * Cards stack as you scroll: each parks CARD_PEEK lower than the last and the
 * next slides up over it. z-index rises with the index so a later card always
 * covers the one before it, and the opaque background stops the covered card
 * showing through.
 *
 * Where a card opts into `dwell`, the gap is a bottom margin on the card
 * itself rather than a wrapper: a sticky element only travels inside its own
 * parent, so wrapping each card would confine it and break the stack.
 */
function Panel({
  id,
  index,
  title,
  image,
  children,
  dwell = false,
}: {
  id: string;
  index: number;
  title: string;
  image: { src: string; alt: string };
  children: React.ReactNode;
  /** Adds scroll room below this card before the next one covers it. */
  dwell?: boolean;
}) {
  return (
    <div
      id={id}
      className={`scroll-mt-28 rounded-3xl border border-line bg-surface p-6 lg:sticky lg:min-h-[520px] lg:p-8 ${
        dwell ? "lg:mb-[var(--card-dwell)]" : ""
      }`}
      style={{
        top: STACK_TOP + index * CARD_PEEK,
        zIndex: index + 1,
        ["--card-dwell" as string]: `${CARD_DWELL}px`,
      }}
    >
      {/*
        Mobile runs title, photo, then copy in one column. From lg the design
        splits into copy on the left and photo on the right, with the heading
        pinned to the top of the card and the copy dropped to its foot so the
        baseline lines up with the photo.
      */}
      <h2 className="type-h3 text-ink">{title}</h2>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 flex flex-col lg:order-1 lg:justify-end">
          <div className="flex flex-col gap-4">{children}</div>
        </div>
        <div className="relative order-1 h-56 overflow-hidden rounded-2xl sm:h-72 lg:order-2 lg:h-full lg:min-h-72">
          <SiteImage
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
}

export function ServicesTabs() {
  const [active, setActive] = useState(0);

  /*
    The rail mirrors reading position rather than driving it: the current panel
    is the last one whose top has passed the reading line.

    The observer only says "something moved" — its entries cover just the nodes
    that changed, so the answer is recomputed from every panel's live position
    rather than from the callback payload, which would otherwise leave the rail
    pointing at a stale panel.
  */
  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    // Roughly where the sticky header ends and reading begins.
    const readingLine = 160;

    const sync = () => {
      let current = 0;
      nodes.forEach((node, i) => {
        if (node.getBoundingClientRect().top <= readingLine) current = i;
      });
      setActive(current);
    };

    sync();

    const observer = new IntersectionObserver(sync, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    nodes.forEach((n) => observer.observe(n));

    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <p className="type-caption-caps text-muted">Our Services</p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-[minmax(0,264px)_1fr] lg:gap-6">
          <nav
            aria-label="Our services"
            className="hidden self-start lg:sticky lg:top-28 lg:flex lg:flex-col lg:gap-2"
          >
            {sections.map((s, i) => {
              const current = i === active;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={current ? "true" : undefined}
                  className={`flex items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-colors ${
                    current
                      ? "bg-brand-bright text-white"
                      : "border border-line bg-surface text-muted hover:text-ink"
                  }`}
                >
                  <span className="type-body-sm">{s.label}</span>
                  {current && (
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-dark">
                      <ChevronRightDuo className="size-4" />
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 lg:gap-0">
            <Panel
              id="regular-services"
              index={0}
              title="Regular services"
              image={images.fleetRoadTrainFull}
            >
              <p className="type-body-md text-muted">
                <Em>Every Tuesday and Friday</Em> the team at Scarcella
                coordinate various triple and quad road train combinations to
                travel to Darwin.
              </p>
              <p className="type-body-md text-muted">
                This is achieved by trailers being delivered to the
                customer&apos;s premises, organising a multitude of LCL freight
                and loading bulk loads with their local fleet. All with the
                common goal of the road trains leaving on time with trailers and
                dollys staged, ready to go, at{" "}
                <Em>Dubbo, Bourke, Gatton, Roma</Em> and <Em>Moama.</Em>
              </p>
            </Panel>

            <Panel
              id="schedule"
              index={1}
              dwell
              title="Schedule of regular services provided"
              image={images.scarcellaBrothers}
            >
              <div className="flex flex-col gap-2">
                <Leg
                  from="Sydney"
                  fromDay="Tuesday"
                  to="Darwin"
                  toDay="Friday"
                />
                <Leg from="Sydney" fromDay="Friday" to="Darwin" toDay="Monday" />
              </div>
              {/* The design rules off the southbound legs from the northbound. */}
              <hr className="border-line" />
              <div className="flex flex-col gap-2">
                <Leg
                  from="Darwin"
                  fromDay="Monday"
                  to="Sydney"
                  toDay="Wednesday"
                />
                <Leg from="Darwin" fromDay="Friday" to="Sydney" toDay="Monday" />
              </div>
            </Panel>

            <Panel
              id="other-services"
              index={2}
              title="Other Services"
              image={images.depotGateSign}
            >
              <p className="type-body-md text-muted">
                Scarcella Transport also offers many services on the eastern
                seaboard.
              </p>
              <p className="type-body-md text-muted">
                Regular runs between <Em>Sydney – Brisbane – Melbourne</Em> with
                b double and single combinations being the focus.
              </p>
              <p className="type-body-md text-muted">
                We also service many farms in the <Em>Riverina</Em> and carry
                produce from <Em>Werribee Vic</Em> and the{" "}
                <Em>Bowen basin QLD</Em>
              </p>

              <div className="rounded-2xl border border-line bg-white p-4">
                <p className="type-body-sm text-muted">
                  Scarcella Transport also regularly services:
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {[
                    ["Brisbane → Darwin", "Full loads"],
                    ["Melbourne → Darwin", "Full loads"],
                  ].map(([lane, note]) => (
                    <li key={lane} className="flex items-baseline gap-3">
                      <span className="type-body-md font-medium text-ink">
                        {lane}
                      </span>
                      <span className="type-body-sm text-muted">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="type-body-md text-muted">
                <Em>Scarcella Transport will travel anywhere</Em> and are
                equipped to carry any type of freight.
              </p>
            </Panel>
          </div>
        </div>
      </Container>
    </section>
  );
}
