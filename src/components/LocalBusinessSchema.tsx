import { site, services } from "@/lib/site";

export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    image: `${site.url}/og-image.svg`,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: "$$",
    areaServed: site.serviceAreas.map((s) => ({ "@type": "Place", name: s })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "NSW",
      addressCountry: "AU"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "07:00",
        closes: "17:00"
      }
    ],
    sameAs: [site.facebook],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.short }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
