import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticPaths = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/service-areas",
    "/reviews",
    "/quote",
    "/contact"
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    });
  }

  return entries;
}
