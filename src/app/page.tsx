import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import BeforeAfter from "@/components/BeforeAfter";
import Icon from "@/components/Icon";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <WhyUs />
      <HowItWorks />
      <BeforeAfterStrip />
      <ReviewsSection />
      <ServiceArea />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 40%), repeating-linear-gradient(135deg, rgba(255,255,255,0.5) 0 2px, transparent 2px 14px)"
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-coast/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow text-white/80">Local · Insured · Free Quotes</p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Does your home or building need a freshen up?
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            From a fresh coat of paint to a soft-wash that brings your roof,
            render and driveway back to life — Coastline Solutions is your
            one-call local team for painting, exterior cleaning and lawn care.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost">
              Call Blake — {site.phone}
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80 sm:grid-cols-4">
            {site.trustStrip.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-seafoam" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full rounded-3xl shadow-soft ring-1 ring-white/10"
              style={{
                background:
                  "linear-gradient(160deg, #1a3d63 0%, #0e2a47 60%), radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 60%)"
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-4 overflow-hidden rounded-2xl">
              <BeforeAfter
                before="#7d7466"
                after="#e9e3d4"
                label="Soft-washed render — before / after"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-1 text-coast">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-navy">5.0 from local reviews</p>
              <p className="text-xs text-navy/60">Honest pricing. Tidy work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="bg-sand">
      <div className="container-x section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Three services. One trusted local team.
          </h2>
          <p className="mt-3 text-navy/70">
            Painting, exterior cleaning and lawn care under one roof — fewer
            quotes, fewer trucks, less hassle.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    {
      title: "One call, three trades.",
      body:
        "Painting, cleaning and lawn care under one roof — fewer quotes, fewer trucks, less hassle."
    },
    {
      title: "Local and accountable.",
      body:
        "Owned and run by Blake Laybutt. The person who quotes you is the person who looks after the job."
    },
    {
      title: "Fully insured & honest pricing.",
      body:
        "Quotes are free, written, and there are no surprises on invoice day."
    },
    {
      title: "Done properly the first time.",
      body:
        "Soft-wash chemistry that protects your render. Paint prep that lasts. Lawns that look like a fortnight's growth has gone in one visit."
    }
  ];
  return (
    <section className="bg-white">
      <div className="container-x section">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why us</p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Why locals call Blake first.
            </h2>
            <p className="mt-4 text-navy/70">
              We&apos;re not a franchise and we&apos;re not a call centre. You
              ring Blake, Blake quotes the job, Blake does the job.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl bg-sand p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coast text-white">
                  <Icon name="check" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-navy/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Get in touch.",
      body: "Call, text or send the form — tell Blake what you need."
    },
    {
      n: "02",
      title: "Free on-site quote.",
      body: "We come out, take a look and give you a fair, written price."
    },
    {
      n: "03",
      title: "Job done, area cleaned up.",
      body: "We turn up when we say we will, finish properly, and leave the place tidy."
    }
  ];
  return (
    <section className="bg-navy text-white">
      <div className="container-x section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-white/80">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Easy as one, two, three.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <span className="font-display text-4xl font-bold text-coast">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BeforeAfterStrip() {
  return (
    <section className="bg-sand">
      <div className="container-x section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            The proof is on the wall (and the driveway).
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <BeforeAfter before="#5b5446" after="#cdbfa3" label="Soft-washed roof" />
          <BeforeAfter before="#6e655a" after="#f0ece2" label="Repainted exterior" />
          <BeforeAfter before="#3a3a3a" after="#bdbdbd" label="Restored driveway" />
        </div>
        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-outline">
            See more in our gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white">
      <div className="container-x section">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              What locals say.
            </h2>
          </div>
          <Link href="/reviews" className="btn-outline">
            Read more reviews
          </Link>
        </div>
        <div className="mt-10">
          <Reviews limit={3} />
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="bg-sand">
      <div className="container-x section grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Service area</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Proudly serving the local coastline.
          </h2>
          <p className="mt-4 max-w-xl text-navy/75">
            We look after homes, businesses and property managers across the
            Central Coast and surrounds. Not sure if you&apos;re in our area?
            Just ask — we travel further than you&apos;d think.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.serviceAreas.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white px-3 py-1 text-sm text-navy ring-1 ring-navy/10"
              >
                {s}
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="btn-outline mt-7">
            See all service areas
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-navy/10">
          <iframe
            title="Coastline Solutions service area"
            src="https://www.google.com/maps?q=Central%20Coast%20NSW&z=10&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
