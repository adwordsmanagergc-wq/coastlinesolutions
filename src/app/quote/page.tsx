import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell Blake about your job. Free, no-obligation quote — usually within one business day."
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote"
        title="Get a free, no-obligation quote."
        subtitle="Tell Blake a bit about your job and he'll be in touch — usually within one business day."
      />
      <section className="bg-sand">
        <div className="container-x section grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-navy p-6 shadow-soft ring-1 ring-cream/10 sm:p-8">
              <QuoteForm />
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy p-7 text-white shadow-soft">
                <h3 className="text-xl font-bold">Prefer to call?</h3>
                <p className="mt-2 text-white/80">
                  Blake answers his own phone. Leave a message if he&apos;s up
                  a ladder and he&apos;ll call you straight back.
                </p>
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
                    <Icon name="clock" className="h-5 w-5 text-seafoam" />
                    {site.hours}
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-navy p-6 shadow-soft ring-1 ring-cream/10">
                <p className="eyebrow">What happens next</p>
                <ol className="mt-3 space-y-3 text-sm text-cream/80">
                  <li>
                    <span className="font-semibold text-cream">1.</span> Blake
                    reads your enquiry and gets back to you (usually within one
                    business day).
                  </li>
                  <li>
                    <span className="font-semibold text-cream">2.</span> We
                    arrange a quick on-site visit at a time that suits you.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">3.</span> You
                    receive a written, fixed-price quote — no obligation.
                  </li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
