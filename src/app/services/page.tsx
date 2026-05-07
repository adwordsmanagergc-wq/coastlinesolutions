import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Painting, Cleaning & Lawn Care",
  description:
    "Painting, exterior cleaning and lawn & garden maintenance — by one trusted local team. Free quotes from Blake."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three services. One trusted local team."
        subtitle="Painting, exterior cleaning and lawn care under one roof — fewer quotes, fewer trucks, less hassle."
      />
      <section className="bg-sand">
        <div className="container-x section grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
