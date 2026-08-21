import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { footerNav, serviceAreas, depots } from "@/lib/nav";

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

const accreditations = ["TruckSafe", "NHVAS", "NT Heavy Vehicle Accreditation", "Silliker", "NatRoad"];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/brand/scarcella-logo-white.svg"
              alt="F&A Scarcella Transport"
              width={122}
              height={48}
              className="h-12 w-auto"
            />
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>
                <a href="tel:0246266661" className="hover:text-white">
                  (02) 4626 6661
                </a>
              </p>
              <p>
                <a href="mailto:ops@scarcellatransport.com.au" className="hover:text-white">
                  ops@scarcellatransport.com.au
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-medium hover:bg-white/20"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/merch" variant="primary">
                Merch Store <span aria-hidden>»</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 border-t border-white/10 pt-4">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3 border-t border-white/10 pt-4">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Depots
            </h3>
            <ul className="mt-4 space-y-3">
              {depots.map((d) => (
                <li key={d.name} className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">{d.name}</p>
                  <p className="mt-1 text-sm text-white/60">{d.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} F &amp; A Scarcella Pty Ltd &nbsp;&nbsp; ABN 37 001 993 773
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {accreditations.map((a) => (
              <span
                key={a}
                className="flex h-10 items-center rounded-full bg-white/5 px-4 text-xs text-white/60"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
