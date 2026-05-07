export default function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.4) 0 2px, transparent 2px 14px)"
        }}
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-24">
        {eyebrow && <p className="eyebrow text-white/80">{eyebrow}</p>}
        <h1 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
