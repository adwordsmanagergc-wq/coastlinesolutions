import Icon from "./Icon";
import { reviews } from "@/lib/site";

export default function Reviews({ limit }: { limit?: number }) {
  const items = limit ? reviews.slice(0, limit) : reviews;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <figure key={r.name + r.suburb} className="card flex h-full flex-col p-6">
          <div className="flex items-center gap-1 text-coast" aria-label={`${r.rating} out of 5`}>
            {Array.from({ length: r.rating }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4" />
            ))}
          </div>
          <blockquote className="mt-3 text-cream/85">&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-cream">
            {r.name}
            <span className="font-normal text-cream/60"> · {r.suburb}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
