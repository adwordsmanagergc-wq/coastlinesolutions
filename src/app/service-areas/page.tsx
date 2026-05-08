import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas — Central Coast & Surrounds",
  description:
    "LayMac Solutions services the Central Coast and surrounding suburbs for painting, exterior cleaning and lawn care."
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Proudly serving the local coastline."
        subtitle="We look after homes, businesses and property managers across the Central Coast and surrounds. Not in our area? Just ask — we travel further than you'd think."
      />

      <section className="bg-sand">
        <div className="container-x section grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Suburbs we regularly service</h2>
            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {site.serviceAreas.map((s) => (
                <li
                  key={s}
                  className="rounded-xl bg-navy px-4 py-3 text-sm font-medium text-cream ring-1 ring-cream/10"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-cream/70">
              We also travel for larger jobs — repaints, commercial soft-washes
              and pre-sale property freshen-ups. Mention your suburb when you
              quote and we&apos;ll let you know.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-cream/10">
            <iframe
              title="LayMac Solutions service area map"
              src="https://www.google.com/maps?q=Central%20Coast%20NSW&z=10&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
