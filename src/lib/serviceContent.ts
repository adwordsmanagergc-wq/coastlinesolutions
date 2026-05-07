import type { ServiceKey } from "./site";

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
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
    metaTitle: "House Painters | Interior & Exterior | Coastline Solutions",
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
    metaTitle: "Pressure & Soft Washing | Coastline Solutions",
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
    metaTitle: "Lawn & Garden Maintenance | Coastline Solutions",
    metaDescription:
      "Mowing, whipper snipping, blowing, weeding and hedging. One-off or ongoing. Free quotes — call Blake on 0452 263 112.",
    heroTitle: "Tidy lawns. Neat edges. Well-kept gardens.",
    heroSubtitle:
      "One-off freshen-up or fortnightly maintenance — we'll keep your block looking sharp without needing to be reminded.",
    intro:
      "A neatly mown lawn with crisp edges and clean paths sets the tone for the whole property. Whether you need a tidy-up before guests arrive, an open-house freshen-up, or someone reliable on the calendar, we'll keep things looking like they did the day you moved in.",
    whatWeDo: [
      "Mowing — residential and commercial",
      "Whipper snipping and edging",
      "Blowing down paths and driveways",
      "Weeding garden beds",
      "Hedging and shaping",
      "Pre-sale and pre-inspection garden tidy-ups",
      "One-off jobs or ongoing maintenance schedules"
    ],
    whyHeading: "Reliable. On the same day. Every time.",
    whyBody:
      "The hardest part of lawn care is just turning up. We schedule recurring jobs on a fixed day and time so you never have to chase. If it's raining we let you know — and we'll be back the next clear day.",
    steps: [
      {
        title: "Tell us about the property",
        body: "Block size, hedge length, anything tricky — we'll work out a fair price."
      },
      {
        title: "Free quote, fixed price",
        body: "Per-visit pricing for ongoing work, or a one-off price for a freshen-up."
      },
      {
        title: "We turn up on the day",
        body: "Mow, edge, blow, hedge — whatever's on the agenda for the visit."
      },
      {
        title: "Leave it tidy",
        body: "Clippings collected (if requested), paths blown clean, gates closed. Done."
      }
    ],
    faqs: [
      {
        q: "Do you do one-off lawn jobs or only ongoing?",
        a: "Both. Plenty of our customers start with a one-off freshen-up and then move to a regular fortnightly schedule."
      },
      {
        q: "What about overgrown lawns?",
        a: "No problem — we'll do an initial cut-back at a slightly higher price, then bring it onto a regular schedule at the standard rate."
      },
      {
        q: "Do you take away clippings?",
        a: "Standard pricing leaves clippings mulched on the lawn (better for the soil). We can take them away as an extra if preferred."
      },
      {
        q: "Will you remind me when I'm due?",
        a: "We schedule recurring work on a fixed day so you don't have to remember — and we'll text the night before each visit."
      },
      {
        q: "Do you provide free quotes?",
        a: "Always. Call Blake on 0452 263 112 or send the quote form."
      }
    ],
    finalCta: "Get your block looking sharp."
  }
};
