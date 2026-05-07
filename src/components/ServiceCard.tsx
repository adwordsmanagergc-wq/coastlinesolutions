import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card flex h-full flex-col p-7">
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white"
        style={{ backgroundColor: service.accent }}
        aria-hidden="true"
      >
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold">{service.name}</h3>
      <p className="mt-2 text-navy/75">{service.short}</p>
      <p className="mt-2 text-sm text-navy/60">{service.blurb}</p>
      <ul className="mt-5 grid grid-cols-1 gap-1.5 text-sm text-navy/80 sm:grid-cols-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 text-coast" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-coast hover:underline"
        >
          Explore {service.name} <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
