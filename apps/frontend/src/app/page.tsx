import { Metadata } from "next"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Testimonials } from "@/components/landing/testimonials"
import CombinedFeaturedSection from "@/components/landing/featured-section/combined-featured-section"
import { StructuredData, organizationData, websiteData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Translatio - AI-Powered API Conversion & SDK Generation",
  description: "Translatio: Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC. Auto-generate SDKs in Node, Python, Go, Java, C#. Type-safe, standards-compliant, CI/CD ready.",
  openGraph: {
    title: "Translatio - AI-Powered API Conversion",
    description: "Translatio: Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Translatio - AI-Powered API Conversion",
    description: "Translatio: Transform APIs seamlessly. Convert between OpenAPI, GraphQL, SOAP, gRPC.",
  },
}

export default function LandingPage() {
  return (
    <>
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={websiteData} />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Hero />
          <CombinedFeaturedSection />
          <Features />
          <Testimonials />
        </main>
      </div>
    </>
  )
}
