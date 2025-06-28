import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import NewsSection from "@/components/News-section"
import { DownloadSection } from "@/components/download-section"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
