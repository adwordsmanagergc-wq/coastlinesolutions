export const site = {
  name: "Coastline Solutions",
  owner: "Blake Laybutt",
  phone: "0452 263 112",
  phoneTel: "+61452263112",
  email: "admin@coastlinesolutions.com.au",
  facebook: "https://www.facebook.com/profile.php?id=61558807022619",
  hours: "Mon–Sat, 7am–5pm",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://coastlinesolutions.com.au",
  tagline: "Painting. Cleaning. Lawn care. One local team, one phone call.",
  trustStrip: [
    "Free quotes",
    "Fully insured",
    "Locally owned",
    "Honest pricing"
  ],
  serviceAreas: [
    "Central Coast",
    "Gosford",
    "Erina",
    "Terrigal",
    "Avoca Beach",
    "Wamberal",
    "The Entrance",
    "Tuggerah",
    "Wyong"
  ]
};

export type ServiceKey = "painting" | "exterior-cleaning" | "lawn-garden";

export interface Service {
  key: ServiceKey;
  slug: string;
  name: string;
  short: string;
  blurb: string;
  bullets: string[];
  accent: string;
  icon: "brush" | "spray" | "leaf";
}

export const services: Service[] = [
  {
    key: "painting",
    slug: "painting",
    name: "Painting",
    short: "Interior & exterior painting that lifts a tired home back to its best.",
    blurb:
      "Repaints, new paints, garage doors, feature walls — anything you need painted, done properly.",
    bullets: [
      "Interior painting",
      "Exterior painting",
      "Repaints",
      "New paints",
      "Garage doors",
      "Anything you need painted"
    ],
    accent: "#0E2A47",
    icon: "brush"
  },
  {
    key: "exterior-cleaning",
    slug: "exterior-cleaning",
    name: "Exterior Cleaning",
    short: "Pressure & soft washing that's safe for your home and brutal on grime.",
    blurb:
      "Algae, mould, graffiti, driveways and bin pads — restored, not just rinsed.",
    bullets: [
      "Pressure & soft washing",
      "Algae & mould removal",
      "Home / building soft-wash",
      "Graffiti removal",
      "Driveways & pathways",
      "High-pressure washing",
      "Bin & dumpster pad cleaning"
    ],
    accent: "#D7263D",
    icon: "spray"
  },
  {
    key: "lawn-garden",
    slug: "lawn-garden",
    name: "Lawn & Garden",
    short: "Tidy lawns, neat edges and well-kept gardens — one-off or ongoing.",
    blurb:
      "Whether it's a freshen-up before a sale or fortnightly maintenance, we'll keep your block sharp.",
    bullets: [
      "Mowing",
      "Whipper snipping",
      "Blowing",
      "Weeding",
      "Hedging"
    ],
    accent: "#3B7A57",
    icon: "leaf"
  }
];

export const reviews = [
  {
    name: "Sarah M.",
    suburb: "Terrigal",
    text:
      "Blake repainted the whole exterior of our place and pressure-washed the drive while he was at it. Turned up on time, finished early, and the place looks brand new.",
    rating: 5
  },
  {
    name: "James P.",
    suburb: "Erina",
    text:
      "Soft-washed the roof and render — could not believe the difference. Honest quote, no surprises, very tidy worker.",
    rating: 5
  },
  {
    name: "Megan R.",
    suburb: "Avoca Beach",
    text:
      "Have Blake on a fortnightly mow now. Lawn has never looked better and he always blows down the paths before he leaves.",
    rating: 5
  },
  {
    name: "Daniel K.",
    suburb: "Wamberal",
    text:
      "Got three quotes for an interior repaint. Blake was the most thorough and the fairest priced. Job was spotless.",
    rating: 5
  },
  {
    name: "Lauren H.",
    suburb: "Gosford",
    text:
      "Used Coastline for a pre-sale freshen up — paint touch-ups, driveway clean, hedges. Place sold the first weekend.",
    rating: 5
  },
  {
    name: "Property Manager",
    suburb: "Central Coast",
    text:
      "Reliable, communicates well, invoices match the quote. We use Blake across multiple rental properties.",
    rating: 5
  }
];

export const galleryItems = [
  {
    title: "Soft-washed weatherboard home",
    category: "Exterior Cleaning",
    description: "Two-storey weatherboard restored without high pressure damage.",
    image: "/soft-wash-weatherboard-home.png"
  },
  {
    title: "Repainted Hamptons exterior",
    category: "Painting",
    description: "Fresh white weatherboard with charcoal trim — sharp and modern.",
    image: "/repainted-hamptons-exterior.png"
  },
  {
    title: "Concrete driveway restoration",
    category: "Exterior Cleaning",
    description: "Years of grime and oil lifted with high-pressure washing.",
    image: "/restored-driveway.png"
  },
  {
    title: "Interior repaint — open plan living",
    category: "Painting",
    description: "Walls, ceiling and trims rolled out in a single weekend.",
    image: "/interior-repaint-open-plan-living.png"
  },
  {
    title: "Hedged front garden",
    category: "Lawn & Garden",
    description: "Overgrown hedges shaped, lawn cut and edged, paths blown.",
    image: "/hedged-front-garden.png"
  },
  {
    title: "Roof soft-wash",
    category: "Exterior Cleaning",
    description: "Algae and lichen removed safely with biocidal soft-wash.",
    image: "/soft-washed-roof.png"
  }
];
