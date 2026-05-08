"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition ${
        scrolled
          ? "bg-navy/90 shadow-soft backdrop-blur"
          : "bg-navy/80 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="LayMac Solutions home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition hover:text-coast"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-sm font-semibold text-cream hover:text-coast"
          >
            Call Blake — {site.phone}
          </a>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-cream/10 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="#0E2A47" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" stroke="#0E2A47" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="#0E2A47" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="#0E2A47" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-sand lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-cream hover:bg-cream/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <a href={`tel:${site.phoneTel}`} className="btn-secondary flex-1">
                Call {site.phone}
              </a>
              <Link href="/quote" className="btn-primary flex-1" onClick={() => setOpen(false)}>
                Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
