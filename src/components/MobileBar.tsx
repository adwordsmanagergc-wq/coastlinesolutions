import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${site.phoneTel}`}
          className="btn-secondary"
          aria-label={`Call ${site.name} on ${site.phone}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          Call Blake
        </a>
        <Link href="/quote" className="btn-primary">
          Free Quote
        </Link>
      </div>
    </div>
  );
}
