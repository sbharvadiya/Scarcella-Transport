import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { footerNav, serviceAreas, depots, MERCH_STORE_URL } from "@/lib/nav";
import { footerBadges } from "@/lib/images";

const socials = [
  { label: "X", href: "#", icon: "/img/icon-social-x.svg" },
  { label: "LinkedIn", href: "#", icon: "/img/icon-social-linkedin.svg" },
  { label: "Facebook", href: "#", icon: "/img/icon-social-facebook.svg" },
];

const labelLg = "text-base font-medium leading-6 tracking-[-0.24px]";

const captionLgCaps = "text-[13px] font-normal uppercase leading-4";

const bodyMd = "text-base font-normal leading-6";

const bodyMdMedium = "text-base font-medium leading-6";

const accreditationBadges = [
  footerBadges.truckSafe,
  footerBadges.nhvas,
  footerBadges.waHeavyVehicle,
  footerBadges.silliker,
  footerBadges.natroad,
];

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Container className="pt-14 pb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-[334fr_217fr_217fr_392fr] lg:gap-x-[75px]">
          <div className="col-span-2 flex flex-col items-start gap-10 lg:col-span-1">
            <Image
              src="/brand/scarcella-logo-white.svg"
              alt="F&A Scarcella Transport"
              width={181}
              height={72}
              className="h-[72px] w-auto"
            />
            <div className="flex flex-col items-start gap-6 self-stretch">
              <a
                href="tel:0246266661"
                className={`flex items-center gap-2 text-neutral-200 hover:text-white ${labelLg}`}
              >
                <Image
                  src="/img/icon-smart-phone-01.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0"
                />
                (02) 4626 6661
              </a>
              <a
                href="mailto:ops@scarcellatransport.com.au"
                className={`flex items-center gap-2 text-neutral-200 hover:text-white ${labelLg}`}
              >
                <Image
                  src="/img/icon-mail-02.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0"
                />
                ops@scarcellatransport.com.au
              </a>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center rounded-lg bg-neutral-900 p-1 transition-colors hover:bg-neutral-800"
                  >
                    <Image src={s.icon} alt="" width={24} height={24} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <Button href={MERCH_STORE_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="md" className="tracking-[-0.24px]">
              Merch Store
              <Image
                src="/img/icon-chevron-right-duo.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                aria-hidden
              />
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className={`self-stretch text-white ${captionLgCaps}`}>Navigation</h3>
            <div className="h-px self-stretch bg-neutral-800" />
            <ul className="flex flex-col items-start gap-4 self-stretch">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-neutral-400 hover:text-white ${bodyMd}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className={`self-stretch text-white ${captionLgCaps}`}>Service Areas</h3>
            <div className="h-px self-stretch bg-neutral-800" />
            <ul className="flex flex-col items-start gap-4 self-stretch">
              {serviceAreas.map((area) => (
                <li key={area} className={`text-neutral-400 ${bodyMd}`}>
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col items-start gap-4 lg:col-span-1">
            <h3 className={`self-stretch text-white ${captionLgCaps}`}>Depots</h3>
            <div className="h-px self-stretch bg-neutral-800" />
            <ul className="flex flex-col items-start gap-2 self-stretch">
              {depots.map((d) => (
                <li
                  key={d.name}
                  className="flex flex-col items-start self-stretch rounded-xl border border-neutral-800 bg-neutral-900 p-3"
                >
                  <p className={`self-stretch text-white ${bodyMdMedium}`}>{d.name}</p>
                  <p className={`self-stretch text-neutral-500 ${bodyMd}`}>{d.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6 border-t border-neutral-800 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full items-center justify-between gap-4 text-sm tracking-[-0.24px] lg:w-auto lg:justify-start">
            <span className="text-white">© {new Date().getFullYear()} F &amp; A Scarcella Pty Ltd</span>
            <span className="text-neutral-400">ABN 37 001 993 773</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {accreditationBadges.map((b) => (
              <Image key={b.src} src={b.src} alt={b.alt} width={84} height={48} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
