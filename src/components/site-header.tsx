"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

// Pages with no dark hero image behind the header need a solid, dark-on-light
// header instead of the usual transparent overlay.
const LIGHT_HEADER_ROUTES = ["/contact"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLight = LIGHT_HEADER_ROUTES.includes(pathname);
  const solid = isLight || scrolled;

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
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src={solid ? "/brand/scarcella-logo.svg" : "/brand/scarcella-logo-white.svg"}
              alt="F&A Scarcella Transport"
              width={122}
              height={48}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid ? "text-ink/80 hover:text-ink" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/merch"
              className={cn(
                "text-sm font-medium transition-colors",
                solid ? "text-ink/80 hover:text-ink" : "text-white/90 hover:text-white"
              )}
            >
              Merch Store <span aria-hidden>»</span>
            </Link>
            <Button href="/quote" variant="primary" size="md">
              Get a Quote <span aria-hidden>»</span>
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="tel:0246266661"
              aria-label="Call (02) 4626 6661"
              className={cn(
                "flex h-12 w-12 items-center justify-center",
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
                solid ? "border-line text-ink" : "border-white/30 text-white"
              )}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              {open ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-ink/98 backdrop-blur lg:hidden">
          <Container>
            <nav className="flex flex-col divide-y divide-white/10">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-base font-medium text-white/90 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/merch"
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-white/90 hover:text-white"
              >
                Merch Store »
              </Link>
            </nav>
            <div className="pb-6">
              <Button href="/quote" variant="primary" size="md" className="w-full">
                Get a Quote »
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
    {isLight && <div className="h-24" aria-hidden />}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4 1.5h2.25l1.35 3.4-1.7 1.1a10 10 0 0 0 4.85 4.85l1.1-1.7 3.4 1.35V13a1.5 1.5 0 0 1-1.5 1.5C7 14.5 2 9.5 2 3.5A1.5 1.5 0 0 1 3.5 2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
