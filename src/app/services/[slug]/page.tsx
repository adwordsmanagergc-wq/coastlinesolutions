import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { services, site } from "@/lib/site";
import { serviceContent } from "@/lib/serviceContent";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  const content = serviceContent[service.key];
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default function ServicePillarPage({
  params
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const content = serviceContent[service.key];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
      />

      <section className="bg-white">
        <div className="container-x section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Overview</p>
            <p className="mt-3 text-lg text-navy/85">{content.intro}</p>

            <h2 className="mt-12 text-2xl font-bold">{
              service.key === "painting"
                ? "What we paint"
                : service.key === "lawn-garden"
                  ? "What we look after"
                  : "What we clean"
            }</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {content.whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-navy/85">
                  <Icon name="check" className="mt-0.5 h-5 w-5 text-coast" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">{content.whyHeading}</h2>
            <p className="mt-3 text-navy/80">{content.whyBody}</p>

            <h2 className="mt-12 text-2xl font-bold">How we work</h2>
            <ol className="mt-5 grid gap-4">
              {content.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-sand p-5">
                  <span className="font-display text-2xl font-bold text-coast">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="text-sm text-navy/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy p-7 text-white shadow-soft">
                <h3 className="text-xl font-bold">Free quote — usually within 24 hours.</h3>
                <p className="mt-2 text-white/80">
                  Tell Blake about your job. No obligation, no surprises on
                  invoice day.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Link href="/quote" className="btn-primary w-full">
                    Get a Free Quote
                  </Link>
                  <a href={`tel:${site.phoneTel}`} className="btn-ghost w-full">
                    Call {site.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-sand p-6">
                <p className="eyebrow">Other services</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="font-medium text-navy hover:text-coast"
                        >
                          {s.name} →
                        </Link>
                        <p className="text-navy/65">{s.short}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x section">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center">FAQ</p>
            <h2 className="mt-3 text-center text-3xl font-bold">
              Common questions
            </h2>
            <div className="mt-10 divide-y divide-navy/10 rounded-2xl bg-white shadow-soft">
              {content.faqs.map((faq) => (
                <details key={faq.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold text-navy">
                    {faq.q}
                    <span className="text-coast transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-navy/75">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading={content.finalCta} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
