import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Testimonials } from "@/components/landing/testimonials"

import CombinedFeaturedSection from "@/components/landing/featured-section/combined-featured-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <CombinedFeaturedSection />
        <Features />
        <Testimonials />
      </main>
    </div>
  )
}
