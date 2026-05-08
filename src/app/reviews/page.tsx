import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Reviews — What Locals Say",
  description:
    "Real reviews from local Central Coast customers — painting, soft-washing, pressure cleaning and lawn care by LayMac Solutions."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What locals say."
        subtitle="A few words from recent jobs. We're proud of every one of them — and grateful when customers share."
      />
      <section className="bg-sand">
        <div className="container-x section">
          <Reviews />
        </div>
      </section>
      <CTASection heading="Want to be next?" />
    </>
  );
}
