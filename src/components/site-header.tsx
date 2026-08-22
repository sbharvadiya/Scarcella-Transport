"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ChevronRightDuo } from "@/components/ui/chevron-right-duo";
import { primaryNav, MERCH_STORE_URL } from "@/lib/nav";
import { cn } from "@/lib/utils";

const LIGHT_HEADER_ROUTES = ["/contact", "/blog"];

function isLightRoute(pathname: string) {
  return LIGHT_HEADER_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

const labelMd = "text-sm font-medium leading-6 tracking-[-0.24px]";
const labelLg = "text-base font-medium leading-6 tracking-[-0.24px]";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLight = isLightRoute(pathname);
  const solid = isLight || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid ? "border-b border-line bg-white" : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-18 items-center justify-between gap-4 py-3 xl:h-24 xl:gap-6 xl:py-6">
            <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
              <Image
                src="/brand/scarcella-logo-outlined.svg"
                alt="F&A Scarcella Transport"
                width={122}
                height={48}
                className="h-12 w-[122px]"
                priority
              />
            </Link>
            <div className="hidden h-12 items-center gap-6 xl:flex 2xl:gap-10">
              <nav className="flex items-center gap-3 pt-2 pb-0.5 2xl:gap-4">
                {primaryNav.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex flex-col items-center gap-1"
                    >
                      <span
                        className={cn(
                          labelMd,
                          "whitespace-nowrap transition-colors",
                          solid
                            ? "text-ink/80 group-hover:text-ink"
                            : "text-neutral-200 group-hover:text-white"
                        )}
                      >
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "h-0.5 w-6 rounded-[32px] transition-opacity",
                          solid ? "bg-ink" : "bg-white",
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>
              <div className="flex h-12 items-center gap-4">
                <a
                  href={MERCH_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2"
                >
                  <span
                    className={cn(
                      labelLg,
                      "whitespace-nowrap transition-colors",
                      solid ? "text-ink" : "text-white"
                    )}
                  >
                    Merch Store
                  </span>
                  <ChevronRightDuo className={solid ? "text-ink/60" : "text-neutral-400"} />
                </a>
                <Link
                  href="/quote"
                  className={cn(
                    labelLg,
                    "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-bright px-6 py-3 text-white transition-colors hover:bg-brand"
                  )}
                >
                  Get a Quote
                  <ChevronRightDuo />
                </Link>
              </div>
            </div>
            <div className="flex h-12 items-center gap-4 xl:hidden">
              <a
                href="tel:0246266661"
                aria-label="Call (02) 4626 6661"
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  solid ? "text-ink" : "text-white"
                )}
              >
                <PhoneIcon />
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl border",
                  solid ? "border-line text-ink" : "border-neutral-400 text-white"
                )}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className="sr-only">Menu</span>
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </Container>
        {open && (
          <div className="border-t border-white/10 bg-ink/98 backdrop-blur xl:hidden">
            <Container>
              <nav className="flex flex-col divide-y divide-white/10">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(labelLg, "py-4 text-white/90 hover:text-white")}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={MERCH_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cn(
                    labelLg,
                    "flex items-center gap-2 py-4 text-white/90 hover:text-white"
                  )}
                >
                  Merch Store
                  <ChevronRightDuo className="text-neutral-400" />
                </a>
              </nav>
              <div className="pb-6">
                <Link
                  href="/quote"
                  onClick={() => setOpen(false)}
                  className={cn(
                    labelLg,
                    "flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-bright px-6 py-3 text-white transition-colors hover:bg-brand"
                  )}
                >
                  Get a Quote
                  <ChevronRightDuo />
                </Link>
              </div>
            </Container>
          </div>
        )}
      </header>
      {isLight && <div className="h-18 xl:h-24" aria-hidden />}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <g transform="translate(24 0) scale(-1 1)">
        <path
          d="M7 4.5h2.25l1.35 3.4-1.7 1.1a10 10 0 0 0 4.85 4.85l1.1-1.7 3.4 1.35V16a1.5 1.5 0 0 1-1.5 1.5C10 17.5 5 12.5 5 6.5A1.5 1.5 0 0 1 6.5 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8.5H20M4 15.5H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 5L19 19M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
