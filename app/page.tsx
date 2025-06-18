import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <ServicesSection />
    </main>
  )
}
