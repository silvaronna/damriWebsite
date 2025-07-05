"use client"
import HeroCarousel from "@/components/ui/carousel/hero-carousel"
import AboutSection from "@/components/ui/sections/about-section"
import CompanyFacts from "@/components/ui/sections/company-facts"
import { TestimonialsSection } from "@/components/testimonials-section"
export default function DamriCompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeroCarousel />
      <AboutSection />
      <CompanyFacts />
     <TestimonialsSection />
    </div>
  )
}
