/**
 * Central registry of the photography shipped in `public/img`.
 *
 * The originals arrived as Figma SVG exports with the photo embedded as a
 * base64 payload (some over 18 MB). Those payloads were extracted to real
 * raster files so `next/image` can optimise them; the source SVGs are kept
 * in their original folders for reference.
 */
export const images = {
  // Home
  heroRoadTrains: {
    src: "/img/hero-road-trains.jpg",
    alt: "Two Scarcella Kenworth road trains parked at the Campbelltown depot",
  },
  fleetRoadTrainFull: {
    src: "/img/fleet-road-train-full.jpg",
    alt: "Scarcella road train — prime mover and three refrigerated trailers at the depot",
  },
  scarcellaBrothers: {
    src: "/img/scarcella-brothers.jpg",
    alt: "The Scarcella brothers standing in front of a Kenworth road train",
  },
  liveryDetail: {
    src: "/img/livery-detail.jpg",
    alt: "Hand-painted F. & A. Scarcella script on the door of truck 90",
  },
  workshopBonnetUp: {
    src: "/img/workshop-bonnet-up.jpg",
    alt: "Kenworth in the service bay with the bonnet tilted forward",
  },
  mechanicCummins: {
    src: "/img/mechanic-cummins.png",
    alt: "Diesel mechanic working on a Cummins engine in the Scarcella workshop",
  },
  merchRack: {
    src: "/img/merch-rack.png",
    alt: "Scarcella Transport hoodie, tee and trucker cap on a rack in the warehouse",
  },
  outbackDusk: {
    src: "/img/outback-dusk-band.png",
    alt: "Scarcella road train on an outback highway at dusk",
  },
  primeMoverFront: {
    src: "/img/prime-mover-front.png",
    alt: "Front-on view of a green Kenworth prime mover with ROAD TRAIN plates",
  },
  promiseRoadTrain: {
    src: "/img/promise-road-train.png",
    alt: "Scarcella road train loaded at the depot under a clear sky",
  },
  depotGateSign: {
    src: "/img/depot-gate-sign.png",
    alt: "Two prime movers either side of the F & A Scarcella depot sign",
  },

  // Fleet
  fleetLineup: {
    src: "/img/fleet-2.png",
    alt: "The Scarcella fleet lined up front-on under a stormy sky",
  },
  workshopMechanic: {
    src: "/img/fleet-1.jpg",
    alt: "Mechanic working under the raised bonnet of a Kenworth",
  },
  freightForklift: {
    src: "/img/fleet-3.jpg",
    alt: "Forklift loading palletised freight into a refrigerated trailer",
  },

  // Page heroes
  aboutHero: {
    src: "/img/about-hero.png",
    alt: "Scarcella prime movers at the depot",
  },
  servicesHero: {
    src: "/img/services-hero.png",
    alt: "Scarcella trailers loaded at the freight dock",
  },
  servicesDetail: {
    src: "/img/services-detail.png",
    alt: "Refrigerated trailer being loaded at the Sydney depot",
  },
  safetyHero: {
    src: "/img/safety-hero.png",
    alt: "Truck under the workshop awning at the Scarcella depot",
  },
  blogHero: {
    src: "/img/blog-hero.png",
    alt: "Scarcella prime mover on the highway",
  },

  // Safety technology
  guardianCamera: {
    src: "/img/guardian-camera.png",
    alt: "Guardian in-cab fatigue and distraction detection camera",
  },
  techTelematics: {
    src: "/img/tech-telematics.png",
    alt: "Teletrac Navman fleet telematics dashboard",
  },
  techGuardian: {
    src: "/img/tech-guardian.png",
    alt: "Guardian seeing-eye in-cab camera unit",
  },
  techEwd: {
    src: "/img/tech-ewd.png",
    alt: "Electronic work diary showing driver hours and rest breaks",
  },
  techGps: {
    src: "/img/tech-gps.png",
    alt: "Live GPS tracking map of the Sydney–Darwin lane",
  },
  techScales: {
    src: "/img/tech-scales.png",
    alt: "On-board electronic weight scale readout",
  },
  techMass: {
    src: "/img/tech-mass.png",
    alt: "Axle group mass management readout",
  },

  // Graphics (not photography)
  graphicMilestones: {
    src: "/img/graphic-milestones.png",
    alt: "",
  },
  graphicTrajectory: {
    src: "/img/graphic-trajectory.jpg",
    alt: "",
  },
} as const;

/** Slider navigation arrows (supplied as 64px rounded buttons). */
export const sliderArrows = {
  left: "/img/arrow-left.png",
  right: "/img/arrow-right.png",
} as const;

/** Accreditation and partner logos. */
export const logos = {
  nhvas: { src: "/img/logo-nhvas.svg", alt: "NHVAS accredited" },
  truckSafe: { src: "/img/logo-trucksafe.svg", alt: "TruckSafe accredited" },
  accredThree: { src: "/img/logo-accred-3.svg", alt: "Accreditation partner" },
  accredFour: { src: "/img/logo-accred-4.png", alt: "Accreditation partner" },
  sillaker: { src: "/img/logo-sillaker.png", alt: "Partner logo" },
} as const;

/** Blog thumbnails, used in order for the article grid. */
export const blogThumbs = [
  "/img/blog-1.png",
  "/img/blog-2.png",
  "/img/blog-3.png",
  "/img/blog-4.png",
  "/img/blog-5.png",
  "/img/blog-6.png",
  "/img/blog-7.png",
  "/img/blog-8.png",
  "/img/blog-10.png",
] as const;
