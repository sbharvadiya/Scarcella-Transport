# Scarcella Transport — Website Build

Figma → pixel-perfect Next.js (App Router) + Tailwind CSS.

## Definition of done
1. Overlay match against Figma frames at **1512px (desktop)** and **375px (mobile)** — output is pixel-diffed against the design renders. Text anti-aliasing differences OK; layout, spacing, type sizes/weights, colours, image crops must match.
2. Fluid 320–1920px — nothing breaks at 768/1024.
3. Supplied photos only, correctly cropped/positioned per the design (next/image).
4. Forms = working markup posting to `/api/lead` (endpoint supplied by Joel later — stub it).
5. Semantic HTML (h1–h3 hierarchy, nav/footer landmarks), zero console errors, clean `next build`.
6. Commit as you go — small commits, pushed to `main`. No end-of-job zip drops.

## Pages (11)
Home · Services · Fleet · About · Accreditation & Safety · Careers · Adelaide Branch · Contact · Blog index · Blog article templates ×2

## Rules
- Hand-structured components. No exporter output (Anima/TeleportHQ/Locofy/etc).
- No extra npm deps beyond Next/Tailwind + fonts without asking.
- Figma is the single source of truth — if something is ambiguous, ask, don't invent.
- Milestone 1 = Services page only (desktop + mobile), then review gate.
