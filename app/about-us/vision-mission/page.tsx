import { PageLayout } from "@/components/ui/layout/page-layout"
import  HeroCarousel  from "@/components/ui/carousel/hero-carousel"
import { VisionSection } from "@/components/ui/sections/vision-section"
import { MissionSection } from "@/components/ui/sections/mission-section"
import { CorporateValuesSection } from "@/components/ui/sections/corporate-values-section"
import { Footer } from "@/components/ui/sections/footer"

export default function DamriVisionMission() {
  return (
    <PageLayout>
      <HeroCarousel />

      <div className="container mx-auto px-4 py-12">
        <VisionSection />
        <MissionSection />
        <CorporateValuesSection />
      </div>

      <Footer />
    </PageLayout>
  )
}
