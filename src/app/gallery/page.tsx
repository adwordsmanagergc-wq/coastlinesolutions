import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { galleryItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Before & After",
  description:
    "Before and after photos of recent painting, soft-wash, pressure-cleaning and lawn jobs by Coastline Solutions."
};

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
            {galleryItems.map((item) => (
              <article key={item.title} className="card overflow-hidden p-0">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy/70">{item.description}</p>
                </div>
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
