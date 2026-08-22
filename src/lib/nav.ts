export const MERCH_STORE_URL = "https://store.scarcellatransport.com.au";

export const primaryNav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Accreditation & Safety", href: "/safety" },
  { label: "Locations", href: "/adelaide" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Accreditation & Safety", href: "/safety" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

export const serviceAreas = [
  "Sydney",
  "Brisbane",
  "Melbourne",
  "Darwin",
  "Regional NSW",
  "Adelaide",
] as const;

export const depots = [
  {
    name: "Sydney — Campbelltown",
    image: "/img/depot-gate-sign.png",
    address: "21–27 Kialba Road, Campbelltown NSW 2560",
    phone: "(02) 4626 6661",
    phoneHref: "tel:0246266661",
    afterHoursLabel: "After hours:",
    afterHoursPhone: "0413 021 210",
    afterHoursPhoneHref: "tel:0413021210",
    email: "ops@scarcellatransport.com.au",
  },
  {
    name: "Darwin — Yarrawonga",
    image: "/img/fleet-road-train-full.jpg",
    address: "Lot 30 McCourt Road, Yarrawonga NT 0830",
    phone: "(08) 8931 4570",
    phoneHref: "tel:0889314570",
    email: "darwin@scarcellatransport.com.au",
  },
  {
    name: "Adelaide",
    image: "/img/outback-dusk-band.png",
    address: "New branch launching soon",
    phone: "(08) 8931 4570",
    phoneHref: "tel:0889314570",
    email: "darwin@scarcellatransport.com.au",
  },
] as const;
