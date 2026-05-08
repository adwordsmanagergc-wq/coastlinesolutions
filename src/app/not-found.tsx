import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-sand">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          That page took a soft-wash.
        </h1>
        <p className="mt-4 max-w-md text-cream/70">
          The link you followed doesn&apos;t exist. Try the home page or get
          straight to a free quote.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-secondary">
            Go home
          </Link>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
