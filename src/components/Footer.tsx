import Link from "next/link";
import Logo from "./Logo";
import { site, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Painting, exterior cleaning and lawn care — done properly by a
              local team you can trust.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/85 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-white/85 hover:text-white">
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-white/85 hover:text-white">About</Link></li>
              <li><Link href="/gallery" className="text-white/85 hover:text-white">Gallery</Link></li>
              <li><Link href="/service-areas" className="text-white/85 hover:text-white">Service Areas</Link></li>
              <li><Link href="/reviews" className="text-white/85 hover:text-white">Reviews</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
              <li className="text-white/60">ABN: TBC</li>
            </ul>
            <Link href="/quote" className="btn-primary mt-5 w-full sm:w-auto">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Owned & operated by {site.owner} · Locally insured</p>
        </div>
      </div>
    </footer>
  );
}
