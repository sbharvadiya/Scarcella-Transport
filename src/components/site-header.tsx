"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/brand/scarcella-logo-white.svg"
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
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/merch"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Merch Store <span aria-hidden>»</span>
            </Link>
            <Button href="/quote" variant="primary" size="md">
              Get a Quote <span aria-hidden>»</span>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
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
  );
}
