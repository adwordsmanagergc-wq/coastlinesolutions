import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BeforeAfter from "@/components/BeforeAfter";
import { galleryItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Before & After",
  description:
    "Before and after photos of recent painting, soft-wash, pressure-cleaning and lawn jobs by Coastline Solutions."
};

const palette = [
  { before: "#5b5446", after: "#cdbfa3" },
  { before: "#6e655a", after: "#f0ece2" },
  { before: "#3a3a3a", after: "#bdbdbd" },
  { before: "#7a7060", after: "#e6dec9" },
  { before: "#4a5b3a", after: "#a8d5ba" },
  { before: "#5d4d3d", after: "#d8cab2" }
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The proof is on the wall (and the driveway)."
        subtitle="A selection of before-and-after work — from soft-washed roofs to repainted exteriors and freshly hedged front yards."
      />

      <section className="bg-sand">
        <div className="container-x section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <article key={item.title} className="card p-4">
                <BeforeAfter
                  before={palette[i % palette.length].before}
                  after={palette[i % palette.length].after}
                  label={item.title}
                />
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-navy/70">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-navy/60">
            Got a job you&apos;d like to see in here? Tag us in your post on
            Facebook, or send us a photo when we&apos;re done.
          </p>
        </div>
      </section>

      <CTASection heading="Want yours to look like this?" />
    </>
  );
}
