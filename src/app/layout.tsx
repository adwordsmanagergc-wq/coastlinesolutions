import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LayMac Solutions — Painting, Pressure Washing & Lawn Care",
    template: "%s | LayMac Solutions"
  },
  description:
    "Local painting, soft & pressure washing, and lawn care. One trusted local team. Free quotes from Blake — call 0452 263 112.",
  openGraph: {
    title: "Does Your Home or Building Need a Freshen Up?",
    description:
      "Painting, exterior cleaning and lawn maintenance — done properly, by a local team you can trust.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LayMac Solutions",
    description:
      "Painting, exterior cleaning and lawn care — one local team, one phone call."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0E2A47",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-24 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
