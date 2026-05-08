import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact LayMac Solutions",
  description:
    "Call Blake on 0452 263 112 or email admin@coastlinesolutions.com.au — painting, exterior cleaning and lawn care across the Central Coast."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real local."
        subtitle="Call, text, email, or send the form below — Blake will be in touch."
      />

      <section className="bg-sand">
        <div className="container-x section grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-navy p-6 ring-1 ring-cream/10 sm:p-8">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <ul className="mt-6 space-y-4">
                <ContactRow icon="phone" label="Phone" value={site.phone} href={`tel:${site.phoneTel}`} />
                <ContactRow icon="mail" label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow icon="pin" label="Service area" value="Central Coast & surrounds" />
                <ContactRow icon="clock" label="Hours" value={site.hours} />
              </ul>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-coast"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
                </svg>
                Facebook
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-cream/10">
              <iframe
                title="Service area map"
                src="https://www.google.com/maps?q=Central%20Coast%20NSW&z=10&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-navy p-6 shadow-soft ring-1 ring-cream/10 sm:p-8">
              <h2 className="text-2xl font-bold">Send a message</h2>
              <p className="mt-2 text-cream/70">
                Or skip straight to a quote — same form, either way.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href
}: {
  icon: "phone" | "mail" | "pin" | "clock";
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coast/10 text-coast">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-cream/60">
          {label}
        </p>
        <p className="text-base font-medium text-cream">{value}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a className="flex items-center gap-4 hover:text-coast" href={href}>
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
