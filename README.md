# Coastline Solutions

Local website for **Coastline Solutions** — painting, exterior cleaning and lawn care, owned and run by Blake Laybutt on the Central Coast (NSW).

- **Phone:** 0452 263 112
- **Email:** admin@coastlinesolutions.com.au
- **Facebook:** https://www.facebook.com/profile.php?id=61558807022619

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Quote form posts to `POST /api/quote` which sends:
  - Email via [Resend](https://resend.com) to `admin@coastlinesolutions.com.au`
  - SMS via [Twilio](https://twilio.com) to Blake's mobile

If `RESEND_API_KEY` / Twilio creds aren't set, the route logs the payload instead of sending — handy for local dev.

## Local dev

```bash
npm install
cp .env.example .env.local   # fill in keys when ready
npm run dev                  # http://localhost:3000
```

## Deploy

Designed to deploy to Vercel out of the box. Set the env vars from `.env.example` in the Vercel project settings.

## Swapping the logo

The site is logo-agnostic. When Blake supplies the final logo:

1. Drop the dark version at `public/brand/logo.svg` (used in the header).
2. Drop the light/inverted version at `public/brand/logo-light.svg` (used in the dark footer).
3. Replace `public/favicon.svg` with a square version.
4. Replace `public/og-image.svg` (or supply `og-image.png` 1200×630 and update `src/app/layout.tsx`).

No code changes needed — every component reads from these paths.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home — hero, three pillars, why us, how it works, before/after, reviews, service area, CTA |
| `/about` | Blake & company story |
| `/services` | Services hub |
| `/services/painting` | Painting pillar |
| `/services/exterior-cleaning` | Pressure & soft washing pillar |
| `/services/lawn-garden` | Lawn & garden pillar |
| `/gallery` | Before & after grid |
| `/service-areas` | Suburbs covered + map |
| `/reviews` | Customer reviews |
| `/quote` | Free quote form |
| `/contact` | Contact details + form |

## SEO

- `LocalBusiness` (HomeAndConstructionBusiness) JSON-LD on every page (`src/components/LocalBusinessSchema.tsx`).
- `FAQPage` JSON-LD on each service pillar page.
- `sitemap.xml` and `robots.txt` auto-generated (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Per-page `<title>` and `<meta description>`.

## Site config

All names, phone numbers, suburbs, services, reviews and gallery items live in `src/lib/site.ts` and `src/lib/serviceContent.ts` so Blake (or whoever) can update copy without touching JSX.
