import Link from "next/link";
import { site } from "@/lib/site";

export default function CTASection({
  heading = "Ready for a fresh look?",
  subheading = "Get a free, no-obligation quote from Blake today."
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x section text-center">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{subheading}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="btn-primary">
            Get My Free Quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
