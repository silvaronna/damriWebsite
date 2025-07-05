"use client"
import { MapPin, Building2, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutCardsProps {
  isVisible: boolean
}

export default function AboutCards({ isVisible }: AboutCardsProps) {
  const scrollToCompanyFacts = () => {
    const companyFactsSection = document.querySelector('[data-section="company-facts"]')
    if (companyFactsSection) {
      companyFactsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card
        className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            Profil Perusahaan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            DAMRI adalah salah satu Badan Usaha Milik Negara (BUMN) yang bergerak di bidang transportasi darat dengan
            melayani angkutan penumpang serta angkutan barang menggunakan kendaraan bus dan truk.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Banyak sektor transportasi yang menjadi tugas utama dalam mewujudkan sarana dan fasilitas angkutan di
            berbagai daerah di Indonesia.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            Kantor Pusat
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Alamat:</p>
            <p className="text-gray-600 leading-relaxed">
              Jl. Matraman Raya No.25, RT.2/RW.1, Palmeriam, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota
              Jakarta
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
