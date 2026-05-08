import type { ServiceKey } from "./site";

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;
  heroEyebrow?: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whatWeDo: string[];
  whyHeading: string;
  whyBody: string;
  steps: { title: string; body: string }[];
  faqs: FAQ[];
  finalCta: string;
}

export const serviceContent: Record<ServiceKey, ServicePageContent> = {
  painting: {
    metaTitle: "House Painters | Interior & Exterior | LayMac Solutions",
    metaDescription:
      "Local interior and exterior house painters. Repaints, new paints, garage doors. Free quotes — call Blake on 0452 263 112.",
    heroTitle: "Painting that lifts a tired home back to its best.",
    heroSubtitle:
      "Interior and exterior painting, repaints, new paints and garage doors. Properly prepped, neatly cut in, and built to last. Free quotes from Blake.",
    intro:
      "A good paint job is 80% prep. We sand, fill, undercoat and protect everything that doesn't need painting before a brush ever sees a wall — that's why our finishes still look sharp years later, not months.",
    whatWeDo: [
      "Interior painting — walls, ceilings, trims and doors",
      "Exterior painting — weatherboard, render, eaves and fascia",
      "Repaints and full colour changes",
      "New paints on freshly built or renovated homes",
      "Garage doors — roller, panel and tilt",
      "Feature walls and accent finishes",
      "Pre-sale paint refreshes for agents and vendors"
    ],
    whyHeading: "Why our paint lasts longer.",
    whyBody:
      "We use quality Australian-made paints (Dulux / Taubmans / Wattyl) matched to the surface and the conditions. Coastal salt air, harsh sun and damp shaded walls all behave differently — we pick the right product for the job, not the cheapest tin on the shelf.",
    steps: [
      {
        title: "Free on-site quote",
        body: "We come out, look at the surfaces, and write you a fixed-price quote — including paint, prep and clean-up."
      },
      {
        title: "Prep done properly",
        body: "Wash, sand, fill, mask, undercoat. Boring but essential — it's why our finishes don't peel."
      },
      {
        title: "Paint and finish",
        body: "Two top coats, neatly cut in. We protect floors and gardens, and clean as we go."
      },
      {
        title: "Walk-through and sign-off",
        body: "We walk the job with you before we pack up. If anything isn't right, we fix it on the spot."
      }
    ],
    faqs: [
      {
        q: "Do you paint both inside and out?",
        a: "Yes — we do interior repaints, full exterior repaints, new paints on fresh builds, and everything in between including garage doors and feature walls."
      },
      {
        q: "What paint brands do you use?",
        a: "Premium Australian-made paints — Dulux, Taubmans and Wattyl mostly. We choose the product based on the surface and exposure, not just price."
      },
      {
        q: "How long will my repaint last?",
        a: "An exterior repaint with proper prep typically holds up beautifully for 8–12 years. Interior work usually goes 10+ years before it needs a refresh."
      },
      {
        q: "Will you move my furniture?",
        a: "We help shift larger pieces and protect everything that stays. We'd just ask you to clear breakables and personal items beforehand."
      },
      {
        q: "Do you provide free quotes?",
        a: "Always. Call Blake on 0452 263 112 or send the quote form and we'll be in touch within one business day."
      }
    ],
    finalCta: "Bring your walls back to life."
  },
  "exterior-cleaning": {
    metaTitle: "Pressure & Soft Washing | LayMac Solutions",
    metaDescription:
      "Soft wash, pressure wash, algae & mould removal, graffiti removal, driveways and bin pads. Free quotes — call Blake on 0452 263 112.",
    heroTitle: "Pressure & soft washing that actually restores.",
    heroSubtitle:
      "Algae, mould, road grime and graffiti — gone. Render, roofs and driveways treated with the right chemistry and the right pressure.",
    intro:
      "A high-pressure hose isn't always the right answer. We use soft washing — a low-pressure, biocide-based clean — for delicate surfaces like roofs, render and painted weatherboard, and high-pressure washing for hard surfaces like driveways, pathways and bin pads. The result is a deeper, longer-lasting clean without damaging the surface underneath.",
    whatWeDo: [
      "Home & building soft-wash exteriors",
      "Roofs — algae and mould removal",
      "Render, brick and weatherboard",
      "Driveways and pathways",
      "High-pressure washing for concrete and hard surfaces",
      "Graffiti removal",
      "Bin / dumpster pad cleaning for businesses and strata",
      "Plus much more — if it needs cleaning, ask"
    ],
    whyHeading: "Why a soft-wash is worth it.",
    whyBody:
      "Algae and mould don't just look bad — they hold moisture, damage paint, and can become a slip hazard on driveways and paths. A regular soft-wash protects the value and longevity of what's already there. It's the cheapest paint job you'll ever do.",
    steps: [
      {
        title: "Inspect the surfaces",
        body: "We come out and look at what needs cleaning — and just as importantly, what shouldn't be high-pressure cleaned."
      },
      {
        title: "Written all-inclusive quote",
        body: "Free, fixed-price, with chemistry, equipment and clean-up included. No hourly games."
      },
      {
        title: "Right gear, right chemistry",
        body: "We protect plants, surrounds and pets, soft-wash where needed, and bring out the high pressure only on hard surfaces."
      },
      {
        title: "Tidy up as we go",
        body: "We rinse down paths, pack up properly and leave the place looking better than when we got there."
      }
    ],
    faqs: [
      {
        q: "What's the difference between soft washing and pressure washing?",
        a: "Soft washing uses low pressure and a biocidal solution — best for roofs, render and paintwork. Pressure washing uses high pressure on hard surfaces like concrete driveways. We use whichever is safer and more effective for your job."
      },
      {
        q: "Will it damage my plants?",
        a: "No. We protect surrounding garden beds and rinse down as we go. We use plant-safe biocides at correct dilution rates."
      },
      {
        q: "How often should I have my home soft-washed?",
        a: "Most homes benefit from a soft-wash every 12–24 months, depending on tree cover and aspect. Shaded south-facing walls usually need it more often."
      },
      {
        q: "Do you do strata and commercial work?",
        a: "Yes — including regular bin pad cleans, shopfront soft-washes and graffiti removal. We can quote on a one-off or ongoing basis."
      },
      {
        q: "Do you provide free quotes?",
        a: "Always. Call Blake on 0452 263 112 or send the form and we'll be in touch within one business day."
      }
    ],
    finalCta: "Bring it back to life."
  },
  "lawn-garden": {
    metaTitle: "Lawn Mowing & Garden Maintenance — LayMac Solutions",
    metaDescription:
      "Mowing, whipper snipping, blowing, weeding and hedging. One-off tidies or regular maintenance. Free quotes from Blake on 0452 263 112.",
    ogTitle: "Lawns Mowed. Edges Sharp. Block Looking After Itself.",
    ogDescription:
      "LayMac Solutions handles your lawn and garden so you don't have to.",
    heroEyebrow: "Mowing · Whipper Snipping · Blowing · Weeding · Hedging",
    heroTitle: "Lawn & Garden Maintenance, Sorted.",
    heroSubtitle:
      "Whether you need a one-off freshen-up or a regular visit to keep things sharp, LayMac Solutions keeps your block tidy, neat and looking after itself.",
    intro:
      "Lawns and gardens don't need a landscape architect — they need someone who turns up, does the job properly, and clears up the clippings. LayMac Solutions handles the regular work that keeps your home looking cared-for: a sharp mow, neat edges, beds free of weeds, hedges in line, and not a leaf left on the drive.",
    whatWeDo: [
      "Mowing — clean cuts at the right height for your grass type",
      "Whipper snipping — sharp edges along paths, fences, beds and trees",
      "Blowing — paths, driveways and entries left spotless",
      "Weeding — garden beds, paths and pavers",
      "Hedging — neat, even hedges trimmed to shape"
    ],
    whyHeading: "Why regular maintenance matters.",
    whyBody:
      "A lawn that's mowed regularly is a lawn that thickens up and crowds out weeds. Edges trimmed every visit stop creeping into the beds. Five minutes of blowing at the end of every job is the difference between \"someone was here\" and \"the place looks great.\" Regular care costs less over time than letting it run wild and starting again.",
    steps: [
      {
        title: "Free on-site quote",
        body: "Blake takes a quick look and gives you a fair written price — one-off or recurring."
      },
      {
        title: "Choose your rhythm",
        body: "Weekly, fortnightly, monthly, or as-needed."
      },
      {
        title: "We turn up when we say we will",
        body: "Same friendly face each visit. No call centre, no chasing."
      },
      {
        title: "Job done, area cleared",
        body: "No clippings left behind, no leaves on the drive."
      }
    ],
    faqs: [
      {
        q: "Do you do one-off tidies as well as regular visits?",
        a: "Yes — plenty of customers start with a one-off \"reset\" and then decide if they want us back regularly."
      },
      {
        q: "How often should I have my lawn mowed?",
        a: "In peak growing season, fortnightly is the sweet spot for most Australian lawns; monthly is fine through winter. Blake will recommend what suits your block."
      },
      {
        q: "Do you take the clippings away?",
        a: "Either is fine — we can mulch back into the lawn or take the clippings off-site, whatever you prefer."
      },
      {
        q: "Do you do hedges and weeding too?",
        a: "Yes — we handle hedging, weeding garden beds, and tidying paths."
      },
      {
        q: "Do you bring all your own gear?",
        a: "Yes — mower, whipper snipper, blower, hedge trimmers and fuel. You don't need to lift a thing."
      },
      {
        q: "Are you insured?",
        a: "Fully insured. Happy to provide certificates on request."
      },
      {
        q: "Do you provide free quotes?",
        a: "Always. Call Blake on 0452 263 112."
      }
    ],
    finalCta: "Want your block looking after itself?"
  }
};
