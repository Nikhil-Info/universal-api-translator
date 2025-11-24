import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Testimonials } from "@/components/landing/testimonials"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  )
}
