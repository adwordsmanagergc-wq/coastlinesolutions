import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Blake & Coastline Solutions",
  description:
    "Coastline Solutions is owned and run by Blake Laybutt — painting, exterior cleaning and lawn care, done properly by a local team."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Blake — and Coastline Solutions."
        subtitle="A local who got tired of seeing tired-looking homes — and decided to do something about it."
      />

      <section className="bg-white">
        <div className="container-x section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-lg text-navy/85">
              Coastline Solutions is owned and run by Blake Laybutt — a local
              who got tired of seeing tired-looking homes and wanted to do
              something about it. What started as a side of painting and
              pressure washing has grown into a full local service: painting
              inside and out, soft and high-pressure washing, and ongoing lawn
              and garden care.
            </p>
            <p className="mt-5 text-navy/80">
              The promise is simple: turn up when we say we will, do the job
              properly, leave the place tidier than we found it, and charge a
              fair price. No surprises, no shortcuts.
            </p>
            <p className="mt-5 text-navy/80">
              Blake quotes every job personally — and Blake does (or runs)
              every job personally. There&apos;s no call centre and no
              middleman. If something isn&apos;t right, you call Blake and it
              gets sorted.
            </p>

            <h2 className="mt-12 text-2xl font-bold">What we believe</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Show up.",
                  b: "On time, when we said we would. Communication is half the job."
                },
                {
                  t: "Prep beats paint.",
                  b: "A great finish starts hours before the brush comes out."
                },
                {
                  t: "Right tool, right surface.",
                  b: "Soft-wash for delicate surfaces; high pressure for hard ones. Never the other way around."
                },
                {
                  t: "Leave it tidy.",
                  b: "Paths blown, gates closed, drop sheets folded. Always."
                }
              ].map((p) => (
                <li key={p.t} className="rounded-2xl bg-sand p-5">
                  <h3 className="font-semibold text-navy">{p.t}</h3>
                  <p className="mt-1 text-sm text-navy/75">{p.b}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl bg-navy p-7 text-white shadow-soft">
              <h3 className="text-xl font-bold">Get in touch with Blake</h3>
              <ul className="mt-5 space-y-3 text-white/85">
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="h-5 w-5 text-seafoam" />
                  <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="h-5 w-5 text-seafoam" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="pin" className="h-5 w-5 text-seafoam" />
                  Central Coast & surrounds
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="clock" className="h-5 w-5 text-seafoam" />
                  {site.hours}
                </li>
              </ul>
              <Link href="/quote" className="btn-primary mt-6 w-full">
                Get a Free Quote
              </Link>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener"
                className="mt-3 block text-center text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                Find us on Facebook →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
